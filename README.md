# Lucy Kamau Portfolio

A personal portfolio for Lucy Kamau, Lead Software Developer and Product
Designer at LogicoreX in Wote Town, Makueni, Kenya. The site presents her UI/UX and
product design work alongside the engineering behind it, with case studies,
services, experience and a digital business card.

Built with React and Vite, styled with Tailwind CSS, animated with Framer
Motion, and statically prerendered for search and social sharing.

## Overview

The portfolio is a single-page application with dedicated routes for deeper
content. It is written in an editorial, product-studio style: a warm off-white
canvas, forest-green structural sections, deep gold accents, restrained borders,
generous spacing and quiet motion. The goal is to let the work and writing carry
the design rather than decoration.

Key characteristics:

- Responsive layout from small mobile screens up to wide desktop.
- Prerendered HTML per route with per-page metadata and structured data.
- Accessible navigation, focus states, skip link and reduced-motion support.
- Local optimised project imagery rather than remote stock assets.
- A standalone digital business card at `/card` that can save a vCard, share a
  link, and display a QR code.

## Tech stack

- **React 18** with React Router 7
- **Vite 6** for development and builds
- **Tailwind CSS 3** for the design system and utilities
- **Framer Motion** for entrance and page transitions
- **react-icons** (Lucide and Font Awesome sets) for iconography
- **qrcode.react** for the business card QR code
- Node scripts for prerendering routes, metadata and the sitemap

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

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the client, then prerender routes, `404.html` and the sitemap |
| `npm run seo:prerender` | Re-run only the prerender step against an existing build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the source |

## Pages and routes

| Route | Purpose |
| --- | --- |
| `/` | Home: hero, intro, about, expertise, selected work, technologies, experience, LogicoreX, resume, social and contact |
| `/about` | Full background, philosophy, experience, education, skills, FAQs |
| `/projects` | Complete filterable project archive plus in-progress work |
| `/projects/:slug` | Individual project case study |
| `/ui-ux` | UI/UX design discipline page and design approach |
| `/development` | Frontend, full-stack, API, database and integration work |
| `/services` | Service catalogue and engagement model |
| `/services/:slug` | Individual service detail |
| `/process` | Six-phase product process |
| `/skills` | Design, development and professional skills |
| `/experience` | Professional experience and education |
| `/lab` | Interactive design-system and UI experiments |
| `/resume` | Resume view with print support |
| `/contact` | Contact details and project inquiry form |
| `/card` | Standalone digital business card (no site chrome) |
| `*` | Not found page |

## UI/UX design

### Visual direction

The interface follows an editorial, product-studio aesthetic:

- Warm paper background (`#FAFAF6`) instead of pure white, with soft ivory
  (`#F3F4F1`) and white surfaces for layered content.
- Near-black ink (`#20231F`) for strong, readable contrast.
- Forest green (`#254B35`) for the navigation, footer and full-bleed dark
  sections, paired with deep gold (`#8A6500`) for text accents on light
  surfaces and bright gold (`#F4B400`) for filled emphasis.
- Hairline borders, restrained shadows and large radii rather than heavy cards.
- Generous vertical rhythm and a wide `82rem` page container.

The result is calm and content-led, with colour and motion reserved for meaning.

### Design tokens

Tokens are defined in `tailwind.config.js` and `src/index.css`:

- **Colour:** `paper`, `ivory`, `ink`, `muted`, `line`, `accent`,
  `accent-bright`, `accent-soft`, `accent-hover`, plus supporting `primary`,
  `primary-dark`, `primary-medium`, `card`, `cream`, `forest` and `gold`
  aliases.
- **Typography:** `Manrope` for display headings and interface labels, `Inter`
  for body copy. Fluid display sizes use `clamp()` so headings scale smoothly
  between mobile and desktop.
- **Layout:** `.container-page` for consistent gutters, `max-w-page` and
  `max-w-prose` for readable measures.
- **Components:** reusable classes for `.btn-primary`, `.btn-dark`,
  `.btn-accent`, `.btn-outline`, `.btn-ghost`, `.chip`, `.eyebrow`,
  `.arrow-link`, `.link-editorial`, `.surface-card`, `.premium-card`,
  `.icon-badge`, `.marquee-band`, `.gold-rule`, `.dark-surface`,
  `.image-reveal` and display/body type scales.
- **Motion:** a shared `cubic-bezier(0.22, 1, 0.36, 1)` easing curve for a
  consistent, unhurried feel.

### Interaction and motion

- Page changes fade and lift in via `PageTransition`.
- Content reveals on scroll with `Reveal` and shared Framer Motion variants in
  `src/lib/motion.js`.
- Images use a subtle reveal and hover zoom (`.image-reveal`).
- A gold expertise marquee sits directly below the hero and pauses on hover.
- Buttons, links and cards have deliberate hover and focus states.
- The desktop navigation tracks the active section while scrolling; the mobile
  menu is a full-screen overlay with focus handling and Escape-to-close.
- Reduced-motion preferences are respected globally and through
  `MotionConfig reducedMotion="user"`.

### Accessibility

- A "Skip to content" link is the first focusable element.
- Visible `:focus-visible` outlines use the deep gold accent (`#8A6500`) for
  contrast on light surfaces.
- Semantic landmarks (`header`, `nav`, `main`, `footer`, sections with labels)
  and labelled social/external links.
- The mobile menu behaves as a modal dialog with focus management.
- Images carry descriptive alt text; decorative elements are hidden from
  assistive technology.
- Form fields have labels, error messages and `aria-invalid` / `aria-describedby`
  wiring.
- Print styles hide non-essential chrome on the resume page.

### UI/UX content

The `/ui-ux` page frames the design practice in three stages: research and
structure, interface design, and design that is built to work. UI/UX is also
represented throughout the site:

- Project categories and filters include UI/UX work.
- Each case study documents design process, flows, interface decisions and
  outcomes alongside the technical build.
- Services include dedicated UI/UX design, UI/UX in web and mobile work, and
  design systems / handoff.
- The `/lab` page demonstrates design-system thinking with live type scales,
  colour scales and component states.

## Project structure

```text
src/
  assets/            Local project and portrait imagery
  components/
    card/            Digital business card actions and QR code
    layout/          Navbar, footer, page transition, scroll restoration
    projects/        Project cards, filters, case study header, gallery
    ui/              Buttons, chips, headings, forms, reveal, CTA, etc.
  data/              Profile, navigation, projects, services, skills, content
  lib/               SEO config, metadata helpers, motion, sharing, vCard
  pages/             Route-level screens
  sections/          Homepage sections
  App.jsx            Routes and app shell
  entry-server.js    Server render entry used by the prerender script
  index.css          Tailwind layers and component classes
public/              CV, favicon, social image, robots.txt, llms.txt, redirects
scripts/prerender.mjs Generates static route HTML, 404 page and sitemap
```

## Content and data

Most copy and structured content live in `src/data/`:

- `site.js` — profile, contact details, social profiles, navigation
- `homeContent.js` — hero, intro and homepage copy
- `projects.js` — project archive, case studies, filters and in-progress work
- `selectedWork.js` — homepage featured selection and layout ordering
- `services.js` — services, problems, inclusions and related projects
- `expertise.js`, `technologies.js`, `experience.js`, `process.js`, `faqs.js`
- `design.js`, `lab.js`, `card.js`, `testimonials.js`

Update the relevant data file rather than hard-coding copy in components where
possible. SEO titles, descriptions and structured data are defined in
`src/lib/seoConfig.js`.

## SEO and performance

- Every route is prerendered to static HTML during `npm run build`.
- Per-page title, description, canonical, Open Graph and Twitter metadata are
  injected by `scripts/prerender.mjs`.
- JSON-LD structured data covers the person, website, organisation, projects,
  services, breadcrumbs and FAQs.
- `public/robots.txt` defines crawler and AI-discovery policies; `public/llms.txt`
  provides a concise site summary for assistants.
- `public/sitemap.xml` is regenerated during prerendering.
- Local images are optimised, lazy-loaded below the fold, and the hero portrait
  is prioritised.
- `SEO-IMPLEMENTATION-GUIDE.md` documents the SEO setup in more detail.

## Contact form

The contact form has no backend. On submit it validates the fields and prepares
a WhatsApp message, and the page also offers a prefilled email link. It does not
claim that a message was delivered. Update contact details in `src/data/site.js`.

## Deployment

The production build outputs to `dist/`. Hosting needs to serve the prerendered
`index.html` for each route and fall back to `404.html`. Redirects for legacy
paths (`/work`, `/design`) and SPA fallbacks are provided through
`public/.htaccess` and `public/_redirects`.

## Content notes

- Add approved testimonials to `src/data/testimonials.js`; the section stays
  hidden until authentic testimonials are available.
- Add screenshots and confirm public status for projects in
  `upcomingProjects` (for example StockEase) before presenting them as completed
  work. They are currently labelled in development.
- Confirm professional dates, project roles and technology lists against Lucy's
  latest CV before publishing.
- Record the original source and any required attribution for the stock
  workspace photograph used in the About section.
