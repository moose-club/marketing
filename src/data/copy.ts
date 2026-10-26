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
  // The third-person line: the company description in structured data.
  entity:
    "Moose is a network for boutique fitness studios in Australia. Each studio partners with complementary, non-competing studios nearby, and its members add a paid upgrade to book classes at those partners each month.",
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
    { name: "REVL", href: "https://revltraining.com.au", logo: "/partners/revl.svg", kind: "Functional strength and conditioning in small groups." },
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

const partnerCount = NETWORK.partners.length;
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
      { label: "Size of the network", cells: [`Small and local: ${partnerCount} studios across Australia today.`, "Large: over 73,000 partners in more than 30 countries (2025)."] },
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
  description: `The ${partnerCount} studios across Australia on Moose, from Pilates and yoga to strength and recovery, and the partnerships live today.`,
  head: "Studios on Moose.",
  lede: `${partnerCount} studios across Australia are on Moose, from Pilates and yoga to strength and recovery.`,
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
        { q: "What is Moose?", aHtml: "Moose is a network for boutique fitness studios in Australia. Your studio partners with complementary, non-competing studios nearby, and your members add a paid upgrade to book classes at those partners each month." },
        { q: "What does Moose cost my studio?", aHtml: "Nothing to join. Members pay Moose for the upgrade, and Moose pays your studio its share each month." },
        { q: "How does my studio earn from Moose?", aHtml: "Members pay Moose for the upgrade, and Moose pays your studio each month: a share of every upgrade your members buy, plus a share of a partners’ pool, split by the visits each studio hosts and weighted for each studio’s membership pricing." },
        { q: "Who sets the price of the upgrade?", aHtml: "Your studio does. You also choose which of your memberships can add Moose." },
        { q: "Do I choose my partners?", aHtml: "Yes. You pick the complementary, non-competing studios nearby that your members can visit, and each partnership works both ways." },
        { q: "Will my members leave for my partners?", aHtml: "Moose is built so they don’t. Members get a limited number of credits each month: enough for variety, while your studio stays their home." },
        { q: "Which booking systems does Moose work with?", aHtml: `${bookingSystems}.` },
        { q: "Can I use Moose alongside ClassPass?", aHtml: `Yes. They reach different people: ClassPass its subscribers, Moose your own members and your partners’. See <a href="${PATHS.classpass}">Moose or ClassPass?</a>` },
        { q: "Where is Moose available?", aHtml: "In Australia." },
        { q: "How do I join?", aHtml: `Register your studio in the studio portal at <a href="${LINKS.studioPortal}">studio.trainmoose.com</a>. It’s free to join.` },
      ],
    },
    {
      head: "For members.",
      items: [
        { q: "How do I get Moose?", aHtml: "Through your home studio. If your studio offers Moose, add it in the Moose app as an upgrade to your membership. Moose isn’t sold on its own." },
        { q: "How many credits do I get?", aHtml: "Credits refresh every month. How many you get, and the price, depend on your studio." },
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
        { l: "For studio members", h: "#members" },
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
