# Product Roadmap — V2

This roadmap replaces the previous Phase 1–9 sequence after the rejected first homepage implementation. Phase 0 remains valid; the former Phase 1 implementation was reverted completely.

## Global completion rule
A phase is complete only when its own exit criteria are met. A merge alone is not completion.

Three gates apply throughout the project:

1. **Visual Gate** — no generic template/AI-slop output, weak hierarchy, or decorative noise.
2. **Asset Gate** — required photography, identity assets, names, roles, and verified copy must be complete before the related public experience is called finished.
3. **Production Gate** — production UI phases require merge, Cloudflare build/deploy, live-page verification, responsive QA, and regression checks.

GitHub Actions are intentionally excluded. GitHub stores/reviews source; Cloudflare builds and deploys.

---

## Phase 0 — Foundation & Architecture
**Status: complete and audited.**

Focus:
- Next.js / React / TypeScript / Tailwind foundation
- App Router and Server Component defaults
- typed organization data
- route and information architecture
- SEO/security/performance baselines
- Cloudflare Workers deployment via vinext + Wrangler
- quality validation embedded in the Cloudflare build path
- no GitHub Actions

Exit criteria:
- buildable technical skeleton
- strict TypeScript
- central tokens and architecture docs
- verified institutional data source
- secure headers and SEO baseline
- Cloudflare-compatible production configuration
- no `.github/workflows`

---

## Phase 1 — Creative Direction & Design Blueprint
**Status: complete.**

Focus:
- international benchmark analysis: Endeavor, YPO, JCI, WEF, TED
- original HIPMI PT visual language
- typography, color, spacing, grid, geometry
- homepage content hierarchy
- desktop/tablet/mobile wireframe blueprint
- hero art direction
- leadership composition
- documentary photography rules
- motion and interaction language
- anti-AI-slop constraints
- visual/asset/production quality gates

Exit criteria:
- benchmark roles are explicit and non-copying
- design system is detailed enough to implement without improvising generic patterns
- all homepage sections have layout intent and responsive behavior
- photography and leadership coverage rules are locked
- motion system has measurable limits and reduced-motion behavior
- Phase 1 contains no premature production homepage implementation

---

## Phase 2 — Asset & Content Mastering
**Status: not started.**

Focus:
- inventory every logo and documentary image
- preserve full-resolution masters
- master BPH and all six Kabid portraits
- approved background removal where needed
- complete verified copy, captions, dates, locations, titles, alt text, metadata
- map every asset to its intended section

Exit criteria:
- no missing leadership photos
- no blurry/upscaled production assets
- originals preserved
- all public text and metadata verified

---

## Phase 3 — Global Shell & Flagship Hero
**Status: not started.**

Focus:
- premium global navigation
- ID/EN locale experience
- mobile full-screen navigation
- flagship hero
- core buttons, links, containers, section rhythm
- first production motion implementation

Exit criteria:
- first viewport alone communicates institutional quality
- 360px through wide desktop QA passes
- navigation is keyboard and screen-reader usable
- production deploy verified live

---

## Phase 4 — Institutional Storytelling
**Status: not started.**

Focus:
- About
- Vision and Mission
- organizational positioning
- history/timeline
- verified impact snapshot
- editorial transitions

Exit criteria:
- a first-time visitor can understand who HIPMI PT is, why it exists, and why it matters without relying on prior context

---

## Phase 5 — Programs & Entrepreneur Ecosystem
**Status: not started.**

Focus:
- nine flagship programs
- non-card-grid program index
- entrepreneur journey
- Business Academy
- mentorship
- network
- Pasar UMKM relationship
- Investment Club
- partnership/capital/growth connections

Exit criteria:
- programs read as one ecosystem rather than disconnected events
- desktop and mobile interaction remain clear without excessive client JavaScript

---

## Phase 6 — Leadership & Organization Experience
**Status: not started.**

Focus:
- Ketua Umum feature
- Sekretaris
- Bendahara
- six Heads of Fields
- six organizational fields
- compartments as name + role
- hierarchy, responsibilities, and organizational credibility

Exit criteria:
- all nine required leadership portraits are present, sharp, correctly mapped, and consistent
- no compartment portrait unless explicitly approved
- no missing names/roles

---

## Phase 7 — Business, Impact & Public Content
**Status: not started.**

Focus:
- Business Directory
- member-business profile architecture
- Pasar UMKM integration
- Impact Dashboard
- Events
- News
- Insights
- Media
- Gallery and documentary stories

Exit criteria:
- no fake businesses/events/metrics
- truthful premium empty states exist wherever verified data is not yet available
- major public routes are no longer dummy pages

---

## Phase 8 — Membership, Partnership & Conversion
**Status: not started.**

Focus:
- Join HIPMI PT journey
- partnership pathways
- contact
- registrations/forms architecture
- search
- CTA system
- CMS/data readiness for conversion flows

Exit criteria:
- student, partner, government, business, media, and public audiences each have a clear next action
- forms are validated and secured server-side when introduced

---

## Phase 9 — Production Excellence & Launch
**Status: not started.**

Focus:
- full responsive regression
- Cloudflare production deployment
- accessibility audit against WCAG 2.2 AA
- Lighthouse and Core Web Vitals optimization
- SEO/schema finalization
- security hardening
- broken-link/image/CTA audit
- localization completeness
- console/hydration/runtime audit
- final launch checklist and monitoring

Exit criteria:
- no known broken image, dead CTA, horizontal overflow, hydration error, console error, incomplete translation, or critical accessibility failure
- Lighthouse targets achieved or any unavoidable exception documented with evidence
- production URL verified after final deployment
