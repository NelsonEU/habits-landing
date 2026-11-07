# habits.arn0.be

Source of [habits.arn0.be](https://habits.arn0.be), the website for **Habits**, a small iOS and
Android app for ticking the habits you kept, every day. The app itself lives in a separate repo.

Built with [Astro](https://astro.build) as a static site: plain HTML and CSS, no client-side
JavaScript at all.

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run check    # type-checks the project
```

## Pages

English sits at the root, French under `/fr/`. Six pages in all:

| English     | French         | What it is                                   |
| ----------- | -------------- | -------------------------------------------- |
| `/`         | `/fr/`         | Landing page, with the download buttons      |
| `/support/` | `/fr/support/` | Contact address and the frequent questions   |
| `/privacy/` | `/fr/privacy/` | Privacy policy                               |

`/support/` and `/privacy/` are the **Support URL** and **Privacy Policy URL** declared in App Store
Connect, so those paths must not change once the app is published.

They replace the two hand-written pages that used to live at `arn0.be/habits/` and
`arn0.be/habits/privacy/` in the [arn0.be repo](https://github.com/arn0-be). Delete those only once
this site is live **and** App Store Connect points here, otherwise the links in the store listing
break.

## Releasing a new version

Everything that changes between releases is in `src/data/release.ts`: the App Store URL, the
version, the size, the minimum Android version and the APK's SHA-256.

The Android side ships from the app repo: pushing a `vX.Y.Z` tag runs its `release.yml`, which
builds a signed APK and publishes it as a GitHub release with the size and SHA-256 in the notes.
Here you bump `version` and paste those two values — the APK URL is derived from `version` and
pins to that exact tag, so the link, the size and the checksum always describe the same file.

A value left as a `[PLACEHOLDER]` still renders: its button is disabled rather than linking
nowhere, so the site is safe to deploy before a platform ships. The App Store button is in that
state until iOS is on the store.

## Structure

```
src/data/release.ts        The per-release values: URLs, version, size, checksum
src/data/site.ts           Domain, email, the locale and page tables that drive nav, hreflang, sitemap
src/data/content/en.ts     All the English copy; its shape is the `Content` type
src/data/content/fr.ts     The French copy, same shape — a new section must be translated to compile
src/layouts/Base.astro     <head>: meta, canonical, hreflang, Open Graph, fonts, analytics
src/components/            Header, Footer, Mark, and one component per page body
src/pages/                 Six thin route files plus sitemap.xml.ts
src/styles/global.css      Design tokens and every rule on the site
public/fonts/              Self-hosted woff2, latin subset
public/img/                Apple's official App Store badges, English and French
src/assets/screens/        App screenshots, per language; Astro emits them as 880px WebP
```

## Content

Both languages live in `src/data/content/`. `fr.ts` is typed as `Content`, which is inferred from
`en.ts`, so the two cannot drift: add a field in English and the build fails until French has it
too. The French copy says "tu", like the app.

Fields ending in `Html` are rendered with `set:html` and may contain links and `<strong>`.
Everything else is plain text.

## Design

Dark only, from the design mockups, and sharing the app's palette (`src/theme/tokens.ts` in the app
repo). Colours, radii and spacing are CSS custom properties at the top of `src/styles/global.css`.

- Headings are Bricolage Grotesque, body text Figtree. Both are variable fonts, self-hosted as one
  latin-subset `woff2` per family, preloaded, with `font-display: swap`.
- The mark in the header is an inline SVG, and the same shape is the favicon.
- No JavaScript. The smooth scroll to `#download` and `#android` is `scroll-behavior`, the FAQ is
  `<details>`/`<summary>`, and the language switch is an ordinary link. Motion is disabled under
  `prefers-reduced-motion`.
- Every tappable target clears 44px, focus rings are visible, and there is a skip link.

## Deployment

A GitHub Action (`.github/workflows/deploy.yml`) builds the site and deploys it to GitHub Pages:

- on every push to `main`
- manually, from the Actions tab

The repository's Pages source must be set to **GitHub Actions** (Settings → Pages). The custom
domain comes from `public/CNAME`, and DNS is on Cloudflare: a `CNAME` for `habits` pointing at the
GitHub Pages host.

## Analytics

The site uses Cloudflare Web Analytics, which is cookieless and doesn't track visitors across sites.
It shares the arn0.be property; the token is in `src/data/site.ts`. The privacy page says so, in a
section that is explicitly about the website rather than the app.

## To do

- `src/data/release.ts`: fill in the real URLs, version, size and checksum.
- `src/layouts/Base.astro`: add a 1200×630 Open Graph image and point `og:image` at it.
