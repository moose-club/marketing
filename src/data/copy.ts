// Source of truth for marketing copy. All on-page text lives here — never
// inline copy in section components (per CLAUDE.md). Copy is verbatim from
// the 2026 redesign brief.

export const NAV = {
  links: [
    { href: "#model", label: "The Moose model" },
    { href: "#value", label: "For studios" },
    { href: "#members", label: "Studio members" },
  ],
  cta: { label: "Get involved or hear more", href: "#register" },
} as const;

export const HERO = {
  eyebrow: "Studio operators",
  // The headline reads "Elevate your memberships with variety." with
  // `highlightWord` rendered in pink. One pink word per headline (SPEC §14).
  head: "Elevate your memberships with variety",
  highlightWord: "variety.",
  subLines: [
    "Moose unlocks variety for boutique fitness studios.",
    "Don't build new modalities in-house. Form reciprocal partnerships with complementary, non-competing studios nearby — and let collaboration do the work.",
  ] as const,
  points: [
    "Your members stay yours.",
    "Your studio stays specialised.",
    "Your memberships level up.",
  ] as const,
  ctaPrimary: { label: "Get involved or hear more", href: "#register" },
  ctaSecondary: { label: "See how it works", href: "#how" },
  photo: {
    src: "/photos/hero-strength.webp",
    alt: "Member training with a kettlebell in warm, golden studio light",
  },
} as const;

// Marquee of modalities under the hero. Last item rendered in pink.
export const MODALITIES = [
  "Pilates Studios",
  "Functional fitness Gyms",
  "HIIT Studios",
  "Cycle & Spin Studios",
  "Strength & conditioning Studios",
  "Yoga Studios",
  "Martial arts & combat fitness",
  "Barre Studios",
  "Dance fitness Studios",
  "CrossFit",
  "& more",
] as const;

export const MODEL = {
  eyebrow: "At a glance",
  head: "The Moose model.",
  // No pink highlight in this headline — the eyebrow already carries the
  // accent. Keeps to the 'one pink word per headline' rule.
  lede: "Crossover between partner venues, offered on a rationed basis — enough to enrich a membership, while preserving the home-studio relationship.",
  stepsTitle: "How it works.",
  steps: [
    {
      n: "01",
      eyebrow: "Formation",
      title: "Identify partners and form partnerships",
      body: [
        "Partnerships are seamlessly facilitated through Moose.",
        "Run a single partnership, or stack several across complementary modalities to broaden member variety. Each partner elevating the other's offering.",
      ] as const,
    },
    {
      n: "02",
      eyebrow: "Offering",
      title: "Add a premium tier to your membership catalogue",
      body: [
        "Unlock a new, premium tier offering at $11/wk extra with access to your partner venue or venues. More revenue, with no extra cost or operational lift required.",
        "You choose which of your memberships the upgrade is eligible on.",
      ] as const,
      figure: "$11/wk",
    },
    {
      n: "03",
      eyebrow: "Usage",
      title: "Controlled crossover",
      body: [
        "The upgrade entitles members to 4 crossover sessions per month at partner venues.",
        "Capped by design — keeping members anchored to their home studio as their primary training destination.",
      ] as const,
      figure: "4 sessions / month",
    },
    {
      n: "04",
      eyebrow: "Balance",
      title: "Even flow between partners",
      body: [
        "Our backend systems monitor crossover both ways, keeping member flow balanced between partners.",
        "No one studio carries the other — reciprocity is reconciled automatically.",
      ] as const,
    },
  ] as const,
} as const;

export const NETWORK = {
  eyebrow: "Partner network",
  // Heading uses pink on a navy surface — single pink word, brand-compliant.
  head: "On the loose.",
  headLead: "Moose",
  ledeLines: [
    { strong: "120+", rest: " partner venues" },
    { strong: "30+", rest: " unique brands" },
  ] as const,
  ledeSoft: "... and counting, across Australia",
  // First 9 partners are visible by default. The rest reveal on "View all".
  partners: [
    { name: "Form Pilates", mod: "Pilates" },
    { name: "Forge Strength Co.", mod: "Strength" },
    { name: "Haus of Movement", mod: "Mobility" },
    { name: "Tempo Ride", mod: "Cycle" },
    { name: "Northside Boxing", mod: "Boxing" },
    { name: "Stillwater Yoga", mod: "Yoga" },
    { name: "Reform Lab", mod: "Reformer" },
    { name: "Base Run Club", mod: "Running" },
    { name: "Ember Hot Yoga", mod: "Hot Yoga" },
    // ↓ extras, hidden until "View all" is pressed
    { name: "Pulse Reformer", mod: "Reformer" },
    { name: "Iron & Oak", mod: "Strength" },
    { name: "Lotus Flow", mod: "Yoga" },
    { name: "Cadence Cycle", mod: "Cycle" },
    { name: "Glasshouse Pilates", mod: "Pilates" },
    { name: "Westside Boxing", mod: "Boxing" },
    { name: "Range Mobility", mod: "Mobility" },
    { name: "Coastal Run Co.", mod: "Running" },
    { name: "Summit Strength", mod: "Strength" },
    { name: "Vault Athletic", mod: "Functional" },
    { name: "Bend & Flow", mod: "Yoga" },
    { name: "Ride House", mod: "Cycle" },
    { name: "Knockout Club", mod: "Boxing" },
    { name: "Studio Lagree", mod: "Pilates" },
    { name: "Terra Movement", mod: "Mobility" },
    { name: "Pace Run Co.", mod: "Running" },
    { name: "Hot House Yoga", mod: "Hot Yoga" },
    { name: "Apex HIIT", mod: "HIIT" },
  ] as const,
  visibleCount: 9,
} as const;

export const VALUE = {
  eyebrow: "For the studios",
  // Original design uses 2 pink words. Per the brand rule we keep only one
  // ("variety") — the second emphasis (`reason to stay`) is rendered in
  // navy via the styling, not pink.
  headHtml:
    "Variety gives new members a compelling <em>reason to join</em>, and existing members another reason to stay.",
  prizeNote:
    "Moose adds a nice new revenue stream. But the real prize is a bigger, stickier membership base.",
  benefits: [
    {
      n: "01",
      title: "New revenue stream",
      body: "A premium Moose tier that lifts yield per member — direct, incremental, recurring.",
    },
    {
      n: "02",
      title: "Attract new members",
      body: "Variety is a compelling reason for new members to choose you over competitors.",
    },
    {
      n: "03",
      title: "Reduce churn",
      body: "Monotony drives churn; variety combats it. Average tenure goes up.",
    },
    {
      n: "04",
      title: "Recurring memberships",
      body: "Convert customers from casual class-pack buyers to recurring memberships.",
    },
    {
      n: "05",
      title: "Zero-friction adoption",
      body: "No cost, no integration work. Embedded into your existing systems.",
    },
  ] as const,
  quantification: [
    {
      stat: "+$15k",
      unit: "p.a.",
      cap: "Additional studio profit (net of Moose fees) at 40 upgraders.",
    },
    {
      stat: "+$18k",
      unit: "p.a.",
      cap: "Attracting 5 new members per year (assuming $70/wk memberships).",
    },
    {
      stat: "+$18k",
      unit: "p.a.",
      cap: "Preserving 5 members per year (assuming $70/wk memberships).",
    },
  ] as const,
} as const;

export const STORY = {
  eyebrow: "On the ground",
  head: "Featured partnership.",
  case: {
    titleLeft: "VRTUS",
    titleRight: "Body by Berner",
    location: "Bondi, NSW",
    studios: [
      {
        name: "VRTUS",
        mod: "Strength & conditioning",
        photo: {
          src: "/photos/hero-boxing.webp",
          alt: "Kickboxing studio",
          position: "46% center",
        },
        quote:
          '"Our members live for the cardio and some lifting — but slotting in a Pilates session gives them a more well-rounded routine, and their bodies thank them for it."',
        upgradedPct: "22%",
        crossovers: 128,
      },
      {
        name: "Body by Berner",
        mod: "Reformer Pilates",
        photo: {
          src: "/photos/hero-pilates.webp",
          alt: "Reformer Pilates studio",
          position: "4% 34%",
        },
        quote:
          '"Reformer stays their home and their focus — but having the flexibility to fold in some functional training now and then is a really nice bit of variety for them."',
        upgradedPct: "31%",
        crossovers: 143,
      },
    ] as const,
    credits: [
      "Because of the price difference between studios, a VRTUS → BBB visit counts as 1.14 credits, while a BBB → VRTUS visit counts as 0.88 credits — so the value evens out both ways.",
      "Weighted by those values, that's ~146 credits sent from VRTUS and ~126 credits from BBB each month.",
      "The compensatory fee mechanism settles that net difference — BBB hosted more net sessions on a weighted basis, so it receives a larger share of the pooled funds to compensate.",
    ] as const,
  },
  voicesHead: "From some other studios who get it.",
  voices: [
    {
      q: "I was sceptical about sharing members. Then I understood the caps — it's a quarter of their sessions, max. We've actually retained people we'd have lost to boredom.",
      initials: "SR",
      name: "Sarah Reid",
      role: "Owner · Form Pilates, Fitzroy",
    },
    {
      q: "The revenue is nice, but the real win is stickiness. Members who cross over churn far less. Setup was an afternoon and then it just runs.",
      initials: "MT",
      name: "Marcus Tran",
      role: "Owner · Forge Strength Co., Collingwood",
    },
    {
      q: "It only works because they pair you with complementary studios, not rivals. My members are still mine — they just get a little more variety in their week.",
      initials: "PN",
      name: "Priya Nair",
      role: "Owner · Haus of Movement",
    },
  ] as const,
} as const;

export const MEMBERS = {
  eyebrow: "For studio members",
  // Headline keeps pink on the ellipsis only — the strong word ("variety")
  // is ink-coloured to keep within one accent per headline.
  headHtml: "Finally, some (affordable) <em>variety</em>…",
  ledeLines: [
    "We don't sell Moose to members direct — it's available through the studios. We've just created the infrastructure.",
    "If your home studio offers it, it's simple. If they don't, make the case to get them on board (or you'll have to consider a studio that does).",
  ] as const,
  commercials: [
    {
      k: "What you get",
      v: "4",
      u: "/ month",
      d: "Crossover sessions at partner venues.",
    },
    {
      k: "What you pay",
      v: "+$11",
      u: "/ week",
      d: "Bundled with your eligible membership through your home studio.",
    },
  ] as const,
  noteHtml:
    'Your studio not on Moose yet? <a href="#register" data-register="member">Let\'s help get them across →</a>',
  // Pure-CSS phone mock content
  phone: {
    greetHi: "Good evening,",
    greetName: "Ava",
    anchorStudio: "Form Pilates",
    creditsLabel: "Crossover credits",
    creditsMonth: "May",
    creditsLeft: "3 of 4 left",
    sectionTitle: "Book a crossover",
    filters: ["All", "Forge", "Haus", "Northside"] as const,
    slots: [
      {
        time: "5:30",
        meridiem: "pm",
        name: "Forge Strength Co.",
        meta: "Strength · Fitzroy · 1.2km",
      },
      {
        time: "6:00",
        meridiem: "pm",
        name: "Haus of Movement",
        meta: "Mobility · Collingwood · 2.0km",
      },
      {
        time: "6:15",
        meridiem: "pm",
        name: "Northside Boxing",
        meta: "Boxing · Brunswick · 2.4km",
      },
    ] as const,
  },
  calloutLines: [
    "The Moose app is used only for booking crossover sessions at partner venues.",
    "Members still book their home studio classes the way they always have.",
  ] as const,
} as const;

// All forms POST to mailto: per CLAUDE.md decision — placeholders until
// a real CRM/Typeform endpoint is wired.
export const REGISTER = {
  eyebrow: "Get on board",
  head: "Get in touch with the Moose.",
  prompt: "Who are you?",
  tabs: [
    { id: "studio", label: "I run a studio" },
    { id: "member", label: "I'm a member" },
  ] as const,
  studioForm: {
    title: "Get involved or hear more.",
    sub: "Leave your details and we'll reach out to fill in the gaps.",
    mailto:
      "mailto:partnerships@trainmoose.com?subject=Studio%20enquiry%20from%20the%20Moose%20site",
  },
  memberForm: {
    title: "Find out more or get your studio on Moose",
    sub: "Leave your details and we'll take it from there.",
    mailto:
      "mailto:memberships@trainmoose.com?subject=Member%20enquiry%20from%20the%20Moose%20site",
  },
  successStudio: {
    title: "Thanks — you're on our radar.",
    body: "We'll be in touch within two business days to set up a quick chat about partners near you.",
  },
  successMember: {
    title: "Thanks — got it.",
    body: "We'll reach out shortly and, where we can, nudge your studio to come across.",
  },
} as const;

export const FOOTER = {
  tagline: "Elevating memberships through local partner collaboration.",
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
        { l: "Get involved or hear more", h: "#register" },
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
} as const;
