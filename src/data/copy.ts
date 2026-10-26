// Source of truth for marketing copy. All on-page text lives here — never
// inline copy in section components (per CLAUDE.md). Copy is Max's, verbatim
// from the Member Card frames (Figma a5SmvlBwlHP6sf0FAZfLpP, the "Home ·
// Studio floor" and "Home · Member floor" pages) and the decisions in DESIGN.md.
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
  // The hero object: the studio's own card, front and back (RULES 0). The
  // member is a sample (RULES 19); the back lists the studios on Moose.
  card: {
    label:
      "A sample Moose member card issued by your studio, to a sample member, valid with 4.00 credits to spend. Its back lists the partner studios it is valid at: the studios already on Moose.",
    issuer: "Your studio",
    member: "Alex Sample",
    credits: "4.00",
    creditsNote: "to spend",
    sticker: "Valid",
    footnote: "Refreshes every month",
    addedBy: "your studio",
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
        "Sign up in the studio portal and connect your booking system.",
    },
    {
      n: "02",
      title: "Choose your partners",
      bodyHtml:
        "Pick the complementary, non-competing studios nearby that your members can visit.",
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
      cap: "Attracting 5 new members per year (assuming $70/\u2060wk memberships).",
    },
    {
      title: "Reduce churn",
      stat: "+$18k",
      unit: "p.a.",
      cap: "Preserving 5 members per year (assuming $70/\u2060wk memberships).",
    },
  ] as const,
} as const;

export const NETWORK = {
  head: "The studios already on Moose.",
  lede: "Across Australia — and counting.",
  // The deck: one card issued by each studio on Moose, its logo drawn in the
  // card's lettering (only the logo's shape is kept; files in public/partners/).
  // A partner without a logo shows its name alone until one lands.
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
  // The accessible names: the deck, and each card in it.
  deckLabel: "The studios already on Moose, one card each",
  cardLabel: (name: string) => `A Moose card issued by ${name}`,
} as const;

// The studio floor's close — the navy floor. Registering happens in the
// studio portal, so there is no form on this site.
export const REGISTER = {
  head: "Get your studio on Moose.",
  lede: "No cost to join. You choose your partners.",
  cta: { label: "Register your studio", href: LINKS.studioPortal },
  detail: "Opens the studio portal at studio.trainmoose.com.",
  // Beside the words: a fresh card in its sleeve, waiting to be issued by
  // your studio. Registering issues it (a sample member, RULES 19).
  card: {
    label: "A sample Moose member card in its sleeve, waiting to be issued by your studio.",
    issuer: "Your studio",
    member: "Alex Sample",
    credits: "4.00",
    sleeveKicker: "Moose Club",
    sleeveTitle: "Partner access card",
  },
} as const;

// The member floor, addressed to the member in the second person. Every card
// on it is a sample (RULES 19): "Alex Sample", at "Your home studio".
const MEMBER_CARD = {
  issuer: "Your home studio",
  member: "Alex Sample",
  credits: "4.00",
  creditsNote: "to spend",
  sticker: "Valid",
  footnote: "Refreshes every month",
} as const;

export const MEMBERS = {
  hero: {
    head: "Finally, some variety.",
    lede: "Classes at partner studios nearby, added to your home studio membership.",
    cta: { label: "Get the Moose app", href: LINKS.appStore },
    // The hero object: a sample card in its sleeve (RULES 19). Nothing on it is
    // a real studio or member; the accessible name says every fact it shows.
    card: {
      label:
        "A sample Moose member card coming out of its sleeve, issued to a sample member by one of the studios already on Moose: valid, with 4.00 credits to spend, refreshed every month.",
      // The issuer cycles through the studios already on Moose (NETWORK).
      issuers: NETWORK.partners.map((p) => p.name),
      member: MEMBER_CARD.member,
      credits: MEMBER_CARD.credits,
      creditsNote: MEMBER_CARD.creditsNote,
      sticker: MEMBER_CARD.sticker,
      footnote: MEMBER_CARD.footnote,
      sleeveKicker: "Moose Club",
      sleeveTitle: "Partner access card",
    },
  },
  // Short and basic (Max, 26 Oct 2026). Each step shows the same sample card
  // at that moment: its back, then the front made valid, then credits spent.
  how: {
    head: "How it works for you.",
    steps: [
      {
        n: "01",
        title: "Your studio partners up.",
        body: "Your home studio teams up with a few complementary studios nearby. It chooses them, so they fit alongside what you already\u00A0do.",
      },
      {
        n: "02",
        title: "You add Moose.",
        body: "Add Moose in the Moose app as an upgrade to your home studio membership. Your studio sets the price.",
      },
      {
        n: "03",
        title: "You book with credits.",
        body: "Each month you get credits to book classes at your studio’s partners, right in the Moose app. They refresh every month.",
      },
    ] as const,
    card: {
      ...MEMBER_CARD,
      addedBy: "your studio",
      spent: "1.46",
      labels: [
        "The back of a sample Moose member card: valid at the partner studios your home studio added.",
        "The front of a sample Moose member card, issued by your home studio: valid, with 4.00 credits to spend.",
        "The same sample card after booking: 1.46 credits left, one class attended and one booked.",
      ],
    },
  },
  commercials: {
    head: "What you get, what you pay.",
    lede: "A little more variety, through your home studio.",
    // The amount varies by studio (Max, 26 Oct 2026), so no figure here.
    rows: [
      { k: "You get", body: "Credits every month" },
      { k: "Valid at", body: "Your studio\u2019s partners" },
      { k: "You pay", body: "Your studio\u2019s upgrade price" },
    ] as const,
  },
  app: {
    head: "Book in the Moose app.",
    lede: "Pick a class at a partner studio and book it with your credits.",
    // A glimpse of Browse, one card per state. The classes are illustrative,
    // so no real studio is named on them (Max, 26 Oct 2026).
    classes: [
      { studio: "A partner studio", time: "7:30", meridiem: "AM", name: "Reformer 45", meta: "45 min \u00b7 Sample instructor", state: "book" },
      { studio: "A partner studio", time: "6:15", meridiem: "PM", name: "Strength 45", meta: "45 min \u00b7 Sample instructor", state: "booked" },
      { studio: "A partner studio", time: "12:00", meridiem: "PM", name: "Hot Yoga 60", meta: "60 min \u00b7 Sample instructor", state: "free" },
    ] as const,
    label: "Three sample classes in the Moose app: one to book, one booked, and one free.",
  },
  close: {
    head: "Get the Moose app.",
    lede: "Free on the App Store. Download the app to activate your account.",
    cta: { label: "Download on the App Store", href: LINKS.appStore },
    detail: "Opens the App Store listing for Moose. iPhone only for\u00a0now.",
    // Beside the words: the sample card in use, as it lives in the app.
    card: {
      ...MEMBER_CARD,
      label:
        "A sample Moose member card issued by your home studio: valid, with 4.00 credits to spend, refreshed every month.",
    },
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
