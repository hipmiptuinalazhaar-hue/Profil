# Phase 0 — Foundation & Architecture

Status: **complete and audited**

## North star
Every page must either **build trust, create value, demonstrate impact, or enable action**.

## Decisions locked in Phase 0

1. Product positioning: official digital headquarters, not a static student-organization profile.
2. Visual direction: premium institutional + entrepreneurial + editorial, with restrained experimentation.
3. Technology baseline: Next.js 16.3.3, React 19.3, TypeScript strict mode, Tailwind CSS 4.3, App Router.
4. Server/client rule: Server Components by default; client JavaScript only for real interaction needs.
5. Content integrity: no invented metrics, fake partners, dead CTAs, placeholder claims, or fabricated businesses presented as fact.
6. Accessibility baseline: semantic HTML, keyboard focus, skip link, reduced-motion support, WCAG 2.2 AA target.
7. Security baseline: secure response headers, no secrets in the client, server validation when forms/data arrive.
8. Performance baseline: server-first rendering, minimal client JavaScript, modern images, strict motion budget.
9. Localization architecture: Indonesian is canonical; English is a reviewed translation layer.
10. Data architecture: PostgreSQL-ready content model, with no database dependency until a real dynamic feature requires it.
11. Deployment architecture: Cloudflare Workers through vinext + Wrangler.
12. Source/deploy separation: GitHub stores and reviews source; Cloudflare builds, deploys, hosts, and runs the application.
13. GitHub Actions policy: intentionally disabled. Do not create `.github/workflows` unless the founder explicitly reverses the decision.

## Production deployment baseline

- Worker: `profil`
- Production branch: `main`
- Production URL: `https://profil.hipmiptuinalazhaar.workers.dev`
- Cloudflare build command: `npm run build:cloudflare`
- Cloudflare deploy command: `npx wrangler deploy`
- `build:cloudflare` must run typecheck and lint before the vinext production build.
- Cloudflare compatibility configuration lives in `wrangler.jsonc` and `vite.config.ts`.

## Phase 0 audit corrections

The Phase 0 audit identified two items that were hardened before closing the phase:

1. **Production SEO base URL safety** — metadata must never fall back to `localhost` in a production runtime when `NEXT_PUBLIC_SITE_URL` is absent. Production now has an explicit workers.dev fallback while local development keeps localhost behavior.
2. **Cloudflare-owned quality gate** — typecheck and lint are executed as part of the Cloudflare production build path, avoiding paid GitHub Actions while still preventing an obviously invalid build from deploying.

## Phase 0 acceptance criteria

- Repository has a buildable application skeleton.
- Design tokens are defined centrally.
- Official organization identity and 2026/2027 structure are represented as typed content data.
- Information architecture and route ownership are documented.
- SEO/security/performance rules are documented before feature work.
- Public sitemap exposes only implemented public pages.
- Asset policy prevents accidental low-quality or misleading publication.
- Cloudflare Workers configuration exists and uses a non-future compatibility date.
- GitHub Actions are absent.
- Production metadata has a valid non-local fallback URL.
- Cloudflare build path includes typecheck and lint.

## Phase boundary

Phase 0 owns the platform foundation only. It does not authorize generic homepage implementation. Creative direction is locked in Phase 1, assets are mastered in Phase 2, and production homepage implementation begins in Phase 3.