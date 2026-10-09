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
  // 01–02 sit on your lane, 03–04 on your partner's. `<strong>` ranges render
  // as Semibold ink, not chips.
  steps: [
    {
      n: "01",
      title: "Identify partners and form partnerships",
      bodyHtml:
        "You dictate who you partner with. Partnerships are seamlessly facilitated through Moose.",
    },
    {
      n: "02",
      title: "Add a premium tier to your membership catalogue",
      bodyHtml:
        "You sell it, you own it. Our only stipulation is that the upgrade fee is capped at <strong>$11/wk (or $48/mo)</strong> extra.",
    },
    {
      n: "03",
      title: "Rationed crossover",
      bodyHtml:
        "The upgrade entitles members to a notional <strong>four crossover sessions per month</strong> at partner venues (in aggregate, not per partner).",
    },
    {
      n: "04",
      title: "A balanced exchange",
      bodyHtml:
        "Our backend systems monitor crossover both ways, ensuring a balanced exchange between partners.",
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
  },
  how: {
    head: "How it works for you.",
    lede: "Your studio stays your primary training destination, with a dash of variety at partner venues for a more well-rounded routine.",
    steps: [
      { n: "01", body: "Your studio partners with complementary, non-competing studios nearby." },
      {
        n: "02",
        body: "You upgrade your membership through your home studio for access to partner venues. Moose caps the upgrade fee at $11/wk.",
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
        body: "Your home studio sets the upgrade fee for the premium tier. This is capped by Moose at a maximum of $11/wk (or $48/mo).",
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
