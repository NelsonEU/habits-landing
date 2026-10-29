export const site = {
  name: 'Habits',
  url: 'https://habits.arn0.be',
  email: 'hello@arn0.be',
  author: 'Arnaud Etienne',
  /** Cloudflare Web Analytics, cookieless. Same property as arn0.be. */
  cloudflareBeaconToken: '7bef20ff43b0490ea2c71a0df306cee9',
} as const;

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

/** The three pages, each a key into a locale's `paths`. */
export const pages = ['home', 'support', 'privacy'] as const;
export type Page = (typeof pages)[number];

/*
 * English sits at the root, French under /fr/. Paths are written out rather than derived so that
 * the sitemap, the hreflang tags and the language switch all read from one table.
 */
export const paths: Record<Locale, Record<Page, string>> = {
  en: { home: '/', support: '/support/', privacy: '/privacy/' },
  fr: { home: '/fr/', support: '/fr/support/', privacy: '/fr/privacy/' },
};

export const absolute = (path: string) => new URL(path, site.url).href;
