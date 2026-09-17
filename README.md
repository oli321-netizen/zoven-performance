# ZOVEN PERFORMANCE

Marketing site for **ZOVEN** — clear caffeine–electrolyte water (500 ml clear can). Next.js App Router, TypeScript, Tailwind.

No environment variables are required for v1. Email capture is frontend-only.

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

`build` compiles a Railway-ready standalone server. `start` serves it on `0.0.0.0` and respects `PORT`.

## Deploy (Railway)

Connect this repo. Railpack will run `npm run build` then `npm start`. Set no secrets. The service listens on `PORT`.
