// The site is static: Cloudflare serves dist/ as assets. This Worker sits in
// front of the pages only (the hashed and binary files skip it; see
// `run_worker_first` in wrangler.jsonc) and does two jobs:
//
// 1. /ingest/* is PostHog, served first-party so ad-blockers don't drop the
//    browser's events (src/components/Analytics.astro).
// 2. Every page request is logged to PostHog as `$http_log`. Crawlers and AI
//    agents (GPTBot, ClaudeBot, ChatGPT-User, PerplexityBot …) never run the
//    browser script, so this is the only record of them. PostHog classifies
//    the user agent at query time (Web Analytics › Bots); we don't keep our
//    own bot list. Humans are logged too, which is what makes the share of
//    bot traffic readable.
//
// A failed log never touches the page: it runs after the response, and its
// errors are swallowed.

interface Env {
  ASSETS: Fetcher;
  /** The Studio Portal project's token: public and write-only. Blank is off. */
  POSTHOG_TOKEN: string;
  /** The project's ingestion host, e.g. https://us.i.posthog.com. */
  POSTHOG_HOST: string;
}

const INGEST = '/ingest';

// Documents worth a log line: the pages, /llms.txt, /robots.txt, the sitemaps.
const DOCUMENT = /^(text\/(html|plain|xml)|application\/xml)/;

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === INGEST || url.pathname.startsWith(`${INGEST}/`)) {
      return proxy(request, url, env);
    }

    const response = await env.ASSETS.fetch(request);
    const type = response.headers.get('content-type') ?? '';
    if (env.POSTHOG_TOKEN && request.method === 'GET' && DOCUMENT.test(type)) {
      ctx.waitUntil(logRequest(request, url, response.status, env).catch(() => {}));
    }
    return response;
  },
} satisfies ExportedHandler<Env>;

// PostHog's static bundles live on the region's assets host
// (us.i.posthog.com → us-assets.i.posthog.com); everything else on the
// ingestion host.
function proxy(request: Request, url: URL, env: Env): Promise<Response> {
  const path = url.pathname.slice(INGEST.length) || '/';
  const ingest = new URL(env.POSTHOG_HOST).host;
  const host = path.startsWith('/static/') || path.startsWith('/array/')
    ? ingest.replace(/^([a-z]+)\.i\./, '$1-assets.i.')
    : ingest;
  const upstream = new Request(`https://${host}${path}${url.search}`, request);
  // Our cookies are no business of PostHog's. The visitor's IP is: it is what
  // PostHog's GeoIP reads.
  upstream.headers.delete('cookie');
  const ip = request.headers.get('cf-connecting-ip');
  if (ip) upstream.headers.set('x-forwarded-for', ip);
  return fetch(upstream);
}

async function logRequest(request: Request, url: URL, status: number, env: Env): Promise<void> {
  const ip = request.headers.get('cf-connecting-ip') ?? '';
  const userAgent = request.headers.get('user-agent') ?? '';
  const referrer = request.headers.get('referer');
  await fetch(`${env.POSTHOG_HOST}/i/v0/e/`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      api_key: env.POSTHOG_TOKEN,
      event: '$http_log',
      // One anonymous id per client, so a crawler's requests group together
      // without a person profile.
      distinct_id: `http_log_${await sha256(`${ip}|${userAgent}`)}`,
      timestamp: new Date().toISOString(),
      properties: {
        $process_person_profile: false,
        $current_url: url.href,
        $host: url.host,
        $pathname: url.pathname,
        ...(referrer && { $referrer: referrer }),
        $ip: ip,
        $raw_user_agent: userAgent,
        method: request.method,
        status_code: status,
        app: 'marketing',
      },
    }),
  });
}

async function sha256(text: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
}
