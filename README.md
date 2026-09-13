# HIPMI PT UIN Al Azhaar — Digital Headquarters

Official digital headquarters and entrepreneur ecosystem for **HIPMI PT UIN Al Azhaar Lubuklinggau**.

## Product direction

This is not a static student-organization profile. It is institutional digital infrastructure for organization identity, programs, member businesses, impact, events, publication, membership, and strategic collaboration.

North star: **every page must build trust, create value, demonstrate impact, or enable action.**

## Current status

### Phase 0 — Foundation & Architecture
**Complete and audited.**

The repository contains the production technical foundation: Next.js, TypeScript strict mode, Tailwind, App Router, typed organization data, route architecture, SEO/security/performance baselines, and Cloudflare Workers deployment through vinext/Wrangler.

### Phase 1 — Creative Direction & Design Blueprint
**Complete.**

The new visual blueprint is intentionally completed before production homepage implementation. It locks the international benchmark strategy, editorial art direction, typography/grid system, homepage information hierarchy, responsive wireframes, photography rules, motion language, anti-AI-slop rules, and visual quality gates.

Production homepage implementation starts in Phase 3 only after Phase 2 assets are mastered.

## Stack

- Next.js 16.3.3
- React 19.3
- TypeScript strict mode
- Tailwind CSS 4.3
- App Router
- Server Components by default
- PostgreSQL-ready architecture
- Cloudflare Workers via vinext + Wrangler

## Deployment policy

GitHub is used for source control and review only. **GitHub Actions are intentionally not used.**

Cloudflare owns build and deployment:

```bash
npm run build:cloudflare
npx wrangler deploy
```

The Cloudflare build command performs typecheck + lint before the vinext production build.

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

See `/docs`, especially:

- `ROADMAP.md`
- `PHASE-0-FOUNDATION.md`
- `PHASE-1-CREATIVE-DIRECTION.md`
- `PHASE-1-BENCHMARK-MATRIX.md`
- `PHASE-1-WIREFRAME-BLUEPRINT.md`
- `PHASE-1-MOTION-INTERACTION.md`
- `PHASE-1-PHOTOGRAPHY-ASSET-SPEC.md`
- `PHASE-1-QUALITY-GATES.md`

## Integrity rule

No fake statistics, fake partners, fabricated businesses, dead CTAs, blurred source imagery, AI-generated documentary photography, or decorative features presented as functionality.