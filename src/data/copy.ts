// Verbatim port of 06-marketing-copy-data.jsx. Do not paraphrase.
// Spec §7 — copy stays exact; only the data shapes are typed.

import { STUDIOS, type Studio } from './studios';

export const HERO = {
  kicker: 'For studio operators',
  /** Each entry is a line; the headline renders one per row. */
  head: ['Your studio,', 'plus 200 others.'] as const,
  /** Substring of `head.join(' ')` rendered in pink. */
  highlightWord: '200 others',
  sub: 'Moose is the crossover access pass that fills your empty slots, keeps your members loyal, and pays you for the visit. One integration. Zero new admin.',
  ctaPrimary:   { label: 'Apply to join', href: '#apply' },
  ctaSecondary: { label: 'See how it works', href: '#how' },
} as const;

export const TICKER = [
  'LIVE NETWORK',
  '1,247 visits routed today',
  '218 partner studios',
  'Sydney · Melbourne · Brisbane',
  'Perth Q3 2026',
] as const;

export const STATS = [
  { n: '32%',   l: 'avg uplift in\noff-peak fill rate' },
  { n: '94%',   l: 'partner retention\nafter 12 months' },
  { n: '$2.3M', l: 'paid to partner\nstudios in 2025' },
  { n: '218',   l: 'partner studios\nacross AU' },
] as const;

export const SHOWCASE = [
  { eyebrow: '01 · Discovery',  title: 'Their credits, their week.',                  caption: 'Members open the app and see what their balance buys them this month — your studio sits next to every other partner.', screen: 'home' as const },
  { eyebrow: '02 · Booking',    title: 'Real-time availability across your network.', caption: 'Two taps to book. Members spend credits, we pay you cash for the visit. No discounting, no clawbacks.',          screen: 'schedule' as const },
  { eyebrow: '03 · Retention',  title: "Cancellations that don't punish you.",        caption: 'A 4-hour free window keeps members honest. Late cancels forfeit the credit, which lands in your weekly payout.',  screen: 'cancel' as const },
] as const;

export const STEPS = [
  { n: '01', t: 'Apply',     d: 'Tell us where your studio fits — modality, location, capacity. We vet for quality, not quantity.' },
  { n: '02', t: 'Sync',      d: 'One-click integrations with Mindbody, Glofox, Xplor and Momence. Your existing schedule and capacity, untouched.' },
  { n: '03', t: 'Price',     d: 'You set the credit rate for each class type. Off-peak, on-peak, premium — your call. We never discount.' },
  { n: '04', t: 'Get paid',  d: 'Network members book through Moose, you get paid weekly per attended class. Your members get the same access in return.' },
] as const;

export const PRICING = {
  rate: '$14',
  rateUnit: 'AUD / credit',
  rateNote: 'Reviewed quarterly against partner studios’ published rack rates. Reformer at 1.5x · Yoga at 1.0x · Cycle at 0.75x — typical.',
  pillars: [
    { t: 'No discounting, ever', d: 'You publish your rack rate in credits. Members pay full price every time — we just convert credits to cash for you.' },
    { t: 'Weekly payouts',       d: 'Every Monday, prior week. No clawbacks if a member shows up. No minimums. Stripe-direct, no platform escrow.' },
    { t: 'No lock-in',           d: '30 days written notice and we wind down outbound bookings. No exit fee. Your members keep access through their billing cycle.' },
  ],
} as const;

// Partner data — see SPEC §6.8 / §7. Mix of known studios (`k` resolves
// via STUDIOS) and phantom generative tiles (`name` + `p1`/`p2`).
type PartnerKnown = { k: keyof typeof STUDIOS; city: string; sub: string; mod: string };
type PartnerPhantom = {
  name: string;
  city: string; sub: string; mod: string;
  p1: string; p2: string; initial: string;
};
type Partner = PartnerKnown | PartnerPhantom;

export const PARTNERS: readonly Partner[] = [
  // Sydney — known studios
  { k: 'flowyoga',  city: 'Sydney', sub: 'Surry Hills',     mod: 'Hot Yoga' },
  { k: 'ironworks', city: 'Sydney', sub: 'Alexandria',      mod: 'Boxing' },
  { k: 'pulse',     city: 'Sydney', sub: 'Paddington',      mod: 'Reformer' },
  { k: 'spincity',  city: 'Sydney', sub: 'Bondi Junction',  mod: 'Cycle' },
  { k: 'forge',     city: 'Sydney', sub: 'Redfern',         mod: 'HIIT' },
  { k: 'barre9',    city: 'Sydney', sub: 'Mosman',          mod: 'Barre' },
  { k: 'rowhouse',  city: 'Sydney', sub: 'Pyrmont',         mod: 'Rowing' },
  // Phantoms — Sydney
  { name: 'Method Pilates',    city: 'Sydney', sub: 'Newtown',     mod: 'Pilates',  p1: '#3a1f2c', p2: '#a05772', initial: 'M' },
  { name: 'Cadence Cycling',   city: 'Sydney', sub: 'Crows Nest',  mod: 'Cycle',    p1: '#0e2536', p2: '#3d80b0', initial: 'C' },
  { name: 'Eastside Strength', city: 'Sydney', sub: 'Waverley',    mod: 'Strength', p1: '#231e18', p2: '#665140', initial: 'E' },
  { name: 'Anchor & Oar',      city: 'Sydney', sub: 'Manly',       mod: 'Rowing',   p1: '#1a2632', p2: '#4a7593', initial: 'A' },

  // Melbourne
  { name: 'Crucible Boxing',   city: 'Melbourne', sub: 'Collingwood', mod: 'Boxing',   p1: '#2a1208', p2: '#8a3a1c', initial: 'C' },
  { name: 'Stillpoint Yoga',   city: 'Melbourne', sub: 'Fitzroy',     mod: 'Yoga',     p1: '#1a2820', p2: '#5e8d6f', initial: 'S' },
  { name: 'Reform Studios',    city: 'Melbourne', sub: 'Richmond',    mod: 'Reformer', p1: '#3a1d44', p2: '#8e64a5', initial: 'R' },
  { name: 'North Heat',        city: 'Melbourne', sub: 'Northcote',   mod: 'HIIT',     p1: '#2a1818', p2: '#a05a40', initial: 'N' },
  { name: 'Vault Pilates',     city: 'Melbourne', sub: 'South Yarra', mod: 'Pilates',  p1: '#231a2c', p2: '#6a5685', initial: 'V' },
  { name: 'Loop Cycle',        city: 'Melbourne', sub: 'Carlton',     mod: 'Cycle',    p1: '#0c1c2c', p2: '#4a78a8', initial: 'L' },
  { name: 'Foundry Fitness',   city: 'Melbourne', sub: 'St Kilda',    mod: 'Strength', p1: '#1c1814', p2: '#5e4e3c', initial: 'F' },
  { name: 'Barre & Co.',       city: 'Melbourne', sub: 'Prahran',     mod: 'Barre',    p1: '#3a2640', p2: '#9a78b0', initial: 'B' },

  // Brisbane
  { name: 'Sunshine Yoga',     city: 'Brisbane',  sub: 'New Farm',     mod: 'Yoga',     p1: '#2c1f08', p2: '#a07832', initial: 'S' },
  { name: 'Riverhouse Row',    city: 'Brisbane',  sub: 'West End',     mod: 'Rowing',   p1: '#1c2a1e', p2: '#5e8a64', initial: 'R' },
  { name: 'Hammer & Co.',      city: 'Brisbane',  sub: 'Fortitude V.',  mod: 'Boxing',   p1: '#2a1818', p2: '#7a3a32', initial: 'H' },
  { name: 'Quay Reformer',     city: 'Brisbane',  sub: 'Teneriffe',    mod: 'Reformer', p1: '#1a2436', p2: '#5878a8', initial: 'Q' },
  { name: 'Peak HIIT',         city: 'Brisbane',  sub: 'Paddington',   mod: 'HIIT',     p1: '#241a14', p2: '#7a563c', initial: 'P' },
  { name: 'Vinyasa House',     city: 'Brisbane',  sub: 'Bulimba',      mod: 'Yoga',     p1: '#1f2818', p2: '#6e8a4c', initial: 'V' },
];

export type ResolvedPartner = {
  name: string;
  short: string;
  p1: string; p2: string; initial: string;
  city: string; sub: string; mod: string;
};

export function resolvePartner(p: Partner): ResolvedPartner {
  if ('k' in p) {
    const s = STUDIOS[p.k];
    return { ...s, ...p, name: s.name, short: s.short };
  }
  return { ...p, short: p.name };
}

export const QUOTES = [
  {
    q: 'We were dark from 10am to 4pm three days a week. Six months on the network, those slots run at 70% capacity — and we still own the relationship with our home members.',
    name: 'Priya Shah',
    role: 'Owner, Pulse Reformer',
    studioKey: 'pulse',
  },
  {
    q: "Other multipass platforms wanted us to discount. Flex doesn't. We set our own credit rate and they just route paying members to our open slots.",
    name: 'Marcus Vella',
    role: 'Founder, Ironworks Boxing',
    studioKey: 'ironworks',
  },
  {
    q: 'Our retention curve flattened the month we turned it on. Members stop shopping around when they already have access to everything around them.',
    name: 'Lena Otsu',
    role: 'GM, Flow & Co. Yoga',
    studioKey: 'flowyoga',
  },
] as const;

export const FAQ = [
  {
    q: 'How is this different from ClassPass or other multipass apps?',
    a: 'We do not discount you. Studios set their own credit rate and we pay you in cash, not in “marketing exposure”. Crossover is two-way — your home members get access to every other partner, so they have no reason to subscribe to a competing service.',
  },
  {
    q: 'Will my regulars stop buying memberships?',
    a: 'No — Moose sits on top of an existing studio membership, not in place of one. Members can only join the network through a partner studio they already pay. We protect your core relationship by design.',
  },
  {
    q: 'How do payouts work?',
    a: 'Each visit pays at the credit rate you set, times an agreed dollar value per credit (currently $14 AUD, reviewed quarterly). Payouts run every Monday for the prior week. No clawbacks, no minimums.',
  },
  {
    q: 'Do I have to give up peak-time slots?',
    a: 'Never. You control which sessions show up on the network and at what credit cost. Most partners list off-peak at standard rate and peak at 1.5x, but you set the rules.',
  },
  {
    q: 'What CRM systems do you integrate with?',
    a: 'Mindbody, Glofox, Xplor (Triib + Clubware), Momence, and Arketa today. We are adding TeamUp and bsport in Q3 2026. Pure-spreadsheet studios can use our manual sync portal.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'Most studios are live within 9 business days from signing — three to confirm schedule sync, three to dial in pricing with our partnerships team, three soft-launch with a cohort of network members.',
  },
  {
    q: 'What happens if I want to leave the network?',
    a: '30 days written notice and we wind down outbound bookings. No exit fee, no lock-in. Your members keep their access until the end of the current billing cycle.',
  },
] as const;

export const CTA = {
  head: 'Ready when you are.',
  sub: '9 business days from signing. No exit fee. Talk to a human before you commit.',
  applyHref: 'mailto:partners@moose.app?subject=Apply%20to%20join%20the%20Moose%20network',
  callHref: 'https://calendly.com/moose/intro',
} as const;

export type { Studio };
