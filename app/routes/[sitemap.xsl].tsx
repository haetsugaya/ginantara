import { LoaderFunction } from "react-router";

export const loader: LoaderFunction = async () => {
  const xslContent = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          h1 {
            color: #333;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
          a {
            text-decoration: none;
            color: #007BFF;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <ul>
          <xsl:for-each select="sitemapindex/sitemap">
            <li>
              <a href="{loc}">
                <xsl:value-of select="loc" />
              </a>
              <xsl:if test="lastmod">
                <span> (Last Modified: <xsl:value-of select="lastmod" />)</span>
              </xsl:if>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

  return new Response(xslContent, {
    headers: {
      "Content-Type": "application/xslt+xml",
    },
  });
};
