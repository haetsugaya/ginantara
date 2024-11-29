import { LoaderFunction } from "@remix-run/node";

// Sample data for sitemap URLs
const sitemaps = [
    { loc: "https://ginantara.xyz/sitemap-pages.xml", lastmod: "2024-11-27T12:00:00+00:00" },
];

export const loader: LoaderFunction = async () => {
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
        .map(
            (sitemap) => `
  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`
        )
        .join("")}
</sitemapindex>`;

    return new Response(sitemapIndex, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
};
