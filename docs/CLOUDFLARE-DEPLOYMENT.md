# Cloudflare Workers Deployment Policy

Target: Cloudflare Workers via **vinext + Wrangler**.

This repository intentionally does **not** use GitHub Actions. GitHub is source control/review. Cloudflare is the build and deployment platform.

## Production identity

- Worker name: `profil`
- Production URL: `https://profil.hipmiptuinalazhaar.workers.dev`
- Production branch: `main`
- Node.js build runtime: 22+
- Runtime adapter: vinext
- Deployment CLI: Wrangler

## Cloudflare Git integration

Cloudflare is connected directly to the GitHub repository `hipmiptuinalazhaar-hue/Profil`.

Production settings:

```text
Production branch: main
Root directory: /
Build command: npm run build:cloudflare
Deploy command: npx wrangler deploy
```

`build:cloudflare` performs:

1. TypeScript typecheck
2. ESLint
3. vinext production build

This keeps quality validation inside the Cloudflare build path without paid GitHub Actions.

## Repository configuration

Cloudflare deployment is driven by:

- `vite.config.ts`
- `wrangler.jsonc`
- `package.json`

`wrangler.jsonc` owns the Worker identity, compatibility date, Node compatibility flag, observability, entry point, and asset behavior.

## Explicit GitHub Actions prohibition

Do not create:

```text
.github/workflows/*
```

Do not add GitHub-hosted CI/CD merely to duplicate Cloudflare build/deploy.

This policy may only change after explicit founder approval.

## Local verification

```bash
npm install
npm run validate
npm run build
npm run build:cloudflare
```

For a direct manual deployment from an authenticated development environment:

```bash
npx wrangler login
npx wrangler deploy
```

Direct manual deployment is a recovery/debug path. Normal production delivery is Git push/merge to `main` followed by Cloudflare Git integration.

## Environment variables

Never commit secrets.

Public build-time variable when needed:

```text
NEXT_PUBLIC_SITE_URL=https://profil.hipmiptuinalazhaar.workers.dev
```

Future private secrets belong in Cloudflare Variables and Secrets.

## Failure behavior

A failed Cloudflare build must block the new deployment. Do not bypass typecheck/lint simply to force a release.

If a production deployment fails:

1. inspect the failing Cloudflare log,
2. fix the source/configuration in a branch,
3. validate again,
4. merge to `main`,
5. let Cloudflare redeploy.

## Current bindings

Phase 0–1 require no database, KV, R2, D1, or private runtime binding. These are introduced only when an implemented feature has a verified requirement.