import { site, socials } from "../data/site";
import { projects, getProject } from "../data/projects";
import { services, getService } from "../data/services";
import { faqs } from "../data/faqs";

export const productionDomain = site.domain;
export const defaultSocialImage = `${productionDomain}/og-image.jpg`;
export const defaultRobots =
  "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

const personId = `${productionDomain}/#person`;
const websiteId = `${productionDomain}/#website`;
const organizationId = `${productionDomain}/#organization`;

export const canonicalUrl = (path) =>
  path === "/" ? `${productionDomain}/` : `${productionDomain}${path}`;

const personNode = {
  "@type": "Person",
  "@id": personId,
  name: site.name,
  givenName: "Lucy",
  familyName: "Kamau",
  jobTitle: site.jobTitle,
  description: site.description,
  url: `${productionDomain}/`,
  image: defaultSocialImage,
  email: `mailto:${site.email}`,
  worksFor: { "@id": organizationId },
  hasOccupation: {
    "@type": "Occupation",
    name: site.jobTitle,
    occupationLocation: { "@type": "Country", name: "Kenya" },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Rift Valley Institute of Science and Technology",
  },
  knowsAbout: site.knowsAbout,
  sameAs: socials.map((social) => social.href),
};

const organizationNode = {
  "@type": "Organization",
  "@id": organizationId,
  name: site.company,
  url: site.companyUrl,
  description:
    "LogicoreX is a technology company in Kenya that designs and builds digital products and business systems for organisations.",
  employee: { "@id": personId },
};

const websiteNode = {
  "@type": "WebSite",
  "@id": websiteId,
  url: `${productionDomain}/`,
  name: site.name,
  description: site.description,
  inLanguage: "en-KE",
  publisher: { "@id": personId },
};

const breadcrumbNode = (items, path) => ({
  "@type": "BreadcrumbList",
  "@id": `${canonicalUrl(path)}#breadcrumb`,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: canonicalUrl(item.path),
  })),
});

const profilePageNode = (path, name, description) => ({
  "@type": "ProfilePage",
  "@id": canonicalUrl(path),
  url: canonicalUrl(path),
  name,
  description,
  isPartOf: { "@id": websiteId },
  mainEntity: { "@id": personId },
  about: { "@id": personId },
});

const collectionPageNode = (path, name, description) => ({
  "@type": "CollectionPage",
  "@id": canonicalUrl(path),
  url: canonicalUrl(path),
  name,
  description,
  isPartOf: { "@id": websiteId },
  about: { "@id": personId },
});

const contactPageNode = {
  "@type": "ContactPage",
  "@id": canonicalUrl("/contact"),
  url: canonicalUrl("/contact"),
  name: "Contact Lucy Kamau",
  description:
    "Contact Lucy Kamau to discuss a website, web application, mobile experience, UI/UX design project or business system.",
  isPartOf: { "@id": websiteId },
  about: { "@id": personId },
  mainEntity: { "@id": personId },
};

const faqPageNode = {
  "@type": "FAQPage",
  "@id": `${canonicalUrl("/about")}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const professionalServiceNode = {
  "@type": "ProfessionalService",
  "@id": `${canonicalUrl("/services")}#professional-service`,
  name: "Lucy Kamau — Software Development & Product Design",
  url: canonicalUrl("/services"),
  description:
    "Software development, UI/UX design, product design, e-commerce, business systems, digital transformation and technology consultancy services from Lucy Kamau at LogicoreX.",
  image: defaultSocialImage,
  provider: { "@id": personId },
  areaServed: { "@type": "Country", name: "Kenya" },
  serviceType: services.map((service) => service.title),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software development and product design services",
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
        url: canonicalUrl(`/services/${service.slug}`),
      },
    })),
  },
};

const projectCollectionNode = {
  "@type": "CollectionPage",
  "@id": canonicalUrl("/projects"),
  url: canonicalUrl("/projects"),
  name: "Projects & Case Studies",
  description:
    "Selected projects and case studies by Lucy Kamau, including e-commerce platforms, business systems, dashboards, websites and product design work.",
  isPartOf: { "@id": websiteId },
  about: { "@id": personId },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: canonicalUrl(`/projects/${project.slug}`),
    })),
  },
};

const serviceCollectionNode = {
  "@type": "CollectionPage",
  "@id": `${canonicalUrl("/services")}#collection`,
  url: canonicalUrl("/services"),
  name: "Services",
  description:
    "Software development, product design and technology services from Lucy Kamau.",
  isPartOf: { "@id": websiteId },
  about: { "@id": personId },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: canonicalUrl(`/services/${service.slug}`),
    })),
  },
};

const staticPages = {
  "/": {
    title: "Lucy Kamau | Software Developer & Product Designer in Kenya",
    description:
      "Lucy Kamau is a Lead Software Developer and Product Designer at LogicoreX in Kenya. Explore her software development, product design, selected projects and digital product work.",
    ogType: "website",
    nodes: [
      profilePageNode(
        "/",
        "Lucy Kamau — Lead Software Developer & Product Designer",
        site.description
      ),
    ],
  },
  "/about": {
    title: "About Lucy Kamau | Lead Software Developer & Product Designer",
    description:
      "Learn about Lucy Kamau, Lead Software Developer and Product Designer at LogicoreX, and her approach to software development, UI/UX design and digital products in Kenya.",
    ogType: "profile",
    nodes: [
      profilePageNode(
        "/about",
        "About Lucy Kamau",
        "Lucy Kamau is the Lead Software Developer and Product Designer at LogicoreX."
      ),
      faqPageNode,
    ],
  },
  "/projects": {
    title: "Projects & Case Studies | Lucy Kamau",
    description:
      "Explore selected projects by Lucy Kamau, including e-commerce platforms, business systems, dashboards, websites and product design work for organisations in Kenya.",
    nodes: [projectCollectionNode],
  },
  "/ui-ux": {
    title: "UI/UX Design Portfolio & Services in Kenya | Lucy Kamau",
    description:
      "Explore Lucy Kamau's UI/UX design work and services, including user flows, wireframes, prototypes, interface design and design systems for digital products.",
    nodes: [
      collectionPageNode(
        "/ui-ux",
        "UI/UX Design",
        "UI/UX design portfolio and services from Lucy Kamau."
      ),
    ],
  },
  "/development": {
    title: "Full-Stack & Web Development Services in Kenya | Lucy Kamau",
    description:
      "Lucy Kamau's development services cover frontend, full-stack, backend APIs, authentication, databases, payment integrations, business systems and deployment.",
    nodes: [
      collectionPageNode(
        "/development",
        "Development",
        "Full-stack and web development services from Lucy Kamau."
      ),
    ],
  },
  "/services": {
    title: "Software Development & Product Design Services in Kenya | Lucy Kamau",
    description:
      "Explore Lucy Kamau's services: web and mobile development, UI/UX design, e-commerce, payment integrations, business systems, digital transformation and technical consultancy.",
    nodes: [professionalServiceNode, serviceCollectionNode],
  },
  "/process": {
    title: "Product Design & Development Process | Lucy Kamau",
    description:
      "How Lucy Kamau takes a digital product from idea to launch through discovery, definition, design, build, test and launch.",
    nodes: [
      collectionPageNode(
        "/process",
        "Product Design & Development Process",
        "The process Lucy Kamau uses to take digital products from idea to launch."
      ),
    ],
  },
  "/skills": {
    title: "Skills & Technology Stack | Lucy Kamau",
    description:
      "Lucy Kamau's design and development skills, including React, Next.js, Node.js, databases, UI/UX design, design systems, payment integrations and business systems.",
    nodes: [
      collectionPageNode(
        "/skills",
        "Skills & Technology Stack",
        "Design, development and technology skills used by Lucy Kamau."
      ),
    ],
  },
  "/experience": {
    title: "Experience & Education | Lucy Kamau",
    description:
      "Lucy Kamau's professional experience and education across UI/UX design, web development, full-stack development and business systems in Kenya.",
    nodes: [
      collectionPageNode(
        "/experience",
        "Experience & Education",
        "Professional experience and education of Lucy Kamau."
      ),
    ],
  },
  "/lab": {
    title: "Design & Development Lab | Lucy Kamau",
    description:
      "Explore Lucy Kamau's design experiments, interface studies and development explorations. Clearly labelled concepts, separate from client work.",
    nodes: [
      collectionPageNode(
        "/lab",
        "Design & Development Lab",
        "Design experiments, interface studies and development explorations by Lucy Kamau."
      ),
    ],
  },
  "/resume": {
    title: "Resume | Lucy Kamau — Lead Software Developer & Product Designer",
    description:
      "View and download Lucy Kamau's resume: Lead Software Developer and Product Designer at LogicoreX with experience in UI/UX, web development and business systems.",
    nodes: [
      collectionPageNode(
        "/resume",
        "Resume",
        "The professional resume of Lucy Kamau."
      ),
    ],
  },
  "/contact": {
    title: "Contact Lucy Kamau | Software Developer & Product Designer in Kenya",
    description:
      "Contact Lucy Kamau to discuss a website, web application, mobile experience, UI/UX design project or business system. Based in Nairobi, Kenya.",
    nodes: [contactPageNode],
  },
  "/card": {
    title: "Lucy Kamau | Lead Software Developer & Product Designer",
    description:
      "Digital business card for Lucy Kamau, Lead Software Developer and Product Designer at LogicoreX. Contact details, portfolio, LinkedIn and professional focus.",
    ogType: "profile",
    nodes: [
      profilePageNode(
        "/card",
        "Lucy Kamau — Digital Business Card",
        "Digital business card for Lucy Kamau, Lead Software Developer and Product Designer at LogicoreX."
      ),
    ],
  },
  "/404": {
    title: "Page Not Found | Lucy Kamau",
    description:
      "The page you requested could not be found. Explore Lucy Kamau's portfolio, projects and services.",
    robots: "noindex,follow",
    nodes: [],
  },
};

const serviceSeo = (service) => {
  const path = `/services/${service.slug}`;
  const description = `${service.summary} Work with Lucy Kamau, Lead Software Developer and Product Designer at LogicoreX.`;
  return {
    title: `${service.title} in Kenya | Lucy Kamau`,
    description,
    nodes: [
      {
        "@type": "Service",
        "@id": `${canonicalUrl(path)}#service`,
        name: service.title,
        serviceType: service.title,
        description: `${service.summary} ${service.whoFor}`,
        url: canonicalUrl(path),
        provider: { "@id": personId },
        areaServed: { "@type": "Country", name: "Kenya" },
        category: "Software development and digital product services",
      },
      breadcrumbNode(
        [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path },
        ],
        path
      ),
    ],
  };
};

const projectSeo = (project) => {
  const path = `/projects/${project.slug}`;
  return {
    title: `${project.title} Case Study | Lucy Kamau`,
    description: `${project.description} A case study by Lucy Kamau, Lead Software Developer and Product Designer at LogicoreX.`,
    ogType: "article",
    nodes: [
      {
        "@type": "CreativeWork",
        "@id": canonicalUrl(path),
        name: project.title,
        headline: project.title,
        description: project.description,
        url: canonicalUrl(path),
        creator: { "@id": personId },
        author: { "@id": personId },
        temporalCoverage: String(project.year),
        genre: project.category,
        keywords: project.technologies.join(", "),
        about: project.categories,
        image: defaultSocialImage,
        isPartOf: { "@id": websiteId },
      },
      breadcrumbNode(
        [
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path },
        ],
        path
      ),
    ],
  };
};

const normalizePath = (path) => {
  const clean = String(path || "/").split("?")[0].split("#")[0];
  if (clean === "/" || clean === "") return "/";
  return clean.replace(/\/+$/, "");
};

const buildGraph = (nodes) => ({
  "@context": "https://schema.org",
  "@graph": [websiteNode, personNode, organizationNode, ...nodes],
});

export const getPageSeo = (path, overrides = {}) => {
  const normalized = normalizePath(path);
  let page = staticPages[normalized];

  if (!page && normalized.startsWith("/services/")) {
    const service = getService(normalized.replace("/services/", ""));
    page = service ? serviceSeo(service) : staticPages["/404"];
  }

  if (!page && normalized.startsWith("/projects/")) {
    const project = getProject(normalized.replace("/projects/", ""));
    page = project ? projectSeo(project) : staticPages["/404"];
  }

  page = page || staticPages["/404"];

  const isNotFound = page === staticPages["/404"];
  const title = overrides.fullTitle || overrides.title || page.title;
  const description = overrides.description || page.description;
  const robots = overrides.robots || page.robots || defaultRobots;
  const ogType = page.ogType || "website";
  const image = overrides.image
    ? overrides.image.startsWith("http")
      ? overrides.image
      : `${productionDomain}${overrides.image}`
    : defaultSocialImage;
  const jsonLd = overrides.jsonLd || buildGraph(page.nodes || []);

  return {
    title,
    description,
    canonical: canonicalUrl(isNotFound ? "/404" : normalized),
    image,
    robots,
    ogType,
    jsonLd,
  };
};

export const getAllRoutes = () => [
  "/",
  "/about",
  "/projects",
  "/ui-ux",
  "/development",
  "/services",
  "/process",
  "/skills",
  "/experience",
  "/lab",
  "/resume",
  "/contact",
  "/card",
  ...projects.map((project) => `/projects/${project.slug}`),
  ...services.map((service) => `/services/${service.slug}`),
];

export const getSitemapEntries = (lastmod) =>
  getAllRoutes().map((path) => ({
    path,
    loc: canonicalUrl(path),
    lastmod,
    changefreq: path === "/" || path === "/projects" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? "1.0"
        : path === "/projects" || path === "/about" || path === "/contact"
          ? "0.8"
          : path.startsWith("/projects/") || path.startsWith("/services/")
            ? "0.7"
            : "0.6",
  }));
