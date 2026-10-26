// /llms.txt — a plain-markdown brief of Moose for answer engines and AI agents
// (llmstxt.org). Built from copy.ts so it says exactly what the page says.

import type { APIRoute } from 'astro';
import { FOOTER, HERO, LINKS, MEMBERS, MODEL, NETWORK, REGISTER, SITE, VALUE } from '../data/copy';
import { SITE_URL } from '../data/schema';

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');
// copy.ts carries presentational Unicode — U+00A0 no-break spaces and U+2060
// word joiners that steer line breaks on the page. This file is plain text
// for machines, so flatten them wherever they appear (applied to the whole
// body, so a future copy edit can't leak one through).
const plain = (s: string) => s.replace(/ /g, ' ').replace(/⁠/g, '');
const emails = FOOTER.cols
  .flatMap((c) => c.items)
  .filter((i) => i.h.startsWith('mailto:'))
  .map((i) => i.l);

const body = `# Moose

> ${SITE.entity}

Moose operates in Australia. Founded ${SITE.foundingYear}. Operated by ${SITE.legalName} (trading as ${SITE.alternateNames[0]}), ABN ${SITE.abn}.

## For studios

${HERO.subLines.join(' ')}

${HERO.points.map((p) => `- ${p}`).join('\n')}

### ${MODEL.head.replace(/\.$/, '')}

${MODEL.lede}

${MODEL.steps.map((s) => `${s.n}. **${s.title}.** ${stripTags(s.bodyHtml)}`).join('\n')}

### ${VALUE.head}

${VALUE.prizeNote} Illustrative figures (AUD):

${VALUE.benefits.map((b) => `- ${b.title}: ${b.stat} ${b.unit} — ${b.cap}`).join('\n')}

### Joining

${REGISTER.lede} Register at ${LINKS.studioPortal}.

## For members

${MEMBERS.hero.lede}

### ${MEMBERS.how.head.replace(/\.$/, '')}

${MEMBERS.how.steps.map((s) => `${s.n}. **${s.title}** ${s.body}`).join('\n')}

### ${MEMBERS.commercials.head.replace(/\.$/, '')}

${MEMBERS.commercials.rows.map((r) => `- **${r.k}:** ${r.body}`).join('\n')}

### ${MEMBERS.app.head.replace(/\.$/, '')}

${MEMBERS.app.lede} ${MEMBERS.close.lede} ${MEMBERS.close.detail.replace(/^Opens the App Store listing for Moose\. /, '')}

## Partner studios

${NETWORK.lede}

${NETWORK.partners.map((p) => `- [${p.name}](${p.href})`).join('\n')}

## Links

- [Moose homepage](${SITE_URL}/)
- [Register your studio](${LINKS.studioPortal})
- [Moose on the App Store](${LINKS.appStore})
- [Privacy policy](${SITE_URL}/privacy)
- [Terms of use](${SITE_URL}/terms)
- [Instagram](${FOOTER.instagram.href})
- [LinkedIn](${SITE.linkedin})
${emails.map((e) => `- Contact: ${e}`).join('\n')}
`;

export const GET: APIRoute = () =>
  new Response(plain(body), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
