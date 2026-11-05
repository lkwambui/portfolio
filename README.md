# Lucy Kamau Portfolio

A responsive React and Vite portfolio for Lucy Kamau, Lead Software Developer and
Product Designer at LogicoreX. The site uses React Router, Tailwind CSS, local
optimised project images, and prerendered pages with SEO metadata.

## Run locally

```bash
npm install
npm run dev
```

The development server prints its local URL. To create and preview a production
build:

```bash
npm run build
npm run preview
```

Run the source linter with `npm run lint`.

## Project structure

- `src/sections/` contains the homepage sections.
- `src/components/` contains reusable layout, project, and UI components.
- `src/data/` contains profile, navigation, project, expertise, and experience
  content.
- `src/lib/seoConfig.js` defines page metadata and structured data.
- `public/` contains the CV, crawler files, and social-sharing assets.
- `scripts/prerender.mjs` generates static route HTML and the sitemap during the
  production build.

The contact form has no backend: it prepares a WhatsApp message and also offers
a prefilled email link. It does not claim that a message was delivered.

## Details to confirm or add

- Add approved testimonials to `src/data/testimonials.js`; the section remains
  hidden until authentic testimonials are available.
- Add StockEase screenshots and confirm its public status before presenting it
  as completed work. It is currently labelled as an in-development placeholder.
- Confirm professional dates, project roles, and technology lists against
  Lucy's latest CV before publishing.
- Record the original source and any required attribution for the stock
  workspace photograph used in the About section.
