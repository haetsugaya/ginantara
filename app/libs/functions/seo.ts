export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
  customMeta?: { [key: string]: string }[];
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  author = "Arya Anjar Ginantara",
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = "summary_large_image",
  twitterSite = "@your_twitter_handle",
  twitterCreator = "@your_twitter_handle",
  canonicalUrl,
  customMeta = []
}: SEOMetadata): Record<string, string>[] {
  const metadata: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
  ];

  if (keywords) metadata.push({ name: "keywords", content: keywords });
  if (author) metadata.push({ name: "author", content: author });

  // Open Graph
  if (ogTitle) metadata.push({ property: "og:title", content: ogTitle });
  if (ogDescription)
    metadata.push({ property: "og:description", content: ogDescription });
  if (ogImage) metadata.push({ property: "og:image", content: ogImage });
  if (ogUrl) metadata.push({ property: "og:url", content: ogUrl });
  metadata.push({ property: "og:type", content: "website" });

  // Twitter Card
  metadata.push({ name: "twitter:card", content: twitterCard });
  if (twitterSite)
    metadata.push({ name: "twitter:site", content: twitterSite });
  if (twitterCreator)
    metadata.push({ name: "twitter:creator", content: twitterCreator });

  // Canonical URL
  if (canonicalUrl) metadata.push({ rel: "canonical", href: canonicalUrl });

  // Custom Meta
  for (const customItem of customMeta) {
    metadata.push(customItem);
  }

  return metadata;
}

export const defaultMetaData = generateSEOMetadata({
  title: "Arya Anjar Ginantara",
  description: "Seorang Full-stack Developer and A SEO Enthusiast dari Bali!",
  keywords: "full-stack developer, SEO, Bali, web development",
  ogTitle: "Arya Anjar Ginantara - Full-stack Developer & SEO Enthusiast",
  ogDescription:
    "Berkenalan dengan karya Arya Anjar Ginantara, seorang pengembang full-stack yang penuh semangat dan penggemar SEO dari Bali, Indonesia.",
  ogImage: "",
  ogUrl: "https://ginantara.xyz",
  canonicalUrl: "https://ginantara.xyz",
  customMeta: [
    { name: "robots", content: "index, follow" },
  ]
});
