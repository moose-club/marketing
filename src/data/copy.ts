// Source of truth for marketing copy. All on-page text lives here — never
// inline copy in section components (per CLAUDE.md). Copy is verbatim from
// the Lane Lines frames (Figma a5SmvlBwlHP6sf0FAZfLpP, "Home · / — working")
// and the decisions logged in .impeccable/surfaces/src-pages-index-astro.md.
//
// `/` carries two floors behind the audience switch: the studio floor (the
// default) and the member floor. Exports are grouped the same way.

// Outbound destinations, shared with /claim.
export const LINKS = {
  studioPortal: "https://studio.trainmoose.com",
  appStore: "https://apps.apple.com/au/app/moose-studio-crossover/id6780323407",
} as const;

// What Moose is, in one breath — the homepage title and meta description, and
// the company description in the JSON-LD and /llms.txt. Answer engines quote
// this, so keep it plain and in step with the model below.
export const SITE = {
  title: "Moose - Level up your memberships.",
  description:
    "Moose lets boutique fitness studios form local, reciprocal partnerships with complementary operators and sell members a premium crossover upgrade. Members stay anchored to you. You gain a new recurring revenue stream and a stickier membership base.",
  // The third-person line: the company description in structured data.
  entity:
    "Moose lets boutique fitness studios form local, reciprocal partnerships with complementary operators and sell members a premium crossover upgrade.",
  legalName: "Blubby Pty Ltd",
  alternateNames: ["Moose Club", "Train Moose"],
  abn: "11 690 645 106",
  foundingYear: "2026",
  linkedin: "https://www.linkedin.com/company/trainmoose/",
} as const;

export const NAV = {
  // Each floor has its own link set; "Studio members" opens the member floor.
  studioLinks: [
    { href: "#model", label: "The Moose model" },
    { href: "#value", label: "For studios" },
    { href: "#members", label: "Studio members" },
  ],
  memberLinks: [
    { href: "#member-how", label: "How it works" },
    { href: "#member-get", label: "What you get" },
    { href: "#member-app", label: "The app" },
  ],
  // External — the studio portal lives on its own subdomain.
  portal: { label: "Studio login", href: LINKS.studioPortal },
} as const;

// The audience switch, drawn above the hero lettering on both floors.
export const SWITCH = {
  label: "Who is this page for?",
  studio: "I run a studio",
  member: "I'm a member",
} as const;

export const HERO = {
  head: "Level up your memberships.",
  subLines: [
    "Moose unlocks variety for fitness studios.",
    "Form reciprocal partnerships with complementary, non-competing studios nearby.",
  ] as const,
  points: [
    "You choose your partners.",
    "Your members stay yours.",
    "Your studio stays specialised.",
    "Your memberships level up.",
  ] as const,
  cta: { label: "Register your studio", href: LINKS.studioPortal },
  photo: {
    src: "/photos/hero-strength.webp",
    alt: "Member training with a kettlebell in warm, golden studio light",
  },
} as const;

export const MODEL = {
  head: "The Moose model.",
  lede: "Crossover between partner venues is intentionally limited: enough variety to enrich a membership, while keeping members anchored to you as their home studio.",
  stepsTitle: "How it works.",
  // Confirmed by Max, 26 Oct 2026. `<strong>` ranges render as Semibold ink.
  steps: [
    {
      n: "01",
      title: "Register and connect your booking system",
      bodyHtml:
        "Sign up in the studio portal and connect your booking system. Moose links your members’ memberships automatically, so there’s no integration work for you.",
    },
    {
      n: "02",
      title: "Choose your partners",
      bodyHtml:
        "Pick the complementary, non-competing studios nearby that your members can visit. Partnerships are reciprocal, and you can change them any time.",
    },
    {
      n: "03",
      title: "Select your eligible memberships",
      bodyHtml:
        "Choose which of your memberships can add Moose. Members upgrade in the Moose app and Moose handles the payments.",
    },
    {
      n: "04",
      title: "Members book, Moose keeps it balanced",
      bodyHtml:
        "Upgraded members get <strong>credits each month</strong> to book classes at your partners in the Moose app. Moose tracks visits both ways, so no studio carries the network.",
    },
  ] as const,
} as const;

export const VALUE = {
  head: "Variety: a reason to join, and a reason to stay.",
  prizeNote:
    "Moose adds a nice new revenue stream. But the real prize is a bigger, stickier membership base.",
  // Illustrative figures, AUD.
  benefits: [
    {
      title: "New revenue stream",
      stat: "+$15k",
      unit: "p.a.",
      cap: "Additional studio profit (net of Moose fees) at 40 upgraders.",
    },
    {
      title: "Attract new members",
      stat: "+$18k",
      unit: "p.a.",
      cap: "Attracting 5 new members per year (assuming $70/wk memberships).",
    },
    {
      title: "Reduce churn",
      stat: "+$18k",
      unit: "p.a.",
      cap: "Preserving 5 members per year (assuming $70/wk memberships).",
    },
  ] as const,
} as const;

export const NETWORK = {
  head: "The studios already on Moose.",
  lede: "Across Australia — and counting.",
  // Each partner's logo sits beside its name as a single-ink mask (only its
  // shape is kept; the ink comes from CSS). Files live in public/partners/;
  // a partner without one keeps an empty logo box until it lands.
  partners: [
    { name: "One Hot Yoga & Pilates", href: "https://www.onehotyoga.com.au", logo: "/partners/one-hot-yoga.png" },
    { name: "ShapeShift", href: "https://shapeshift.fitness", logo: "/partners/shape-shift.png" },
    { name: "Pando Society", href: "https://www.pandosociety.com", logo: "/partners/pando-society.png" },
    { name: "Essentials Studio Pilates", href: "https://essentialsstudio.com.au", logo: "/partners/essential-studio.png" },
    { name: "ACTV Strength Co.", href: "https://actvstrengthco.com", logo: "/partners/actv.png" },
    { name: "S30", href: "https://www.s30studio.com.au", logo: "/partners/s30.png" },
    { name: "REVL", href: "https://revltraining.com.au", logo: "/partners/revl.svg" },
    { name: "@Pilates 24/7", href: "https://atpilates.studio/", logo: "/partners/at-pilates.png" },
  ] as const,
  // On the compact floor the roster caps here and the rest reveal in place.
  compactVisible: 12,
  more: (n: number) => `${n} more`,
  showAll: "See all",
  showLess: "See less",
} as const;

// The studio floor's close — the navy floor. Registering happens in the
// studio portal, so there is no form on this site.
export const REGISTER = {
  head: "Get your studio on Moose.",
  lede: "No cost, no integration work. You choose your partners.",
  cta: { label: "Register your studio", href: LINKS.studioPortal },
  detail: "Opens the studio portal at studio.trainmoose.com.",
} as const;

// The member floor, addressed to the member in the second person.
export const MEMBERS = {
  hero: {
    head: "Finally, some variety.",
    lede: "Add variety to your routine through your home studio. Moose facilitates local studio collaboration, giving you access to partner venues through your home studio membership.",
    cta: { label: "Get the Moose app", href: LINKS.appStore },
    // The hero object: a sample card in its sleeve (RULES 19). Nothing on it is
    // a real studio or member; the accessible name says every fact it shows.
    card: {
      label:
        "A sample Moose member card coming out of its sleeve, issued to a sample member by one of the studios already on Moose: valid, with 4.00 credits to spend, refreshed every month.",
      // The issuer cycles through the studios already on Moose (NETWORK).
      issuers: NETWORK.partners.map((p) => p.name),
      member: "Alex Sample",
      credits: "4.00",
      creditsNote: "to spend",
      sticker: "Valid",
      footnote: "Refreshes every month",
      sleeveKicker: "Moose Club",
      sleeveTitle: "Partner access card",
    },
  },
  how: {
    head: "How it works for you.",
    lede: "Your studio stays your primary training destination, with a dash of variety at partner venues for a more well-rounded routine.",
    steps: [
      { n: "01", body: "Your studio partners with complementary, non-competing studios nearby." },
      {
        n: "02",
        body: "You upgrade your membership through your home studio for access to partner venues.",
      },
      {
        n: "03",
        body: "You receive a notional four credits each month to book sessions across the partner venues — in total, not per partner.",
      },
    ] as const,
  },
  commercials: {
    head: "What you get, what you pay.",
    lede: "A little more variety, made affordable through local studio collaboration.",
    rows: [
      {
        k: "What you get",
        body: "A notional four crossover sessions per month at partner venues, weighted for the relative membership pricing between partner studios.",
      },
      {
        k: "What you pay",
        body: "Your home studio sets the upgrade fee for the premium tier.",
      },
    ] as const,
  },
  app: {
    // As given by Max: no trailing period (the Painted Line Rule wants one).
    head: "Book and manage crossover sessions at partner venues",
    lede: "Your Moose profile automatically links to your membership in your home studio’s system.",
  },
  close: {
    head: "Get the Moose app.",
    lede: "Free on the App Store. Download the app to activate your account.",
    cta: { label: "Download on the App Store", href: LINKS.appStore },
    detail: "Opens the App Store listing for Moose. iPhone only for now.",
  },
} as const;

export const FOOTER = {
  tagline: "More ways to move.",
  cols: [
    {
      title: "Explore",
      items: [
        { l: "The Moose model", h: "#model" },
        { l: "For studios", h: "#value" },
      ],
    },
    {
      title: "More",
      items: [
        { l: "For studio members", h: "#members" },
        { l: "Register your studio", h: LINKS.studioPortal, external: true },
      ],
    },
    {
      title: "Contact",
      items: [
        { l: "support@trainmoose.com", h: "mailto:support@trainmoose.com" },
        { l: "partnerships@trainmoose.com", h: "mailto:partnerships@trainmoose.com" },
      ],
    },
  ] as const,
  instagram: {
    href: "https://www.instagram.com/trainmoose/",
    label: "Moose on Instagram",
  },
  legal: [
    { l: "Privacy", h: "/privacy" },
    { l: "Terms & Conditions", h: "/terms" },
  ] as const,
  register: { l: "Register your studio", h: LINKS.studioPortal },
  backToTop: "Back to top",
} as const;
