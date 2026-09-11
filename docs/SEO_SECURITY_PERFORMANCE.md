# SEO, Security & Performance Architecture

## SEO
Baseline implemented:
- canonical metadata helper;
- Open Graph and Twitter metadata;
- semantic Indonesian language root;
- `robots.txt` route;
- `sitemap.xml` route;
- organization keyword set without stuffing.

Future structured data:
- Organization
- Person
- Article / NewsArticle
- Event
- BreadcrumbList
- LocalBusiness only where semantically correct

The sitemap must list only real, implemented pages. Empty future routes are intentionally excluded.

## Security
Baseline implemented:
- `X-Content-Type-Options: nosniff`
- strict referrer policy
- restrictive permissions policy
- clickjacking protection
- framework signature header disabled

Before forms/auth launch:
- server-side schema validation
- rate limiting
- CSRF strategy where relevant
- secure cookies
- authorization and role boundaries
- CSP tuned to actual integrations
- secrets only in environment bindings

## Performance budget
Targets:
- Lighthouse Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO ≥ 95
- LCP < 2.5 s
- CLS < 0.1
- INP < 200 ms

Rules:
- prefer Server Components;
- client components only for genuine interaction;
- avoid heavy animation libraries on first paint;
- AVIF/WebP image delivery;
- no autoplay background video on constrained mobile by default;
- reserve image dimensions to prevent layout shift;
- lazy-load below-the-fold media;
- load only the font weights actually used.
