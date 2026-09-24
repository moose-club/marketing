# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: boutique fitness studio owners and operators.** They run a single-modality
venue — pilates, HIIT, cycle, yoga, strength, barre, martial arts — and are losing
members to competitors offering more variety. Building new modalities in-house is
expensive and slow. They arrive on `/` cold, having usually not heard of Moose, and the
site's job is to move them to list their studio at `studio.trainmoose.com`.

**Second and now addressed directly: members of a studio, pre-purchase.** Since 24 Sep
2026 `/` carries two floors behind an audience switch — **"I run a studio"** and
**"I'm a member"**. The member floor is written to a member in the second person: what
the upgrade gets them, what it costs, and how the app works once their studio sets them
up. Its job is a member who understands the offer well enough to take it at their studio,
or to put it in front of a studio that has not heard of Moose.

**Third: members of a partner studio, post-purchase.** They reach `/claim` from a link
after their studio has upgraded them, on a phone or via a desktop QR hop. They are not
being sold to — they are activating something already bought. The liability waiver and
member privacy/terms pages serve the same audience.

All three audiences are durable. The operator remains the commercial argument — the
studio floor is unchanged and is still where the business case is made. What changed is
that members are no longer only described in the third person: they now have a floor of
their own, reached by a switch rather than by a separate URL.

**Members cannot self-serve (confirmed by Max, 24 Sep 2026).** There is no path by which
a member signs up to Moose on their own, picks a home studio and starts booking. Access
arrives only through a studio that has joined Moose and sold them the upgrade. The member
floor must never imply otherwise, and must not describe choosing a home studio as
something the member initiates.

## Product Purpose

Moose is a B2B network that lets non-competing boutique studios form reciprocal
partnerships. A member of a partner studio pays a small capped upgrade for the right to
attend a limited number of sessions per month at complementary venues nearby.

The studio gets a new premium membership tier and a new revenue line without building
new modalities. The member gets variety without leaving their home studio. Moose keeps
the flow balanced across partners so no venue is disproportionately drawn on.

Success for the site is an operator who had not heard of Moose listing their studio at
`studio.trainmoose.com`. The member floor is measured against the same outcome one step
removed: a member who understands the upgrade well enough to ask for it, or to put Moose
in front of a studio that has not heard of it. It is not a second conversion funnel —
members cannot buy anything here or in the app.

## Positioning

The mechanism a neighbouring product could not truthfully copy is **rationed, reciprocal
crossover between non-competing venues.** Three constraints do the work, and all three
are deliberate:

- **Crossover is capped**, not unlimited. Enough variety to enrich a membership, few
  enough visits that the member stays anchored to their home studio.
- **Partners are complementary and non-competing**, and the operator chooses them. This
  is not a marketplace that puts a studio next to its direct competitor.
- **Reciprocity is monitored.** Moose's backend tracks crossover both ways so no partner
  carries the network.

This is the opposite of the aggregator model (ClassPass and similar), which pools supply
and commoditises the venue. Moose's argument to an operator is that their members stay
theirs and their studio stays specialised.

## Operating Context

- Operators evaluate this on a laptop during or between classes; members hit `/claim` on
  a phone, immediately after purchase.
- The studio-facing product lives elsewhere: the portal at `studio.trainmoose.com`,
  linked from the nav as "Studio login". This site never contains the portal.
- The member-facing product is the iOS app. `/claim` exists to hand a member off to it.
  **The app is iPhone only**, so the member floor's one action strands Android members —
  an open product question, not a design one.
- Enquiry currently arrives by email, not through a CRM.
- The audience switch is a client-side state on `/`, not a route. Both floors ship in one
  document; nothing navigates.

## Capabilities and Constraints

- Static Astro 6 site, `output: 'static'`, deployed to Cloudflare Workers static assets.
  Zero JS by default; the few interactive bits are small vanilla scripts scoped to the
  section that owns them. No React islands exist despite the integration being installed.
- All on-page copy lives in `src/data/copy.ts`, never inline in components.
- Design values come from **moose-design** (`RULES.md`, `tokens/`). See the managed block
  in `CLAUDE.md`. This repo does not decide colour, radius, spacing or shadow.
- Routes: `/` (both marketing floors), `/claim` (member activation), `/404`, and six
  legal pages. `/studio-terms`, `/studio-conduct` and `/claim` are excluded from the
  sitemap — they are reached by link, not search. The member floor adds no route, so it
  adds no sitemap entry and shares `/`'s title, description and canonical.
- **Undecided:** `MSNetwork` and `MSStory` are fully built but commented out in
  `index.astro`. The live page is seven sections; `SPEC.md` still describes nine. Whether
  they return is an open decision — do not delete them, and do not assume they ship.
- **Undecided:** both enquiry forms post to `mailto:` addresses. A real form destination
  has not been chosen. The 24 Sep design round removes both forms entirely, which would
  close this item rather than answer it.
- **Decided 24 Sep 2026, not yet built:** the member content leaves the studio floor.
  `MSMembers` — the "Finally, some (affordable) variety…" station with the commercials
  and the app mock — is removed from the studio argument, because the member floor now
  carries all of it in the second person. Do not render the same material twice.

## Brand Commitments

- Name: **Moose**. Legal entity Blubby Pty Ltd, ABN 11 690 645 106, trading as Moose Club.
- Contact: `partnerships@trainmoose.com`, `memberships@trainmoose.com`,
  `support@trainmoose.com`, Instagram `@trainmoose`. **Not yet confirmed to exist.**
- Voice is plain, direct and Australian — "hard yakka", "This is the magic of
  collaboration." It argues rather than boasts, and it addresses the operator as a peer
  running a business, never as a lead.
- The wordmark has three official lockups (cream / navy / pink) and must not be
  recoloured outside them, or combined with the loop mark in one lockup.

## Evidence on Hand

Real: nine marketing photographs in `public/photos/`, the wordmark and icon sets in
`public/brand/`, and the copy in `src/data/copy.ts`.

**Not confirmed — must not be presented as fact, and must not be elaborated on:**

- **Partner network counts.** `NETWORK.ledeLines` claims "120+ partner venues" and "30+
  unique brands". Unverified.
- **The featured case study.** VRTUS × Body by Berner, Bondi, with 128 / 143 crossovers
  and 22% / 31% upgraded. Unverified, both the partnership and the metrics.
- **Partner logos.** `MSNetwork.astro` renders dashed `[Logo]` placeholders. No real
  partner has approved a logo.
- **Contact inboxes and the Instagram handle**, per Brand Commitments.
- **The App Store listing.** `claim.astro` carries a placeholder id
  (`apps.apple.com/app/moose/id000000000`). Every "get the app" action points at a
  listing that does not exist yet.
- **The member app's home-studio screen.** `public/photos/` holds one member app
  capture (`member-app-browse.webp`, the Browse floor). The member floor needs a
  home-studio capture as well.

There are no testimonials, no press, no customer names and no benchmarks. Do not invent
any. Where a surface needs proof and none exists, the honest move is to omit the claim,
not to fill the slot.

## Product Principles

1. **One floor, one reader.** Each floor addresses exactly one audience and never hedges
   between them. The studio floor is written to someone running a studio; the member
   floor is written to a member in the second person. A sentence that would sit equally
   well on both is doing its job on neither.
2. **The limit is the product.** Capped crossover and non-competing partners are what
   make this safe for a studio to join. Never present Moose as unlimited access.
3. **Their members stay theirs.** Moose is infrastructure between studios, not a
   consumer brand competing for the member relationship. The member floor explains the
   offer; it never sells around the studio, never lets a member transact, and never
   presents venues as a catalogue to browse. **The moment it reads as a search result,
   it has become the aggregator and contradicted the floor next to it.**
4. **The studio is the door.** A member's access comes through their own studio, so the
   member floor's honest endings are two: take the upgrade at your studio, or show your
   studio the other floor. It must not invent a third.
5. **Claim nothing we cannot show.** The network counts and the case study are
   unverified; the site must survive their removal.
6. **`/` persuades, `/claim` gets out of the way.** The activation page is not a second
   marketing surface — it is the shortest path to the app.

## Accessibility & Inclusion

WCAG 2.2 AA, with `RULES.md` 16 governing measurement: text clears 4.5:1 and graphics
3:1, measured rather than assumed. Known token-level gaps are accepted upstream
(status text on its soft fill, `danger` as text on cream, pink as small text on navy) —
do not add new uses of those pairs. Hit targets are at least 44px (RULES 17).

Semantic heading order, one `<h1>` per page. Photographs render as
`<div role="img" aria-label="…">`. `prefers-reduced-motion` halts the ticker and
transitions. A skip link and visible focus rings are present throughout.
