# Spark Up Your Life

The production website for **Spark Up Your Life** — Stina Sparkles' tarot,
reiki, and spellwork practice. Built with [TanStack Start](https://tanstack.com/start)
(React + TypeScript) and fully static-prerendered for fast, cheap hosting.

The approved visual design lives at [design/reference.html](design/reference.html)
— open it in a browser any time you want to see the original design contract
this site was built from.

## Running it locally

You'll need [Node.js](https://nodejs.org) installed (any current LTS version works).

```bash
npm install     # one-time setup
npm run dev     # starts a local server at http://localhost:3000
```

Edit files under `src/` and the page will hot-reload in the browser as you save.

To build the production version and preview it exactly as it will be
deployed:

```bash
npm run build   # outputs static files to dist/client
npm run serve   # preview the production build locally
```

`npm run build` prerenders every route to static HTML — there's no server
required to host this site.

## How deploys work

This repo is connected to Vercel. **Pushing to `main` deploys straight to
production** — there's no separate staging step. Vercel automatically
detects TanStack Start and runs `npm run build` for you, so in the normal
case you never need to touch Vercel's settings directly.

Before pushing, always confirm `npm run build` finishes without errors.

## Editing content (no coding required)

Nearly everything on the site — names, prices, descriptions, links, bio
text — lives in one file: **[`src/content/site.ts`](src/content/site.ts)**.
You don't need to touch any other file to update copy, prices, or links.

Open that file in a text editor and look for the text you want to change
between quotes `'like this'`. For example, to change the price of a
reading, find:

```ts
{
  id: 'tarot-reading',
  ...
  price: '$65',
  priceNote: '/ 45 min',
  ...
}
```

and edit the `price` or `priceNote` values. Keep the quote marks around
text, and don't remove any commas.

The file is organized into five sections:

- **`business`** — the studio name, practitioner name, tagline, contact
  email, Instagram, Venmo/Cash App/Zelle info, main booking link, and the
  site's live URL (used for SEO tags).
- **`services`** — one entry per service card (Tarot Reading, Reiki
  Session, Custom Spellwork). Add, remove, or reorder entries here to
  change what's offered.
- **`previousSpells`** — the heading and photo gallery for the "Previous
  Spells" section. Each photo has a `caption` (shown on the
  photo, e.g. "Domination Spell") and an `alt` (screen-reader text). Add,
  remove, or reorder entries in the `gallery` array to change what's shown.
- **`about`** — the bio heading, paragraphs, and photo gallery on the About
  section.
- **`process`** — the three "how it works" steps.

After editing, run `npm run dev` to preview your changes locally, then
commit and push to `main` to publish them.

## Placeholders to replace

The site currently ships with placeholder values that need to be swapped
for the real thing before (or shortly after) launch. All of these live in
[`src/content/site.ts`](src/content/site.ts) unless noted otherwise:

- [ ] **Cal.com username** — replace `stina-sparkles` in `business.bookingUrl`
      and each service's `bookingUrl` once Stina's real Cal.com account
      exists.
- [x] **Venmo URL** — `business.venmoUrl` points at the real
      `venmo.com/u/Steenuhmarr`.
- [x] **Cash App URL** — `business.cashAppUrl` points at the real
      `cash.app/$StinaSparkles`.
- [x] **Zelle** — `business.zelle` is her real Zelle email
      (`alebensti@gmail.com`), shown as plain text on the site since Zelle
      has no shareable payment link.
- [ ] **Email** — `business.email` is still `hello@example.com`. It's not
      currently shown anywhere on the site (the Booking section only shows
      Instagram), so this only matters if a real email gets displayed again
      later.
- [x] **Instagram** — `business.instagram.handle`/`.url` point at the real
      `@stststina`.
- [x] **Bio text** — `about.paragraphs` is Stina's real bio.
- [x] **Gallery photos** — `about.gallery` in `site.ts` holds Stina's real
      photos, resized/compressed into
      [`public/images/about/`](public/images/about). Add, remove, or
      reorder entries in the array to change what's in rotation — the
      gallery adapts automatically.
- [x] **Canonical domain** — `business.siteUrl` is now `https://www.stinasparkles.com`,
      matching [`public/sitemap.xml`](public/sitemap.xml) and
      [`public/robots.txt`](public/robots.txt).

Once Stina has a real Cal.com account, there's also an optional inline
booking widget: see the commented-out block in
[`src/components/Booking.tsx`](src/components/Booking.tsx) for instructions
on enabling it so clients can book without leaving the site.

## Project structure

```
design/reference.html   the approved design (do not edit — it's the reference)
src/
  content/site.ts       all editable copy, prices, and links
  components/           Header, Hero, Services, About, Process, Booking, Footer
  routes/
    __root.tsx           document shell, global <head> tags, stylesheet
    index.tsx             assembles the home page from the components above
  styles/app.css         global styles ported from design/reference.html
public/                  favicon, sitemap.xml, robots.txt (served as-is)
```

This content shape was deliberately kept simple and typed so it can later
be swapped for a CMS (e.g. by replacing `site.ts`'s static export with a
fetch from a headless CMS) without touching component code.

## Deliberate deviations from the design reference

- The header wordmark links to `/` instead of `#` (a more correct "home"
  link now that this is a routed app rather than a single static file).
- The footer copyright year is computed at build time instead of
  hardcoded.
- The About section's photo placeholder has an `aria-label` for
  accessibility, since it isn't a real `<img>` yet.
- The commented-out Cal.com embed snippet from the reference is kept as a
  code comment in `Booking.tsx` (JSX has no direct equivalent of an HTML
  comment block) — functionally the same, ready to uncomment and wire up.
