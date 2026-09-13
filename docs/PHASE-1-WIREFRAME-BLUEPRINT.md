# Phase 1 — Wireframe Blueprint

This document locks information hierarchy and responsive layout intent before Phase 3 production implementation.

No section should be implemented as a generic card grid unless the content model genuinely requires cards.

---

# Desktop blueprint (1440px reference)

## 0. Global navigation

Height target: 84–104px depending on scroll state.

12-column grid.

Left:
- HIPMI PT logo
- organization name lockup

Center:
- HIPMI PT
- Programs
- Ecosystem
- Impact
- Events
- Insights
- Media

Right:
- ID / EN
- Join HIPMI PT

Behavior:
- initial state integrated into hero where contrast allows
- becomes stable dark/navy institutional bar after scroll threshold
- no giant mega-menu until information volume justifies it

---

## 1. Hero — Institutional Momentum

Min height: 88–100svh.

Grid:
- text: columns 1–7
- dominant documentary media: columns 8–12, allowed to bleed toward viewport edge
- optional support media may overlap 1–2 columns but must never reduce face legibility

Content order:
1. `Official Digital Headquarters`
2. `HIPMI PT UIN Al Azhaar Lubuklinggau`
3. H1: `Membangun Generasi Pengusaha Muda Kampus.`
4. supporting copy, max ~3 lines
5. primary CTA `Explore HIPMI PT`
6. secondary CTA `Join Our Network`
7. documentary metadata: event / location / year

Image rule:
- one dominant real photograph
- no automated slider
- no blurred wallpaper version of the same photo
- no tiny portrait collage

Transition out:
- image or text can clip/reveal into next section with restrained scroll-linked motion

---

## 2. Institutional Statement

Light/paper canvas.

Layout:
- small index label in columns 1–2
- large statement in columns 3–10
- supporting paragraph in columns 9–12 or under statement based on line length

Message direction:
`Not another campus organization.`

Indonesian explanation directly below:
HIPMI PT is a digital and real-world ecosystem for learning, mentorship, networking, business development, and collaboration.

No card container.

---

## 3. Impact Snapshot

Dark or paper depending on hero transition.

Four verified items arranged as an editorial data field, not boxed cards:
- 6 Bidang Organisasi
- 9 Program Unggulan
- 2026/2027
- Linggau Raya

Desktop treatment:
- oversized values
- thin vertical/horizontal rules
- asymmetrical label alignment
- optional subtle count reveal only for real numeric values

---

## 4. About & Vision

Split editorial composition.

Left ~5 columns:
- section label
- concise About narrative
- mission intro

Right ~7 columns:
- official vision as large serif quotation/manfiesto
- optional documentary image/detail frame

Missions appear as a numbered sequence, not cards.

---

## 5. Featured Programs — Program Index

Dark institutional canvas.

Header:
- section label
- headline
- short explanation

Program index:
- nine full-width rows
- each row contains number, program name, concise description, directional affordance

Desktop interaction:
- hover/focus may reveal a secondary media/context panel
- rows stay keyboard accessible
- no hidden essential information on hover only

Program order:
1. Business Academy
2. Pitching & Access to Capital
3. Networking & Business Expo
4. 100 Pengusaha Muda
5. LinggauPreneur Summit
6. Business Visit
7. Entrepreneur Talk
8. Business Incubator
9. Investment Club

---

## 6. Entrepreneur Ecosystem — Signature Map

Paper canvas.

Top:
- explanatory headline
- one paragraph defining the system

Main visual:
`Student → Member → Learning → Business → Market → Mentorship → Network → Capital → Growth`

HIPMI PT acts as the connector/orchestrator.

Desktop may use a horizontally articulated system with selected nodes emphasized through focus/hover.

Constraints:
- no spaghetti diagram
- no random orbit animation
- arrows/lines must communicate actual relationships
- must degrade to a clear linear sequence on mobile

---

## 7. Business Ecosystem

Editorial split.

Left:
- headline: entrepreneurship must lead to real businesses
- explanation of institutional hub role

Right / following rows:
- Business Directory
- Pasar UMKM
- Business Academy
- Mentorship
- Partnership
- Investment/finance literacy

If verified business data is unavailable:
- use a premium `Directory being curated` state
- show no fake brand names or counts

---

## 8. Documentary Stories

Dark canvas or neutral transition.

Three primary story chapters:

### Story 01 — Pelantikan Akbar & UMKM Bazaar
Large landscape image + title + context + activity meaning.

### Story 02 — Mentorship / BPC HIPMI Lubuklinggau
Image sequence or one strong image + concise narrative about learning from senior entrepreneurs.

### Story 03 — Strategic Government Collaboration
Documented meeting with Wali Kota / public-sector context + factual explanation of local-entrepreneur synergy.

Layout:
- stories alternate text/media orientation on desktop
- no auto carousel
- captions and metadata are always visible or discoverable

---

## 9. Leadership

Paper canvas.

### Tier 1 — Ketua Umum
Large editorial portrait feature, approximately 5 columns image + 7 columns narrative/name/vision.

### Tier 2 — Executive Board
Secretary and Treasurer in a deliberate two-up composition with equal institutional weight.

### Tier 3 — Six Heads of Fields
3x2 desktop matrix or staggered editorial portrait grid.

Every required portrait must be sharp and correctly mapped.

No generic hover-only name reveal.

Compartment/team names live in the deeper organization experience in Phase 6 and remain name + role only.

---

## 10. Impact

Institutional authority section.

If only baseline verified data is available:
- show verified structural/activity signals
- explain future impact measurement architecture
- avoid fake counters

Future dashboard slots may include:
- members
- active businesses
- participants
- mentoring hours
- UMKM supported
- collaborations
- funding/access opportunities

Only activate when source data exists.

---

## 11. Partnership

Strong two-column corporate layout.

Left:
- `Build with us.`
- partnership thesis

Right:
- government
- companies
- startups
- investors
- universities
- communities
- media
- entrepreneur network

CTA:
`Collaborate With HIPMI PT`

Affiliation/network is visually separated from formal partnership.

---

## 12. Gallery

Editorial photo wall with varied ratios.

Possible desktop arrangement:
- one 2-column-span hero image
- two vertical portraits/details
- one wide documentary strip
- captions and metadata below or over a controlled solid panel

No masonry chaos. Alignment must remain intentional.

---

## 13. Join HIPMI PT

Dark closing section.

Large centered/offset manifesto:
`Build business.`
`Grow network.`
`Create impact.`

CTA 1: `Join HIPMI PT`
CTA 2: `Collaborate With Us`

Supporting line mentions student entrepreneurship, network, learning, and regional impact.

---

## 14. Institutional Footer

Columns:
1. identity + short descriptor
2. organization links
3. programs/ecosystem
4. media/insights
5. contact

Required contact data:
- official email
- Instagram
- secretariat address
- period 2026/2027

No fake phone/WhatsApp number.

---

# Tablet blueprint (768–1199px)

Grid: 6 columns.

Rules:
- hero becomes 3/3 or 4/2 split depending on image legibility
- program index remains full-width rows
- ecosystem wraps into 2–3 logical rows, never tiny nodes
- leadership Ketua remains split; BPH and Kabid grid becomes 2 columns
- documentary stories use 1/2 image + 1/2 text or stacked flow
- gallery uses 2-column editorial arrangement

Navigation may transition to compact menu before layout becomes crowded.

---

# Mobile blueprint (360–767px)

Grid: 4 columns.
Gutters: 20–24px.

## Navigation
- logo/identity on left
- menu trigger on right
- full-screen menu panel
- ID/EN visible, not buried
- Join CTA remains obvious

## Hero
Order:
1. institutional label
2. H1
3. supporting copy
4. primary/secondary CTA
5. dominant image
6. image metadata

No split-screen, no collage smaller than useful recognition size.

## Impact
One or two columns depending on 360–480px width. Typographic, not cardy.

## Programs
Vertical numbered rows. Description visible without hover.

## Ecosystem
Linear journey with connectors. Optional tap expansion for details, but the core sequence is readable without JS.

## Documentary stories
Image first, then title/context. Large image widths. Avoid multiple images side-by-side at 360px.

## Leadership
- Ketua: full-width portrait + editorial text
- Secretary/Treasurer: stacked or two-up only if portrait width stays adequate
- Kabid: 1-column at 360px, 2-column only above comfortable width

## Gallery
Single dominant image stream with occasional two-up detail pairs above ~480px.

## Join
Large typography but avoid line breaks that create one-word orphan fragments.

---

# Responsive acceptance checks

Every later implementation must be reviewed at minimum at:
- 360x800
- 390x844
- 430x932
- 768x1024
- 1024x768
- 1280x800
- 1440x900
- 1920x1080

Check:
- no horizontal overflow
- no clipped text
- no hidden CTA
- no unreadably small faces
- no hover-only essential content
- no broken image crop
- no section order confusion
- tap targets >= 44px where interactive

This blueprint is the layout source of truth until a later approved design revision replaces it.