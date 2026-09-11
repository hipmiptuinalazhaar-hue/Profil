# Component Architecture

## Layers

### `src/app`
Routes, metadata, layout, route-level composition. Keep business logic out.

### `src/components`
Reusable presentation and interaction components. Future groups:
- `shell/` navigation, footer, locale switcher, search
- `editorial/` section headings, image stories, timelines
- `business/` directory filters, business profile blocks
- `data/` impact metrics and verified visualizations
- `forms/` membership, partnership, event registration

### `src/config`
Stable site-wide configuration: identity, navigation, feature flags.

### `src/content`
Verified static institutional content before CMS migration.

### `src/lib`
Cross-cutting utilities: SEO, validation, analytics, data access.

### `src/types`
Shared domain contracts.

## Server/client boundary
Default to Server Components. Add `"use client"` only for stateful interaction, browser APIs, or motion that genuinely benefits UX.

## Empty-state rule
If source data is unavailable, show a truthful editorial empty state or omit the section. Never fabricate counts or sample businesses in production.
