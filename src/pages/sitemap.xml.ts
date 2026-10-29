import type { APIRoute } from 'astro';

import { absolute, locales, pages, paths } from '../data/site';

/*
 * The six pages, each listing its own translation. Hand-written rather than generated from the
 * build output so it stays in step with src/data/site.ts, which also drives the nav and the
 * hreflang tags. lastmod is the build date.
 */
export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);

  const entries = pages.flatMap((page) => {
    const alternates = [
      ...locales.map((l) => [l, paths[l][page]] as const),
      ['x-default', paths.en[page]] as const,
    ]
      .map(([lang, path]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${absolute(path)}"/>`)
      .join('\n');

    return locales.map(
      (locale) => `  <url>
    <loc>${absolute(paths[locale][page])}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
  </url>`,
    );
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
