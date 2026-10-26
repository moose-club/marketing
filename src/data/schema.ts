// JSON-LD for answer engines and search. Every value is read from copy.ts so
// the structured data can't drift from the page.
//
// `siteNodes` go on every page (who Moose is). `homeNodes` go on `/` only
// (what Moose sells, the app, the partner roster) — a legal page shouldn't
// describe the product.

import { FOOTER, LINKS, MODEL, NETWORK, SITE } from './copy';

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

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');

export const homeNodes: Node[] = [
  {
    '@type': 'Service',
    name: 'Moose crossover upgrade',
    serviceType: 'Reciprocal fitness studio partnership network',
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Australia' },
    description: [MODEL.lede, ...MODEL.steps.slice(1, 3).map((s) => stripTags(s.bodyHtml))].join(' '),
    audience: { '@type': 'BusinessAudience', audienceType: 'Boutique fitness studio operators' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AUD',
      // The studio sets the upgrade fee; members get credits each month.
      eligibleQuantity: { '@type': 'QuantitativeValue', value: 4, unitText: 'credits per month' },
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
  {
    '@type': 'ItemList',
    name: 'Partner studios on Moose',
    numberOfItems: NETWORK.partners.length,
    itemListElement: NETWORK.partners.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'SportsActivityLocation', name: p.name, url: p.href },
    })),
  },
];

/** Wrap nodes in a single @graph document so @id references resolve. */
export const graph = (nodes: Node[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
