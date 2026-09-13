# HIPMI PT UIN Al Azhaar — Digital Headquarters

Official digital headquarters and entrepreneur ecosystem for **HIPMI PT UIN Al Azhaar Lubuklinggau**.

## Product direction

This is not a static student-organization profile. It is institutional digital infrastructure for organization identity, programs, leadership, member-business development, impact evidence, events, publication, membership, and strategic collaboration.

North star: **every page must build trust, create value, demonstrate impact, or enable action.**

## Current status

### Phase 0 — Foundation & Architecture
**Complete.** Production technical foundation, strict TypeScript, App Router, SEO/security/performance baselines, and Cloudflare Workers deployment path.

### Phase 1 — Creative Direction & Design Blueprint
**Complete.** Editorial institutional visual system, responsive logic, photography rules, motion language, international benchmark strategy, and anti-AI-slop quality gates.

### Phase 2 — Asset & Content Mastering
**Complete as an asset workflow.** Canonical brand/documentation structure and manual `public/photos` workflow are established. Photography can be added later without blocking page architecture.

### Phase 3 — Global Shell & Flagship Hero
**Complete.** Global header, cinematic mobile navigation, flagship hero, factual snapshot, bilingual shell, and premium institutional footer.

### Phase 4 — Institutional Storytelling
**Complete.** Homepage institutional narrative, vision, missions, pillars, network ledger, values, and dedicated `/about` profile.

### Phase 5 — Programs & Entrepreneur Ecosystem
**Complete.** Nine flagship programs, program portfolio, detail routes, entrepreneur journey, and evidence-safe public states.

### Phase 6 — Leadership & Organization
**Complete.** BPH, six Heads of Fields, complete division/compartment structure, official portrait slots, and `/leadership`.

### Phase 7 — Business, Impact & Public Content
**Complete.** `/business`, `/impact`, `/events`, `/insights`, `/media`, public evidence standards, and repository-backed documentation.

### Phase 8 — Membership, Partnership & Conversion
**Complete.** `/join`, `/partnerships`, membership journey, collaboration tracks, privacy-safe email handoffs, and homepage conversion architecture.

### Phase 9 — Production Excellence & Launch
**Implemented.** Complete public navigation/sitemap, JSON-LD, web app manifest, security headers, responsive launch overrides, and a custom platform-integrity gate that runs before TypeScript and ESLint during Cloudflare builds.

## Stack

- Next.js 16.3.3
- React 19.3
- TypeScript strict mode
- Tailwind CSS 4.3
- App Router
- Server Components by default
- PostgreSQL-ready architecture
- Cloudflare Workers via vinext + Wrangler

## Public route map

- `/` — Digital Headquarters
- `/about` — institutional profile
- `/programs` + nine program detail routes
- `/leadership` — BPH and six divisions
- `/business` — business ecosystem and directory architecture
- `/impact` — baseline and evidence framework
- `/events` — public calendar architecture
- `/insights` — practical entrepreneurship playbooks
- `/media` — official documentation
- `/join` — membership journey
- `/partnerships` — strategic collaboration

## Photo workflow

Official photography is intentionally separated from source-code implementation.

Upload approved files to:

`public/photos/`

Use the exact canonical filenames in `public/photos/README.md` and `src/data/photo-manifest.ts`. Missing images render truthful placeholders rather than fabricated content.

## Deployment policy

GitHub is source/version control and review. **GitHub Actions are intentionally not used.**

Cloudflare owns build, deploy, hosting, and runtime:

```bash
npm run build:cloudflare
npx wrangler deploy
```

The Cloudflare build command performs:

1. asset materialization
2. platform-integrity validation
3. TypeScript typecheck
4. ESLint
5. vinext production build

Production endpoint:

`https://profil.hipmiptuinalazhaar.workers.dev`

## Local development

```bash
npm install
npm run dev
```

Validation:

```bash
npm run validate
npm run build
npm run build:cloudflare
```

## Architecture docs

See `/docs`, including the phase documents from Phase 0 through Phase 9.

## Integrity rule

No fake statistics, fake partners, fabricated businesses, dead CTAs, blurred source imagery, AI-generated documentary photography, invented event dates, or decorative features presented as functionality.
