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

// The answer pages' paths, with the trailing slash their canonicals carry.
// Here, not with the pages, so the home page's sections can link to them.
export const PATHS = {
  classpass: "/compare/classpass/",
  secondMembership: "/compare/second-membership/",
  reciprocal: "/reciprocal-memberships/",
  studios: "/studios/",
  faq: "/faq/",
  numbers: "/numbers/",
  guide: "/guides/reciprocal-partnership/",
  pilates: "/compare/pilates-in-house-or-partner/",
  about: "/about/",
  credits: "/credits/",
  swap: "/compare/informal-swap/",
  badge: "/badge/",
} as const;

// What Moose is, in one breath — the homepage title and meta description, and
// the company description in the JSON-LD and /llms.txt. Answer engines quote
// this, so keep it plain and in step with the model below.
export const SITE = {
  title: "Moose - Level up your memberships.",
  // The hero's line (Max, 26 Oct 2026), so search and answer engines lead
  // with what the page leads with.
  description:
    "Moose partners your studio with complementary studios nearby; members add their classes as a paid upgrade. More revenue, less churn, members who stay yours.",
  // The company line (Max, 27 Oct 2026): the description in the JSON-LD and
  // /llms.txt, and word for word on LinkedIn, Crunchbase, the App Store and
  // every other profile (SPEC §9). Partnership first: Moose isn't an aggregator.
  entity:
    "Moose helps boutique fitness studios in Australia form reciprocal partnerships with complementary, non-competing studios nearby. Members add a paid upgrade to their membership to book classes at their studio\u2019s partners each month.",
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
  // Reworked with Max, 26 Oct 2026: mechanism first, then the payoff.
  // "Paid upgrade", not "pay you" — priced by the studio, paid through Moose.
  subLines: [
    "Moose partners your studio with complementary studios nearby, and your members add their classes as a paid upgrade.",
    "More revenue, less churn — and your members stay yours.",
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
  // Under the steps (Figma `135:570`, `135:662`): the comparison studios ask for.
  compare: { lead: "How is Moose different from ClassPass?", link: "See the side-by-side.", href: PATHS.classpass },
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
  // `kind` is what each studio says it offers, from its own website (checked
  // 26 Oct 2026). No locations: several are multi-site, and which of their
  // sites take Moose bookings isn't recorded here.
  partners: [
    { name: "One Hot Yoga & Pilates", href: "https://www.onehotyoga.com.au", logo: "/partners/one-hot-yoga.png", kind: "Hot, power and yin yoga, with mat and reformer Pilates." },
    { name: "ShapeShift", href: "https://shapeshift.fitness", logo: "/partners/shape-shift.png", kind: "Small-group strength, HIIT and conditioning, with 1-on-1 coaching and sports physio." },
    { name: "Pando Society", href: "https://www.pandosociety.com", logo: "/partners/pando-society.png", kind: "A wellness centre: sauna, cold plunge, Pilates, breathwork and yoga." },
    { name: "Essentials Studio Pilates", href: "https://essentialsstudio.com.au", logo: "/partners/essential-studio.png", kind: "Reformer Pilates, mat Pilates and barre." },
    { name: "ACTV Strength Co.", href: "https://actvstrengthco.com", logo: "/partners/actv.png", kind: "Group strength and conditioning." },
    { name: "S30", href: "https://www.s30studio.com.au", logo: "/partners/s30.png", kind: "Coached group strength and conditioning, including HYROX prep." },
    { name: "@Pilates 24/7", href: "https://atpilates.studio/", logo: "/partners/at-pilates.png", kind: "24/7 reformer Pilates studios, with classes on the hour." },
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
    // Under the lede (Figma `168:683`, `168:700`).
    compare: { lead: "Weighing up a second membership?", link: "Compare your options.", href: PATHS.secondMembership },
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

// ── Answer pages ─────────────────────────────────────────────────────────
// Plain questions, answered in the first sentence, for the people and the
// answer engines asking them (SPEC §9). Every claim about another company is
// sourced on its page. Facts confirmed by Max, 26 Oct 2026: members pay Moose
// and Moose pays studios monthly; Moose and ClassPass can run side by side;
// the booking systems below.

export const REVIEWED = { iso: "2026-10-26", label: "26 October 2026" } as const;

export const BOOKING_SYSTEMS = ["Hapana (v2)", "Mindbody", "GymMaster", "Momence", "Glofox"] as const;

/** "a, b and c" */
export const listOf = (items: readonly string[], joiner = "and") =>
  items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} ${joiner} ${items[items.length - 1]}`;

// Moose's own counts (PostHog warehouse, 26 Oct 2026; SPEC §9). The site uses
// these, not the length of the partner list: a studio can have several sites,
// and studios still setting up aren't live. Update monthly with NUMBERS.
const COUNTS = { studios: 5, settingUp: 3, partnerships: 1, members: 7, visits: 13, month: "October" } as const;
const bookingSystems = listOf(BOOKING_SYSTEMS);

// Shared by every answer page: the dated line under the lede.
export const ANSWER = {
  reviewed: "Last reviewed",
  sources: "Sources",
} as const;


export const CLASSPASS = {
  path: PATHS.classpass,
  title: "Moose or ClassPass? A comparison for studio owners | Moose",
  description:
    "ClassPass sells spots in your classes to its own subscribers. Moose adds a paid upgrade to the memberships you already sell, valid at partner studios you choose. A side-by-side for studio owners.",
  head: "Moose or ClassPass?",
  lede: "They solve different problems. ClassPass sells spots in your classes to its own subscribers. Moose adds a paid upgrade to the memberships you already sell, so your members can book classes at the partner studios you choose.",
  ledger: {
    head: "Side by side.",
    caption: "Moose and ClassPass compared, for a studio owner",
    columns: ["Moose", "ClassPass"],
    rows: [
      { label: "Who books", cells: ["Your own members, who add Moose to the membership they already hold with you.", "ClassPass subscribers, who pay ClassPass for a monthly plan of credits."] },
      { label: "Where they can go", cells: ["Only the partner studios you choose: complementary, non-competing, nearby.", "Any studio, gym or wellness business on ClassPass, including ones that compete with you."] },
      { label: "How you’re paid", cells: ["Members pay Moose for the upgrade, and Moose pays your studio each month: a share of every upgrade your members buy, plus a share of a partners’ pool that grows with the visits you host.", "A payout per booking. ClassPass sets a confidential rate floor with each partner, typically a percentage of your direct pricing, and its SmartRate tool can pay more when demand is high."] },
      { label: "Who sets the price", cells: ["Your studio sets the upgrade price, and chooses which memberships can add Moose.", "ClassPass sets its plan prices, and SmartRate adjusts how many credits each class costs."] },
      { label: "Cost to join", cells: ["No cost to join.", "No cost to join."] },
      { label: "Protecting your classes", cells: ["Members get a limited number of credits each month, so your studio stays their home.", "ClassPass lists the spots it predicts you won’t fill (SmartSpot), and you can limit ClassPass at peak times."] },
      { label: "The customer", cells: ["Stays your member. Moose is an add-on to their membership with you, not a replacement for it.", "Holds a ClassPass subscription, billed by ClassPass. You meet them when they book you."] },
      { label: "Size of the network", cells: [`Small and local: ${COUNTS.studios} studios across Australia today.`, "Large: over 73,000 partners in more than 30 countries (2025)."] },
      { label: "Apps", cells: ["iPhone.", "iPhone, Android and the web."] },
    ],
  },
  fit: {
    head: "Which suits your studio.",
    lists: [
      {
        title: "Moose may suit you better if",
        items: [
          "Your business runs on memberships, and you want a reason for members to stay.",
          "You’d rather choose the studios your members visit than be listed beside your competitors.",
          "You want variety to be part of your membership, not a reason to leave it.",
          "You want income that grows with the members you already have.",
        ],
      },
      {
        title: "ClassPass may suit you better if",
        items: [
          "You want to reach people who have never heard of you. ClassPass’s audience is far larger than Moose’s network.",
          "You have empty off-peak spots you’d rather sell than leave empty.",
          "You mostly sell drop-ins and class packs rather than memberships.",
          `Your booking system isn’t one Moose connects to yet. Today that’s ${bookingSystems}.`,
        ],
      },
    ],
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "Can I use Moose and ClassPass together?", aHtml: "Yes. Moose doesn’t ask you to leave ClassPass, and the two reach different people: ClassPass its subscribers, Moose your own members and your partners’." },
      { q: "Does Moose bring me new members?", aHtml: "Indirectly. Moose brings your partners’ members through your door, and a membership with more variety is a reason to join you. It doesn’t list you to the public the way ClassPass does." },
      { q: "Is Moose cheaper for members than ClassPass?", aHtml: "They’re different purchases. A ClassPass plan is a subscription of its own; Moose is added to a membership the member already holds, at a price your studio sets." },
    ],
  },
  sources: {
    items: [
      { label: "ClassPass, “How ClassPass payouts, pricing policies and rates work” (partner blog)", href: "https://classpass.com/partners/blog/classpass-payouts-pricing-policies-rates" },
      { label: "ClassPass, “SmartRate insights” (partner blog)", href: "https://classpass.com/partners/blog/smartrate-insights" },
      { label: "ClassPass, “How ClassPass protects your direct business” (partner blog)", href: "https://classpass.com/partners/blog/classpass-protects-direct-business" },
      { label: "ClassPass, Partner FAQs", href: "https://classpass.com/partners/faqs" },
      { label: "American Spa, “Mindbody + ClassPass announce new parent brand” (June 2025): partner and country counts", href: "https://www.americanspa.com/industry-news/now-live-mindbody-classpass-annouce-new-parent-brand" },
    ],
    note: "ClassPass is a trademark of its owner. Moose isn’t affiliated with ClassPass. If something here is out of date, tell us at partnerships@trainmoose.com and we’ll fix it.",
  },
} as const;

export const SECOND_MEMBERSHIP = {
  path: PATHS.secondMembership,
  title: "Moose or a second gym membership? | Moose",
  description:
    "Want variety without leaving your studio? Compare a second membership, casual classes, and Moose: an upgrade to the membership you already have, valid at your studio's partner studios.",
  head: "Moose or a second membership?",
  lede: "If you love your studio but want some variety, there are three ways to get it: a second membership somewhere else, casual classes, or Moose added to the membership you already have.",
  ledger: {
    head: "Side by side.",
    caption: "Moose, a second membership and casual classes compared, for a studio member",
    columns: ["Moose", "A second membership", "Casual classes"],
    rows: [
      { label: "What it is", cells: ["An upgrade to your current membership, through your home studio.", "A full membership at another studio, on top of yours.", "One-off classes, booked and paid for each time."] },
      { label: "Typical cost", cells: ["Set by your home studio, as an add-on to what you already pay.", "Often $70–90 a week at a boutique studio.", "Often around $35 a class."] },
      { label: "Where you can go", cells: ["Your home studio’s partner studios: complementary, non-competing, nearby.", "That one studio.", "Anywhere that sells casual classes."] },
      { label: "How often", cells: ["A few classes a month, with credits that refresh every month.", "As often as that membership allows.", "As often as you’re willing to pay for."] },
      { label: "Booking", cells: ["In the Moose app.", "In that studio’s own app or booking system.", "Studio by studio, in each one’s booking system."] },
      { label: "Your home studio", cells: ["Stays your home: Moose only exists on top of your membership.", "Shares your week, and your budget, with the new one.", "Unchanged."] },
    ],
    note: "Prices for a second membership and casual classes are typical for Australian boutique studios, estimated by Moose in 2026. Yours may differ.",
  },
  fit: {
    head: "Which suits you.",
    lists: [
      {
        title: "Moose may suit you if",
        items: [
          "You love your studio and want a little variety, not a second home.",
          "You want variety to be a habit, not a one-off.",
          "Your home studio offers Moose.",
        ],
      },
      {
        title: "A second membership may suit you if",
        items: [
          "You want to train somewhere else as often as at your current studio.",
          "Your studio doesn’t offer Moose, or doesn’t partner with the studio you want.",
        ],
      },
      {
        title: "Casual classes may suit you if",
        items: [
          "You want to try somewhere once or twice before committing.",
        ],
      },
    ],
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "How much does Moose cost?", aHtml: "Your home studio sets the price of the upgrade, so it varies by studio. You’ll see it in the Moose app." },
      { q: "Can I get Moose if my studio isn’t on it?", aHtml: "No. Moose comes through your home studio, so your studio needs to offer it." },
      { q: "Can I choose which studios I visit?", aHtml: "Your home studio chooses its partners. You choose which of them to book, and when." },
    ],
  },
} as const;

export const RECIPROCAL = {
  path: PATHS.reciprocal,
  title: "What is a reciprocal studio membership? | Moose",
  description:
    "A reciprocal membership lets members of one fitness studio book classes at a partner studio, and the partner's members book back. How it works on Moose, and what keeps it fair.",
  head: "What is a reciprocal studio membership?",
  lede: "A reciprocal membership lets members of one fitness studio book classes at a partner studio, and the partner’s members book back. On Moose, it’s an upgrade a studio adds to its own memberships, with partners it chooses.",
  example: {
    head: "An example.",
    body: "A strength studio partners with a Pilates studio around the corner. They don’t compete: one builds strength, the other mobility and control. Each adds Moose to its memberships. Now the strength studio’s members can mix Pilates into their week, the Pilates studio’s members can add strength work, and both stay members of the studio they joined.",
  },
  stepsHead: "How it works on Moose.",
  guideLink: { lead: "Setting one up?", link: "Follow the step-by-step guide.", href: PATHS.guide },
  fair: {
    head: "What keeps it fair.",
    lists: [
      {
        title: "On Moose",
        items: [
          "Partners are chosen, not assigned. Each studio picks complementary, non-competing studios nearby, and each partnership works both ways.",
          "Crossover is limited. Members get a set number of credits each month, so their home studio stays their main studio.",
          "Visits are weighted. A class at a studio with pricier memberships costs more credits, so studios at different price points can partner fairly.",
          "Moose balances the money. Members pay Moose, and Moose pays each studio monthly, with more going to studios that host more visits.",
        ],
      },
      {
        title: "What it isn’t",
        items: [
          "Open access. Members can only book their own studio’s partners.",
          "A marketplace. Studios don’t list spare spots at a discount; Moose is an upgrade to their own memberships.",
          "A replacement for a membership. It only exists on top of one.",
        ],
      },
    ],
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "Do both studios have to agree?", aHtml: "Yes. Each partnership works both ways, so both studios choose it." },
      { q: "Is a reciprocal membership the same as ClassPass?", aHtml: `No. ClassPass sells spots to its own subscribers across its whole network. A reciprocal membership is an upgrade to a studio’s own membership, valid only at the partners it chose. See <a href="${PATHS.classpass}">Moose or ClassPass?</a>` },
      { q: "Which booking systems does Moose work with?", aHtml: `${bookingSystems}.` },
    ],
  },
} as const;

// The live partnerships (Max, 26 Oct 2026): which site of each studio takes
// Moose bookings, and whom it partners with. Each studio in one gets its own
// page at /studios/<slug>/. `href` is the live site's own page, where the
// studio has one.
export const PARTNERSHIPS = [
  [
    { name: "S30", where: "Surry Hills, Sydney NSW", locality: "Surry Hills", region: "NSW", href: undefined },
    { name: "One Hot Yoga & Pilates", where: "Potts Point, Sydney NSW", locality: "Potts Point", region: "NSW", href: undefined },
  ],
  [
    { name: "Essentials Studio Pilates", where: "Miami, Gold Coast QLD", locality: "Miami", region: "QLD", href: "https://essentialsstudio.com.au/locations-pilates-miami/" },
    { name: "ACTV Strength Co.", where: "Burleigh Heads, Gold Coast QLD", locality: "Burleigh Heads", region: "QLD", href: undefined },
  ],
] as const;

export const studioSlug = (name: string) =>
  name.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const studioPath = (name: string) => `/studios/${studioSlug(name)}/`;

export const STUDIOS = {
  path: PATHS.studios,
  title: "Studios on Moose | Moose",
  description: `The studios on Moose: ${COUNTS.studios} live across New South Wales, Victoria and Queensland, ${COUNTS.settingUp} more setting up, and the partnerships live today.`,
  head: "Studios on Moose.",
  lede: `${COUNTS.studios} studios across New South Wales, Victoria and Queensland are live on Moose, from Pilates and yoga to strength and recovery, and ${COUNTS.settingUp} more are setting up.`,
  note: "Some of these studios have several locations. Where a partnership is live, the location is listed under Live partnerships; the Moose app shows which studios partner with yours.",
  website: "Website",
  page: "On Moose",
  live: {
    head: "Live partnerships.",
    lede: "Members of either studio in a partnership can add Moose and book classes at the other.",
    and: "with",
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "How do I book these studios with Moose?", aHtml: "Through your home studio. If it offers Moose and partners with one of these studios, add the Moose upgrade and book in the Moose app." },
      { q: "Can my studio join?", aHtml: `Yes, and it’s free to join. Register your studio in the studio portal at <a href="${LINKS.studioPortal}">studio.trainmoose.com</a>.` },
    ],
  },
} as const;

type LiveStudio = (typeof PARTNERSHIPS)[number][number];

// One studio in a live partnership: its own page, for members (and answer
// engines) asking "can I use Moose at …".
export const STUDIO_PAGE = {
  title: (s: LiveStudio) => `${s.name} on Moose (${s.locality}) | Moose`,
  description: (s: LiveStudio, p: LiveStudio) =>
    `${s.name} in ${s.where} is on Moose, partnered with ${p.name} in ${p.where}. Members of either studio can add Moose and book classes at the other.`,
  head: (s: LiveStudio) => `${s.name} on Moose.`,
  lede: (s: LiveStudio, p: LiveStudio) =>
    `${s.name} in ${s.where} is on Moose, partnered with ${p.name} in ${p.where}. Members of either studio can add Moose to an eligible membership and book classes at the other in the Moose app.`,
  facts: {
    head: "At a glance.",
    offers: "What it offers",
    where: "On Moose at",
    partner: "Partnered with",
    website: "Website",
  },
  questions: {
    head: "Common questions.",
    items: (s: LiveStudio, p: LiveStudio) => [
      { q: `Can I book ${s.name} with Moose?`, aHtml: `Yes, if your home studio is ${p.name} in ${p.where} and you’ve added the Moose upgrade to an eligible membership. Book in the Moose app.` },
      { q: `Can ${s.name} members use Moose?`, aHtml: `Yes. Members of ${s.name} in ${s.where} can add Moose to an eligible membership and book classes at <a href="${studioPath(p.name)}">${p.name}</a> in ${p.where}.` },
      { q: `How much is Moose at ${s.name}?`, aHtml: `${s.name} sets the price of its Moose upgrade. You’ll see it in the Moose app.` },
    ],
  },
} as const;

// ── Partnership reports ──────────────────────────────────────────────────
// What a live partnership did, from Moose's booking records (synced to the
// PostHog warehouse). Figures are counts of real members only: staff and test
// accounts excluded (the `real_members` view). Classes are counted when
// attended, not booked. One page per partnership that grows: week one, then
// one month, then three. Both studios see each update before it goes live.

export const REPORT = {
  updated: "Last updated",
  link: { lead: "How’s the partnership going?", link: "Read the week-one report." },
  live: "Week-one report",
} as const;

export const reportPath = (slug: string) => `/partnerships/${slug}/`;

export const REPORTS = [
  {
    slug: "s30-one-hot-yoga-pilates",
    studios: ["S30", "One Hot Yoga & Pilates"],
    title: "S30 × One Hot Yoga & Pilates on Moose: week one | Moose",
    description:
      "S30 Surry Hills and One Hot Yoga & Pilates Potts Point went live on Moose on 18 October 2026. In their first week, 7 members added Moose, and 11 members took 13 classes at the partner studio.",
    head: "S30 × One Hot Yoga & Pilates: week one.",
    lede: "S30 Surry Hills and One Hot Yoga & Pilates Potts Point went live on Moose on 18 October 2026. In their first week, 7 members added Moose, and 11 members took 13 classes at the partner studio.",
    published: "2026-10-27",
    updated: { iso: "2026-10-27", label: "27 October 2026" },
    method: "Figures from Moose’s booking records, 18 to 26 October, excluding staff and test accounts.",
    figures: {
      head: "The first week.",
      cells: [
        { label: "Members who added Moose", figure: "7", caption: "5 at S30, 2 at One Hot." },
        { label: "Partner classes attended", figure: "13", caption: "11 by S30 members at One Hot, 2 by One Hot members at S30." },
        { label: "Members who tried the partner", figure: "11", caption: "10 from S30, 1 from One Hot." },
      ],
    },
    saw: {
      head: "What we saw.",
      items: [
        { q: "Most of the movement was one way.", aHtml: "S30’s strength members went looking for yoga and Pilates. One Hot’s members have been slower to book strength: one member, two classes so far." },
        { q: "An open day got people through the door.", aHtml: "Each studio offered the other’s members a free class. Nine S30 members came to One Hot’s open day on Saturday 25 October, across reformer Pilates and hot flow." },
        { q: "Reformer and hot flow led the way.", aHtml: "At One Hot, Pilates Reformer Open was the most-attended class, then Slow Hot Flow. At S30, members took Get Low and Back 2 Back." },
        { q: "Not every booking stuck.", aHtml: "Members cancelled 7 bookings ahead of class, most of them open-day spots, so we count classes attended, not bookings. Two more classes are already booked." },
      ],
    },
    next: {
      head: "What’s next.",
      body: "We’ll update this page at one month and three months, with how often members come back and what the partnership means for each studio.",
    },
    questions: {
      head: "Common questions.",
      items: [
        { q: "Can I book S30 or One Hot with Moose?", aHtml: `Yes, if one of them is your home studio. Add Moose to an eligible membership and book the other in the Moose app. See <a href="${studioPath("S30")}">S30</a> and <a href="${studioPath("One Hot Yoga & Pilates")}">One Hot Yoga &amp; Pilates</a> on Moose.` },
        { q: "Can my studio do the same?", aHtml: `Yes, and it’s free to join. Register your studio in the studio portal at <a href="${LINKS.studioPortal}">studio.trainmoose.com</a>.` },
      ],
    },
  },
] as const;

// ── How credits work (members) ───────────────────────────────────────────
// From the credit policy and the backend (moose-knowledge credit-cycles,
// credit-ledger, cancel-booking; 27 Oct 2026). Public only: the carry-over
// cap and the overdraft are internal and stay off the site. The app shows each
// class's credit cost before booking (moose-ios ClassRow, SessionDetails).
export const CREDITS = {
  path: PATHS.credits,
  title: "How do Moose credits work? | Moose",
  description:
    "Moose credits for members: a monthly allowance to book classes at your home studio's partners. What a class costs, when credits refresh, and what happens when you cancel.",
  head: "How do Moose credits work?",
  lede: "Each month you get credits to book classes at your home studio\u2019s partner studios. A class costs about one credit, a little more at studios with pricier memberships and a little less at cheaper ones. Credits refresh on the 1st, and if you cancel in time, they come back.",
  reviewed: { iso: "2026-10-27", label: "27 October 2026" },
  short: {
    head: "The short version.",
    cells: [
      { label: "Credits refresh", figure: "1st", caption: "Of every month, Sydney time." },
      { label: "A typical class", figure: "1.00", caption: "Credit, give or take, depending on the studio." },
      { label: "A free open-day class", figure: "0.00", caption: "Credits. Open days are on the studio." },
    ],
  },
  cost: {
    head: "What a class costs.",
    body: "A class costs more credits at a studio whose memberships cost more than your home studio\u2019s, and fewer at one whose memberships cost less. That keeps it fair for both studios. The app shows the cost before you book.",
    caption: "Examples of what a class costs in Moose credits",
    columns: ["Credits"],
    rows: [
      { label: "A studio priced like yours", cells: ["About 1.00"] },
      { label: "A studio with pricier memberships", cells: ["A little more, like 1.10"] },
      { label: "A studio with cheaper memberships", cells: ["A little less, like 0.90"] },
      { label: "A free open-day class", cells: ["0.00"] },
    ],
    note: "Examples, not prices. Credits always show to two decimals.",
  },
  cancelling: {
    head: "Cancelling.",
    items: [
      { q: "Cancel in time, and your credits come back.", aHtml: "Each partner studio sets a cancellation window. Cancel before it closes and the credits return to your balance straight away." },
      { q: "Cancel late, and they don\u2019t.", aHtml: "After the window closes, cancelling keeps your spot free for someone else, but the credits are used." },
      { q: "If the studio cancels, they always come back.", aHtml: "If the partner studio cancels the class, your credits are refunded, whenever it happens." },
    ],
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "How many credits do I get?", aHtml: "It depends on your studio\u2019s Moose upgrade. Your balance is in the Moose app." },
      { q: "Where can I use my credits?", aHtml: "At your home studio\u2019s partner studios. Classes at your home studio are part of your membership, not Moose." },
      { q: "Do unused credits roll over?", aHtml: "Credits are a monthly allowance, so plan to use them within the month." },
      { q: "Why does a class cost 0.97 credits?", aHtml: "Because the partner studio\u2019s memberships cost a little less than your home studio\u2019s. Costs are worked out per studio, to two decimals." },
    ],
  },
} as const;

// ── Moose or an informal swap (studios) ──────────────────────────────────
// The alternative studios already use: a discount or a free class each way
// with a neighbour. moose-knowledge "What Moose is" names it ("partner
// informally… too complex to structure properly"). No outside facts.
export const SWAP = {
  path: PATHS.swap,
  title: "Moose or an informal studio swap? A comparison for studio owners | Moose",
  description:
    "Many studios already swap with a neighbour: a discount or a free class each way. How that compares with a reciprocal partnership on Moose, on tracking, fairness and who pays.",
  head: "Moose or an informal studio swap?",
  lede: "Plenty of studios already swap with a neighbour: show your tag for 20% off, or a free class each way. It\u2019s easy to start and hard to keep fair. Moose does the same thing as part of your membership, with every visit tracked, balanced and paid for.",
  reviewed: { iso: "2026-10-27", label: "27 October 2026" },
  ledger: {
    head: "Side by side.",
    caption: "Moose compared with an informal swap between studios, for a studio owner",
    columns: ["Moose", "An informal swap"],
    rows: [
      { label: "How it works", cells: ["Members add Moose to their membership and book your partner\u2019s classes in the Moose app, with credits.", "Members show a tag or quote a code for a discount, and book with your partner directly."] },
      { label: "Tracking", cells: ["Every visit is recorded, both ways, by studio.", "By hand, if at all: codes, front-desk tallies, a spreadsheet."] },
      { label: "Keeping it fair", cells: ["Visits are weighted by each studio\u2019s membership pricing, and the studio that hosts more visits earns more.", "Usually nobody checks. One studio can end up giving far more than it gets."] },
      { label: "Who pays", cells: ["Members pay Moose for the upgrade, and Moose pays each studio monthly.", "Members pay your partner a discounted rate for each class."] },
      { label: "What your studio earns", cells: ["A share of every upgrade your members buy, plus a share of a partner pool for the visits you host.", "Nothing directly: goodwill, and the odd new member."] },
      { label: "Booking", cells: ["In one app, synced with your partner\u2019s booking system.", "Each studio\u2019s own booking, with the discount applied by hand."] },
      { label: "Protecting your classes", cells: ["Members get a limited number of credits each month, and you choose which memberships can add Moose.", "Whatever the two of you agree, enforced at the front desk."] },
      { label: "Cost to set up", cells: ["Free.", "Free, plus your team\u2019s time to run it."] },
    ],
  },
  fit: {
    head: "Which suits your studio.",
    lists: [
      {
        title: "Moose may suit you better if",
        items: [
          "You want variety to be part of your membership, not a promotion.",
          "You want every visit tracked, and the exchange kept fair.",
          "You want to earn from it, not just give a discount.",
          `Your booking system is one Moose connects to: ${bookingSystems}.`,
        ],
      },
      {
        title: "An informal swap may suit you better if",
        items: [
          "You want a one-off promotion for a month or two.",
          "You\u2019re happy to track it by hand and trust it evens out.",
          "Your partner\u2019s booking system isn\u2019t one Moose connects to yet.",
        ],
      },
    ],
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "We already swap with a studio. Can we move it onto Moose?", aHtml: `Yes. You both register in the studio portal and invite each other. The <a href="${PATHS.guide}">setup guide</a> walks through every step.` },
      { q: "Can we keep our swap and add Moose?", aHtml: "Yes. Nothing stops you running both while members move across." },
      { q: "Does Moose cost my studio anything?", aHtml: "No. Joining is free. Moose is paid from the upgrades members buy." },
    ],
  },
} as const;

// ── About ────────────────────────────────────────────────────────────────
// Who's behind Moose. The team and roles are from moose-knowledge "Team and
// Roles" (a June 2026 draft; names and titles only, to confirm with Max); the
// why is "What Moose is"; the beliefs are the model's "what Moose doesn't do".
export const TEAM = [
  { name: "Gavin Roberts", role: "Managing Director", line: "Leads strategy and product." },
  { name: "Max Kelly", role: "Head of Development", line: "Builds the Moose app, the studio portal and the platform behind them." },
  { name: "Jake Kelly", role: "Head of Operations & Systems", line: "Runs operations and the systems that let Moose scale." },
  { name: "William Swale", role: "Head of Partnerships", line: "Works with studios to form their partnerships." },
] as const;

export const ABOUT = {
  path: PATHS.about,
  title: "About Moose: who we are and why we built it | Moose",
  description:
    "Moose helps boutique fitness studios in Australia form reciprocal partnerships with studios nearby. Who we are, why we built it, what we believe, and our company details.",
  head: "About Moose.",
  lede: `${SITE.entity} We\u2019re a small Australian team, and we started Moose in ${SITE.foundingYear}.`,
  reviewed: { iso: "2026-10-27", label: "27 October 2026" },
  why: {
    head: "Why we built Moose.",
    paragraphs: [
      "Boutique studios win by specialising. That\u2019s why members love them, and why they pay more for them. But even loyal members want some variety: Pilates alongside their strength work, yoga for recovery.",
      "Their options aren\u2019t good. A second membership costs as much as the first. Casual classes are too expensive to become a habit. Aggregators trade the studio relationship for variety. And a studio that adds a new class type in-house takes on equipment, space, staff and a broader brand.",
      "So we built a partnership layer between studios. Two complementary studios nearby agree to share, members add a small upgrade, and everyone stays a member of the studio they joined.",
    ],
  },
  beliefs: {
    head: "What we believe.",
    items: [
      { q: "The member stays the studio\u2019s.", aHtml: "Moose doesn\u2019t sell memberships of its own. Members find us through their studio, and their studio stays their home." },
      { q: "Partners are chosen, not assigned.", aHtml: "Studios pick the complementary studios they partner with, and every partnership works both ways." },
      { q: "No discounting, no spare-spot selling.", aHtml: "Moose doesn\u2019t sell studios\u2019 classes to the public or undercut their prices. It adds variety to the memberships they already sell." },
      { q: "Variety should keep members, not take them.", aHtml: "Members get a limited number of credits each month: enough for variety, never a reason to leave." },
    ],
  },
  team: { head: "The team." },
  company: {
    head: "Company details.",
    rows: [
      { k: "Legal name", vHtml: `${SITE.legalName}, trading as ${SITE.alternateNames[0]}` },
      { k: "ABN", vHtml: SITE.abn },
      { k: "Founded", vHtml: `${SITE.foundingYear}, in Australia` },
      { k: "Studios", vHtml: `<a href="${LINKS.studioPortal}">studio.trainmoose.com</a> \u00b7 <a href="mailto:partnerships@trainmoose.com">partnerships@trainmoose.com</a>` },
      { k: "Members", vHtml: `<a href="${LINKS.appStore}">The Moose app on iPhone</a> \u00b7 <a href="mailto:support@trainmoose.com">support@trainmoose.com</a>` },
      { k: "Follow", vHtml: `<a href="${SITE.linkedin}">LinkedIn</a> \u00b7 <a href="https://www.instagram.com/trainmoose/">Instagram</a>` },
    ],
    numbers: { lead: "How big is Moose today?", link: "See Moose in numbers.", href: PATHS.numbers },
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "Who runs Moose?", aHtml: `Moose is run by ${SITE.legalName} (ABN ${SITE.abn}), an Australian company trading as ${SITE.alternateNames[0]}.` },
      { q: "Is Moose part of ClassPass or Mindbody?", aHtml: `No. Moose is independent, and it works alongside the booking systems studios already use. See <a href="${PATHS.classpass}">Moose or ClassPass?</a>` },
      { q: "How do I contact Moose?", aHtml: `Studios: <a href="mailto:partnerships@trainmoose.com">partnerships@trainmoose.com</a>. Members: <a href="mailto:support@trainmoose.com">support@trainmoose.com</a>.` },
    ],
  },
} as const;

// ── Pilates in-house or partner ──────────────────────────────────────────
// For a studio weighing up a second class type. The trade-offs are Moose's
// own (moose-knowledge "What Moose is": staff, space, capex, quality, brand
// dilution); no outside cost figures, so nothing here needs a source. The
// headline's word joiner keeps "in-house" on one line.
export const PILATES = {
  path: PATHS.pilates,
  title: "Add Pilates in-house, or partner with a Pilates studio? | Moose",
  description:
    "For studio owners weighing up a second class type: adding Pilates yourself versus partnering with a Pilates studio nearby, compared on cost, space, staff, quality and brand.",
  head: "Add Pilates in-\u2060house, or partner?",
  lede: "If your members want Pilates now and you\u2019d rather not buy equipment, hire instructors or give up floor space, partnering with a Pilates studio nearby gets them there sooner. If Pilates is becoming core to your business and you have the room and the budget, building it yourself keeps it all under your roof.",
  reviewed: { iso: "2026-10-27", label: "27 October 2026" },
  scope: "The same trade-offs apply to yoga, boxing or any class type you don\u2019t run today.",
  ledger: {
    head: "Side by side.",
    caption: "Partnering with a Pilates studio on Moose compared with adding Pilates in-house, for a studio owner",
    columns: ["Partner on Moose", "Add it in-house"],
    rows: [
      { label: "Upfront cost", cells: ["Nothing. Moose is free to join.", "Equipment, fit-out and any building work. Reformer Pilates needs a reformer for every spot in the class."] },
      { label: "Space", cells: ["None. Classes happen at your partner\u2019s studio.", "Floor space, taken from your current timetable or found in a new lease."] },
      { label: "Staff", cells: ["None. Your partner\u2019s instructors teach.", "Pilates-trained instructors to hire, train and roster, alongside the team you have."] },
      { label: "Quality", cells: ["A specialist that does Pilates all day.", "Yours to build, next to everything else you already run."] },
      { label: "Time to start", cells: ["As soon as you and your partner are both live on Moose.", "As long as fit-out, hiring and launch take."] },
      { label: "Revenue", cells: ["A share of every upgrade your members buy, plus a share of a partner pool for the visits you host.", "Everything your Pilates classes earn, against what they cost to run."] },
      { label: "Your brand", cells: ["Stays specialised: you\u2019re the strength studio, with a Pilates partner.", "Broadens: you become a strength and Pilates studio."] },
      { label: "How much Pilates", cells: ["A few classes a month for each member, with credits.", "As much as your timetable offers."] },
      { label: "Control", cells: ["You choose the partner and which memberships can add Moose. They run their classes.", "All yours: classes, pricing and timetable."] },
      { label: "If it doesn\u2019t work", cells: ["No equipment or lease to unwind.", "The equipment, the space and the staff stay with you."] },
    ],
  },
  fit: {
    head: "Which suits your studio.",
    lists: [
      {
        title: "Partnering may suit you better if",
        items: [
          "You want to see how much Pilates your members actually book before you invest.",
          "You don\u2019t have the space or the capital for a studio fit-out.",
          "You\u2019d rather stay the best at what you already do.",
          "Your members want a little Pilates, not a lot.",
        ],
      },
      {
        title: "Building it in-house may suit you better if",
        items: [
          "Pilates is becoming core to what your members come for.",
          "You have the space and the budget, and instructors you can hire.",
          "You want unlimited Pilates inside your own memberships.",
          "You want every dollar and every decision under your roof.",
        ],
      },
    ],
  },
  first: {
    head: "Or partner first.",
    bodyHtml: `A partnership shows you real demand before you spend anything. In their first week on Moose, 10 members of S30, a strength studio in Surry Hills, took classes at One Hot Yoga & Pilates in Potts Point, most of them reformer Pilates and hot flow. <a href="${reportPath("s30-one-hot-yoga-pilates")}">Read the week-one report.</a>`,
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "Will partnering send my members to a competitor?", aHtml: "Your partner doesn\u2019t run what you do, so there\u2019s nothing to switch to. Members get a limited number of credits each month, so your studio stays their home." },
      { q: "Can I partner now and add Pilates later?", aHtml: "Yes. Talk to your partner first: once you run Pilates yourself, the two of you are no longer complementary." },
      { q: "What if there\u2019s no Pilates studio near me on Moose?", aHtml: `Invite one. It\u2019s free for them to join, and the <a href="${PATHS.guide}">setup guide</a> walks through every step.` },
    ],
  },
} as const;

// ── Setup guide ──────────────────────────────────────────────────────────
// How to set up a reciprocal partnership, step by step. Steps 02–09 follow the
// studio portal's own setup checklist (studio-portal derive-checklist.ts, 27
// Oct 2026); re-check it when the portal's steps change.
export const GUIDE = {
  path: PATHS.guide,
  title: "How to set up a reciprocal partnership between fitness studios | Moose",
  description:
    "A step-by-step guide for studio owners: find a complementary studio nearby, set up Moose in the studio portal, invite your partner, and tell your members.",
  head: "How to set up a reciprocal partnership.",
  lede: "Pick a complementary, non-competing studio nearby, set up Moose in the studio portal, then invite them to partner. It\u2019s free, and your members can start booking once you\u2019re both live. Here\u2019s every step.",
  reviewed: { iso: "2026-10-27", label: "27 October 2026" },
  before: {
    head: "Before you start.",
    items: [
      `Your booking system\u2019s admin login. Moose connects to ${bookingSystems}.`,
      "Your business details and bank account, for payouts through Stripe.",
      "Your logo, a cover photo and a short description of your studio.",
      "A studio in mind to partner with.",
    ],
  },
  steps: {
    head: "Step by step.",
    items: [
      { title: "Find a complementary studio nearby.", bodyHtml: "Look for a studio your members would visit but you\u2019d never compete with: Pilates beside strength, yoga beside boxing. Talk to the owner first. An invite from someone they know lands better than one from a platform." },
      { title: "Register your studio.", bodyHtml: `Sign up in the studio portal at <a href="${LINKS.studioPortal}">studio.trainmoose.com</a>. It\u2019s free, and there\u2019s nothing to install.` },
      { title: "Connect your booking system.", bodyHtml: "Choose your system and enter your details. Some systems ask you to approve Moose\u2019s access in their own settings; the portal tells you when. Moose then syncs your timetable and memberships." },
      { title: "Choose which memberships can add Moose.", bodyHtml: "Pick the memberships whose members can buy the upgrade. On GymMaster, you\u2019ll also choose the visitor membership your partner\u2019s members check in on." },
      { title: "Set your upgrade fee.", bodyHtml: "Choose the weekly price your members pay to add Moose." },
      { title: "Set up payouts.", bodyHtml: "Add your business details and bank account with Stripe. Members pay Moose, and Moose pays your studio each month." },
      { title: "Finish your studio profile.", bodyHtml: "Add your logo, a cover photo and a description. It\u2019s what your partner\u2019s members see in the Moose app." },
      { title: "Submit for review.", bodyHtml: "Moose checks your setup and gets you live." },
      { title: "Invite your partner.", bodyHtml: "Under Partners in the portal, invite the studio you spoke to, or accept their invite, and agree the terms between you. If they\u2019re not on Moose yet, they register for free and follow these same steps." },
      { title: "Tell your members.", bodyHtml: `Share your studio\u2019s Moose page by email, SMS, your Instagram bio or a QR poster at the front desk. An open day helps: S30 and One Hot each offered the other\u2019s members a free class, and <a href="${reportPath("s30-one-hot-yoga-pilates")}">nine S30 members came to One Hot\u2019s</a>.` },
    ],
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "Does it cost anything?", aHtml: "No. Joining and setting up are free. Moose is paid from the upgrades members buy." },
      { q: "Can I partner with more than one studio?", aHtml: "Yes. Each partnership is between two studios, and you can have several. Your members can book at any of them." },
      { q: "What if my booking system isn\u2019t listed?", aHtml: `Tell us which one you use at <a href="mailto:partnerships@trainmoose.com">partnerships@trainmoose.com</a>.` },
      { q: "How long does it take?", aHtml: "Most of it is self-serve in the studio portal. Once you submit, Moose reviews your setup and gets you live." },
    ],
  },
} as const;

// ── The partner badge ────────────────────────────────────────────────────
// A badge each studio in a live partnership places on its own website,
// linking to its studio page here (Figma `Web/Partner badge` 209:1520, page
// 213:1526). The studio's own domain then confirms the partnership, which
// answer engines trust above anything Moose says about itself. Plain HTML, no
// script; the images are served from public/badge/. The words on the badge
// are its alt text, so they're the link's words for a crawler.
export const BADGE = {
  path: PATHS.badge,
  title: "How to add the Moose badge to your studio\u2019s website | Moose",
  description:
    "For studios in a live partnership on Moose: add the Partner studio on Moose badge to your website, linking to your studio\u2019s page. Free, about five minutes.",
  head: "How to add the Moose badge to your website.",
  lede: "If your studio is in a live partnership on Moose, add the Partner studio on Moose badge to your website. It links to your studio\u2019s page on Moose, so members and search engines can see the partnership is real. It\u2019s free and takes about five minutes.",
  reviewed: { iso: "2026-10-27", label: "27 October 2026" },
  alt: "Partner studio on Moose",
  width: 147,
  height: 64,
  image: (ink: "navy" | "white", ext: "svg" | "png") => `/badge/partner-studio-${ink}.${ext}`,
  badge: {
    head: "The badge.",
    navy: "Navy, for a light background.",
    white: "White, for a dark background.",
    note: "147 \u00d7 64. Make it bigger or smaller, but keep its shape, and keep it navy or white.",
    download: "Download:",
    files: [
      { l: "Navy SVG", ink: "navy", ext: "svg" },
      { l: "Navy PNG", ink: "navy", ext: "png" },
      { l: "White SVG", ink: "white", ext: "svg" },
      { l: "White PNG", ink: "white", ext: "png" },
    ],
  },
  steps: {
    head: "Step by step.",
    items: [
      { title: "Find your studio below and copy its code.", bodyHtml: "Each studio\u2019s code links to its own page on Moose. For a dark background, change \u201cnavy\u201d to \u201cwhite\u201d in the code." },
      { title: "Paste it where your site takes HTML.", bodyHtml: "Add an HTML, code or embed block to your footer, so the badge is on every page, and paste the code in. Your builder\u2019s steps are below." },
      { title: "No HTML block? Add it as an image.", bodyHtml: "Download the badge, add it as an image, link it to your studio\u2019s page on Moose and set its alt text to \u201cPartner studio on Moose\u201d." },
      { title: "Publish, then tell us where it is.", bodyHtml: `Email <a href="mailto:partnerships@trainmoose.com">partnerships@trainmoose.com</a> with the page it\u2019s on and we\u2019ll check the link works.` },
    ],
  },
  code: {
    head: "Your studio\u2019s code.",
    copy: "Copy code",
    copied: "Copied",
    caption: (name: string) => `The badge code for ${name}`,
  },
  builders: {
    head: "By website builder.",
    caption: "How to add the badge in each website builder",
    columns: ["Paste the code", "Or add it as an image"],
    rows: [
      { label: "Squarespace", cells: ["Add a Code block to your footer and paste the code.", "An Image block: set the clickthrough link to your page on Moose, and the alt text."] },
      { label: "Wix", cells: ["Don\u2019t use Embed HTML: Wix puts it in a frame on another site, so search engines don\u2019t count the link.", "Add \u2192 Image, then Link \u2192 Web address, and the alt text in its settings. Use this one."] },
      { label: "Webflow", cells: ["Add an Embed element to your footer and paste the code.", "An Image inside a Link block, with the alt text in the image settings."] },
      { label: "WordPress", cells: ["Add a Custom HTML block, or a Custom HTML widget in the footer, and paste the code.", "An Image block: link it to your page on Moose and fill in the alt text."] },
    ],
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "Does the badge cost anything?", aHtml: "No. It\u2019s free, and adding it is up to you." },
      { q: "Where should it go?", aHtml: "In your footer, so it\u2019s on every page. Your memberships page, beside the Moose upgrade, works well too." },
      { q: "Can we change how it looks?", aHtml: "Make it bigger or smaller, and use navy or white to suit your site. Please don\u2019t recolour, stretch or redraw it." },
      { q: "Our studio isn\u2019t in a live partnership yet. Can we add it?", aHtml: "Not yet. The badge links to your studio\u2019s page on Moose, which goes up when your first partnership is live." },
    ],
  },
  // The quiet line under a studio page's facts.
  link: { lead: "Is this your studio?", link: "Add the Moose badge to your website." },
} as const;

// The code a studio pastes: a plain link and image, absolute URLs (it's read
// off-site), the badge's words as alt text.
export const badgeSnippet = (s: { name: string }, site: string) =>
  `<a href="${site}${studioPath(s.name)}" title="${s.name.replace(/&/g, "&amp;")} on Moose">
  <img src="${site}${BADGE.image("navy", "svg")}"
       alt="${BADGE.alt}" width="${BADGE.width}" height="${BADGE.height}">
</a>`;

// ── Moose in numbers ─────────────────────────────────────────────────────
// One citable answer to "how big is Moose?", updated monthly from Moose's
// records in the PostHog data warehouse (real members only; demo studios and
// leads excluded). To update: change COUNTS (with the answer pages), the
// dates here, and add the month to the top of `months.rows`. Past months are
// literals, so they stay as they were.
const NUMBERS_TODAY = COUNTS;

export const NUMBERS = {
  path: PATHS.numbers,
  title: "Moose in numbers: studios, partnerships and visits | Moose",
  description: `How big is Moose? As of 26 October 2026, ${NUMBERS_TODAY.studios} studios are on Moose, with ${NUMBERS_TODAY.partnerships} partnership live and ${NUMBERS_TODAY.members} members using it. Updated monthly.`,
  head: "Moose in numbers.",
  lede: `As of 26 October 2026, ${NUMBERS_TODAY.studios} studios across New South Wales, Victoria and Queensland are on Moose, with ${NUMBERS_TODAY.partnerships} partnership live. ${NUMBERS_TODAY.members} members have added Moose, and they made ${NUMBERS_TODAY.visits} visits to partner studios in ${NUMBERS_TODAY.month}.`,
  updated: { iso: "2026-10-27", label: "27 October 2026" },
  method: "Updated monthly from Moose\u2019s booking records, excluding staff and test accounts.",
  today: {
    head: "Today.",
    cells: [
      { label: "Studios on Moose", figure: String(NUMBERS_TODAY.studios), caption: "In NSW, Victoria and Queensland." },
      { label: "Live partnerships", figure: String(NUMBERS_TODAY.partnerships), caption: "S30 Surry Hills \u00d7 One Hot Yoga & Pilates Potts Point." },
      { label: "Members with Moose", figure: String(NUMBERS_TODAY.members), caption: "With an active upgrade or in their trial." },
      { label: `Partner visits in ${NUMBERS_TODAY.month}`, figure: String(NUMBERS_TODAY.visits), caption: "Classes attended at a partner studio." },
    ],
  },
  months: {
    head: "Month by month.",
    caption: "Moose studios, partnerships, members and partner visits, by month",
    columns: ["Studios", "Live partnerships", "Members with Moose", "Partner visits"],
    rows: [
      { label: "October 2026", cells: ["5", "1", "7", "13"] },
    ],
    note: "Members could first book a partner studio in October 2026.",
  },
  how: {
    head: "How we count.",
    items: [
      { q: "Studios on Moose", aHtml: "Studios that have joined Moose and are set up, not ones still talking to us. Moose\u2019s own demo studios are left out." },
      { q: "Live partnerships", aHtml: "Two studios whose members can book each other\u2019s classes today." },
      { q: "Members with Moose", aHtml: "Members with an active Moose upgrade or in their trial, at the end of the month. Staff and test accounts are left out." },
      { q: "Partner visits", aHtml: "Classes members attended at a partner studio, including free open-day classes. Cancelled bookings don\u2019t count." },
    ],
  },
  questions: {
    head: "Common questions.",
    items: [
      { q: "How big is Moose?", aHtml: `As of 26 October 2026, ${NUMBERS_TODAY.studios} studios are on Moose, with ${NUMBERS_TODAY.partnerships} partnership live and ${NUMBERS_TODAY.members} members using it. Moose opened to members in October 2026.` },
      { q: "How often is this page updated?", aHtml: "Monthly, from Moose\u2019s booking records. The date at the top says when." },
    ],
  },
} as const;

export const FAQ = {
  path: PATHS.faq,
  title: "Moose FAQ: questions from studios and members | Moose",
  description:
    "Straight answers about Moose: what it is, what it costs, how studios are paid, which booking systems it works with, and how members book partner studios.",
  head: "Questions, answered.",
  lede: "Straight answers about Moose, for studio owners and their members.",
  groups: [
    {
      head: "For studios.",
      items: [
        { q: "What is Moose?", aHtml: "Moose helps boutique fitness studios in Australia form reciprocal partnerships with complementary, non-competing studios nearby. Your members add a paid upgrade to their membership to book classes at your partners each month." },
        { q: "What does Moose cost my studio?", aHtml: "Nothing to join. Members pay Moose for the upgrade, and Moose pays your studio its share each month." },
        { q: "How does my studio earn from Moose?", aHtml: "Members pay Moose for the upgrade, and Moose pays your studio each month: a share of every upgrade your members buy, plus a share of a partners’ pool, split by the visits each studio hosts and weighted for each studio’s membership pricing." },
        { q: "Who sets the price of the upgrade?", aHtml: "Your studio does. You also choose which of your memberships can add Moose." },
        { q: "Do I choose my partners?", aHtml: "Yes. You pick the complementary, non-competing studios nearby that your members can visit, and each partnership works both ways." },
        { q: "Will my members leave for my partners?", aHtml: "Moose is built so they don’t. Members get a limited number of credits each month: enough for variety, while your studio stays their home." },
        { q: "Which booking systems does Moose work with?", aHtml: `${bookingSystems}.` },
        { q: "Can I use Moose alongside ClassPass?", aHtml: `Yes. They reach different people: ClassPass its subscribers, Moose your own members and your partners’. See <a href="${PATHS.classpass}">Moose or ClassPass?</a>` },
        { q: "Where is Moose available?", aHtml: `In Australia: New South Wales, Victoria and Queensland today. See <a href="${PATHS.numbers}">Moose in numbers</a>.` },
        { q: "How do I join?", aHtml: `Register your studio in the studio portal at <a href="${LINKS.studioPortal}">studio.trainmoose.com</a>. It’s free to join. The <a href="${PATHS.guide}">setup guide</a> walks through every step.` },
      ],
    },
    {
      head: "For members.",
      items: [
        { q: "How do I get Moose?", aHtml: "Through your home studio. If your studio offers Moose, add it in the Moose app as an upgrade to your membership. Moose isn’t sold on its own." },
        { q: "How many credits do I get?", aHtml: `Credits refresh every month. How many you get, and the price, depend on your studio. See <a href="${PATHS.credits}">how Moose credits work</a>.` },
        { q: "Where can I use my credits?", aHtml: "At your home studio’s partner studios: the ones it chose, listed in the Moose app." },
        { q: "Can I get Moose if my studio isn’t on it?", aHtml: "No. Moose comes through your home studio, so your studio needs to offer it." },
        { q: "Is Moose on Android?", aHtml: "Not yet. Moose is iPhone only for now." },
      ],
    },
  ],
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
        { l: "About Moose", h: PATHS.about },
        { l: "For studio members", h: "#members" },
        { l: "How credits work", h: PATHS.credits },
        { l: "Register your studio", h: LINKS.studioPortal, external: true },
      ],
    },
    {
      title: "Learn",
      items: [
        { l: "Moose vs ClassPass", h: CLASSPASS.path },
        { l: "Moose vs a second membership", h: SECOND_MEMBERSHIP.path },
        { l: "Reciprocal memberships", h: RECIPROCAL.path },
        { l: "Studios on Moose", h: STUDIOS.path },
        { l: "Pilates in-house vs partner", h: PATHS.pilates },
        { l: "Moose vs an informal swap", h: PATHS.swap },
        { l: "Set up a partnership", h: PATHS.guide },
        { l: "Moose in numbers", h: PATHS.numbers },
        { l: "FAQ", h: FAQ.path },
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
