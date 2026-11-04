import fs from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";

const root = process.cwd();
const distDir = path.join(root, "dist");
const templatePath = path.join(distDir, "index.html");
const manifestPath = path.join(distDir, ".vite", "manifest.json");

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const escapeRegExp = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const setMeta = (html, attr, key, content) => {
  const pattern = new RegExp(
    `<meta\\s+[^>]*${attr}=["']${escapeRegExp(key)}["'][^>]*>`,
    "i"
  );
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
};

const setCanonical = (html, href) => {
  const pattern = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeHtml(href)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
};

const replaceAssetUrls = (html, assetMap) =>
  html.replace(/\/src\/assets\/[^"'\s>]+/g, (match) => {
    const clean = match.split("?")[0];
    return assetMap.get(clean) || match;
  });

const injectPage = (template, body, seo) => {
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = setMeta(html, "name", "description", seo.description);
  html = setMeta(html, "name", "robots", seo.robots);
  html = setMeta(html, "name", "author", "Lucy Kamau");
  html = setMeta(html, "property", "og:type", seo.ogType);
  html = setMeta(html, "property", "og:site_name", "Lucy Kamau");
  html = setMeta(html, "property", "og:locale", "en_KE");
  html = setMeta(html, "property", "og:title", seo.title);
  html = setMeta(html, "property", "og:description", seo.description);
  html = setMeta(html, "property", "og:url", seo.canonical);
  html = setMeta(html, "property", "og:image", seo.image);
  html = setMeta(html, "property", "og:image:width", "1200");
  html = setMeta(html, "property", "og:image:height", "630");
  html = setMeta(html, "property", "og:image:alt", seo.title);
  html = setMeta(html, "name", "twitter:card", "summary_large_image");
  html = setMeta(html, "name", "twitter:title", seo.title);
  html = setMeta(html, "name", "twitter:description", seo.description);
  html = setMeta(html, "name", "twitter:image", seo.image);
  html = setMeta(html, "name", "twitter:image:alt", seo.title);
  html = setCanonical(html, seo.canonical);

  html = html.replace(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi,
    ""
  );

  const jsonLd = JSON.stringify(seo.jsonLd).replace(/</g, "\\u003c");
  html = html.replace(
    "</head>",
    `    <script type="application/ld+json" id="page-jsonld">${jsonLd}</script>\n  </head>`
  );

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div>`
  );

  return html;
};

const buildSitemap = (entries) => {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

const readAssetMap = async () => {
  const map = new Map();
  try {
    const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
    for (const [key, value] of Object.entries(manifest)) {
      if (key.startsWith("src/assets/") && value.file) {
        map.set(`/${key}`, `/${value.file}`);
      }
    }
  } catch {
    console.warn("No Vite manifest found; image URLs were left unchanged.");
  }
  return map;
};

const vite = await createServer({
  root,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const { render, getAllRoutes, getSitemapEntries } = await vite.ssrLoadModule(
    "/src/entry-server.js"
  );

  const template = await fs.readFile(templatePath, "utf8");
  const assetMap = await readAssetMap();
  const routes = getAllRoutes();

  for (const route of routes) {
    const { html, seo } = render(route);
    const page = injectPage(template, replaceAssetUrls(html, assetMap), seo);
    const relative = route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`;
    const outputPath = path.join(distDir, relative);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, page);
  }

  const notFound = render("/404");
  const notFoundPage = injectPage(
    template,
    replaceAssetUrls(notFound.html, assetMap),
    notFound.seo
  );
  await fs.writeFile(path.join(distDir, "404.html"), notFoundPage);

  const lastmod = new Date().toISOString().split("T")[0];
  const sitemap = buildSitemap(getSitemapEntries(lastmod));
  await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap);
  await fs.writeFile(path.join(root, "public", "sitemap.xml"), sitemap);

  console.log(
    `Prerendered ${routes.length} routes, 404.html and sitemap.xml (${lastmod}).`
  );
} finally {
  await vite.close();
}
