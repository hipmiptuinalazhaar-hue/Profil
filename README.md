# HIPMI PT UIN Al Azhaar — Digital Headquarters

Official digital headquarters and entrepreneur ecosystem for **HIPMI PT UIN Al Azhaar Lubuklinggau**.

**Live:** https://profil.hipmiptuinalazhaar.workers.dev

## Product direction

This is not a static student-organization profile. It is being designed as institutional digital infrastructure for organization identity, programs, member businesses, impact, events, publication, membership, and strategic collaboration.

## Current status

**Phase 1 — Premium Homepage & Global Shell complete.**

The public homepage now provides the institutional visual identity and primary conversion experience: real documentation, bilingual ID/EN content, flagship programs, entrepreneur ecosystem, factual impact baseline, partnership positioning, leadership, gallery, membership CTA, responsive navigation, SEO metadata, accessibility baseline, and production-optimized media.

Phase 0 architecture remains the foundation for subsequent CMS, business directory, events, impact data, publications, and membership systems.

## Stack

- Next.js 16.3.3
- React 19.3
- TypeScript strict mode
- Tailwind CSS 4.3
- App Router
- Server Components by default
- PostgreSQL-ready architecture
- Cloudflare Workers via vinext

## Local development

```bash
npm install
npm run dev
```

Validation:

```bash
npm run typecheck
npm run lint
npm run build:cloudflare
```

Production build and deployment are handled by Cloudflare Workers Builds. GitHub Actions are intentionally not used for this repository.

## Architecture docs

See `/docs` for the product, design, SEO, security, performance, and roadmap decisions governing implementation.

## Integrity rule

Every page must build trust, create value, demonstrate impact, or enable action. No fake statistics, fake partners, dead CTAs, or decorative features presented as functionality.
