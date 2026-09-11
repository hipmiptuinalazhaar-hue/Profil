# Cloudflare Workers deployment

Target: Cloudflare Workers via **vinext**, the deployment path currently recommended by Cloudflare for Next.js applications.

## Production identity

- Worker name: `profil`
- Expected workers.dev hostname: `profil.<account-subdomain>.workers.dev`
- Production branch: `main`
- Node.js build runtime: 22+

## Dashboard connection

1. Cloudflare Dashboard → Workers & Pages → Create application / Import repository.
2. Connect GitHub and select `hipmiptuinalazhaar-hue/Profil`.
3. Keep the production branch as `main`.
4. The repository already contains `vite.config.ts` and `wrangler.jsonc`, so Cloudflare should use the checked-in Workers configuration instead of inventing an unrelated deployment shape.
5. Build command: `npm run build:cloudflare`.
6. Deploy command: `npm run deploy:cloudflare` when a custom deploy command is requested. Cloudflare Git integration may manage the final deployment automatically after build.
7. Do not add secrets to the repository. Add future secrets through Cloudflare Variables and Secrets.

## Local / CI verification

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run build:cloudflare
```

For a direct authenticated deployment:

```bash
npx wrangler login
npm run deploy:cloudflare
```

CI/non-interactive deployments should use `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as protected environment variables.

## Why dual builds exist

The normal `next build` remains available as a framework sanity check. The vinext build is the Cloudflare-specific production compatibility gate. This migration is intentionally non-destructive so the source application remains standard Next.js while Cloudflare uses the Vite/Workers runtime path.

## Current scope

No database, KV, R2, D1, or private runtime binding is required for the Phase 0 shell. Bindings will only be added when a real feature needs them.
