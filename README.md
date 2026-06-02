# superokt website

Minimal company landing site for **superokt** — _simple, practical IT systems for businesses_.

A bilingual static site (Next.js static export) deployed to **Cloudflare Pages**. Light theme. Contact is via `mailto:` buttons — no backend, no form.

- English at `/`, Hungarian at `/hu` (locale-as-route, with `hreflang` alternates)
- Legal pages: `/imprint` · `/privacy` and `/hu/impresszum` · `/hu/adatkezeles`
- SEO: generated `sitemap.xml`, `robots.txt`, `Organization` JSON-LD, and an OG image

## Stack

- **Next.js 14** (App Router), exported as a fully static site (`output: "export"`)
- **React 18** + **TypeScript**
- **Tailwind CSS v4** (accent color `#2a52c9`, set in `app/globals.css`)
- **Geist** font (self-hosted — no external requests)

## Local development

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

## Build & preview the production output

```bash
pnpm build          # static export to ./out
pnpm preview        # builds, then serves ./out via wrangler (http://localhost:8788)
```

## Deploy to Cloudflare Pages

No environment variables or secrets are needed — it's a static site.

### Option A — Git integration (recommended)

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages** → connect the repo.
3. Build settings:
   - **Build command:** `pnpm build`
   - **Build output directory:** `out`
4. Every push deploys automatically.

### Option B — Direct upload with Wrangler

```bash
pnpm deploy        # next build && wrangler pages deploy
```

The Pages project name comes from `wrangler.toml` (`superokt-website`) — change it there if needed.

## Analytics (Cloudflare Web Analytics)

Cookieless, GDPR-friendly, no consent banner. Two options — pick one, not both:

- **Dashboard (recommended):** Pages project → **Web Analytics → enable** automatic setup. Zero code.
- **Manual:** set `NEXT_PUBLIC_CF_BEACON_TOKEN` as a build-time env var. The beacon in
  `app/layout.tsx` renders only when it's set.

## Before going live

- [ ] **Add the managing director's name** in `lib/legal.ts` (`registration.managingDirector`) —
      it shows as a `[ … ]` placeholder on the Imprint until filled.
- [ ] **Have the privacy notice reviewed** — `lib/legal.ts` (`privacy`) is a solid, accurate
      starting point for this setup, not legal advice.
- [ ] Confirm the production domain — `https://superokt.com` is wired into `metadataBase`
      (`app/layout.tsx`), `sitemap.ts`, and `robots.ts`. Change all three if it differs.
- [ ] Enable Cloudflare Web Analytics (see above).
- [ ] Attach your custom domain in the Cloudflare Pages project.

## Editing content

- **Marketing copy + translations:** `lib/content.ts` — one dictionary per locale (`en`, `hu`).
- **Legal data + texts:** `lib/legal.ts` — company registration facts, Imprint labels, and the
  bilingual privacy notice.
- Each section is a small component under `components/`. The contact email lives once in
  `lib/content.ts` (`company.email`) and is reused across the nav, hero button, and imprint.
