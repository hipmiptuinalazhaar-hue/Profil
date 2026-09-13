# Phase 1 — Quality Gates & Acceptance Criteria

This project does not use “merged = finished” as a completion standard.

## Gate A — Visual Quality

A production UI fails if it looks like:
- a generic student-organization template
- a SaaS landing page with renamed content
- an AI-generated card collage
- a government portal with decorative gold

Pass conditions:
- clear editorial hierarchy
- intentional typography
- purposeful whitespace
- organization-specific storytelling
- real photography used as evidence
- limited and coherent accent use
- no decorative component without information value

## Gate B — Content Integrity

Pass conditions:
- no invented metrics
- no fake partners
- no fabricated businesses
- no fake upcoming events
- no lorem ipsum
- no unsupported superlatives
- network/affiliation is not mislabeled as formal partnership
- Indonesian copy is canonical and reviewed
- English translation preserves meaning, tone, names, and institutional terms

## Gate C — Asset Quality

Pass conditions:
- required leadership photo coverage is complete before leadership release
- photos are sharp at actual display size
- no aggressive compression artifacts
- no face/body-generative edits
- correct person-to-role mapping
- meaningful alt text
- broken asset references = zero

## Gate D — Responsive UX

Mandatory review sizes:
- 360x800
- 390x844
- 430x932
- 768x1024
- 1024x768
- 1280x800
- 1440x900
- 1920x1080

Pass conditions:
- horizontal overflow = zero
- clipped essential content = zero
- tap targets >= 44px where interactive
- text remains readable without zoom
- faces remain recognizable
- mobile content order remains logical
- desktop asymmetry does not become mobile chaos

## Gate E — Accessibility

Target: WCAG 2.2 AA.

Pass conditions:
- semantic landmarks
- one logical H1 per primary page
- visible keyboard focus
- complete keyboard navigation
- no essential hover-only content
- sufficient color contrast
- reduced-motion support
- form labels/errors when forms are introduced
- meaningful link/button names
- image alt strategy applied

Lighthouse accessibility target: >= 95.

## Gate F — Performance

Targets:
- Lighthouse Performance >= 90
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

Rules:
- Server Components by default
- client JS only for actual interaction
- no global animation library without need
- images sized and compressed appropriately
- no oversized hero source sent to tiny mobile displays without responsive delivery
- lazy-load non-critical below-fold media
- avoid layout-changing late font/image behavior

## Gate G — SEO / Institutional Discoverability

Pass conditions for public implementation phases:
- canonical URL correct in production
- production metadata never points to localhost
- title/description specific
- Open Graph/Twitter metadata
- sitemap contains only real public routes
- robots behavior intentional
- Organization/Article/Event/Breadcrumb/Person schema introduced where truthful and relevant
- no duplicate placeholder pages indexed

SEO target: Lighthouse >= 95.

## Gate H — Security / Reliability

Pass conditions:
- no secrets in client/repository
- strict TypeScript
- secure headers maintained
- future writes validated server-side
- authorization added before privileged data mutation
- no known hydration/runtime errors
- console error count on production = zero for normal journeys

Best Practices target: >= 95.

## Gate I — Deployment

Policy:
- no GitHub Actions
- Cloudflare owns build/deploy

Pass sequence for production UI phases:
1. branch changes reviewed
2. merge to `main`
3. Cloudflare runs `npm run build:cloudflare`
4. typecheck passes
5. lint passes
6. vinext production build passes
7. Cloudflare deploys via Wrangler
8. live production URL verified
9. responsive smoke test performed
10. regression issues fixed before phase closure

## Phase 1-specific acceptance criteria

Phase 1 is a blueprint phase, so it is complete when:
- V2 roadmap is locked
- benchmark matrix exists
- creative thesis is locked
- design system defines color/type/grid/geometry/card policy
- homepage narrative sequence is explicit
- desktop/tablet/mobile wireframe behavior is documented
- hero composition is documented
- all nine leadership photo requirements are documented
- documentary photo groups are mapped
- motion timings/limits/reduced-motion behavior are documented
- anti-AI-slop rules are explicit
- future production gates are measurable
- no rejected Phase 1 homepage code has been reintroduced

## Hard-stop rule

If a later implementation visibly violates the blueprint, do not “polish around it.” Stop, identify the violated gate, fix the system-level cause, then continue.

This exists specifically to prevent a technically valid but visually unacceptable build from being labeled complete.