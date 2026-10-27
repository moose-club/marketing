// /llms.txt — a plain-markdown brief of Moose for answer engines and AI agents
// (llmstxt.org). Built from copy.ts so it says exactly what the page says.

import type { APIRoute } from 'astro';
import {
  CLASSPASS, FAQ, FOOTER, HERO, LINKS, MEMBERS, MODEL, NETWORK, PARTNERSHIPS, RECIPROCAL, REGISTER,
  GUIDE, NUMBERS, PILATES, REPORT, REPORTS, REVIEWED, SECOND_MEMBERSHIP, SITE, STUDIOS, VALUE, reportPath, studioPath,
} from '../data/copy';
import { SITE_URL, stripTags } from '../data/schema';

const answerPages = [CLASSPASS, PILATES, SECOND_MEMBERSHIP, RECIPROCAL, GUIDE, STUDIOS, FAQ];
// Links in answers become markdown, root-relative hrefs made absolute: this
// file is read off-site, where a bare link label can't be followed.
const answerText = (html: string) =>
  stripTags(html.replace(/<a href="([^"]+)">([^<]*)<\/a>/g, (_, href, text) =>
    `[${text}](${href.startsWith('/') ? SITE_URL + href : href})`));
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

## Moose in numbers

${NUMBERS.lede} ${REPORT.updated} ${NUMBERS.updated.label}; updated monthly at ${SITE_URL}${NUMBERS.path}

${NUMBERS.months.rows.map((r) => `- ${r.label}: ${NUMBERS.months.columns.map((c, i) => `${c.toLowerCase()} ${r.cells[i]}`).join(', ')}`).join('\n')}

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

${NETWORK.partners.map((p) => `- [${p.name}](${p.href}): ${p.kind}`).join('\n')}

### Live partnerships

${STUDIOS.live.lede}

${PARTNERSHIPS.map(([a, b]) => `- [${a.name}](${SITE_URL}${studioPath(a.name)}), ${a.where} ${STUDIOS.live.and} [${b.name}](${SITE_URL}${studioPath(b.name)}), ${b.where}`).join('\n')}

${STUDIOS.note}

### Partnership reports

${REPORTS.map((r) => `#### [${r.head.replace(/\.$/, '')}](${SITE_URL}${reportPath(r.slug)})\n\n${r.lede}\n\n${r.figures.cells.map((c) => `- ${c.label}: ${c.figure}. ${c.caption}`).join('\n')}\n\n${r.saw.items.map((i) => `- **${i.q}** ${answerText(i.aHtml)}`).join('\n')}\n\n${REPORT.updated} ${r.updated.label}. ${r.method}`).join('\n\n')}

## Answers

Last reviewed ${REVIEWED.label}.

${answerPages.map((p) => `- [${p.head.replace(/\.$/, '')}](${SITE_URL}${p.path}): ${p.description}`).join('\n')}

### ${CLASSPASS.head}

${CLASSPASS.lede}

${CLASSPASS.ledger.rows.map((r) => `- **${r.label}.** Moose: ${r.cells[0]} ClassPass: ${r.cells[1]}`).join('\n')}

ClassPass facts are from ClassPass's partner pages and named press: ${CLASSPASS.sources.items.map((s) => s.href).join(', ')}.

### ${PILATES.head.replace(/\.$/, '')}

${PILATES.lede}

${PILATES.ledger.rows.map((r) => `- **${r.label}.** Partner on Moose: ${r.cells[0]} Add it in-house: ${r.cells[1]}`).join('\n')}

${answerText(PILATES.first.bodyHtml)}

### ${GUIDE.head.replace(/\.$/, '')}

${GUIDE.lede}

You'll need: ${GUIDE.before.items.map((i) => i.replace(/\.$/, '')).join('; ')}.

${GUIDE.steps.items.map((st, i) => `${i + 1}. **${st.title}** ${answerText(st.bodyHtml)}`).join('\n')}

### FAQ

${FAQ.groups.map((g) => g.items.map((i) => `**${i.q}** ${answerText(i.aHtml)}`).join('\n\n')).join('\n\n')}

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
