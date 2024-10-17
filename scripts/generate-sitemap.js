// scripts/generate-sitemap.js
import * as fs from "fs";
import * as path from "path";
import { glob } from "glob";

// Configuration
const SITE_URL = "https://your-site.com"; // Replace with your site URL
const PUBLIC_DIR = "./public";
const ROUTES_DIR = "./app/routes";

function processRoutePath(routePath) {
  // Remove 'route.tsx' from the path if it exists
  routePath = routePath.replace("/route.tsx", "");

  // Split the path by directory separator
  const parts = routePath.split("/");

  // Get the last directory name
  const dirName = parts[parts.length - 1];

  // Process the directory name
  if (
    dirName.startsWith("*") ||
    dirName.startsWith("$") ||
    dirName.includes("$")
  ) {
    return null; // Skip dynamic routes
  }

  // Handle the special cases based on your folder structure
  let processedPath = dirName
    // Split by dots and process each part
    .split(".")
    .map((part) => {
      // Remove leading underscore
      if (part.startsWith("_")) {
        part = part.substring(1);
      }
      return part;
    })
    // Filter out 'index' parts
    .filter((part) => part !== "index")
    // Join back with slashes
    .join("/");

  // Clean up any remaining special characters or patterns
  processedPath = processedPath
    .replace(/\/+/g, "/") // Remove duplicate slashes
    .replace(/^\/|\/$/g, ""); // Remove leading/trailing slashes

  return processedPath;
}

function generateUrlEntry(url, priority = 0.7) {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generateSitemap() {
  try {
    // Ensure public directory exists
    if (!fs.existsSync(PUBLIC_DIR)) {
      fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    // Find all route.tsx files in directories
    const routeFiles = await glob("**/route.tsx", {
      cwd: ROUTES_DIR,
    });

    // Also find standalone .tsx files (like contact-us.tsx)
    const standaloneFiles = await glob("*.tsx", {
      cwd: ROUTES_DIR,
      ignore: ["_*.tsx", "$.tsx"], // Ignore files starting with _ or $
    });

    // Process routes and filter out nulls
    const routes = new Set();

    // Process directory-based routes
    routeFiles.forEach((file) => {
      const processedRoute = processRoutePath(file);
      if (processedRoute !== null) {
        routes.add(processedRoute);
      }
    });

    // Process standalone files
    standaloneFiles.forEach((file) => {
      const route = file.replace(".tsx", "");
      if (!route.startsWith("_") && !route.startsWith("$")) {
        routes.add(route);
      }
    });

    // Convert routes to URLs, excluding the homepage (we'll add it separately)
    const urls = Array.from(routes)
      .filter(Boolean)
      .map((route) => `${SITE_URL}/${route}`.replace(/\/+/g, "/"))
      .filter((url) => url !== SITE_URL); // Remove homepage if it was processed from routes

    // Generate sitemap XML with homepage always first
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generateUrlEntry(SITE_URL, 1.0)}
${urls.map((url) => generateUrlEntry(url, 0.7)).join("\n")}
</urlset>`;

    // Write sitemap to public directory
    fs.writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), sitemap);
    console.log("Sitemap generated successfully!");
    console.log("Routes included:");
    console.log(`- ${SITE_URL} (Homepage)`);
    urls.forEach((url) => console.log(`- ${url}`));

    // Generate robots.txt if it doesn't exist
    const robotsPath = path.join(PUBLIC_DIR, "robots.txt");
    if (!fs.existsSync(robotsPath)) {
      const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;
      fs.writeFileSync(robotsPath, robotsTxt);
      console.log("robots.txt generated successfully!");
    }
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();
