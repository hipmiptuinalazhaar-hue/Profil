# Content & Data Architecture

## Content domains
- organization
- leadership
- team members
- programs
- member businesses
- events
- news
- insights
- media/gallery
- partners/collaborators
- impact metrics
- registrations

## PostgreSQL target model
Future tables: `users`, `members`, `businesses`, `programs`, `events`, `articles`, `categories`, `partners`, `media`, `registrations`, `impact_metrics`, `leadership`, `team_members`.

## Rules
1. Static verified institutional content lives in typed source modules until CMS rollout.
2. Dynamic operational data moves to PostgreSQL when create/update workflows exist.
3. Every metric stores source, period, verification state, and last-updated timestamp.
4. Partner records distinguish `network`, `collaboration`, `formal_partner`, and `sponsor`.
5. Media records preserve original asset metadata plus optimized derivatives.
6. No database is introduced merely to make the architecture look sophisticated.

## Localization
Content entities must eventually support `id` and `en` fields or translation records. Indonesian remains canonical when an English translation has not yet been reviewed.
