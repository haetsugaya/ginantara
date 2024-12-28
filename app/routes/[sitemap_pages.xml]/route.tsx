import { LoaderFunction } from "react-router";

import { pages, pageSiteMap } from "~/routes/[sitemap_pages.xml]/pages.type";
export const loader: LoaderFunction = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (post: pageSiteMap) => `
  <url>
    <loc>${post.loc}</loc>
    <lastmod>${post.lastmod}</lastmod>
  </url>`,
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
