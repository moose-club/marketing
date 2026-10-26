// JSON-LD for answer engines and search. Every value is read from copy.ts so
// the structured data can't drift from the page.
//
// `siteNodes` go on every page (who Moose is). `homeNodes` go on `/` only
// (what Moose sells, the app, the partner roster) — a legal page shouldn't
// describe the product.

import { FOOTER, LINKS, MODEL, NETWORK, REVIEWED, SITE } from './copy';

export const SITE_URL = 'https://www.trainmoose.com';
const ORG_ID = `${SITE_URL}/#org`;

type Node = Record<string, unknown>;

const contactEmails = FOOTER.cols
  .flatMap((c) => c.items)
  .map((i) => i.h)
  .filter((h) => h.startsWith('mailto:'))
  .map((h) => h.slice('mailto:'.length));

export const siteNodes: Node[] = [
  {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Moose',
    alternateName: SITE.alternateNames,
    legalName: SITE.legalName,
    taxID: SITE.abn,
    identifier: { '@type': 'PropertyValue', propertyID: 'ABN', value: SITE.abn },
    foundingDate: SITE.foundingYear,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo/moose-wordmark-twotone.svg`,
    description: SITE.entity,
    areaServed: { '@type': 'Country', name: 'Australia' },
    contactPoint: contactEmails.map((email) => ({
      '@type': 'ContactPoint',
      email,
      contactType: email.startsWith('partnerships') ? 'partnerships' : 'customer support',
      areaServed: 'AU',
    })),
    sameAs: [FOOTER.instagram.href, SITE.linkedin],
  },
  {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Moose',
    url: SITE_URL,
    inLanguage: 'en-AU',
    publisher: { '@id': ORG_ID },
  },
];

export const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');

const partnerItems = NETWORK.partners.map((p, i) => ({
  '@type': 'ListItem',
  position: i + 1,
  item: { '@type': 'SportsActivityLocation', name: p.name, url: p.href, description: p.kind },
}));

/** An answer page: the page itself (an FAQPage when it answers questions),
    dated by its last review, with a breadcrumb back to the home page. */
export function answerNodes({ path, name, description, questions = [] }: {
  path: string;
  name: string;
  description: string;
  questions?: readonly { q: string; aHtml: string }[];
}): Node[] {
  const url = `${SITE_URL}${path}`;
  return [
    {
      '@type': questions.length ? 'FAQPage' : 'WebPage',
      '@id': `${url}#page`,
      url,
      name,
      description,
      inLanguage: 'en-AU',
      dateModified: REVIEWED.iso,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      ...(questions.length
        ? {
            mainEntity: questions.map((x) => ({
              '@type': 'Question',
              name: x.q,
              acceptedAnswer: { '@type': 'Answer', text: stripTags(x.aHtml) },
            })),
          }
        : {}),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Moose', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name, item: url },
      ],
    },
  ];
}

/** The studios on Moose, as a list (on `/` and `/studios`). */
export const partnerList: Node = {
  '@type': 'ItemList',
  name: 'Partner studios on Moose',
  numberOfItems: NETWORK.partners.length,
  itemListElement: partnerItems,
};

export const homeNodes: Node[] = [
  {
    '@type': 'Service',
    name: 'Moose crossover upgrade',
    serviceType: 'Reciprocal fitness studio partnership network',
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Australia' },
    description: [MODEL.lede, ...MODEL.steps.slice(1, 3).map((s) => stripTags(s.bodyHtml))].join(' '),
    audience: { '@type': 'BusinessAudience', audienceType: 'Boutique fitness studio operators' },
    // The studio sets the upgrade fee and the credit amount varies by studio
    // (Max, 26 Oct 2026), so no figure here — the copy states none either.
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AUD',
    },
  },
  {
    '@type': 'MobileApplication',
    name: 'Moose',
    operatingSystem: 'iOS',
    applicationCategory: 'HealthApplication',
    url: LINKS.appStore,
    downloadUrl: LINKS.appStore,
    publisher: { '@id': ORG_ID },
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'AUD' },
  },
  partnerList,
];

/** Wrap nodes in a single @graph document so @id references resolve. */
export const graph = (nodes: Node[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
