# ZOVEN PERFORMANCE

Marketing site for **ZOVEN PERFORMANCE** — clear caffeine–electrolyte water (500 ml clear PET/rPET can). Next.js App Router, TypeScript, Tailwind. Ready for Railway.

No environment variables are required for v1. The email capture is frontend-only. Optional: `NEXT_PUBLIC_SITE_URL` (absolute site URL) so Open Graph tags resolve correctly in production.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

`build` creates a Next.js standalone output and copies `public/` plus `.next/static` into it. `start` serves `.next/standalone/server.js` on `0.0.0.0` (Railway `PORT`).

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- `output: "standalone"` in `next.config.ts`

## Railway

Connect the GitHub repo. Railpack/Nixpacks will run `npm install`, `npm run build`, then `npm start`. Bind to the platform `PORT`. No secrets needed.
