# HIPMI PT UIN Al Azhaar — Project Constitution

This repository is the official digital headquarters of HIPMI PT UIN Al Azhaar Lubuklinggau.

## North star
Every page must either **build trust, create value, demonstrate impact, or enable action**.

## Product standard
Build an institutional entrepreneur platform, not a generic student-organization website. The experience should feel 60% premium institutional, 20% entrepreneurial, 10% editorial, and 10% experimental technology.

## Non-negotiables
- No fake statistics, fake partners, lorem ipsum, dead CTAs, or fabricated businesses.
- No generic purple/blue AI gradients, excessive glassmorphism, random blobs, gratuitous glow, or template-SaaS composition.
- Gold is a restrained accent, not a background wallpaper.
- Prefer purposeful editorial composition and real documentary photography.
- Preserve faces, clothing, and documentary truth in official photography.
- Do not process/remove portrait backgrounds until explicitly approved for that asset phase.
- Default to Server Components. Add client JavaScript only when interaction requires it.
- Design from 360px upward and respect reduced-motion preferences.
- WCAG 2.2 AA is the minimum accessibility target.
- Keep secrets server-side and validate all future mutation inputs on the server.
- Do not expose unfinished routes in sitemap or navigation as working functionality.

## Engineering targets
- Lighthouse Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95
- LCP < 2.5 s
- CLS < 0.1
- INP < 200 ms

## Stack baseline
Next.js 16.3.3, React 19.3, TypeScript strict mode, Tailwind CSS 4.3, App Router, PostgreSQL-ready data architecture, Cloudflare-compatible deployment target.

## Content principles
Copy must be specific, factual, human, concise, and professionally confident. Indonesian is canonical; English is a reviewed translation, not a machine-generated afterthought.

## Source-of-truth hierarchy
1. Verified organization data in `src/config` and `src/content`.
2. Architecture decisions in `/docs`.
3. Database/CMS when those systems are introduced.

When information is unknown, omit it or show a truthful empty state. Never invent it.
