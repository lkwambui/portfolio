# SEO, AEO and GEO Implementation Guide

This project is a Vite + React portfolio for Lucy Kamau at `https://lucykamau.logicorex.co.ke/`.

The site is still a React application, but the public pages are now rendered to static HTML at build time. Search crawlers, social previews and AI assistants receive complete page content and metadata without needing to execute JavaScript.

## What Was Implemented

- Centralised page metadata, canonical URLs, Open Graph, Twitter cards and robots directives.
- Static prerendering for every public route, including project and service detail pages.
- JSON-LD structured data for the person, company, website, pages, services, projects and FAQs.
- Visible breadcrumbs on project and service detail pages with matching `BreadcrumbList` schema.
- A generated XML sitemap containing all indexable routes.
- Crawler rules for search engines and AI discovery crawlers, including independent OpenAI policies for `OAI-SearchBot`, `GPTBot`, `ChatGPT-User` and `OAI-AdsBot`.
- A concise `llms.txt` summary for AI assistants.
- A real `404.html` instead of serving every unknown URL as the homepage.
- Improved image semantics: descriptive alt text, dimensions where known, lazy loading and async decoding.
- Removal of duplicate, unused Google Fonts imports.
- Hydration support so prerendered HTML becomes the normal React application after load.

## Source of Truth

Most SEO content lives in one file:

```text
src/lib/seoConfig.js
```

Edit these values when identity, page titles, descriptions or structured data change.

Related content files:

```text
src/data/site.js       Identity, company, contact details, social profiles
src/data/services.js   Services, service page content and related projects
src/data/projects.js   Project case studies
src/data/faqs.js       Visible FAQ content used on /about and in FAQPage schema
```

## Build and Prerender

```bash
npm run build
```

The build runs:

1. `vite build`
2. `node scripts/prerender.mjs`

The prerender script:

- Renders every route in `getAllRoutes()` with React's `renderToString`.
- Injects the correct title, description, canonical, social metadata and JSON-LD into each page.
- Replaces development image paths with the hashed production asset paths from the Vite manifest.
- Writes `dist/404.html`.
- Writes `dist/sitemap.xml` and updates `public/sitemap.xml`.

The entry point for prerendering is:

```text
src/entry-server.js
```

The prerender script is:

```text
scripts/prerender.mjs
```

Do not deploy the repository root. Deploy the generated `dist/` directory.

## Routes

Public prerendered routes:

```text
/
/about
/projects
/projects/:slug
/ui-ux
/development
/services
/services/:slug
/process
/skills
/experience
/lab
/resume
/contact
/card
```

Project and service detail routes are generated automatically from `src/data/projects.js` and `src/data/services.js`.

Adding a new project or service to those files automatically adds it to the prerender list and the sitemap.

## Metadata

`src/lib/seoConfig.js` defines:

- Production domain and default social image.
- Default robots directive.
- Canonical URL helper.
- Person, Organisation and WebSite nodes.
- ProfilePage, CollectionPage, ContactPage, FAQPage, ProfessionalService, Service, CreativeWork and BreadcrumbList nodes.
- Static page metadata.
- Project and service detail metadata.
- `getPageSeo`, `getAllRoutes` and `getSitemapEntries`.

The React hook in `src/lib/seo.js` applies the same metadata during client-side navigation.

Use it like this:

```jsx
usePageMeta({ path: "/about" });
```

Pages should normally pass only `path`. Overrides exist for special cases but should be avoided unless the metadata genuinely differs from the central configuration.

## Structured Data

The JSON-LD graph includes:

- `Person` for Lucy Kamau.
- `Organization` for LogicoreX.
- `WebSite` for the portfolio.
- `ProfilePage` for profile-style pages.
- `CollectionPage` for project and service collections.
- `ContactPage` for `/contact`.
- `FAQPage` on `/about`, matching the visible FAQ content.
- `ProfessionalService` with an `OfferCatalog` on `/services`.
- `Service` on each service detail page.
- `CreativeWork` on each project case study.
- `BreadcrumbList` on project and service detail pages.

The Person node intentionally does not include a telephone number because the card and main site contain different phone/WhatsApp values. Resolve that content inconsistency before adding telephone data to schema.

## Sitemap and Robots

```text
public/robots.txt
public/sitemap.xml
public/llms.txt
```

`robots.txt` allows normal search crawlers and applies independent OpenAI crawler policies:

- `OAI-SearchBot`: `Allow: /` so public pages can appear in ChatGPT Search results.
- `ChatGPT-User`: `Allow: /` so user-initiated visits can load public pages. This agent is not an automatic crawler and does not determine ChatGPT Search inclusion.
- `GPTBot`: `Disallow: /` to opt out of potential OpenAI foundation model training crawls.
- `OAI-AdsBot`: `Disallow: /` because this site does not run ChatGPT ads.
- `Google-Extended`, `PerplexityBot` and `Applebot-Extended`: allowed for AI discovery.

The `OAI-SearchBot` and `GPTBot` policies are deliberately independent. Disallowing `GPTBot` does not remove the site from ChatGPT Search, and allowing `OAI-SearchBot` does not opt the site into model training.

The sitemap is regenerated on every build. `lastmod` is the build date, not the date an individual page was edited.

### OpenAI Crawler Configuration

Official OpenAI crawler documentation:

```text
https://platform.openai.com/docs/bots
```

Current published OpenAI IP ranges are maintained by OpenAI. Do not copy or hardcode them into this application:

```text
https://openai.com/searchbot.json
https://openai.com/gptbot.json
https://openai.com/chatgpt-user.json
https://openai.com/adsbot.json
```

Hosting and security requirements:

- Keep `/robots.txt` publicly accessible without authentication.
- Do not block `OAI-SearchBot` through a hosting firewall, CDN security setting, WAF rule, rate limit, geo-block or bot-protection challenge.
- If the site uses Cloudflare or another security provider, inspect its bot protection, firewall, WAF and rate-limiting configuration. Allow the published OpenAI search crawler ranges from `searchbot.json` if custom IP rules are used.
- Do not block OpenAI's published crawler IP ranges at the network, CDN or origin level.
- Keep `OAI-SearchBot` and `GPTBot` rules independent. Do not use one bot's policy as a substitute for the other.

OpenAI states that it can take approximately 24 hours from a `robots.txt` update for its systems to adjust. Do not expect immediate changes in ChatGPT Search after deployment.

Test the production file after deployment:

```bash
curl -I https://lucykamau.logicorex.co.ke/robots.txt
curl -s https://lucykamau.logicorex.co.ke/robots.txt
```

Confirm that:

- The response status is `200`.
- The response is plain text, not an HTML login, challenge or error page.
- `OAI-SearchBot` has `Allow: /`.
- `GPTBot` has `Disallow: /`.
- `OAI-AdsBot` has `Disallow: /`.
- The `Sitemap` directive points to the production sitemap.

## Hosting Configuration

The old SPA fallback rules were removed because every valid route now has its own prerendered `index.html`.

### Apache

`public/.htaccess` contains:

- `DirectoryIndex index.html`
- `ErrorDocument 404 /404.html`
- Legacy redirects from `/work` and `/design`

### Netlify

`public/_redirects` contains only legacy redirects. Netlify serves `404.html` automatically for unmatched routes.

### Nginx

Use equivalent static-file behaviour:

```nginx
location / {
  try_files $uri $uri/ =404;
}

error_page 404 /404.html;
```

Do not add a catch-all rewrite to `index.html` unless the site is intentionally returned to client-side-only routing.

## AEO and GEO Content Notes

The strongest AEO/GEO signals in this implementation are:

- A consistent identity across visible copy and schema: Lucy Kamau, Lead Software Developer and Product Designer at LogicoreX.
- Direct FAQ answers on `/about` that match the FAQPage schema.
- Service pages that explain who each service is for, which problems it solves and what is included.
- Project case studies with descriptions, technologies and categories.
- Consistent sameAs links to verified social profiles.
- Crawlable static HTML and a complete sitemap.

When adding content:

- State facts directly. Avoid vague marketing claims that an AI system cannot quote.
- Use real project names, technologies and outcomes only where verified.
- Keep service page descriptions specific to the service.
- Add FAQ questions only when the answer is visible on the page.
- Do not add review, rating, price or testimonial schema without real, verifiable data.

## Verification Checklist

### Build

```bash
npm run lint
npm run build
```

### Inspect prerendered output

```bash
grep -o '<title>[^<]*</title>' dist/index.html
grep -o '<link rel="canonical" href="[^"]*"' dist/index.html
grep -c '<url>' dist/sitemap.xml
```

Open these files and confirm the content:

```text
dist/index.html
dist/about/index.html
dist/services/web-design-development/index.html
dist/projects/shopey/index.html
dist/404.html
dist/sitemap.xml
```

### Structured data

Use:

- Google Rich Results Test: `https://search.google.com/test/rich-results`
- Schema Markup Validator: `https://validator.schema.org/`

Validate the homepage, `/about`, `/services`, a service detail page and a project detail page.

### Social previews

Use:

- Facebook Sharing Debugger
- LinkedIn Post Inspector
- X/Twitter Card Validator

Confirm the title, description and `og-image.jpg` appear correctly.

### Search engines

1. Add the domain to Google Search Console.
2. Submit `https://lucykamau.logicorex.co.ke/sitemap.xml`.
3. Add the domain to Bing Webmaster Tools and submit the same sitemap.
4. Request indexing for the homepage, `/about`, `/services` and key project pages.
5. Check Page Indexing for accidental `noindex` or duplicate canonical issues.

### Performance

Run PageSpeed Insights on the production URL. The hero image now has explicit dimensions, high fetch priority and async decoding. Project images remain lazy-loaded.

## Known Content Follow-Ups

- The card and main site currently contain different phone/WhatsApp values. Decide which numbers are correct and use one source.
- Confirm `public/og-image.jpg` still shows the current name and role.
- Review service descriptions for accuracy before publishing.
- Confirm every social profile in `src/data/site.js` is still active.
- If a blog or articles section is added later, add `Article` or `BlogPosting` schema and include those routes in `getAllRoutes()`.
