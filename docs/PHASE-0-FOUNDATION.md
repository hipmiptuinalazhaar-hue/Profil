# Phase 0 — Foundation & Architecture

Status: **implemented**

## North star
Every page must either **build trust, create value, demonstrate impact, or enable action**.

## Decisions locked in Phase 0

1. Product positioning: official digital headquarters, not a static student-organization profile.
2. Visual direction: premium institutional + entrepreneurial + editorial, with restrained experimentation.
3. Technology baseline: Next.js 16.3.3, React 19.3, TypeScript strict mode, Tailwind CSS 4.3.
4. Content integrity: no invented metrics, fake partners, dead CTAs, or placeholder claims presented as fact.
5. Accessibility baseline: semantic HTML, keyboard focus, skip link, reduced-motion support, WCAG 2.2 AA target.
6. Security baseline: secure headers, no secrets in the client, server validation when forms/data arrive.
7. Performance baseline: server-first rendering, minimal client JavaScript, modern images, strict motion budget.
8. Localization architecture: Indonesian default; English supported at the content-model layer before route rollout.
9. Data architecture: PostgreSQL-ready content model, but no database dependency until dynamic features require it.
10. Deployment architecture: Cloudflare-compatible target; platform adapter is deferred until deployment phase.

## Phase 0 acceptance criteria

- Repository has a buildable application skeleton.
- Design tokens are defined centrally.
- Official organization identity and 2026/2027 structure are represented as typed content data.
- Information architecture and route ownership are documented.
- SEO/security/performance rules are documented before feature work.
- Public sitemap exposes only implemented public pages.
- Asset policy prevents accidental low-quality or misleading publication.
