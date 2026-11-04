export const services = [
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    summary:
      "Responsive websites and modern web experiences - designed to feel premium and built to perform.",
    whoFor:
      "Businesses, organisations and founders who need a credible website that loads quickly, works on every screen and turns visitors into enquiries.",
    problems: [
      "An outdated or template website that does not reflect the quality of the business.",
      "Slow, hard-to-update pages that are difficult to manage without a developer.",
    ],
    includes: [
      "Discovery and content structure",
      "Custom visual design",
      "Responsive, mobile-first development",
      "Fast loading and SEO basics",
      "Deployment and handover",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Vite"],
    projects: ["party-lounges", "logisco", "sweet-moments"],
  },
  {
    slug: "uiux-design",
    title: "UI/UX Design",
    summary:
      "User flows, wireframes, prototypes, high-fidelity interfaces and design systems for digital products.",
    whoFor:
      "Product teams and business owners who need an interface that is easy to understand, consistent across screens and ready for development.",
    problems: [
      "Products that look good in screenshots but are confusing to use in real workflows.",
      "Inconsistent screens and components that slow down design and development.",
    ],
    includes: [
      "User flows and information architecture",
      "Wireframes and interactive prototypes",
      "High-fidelity interface design",
      "Design systems and component libraries",
      "Design-to-development handoff",
    ],
    technologies: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    projects: ["shopey", "jantanet", "walking-shadow-poetry"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    summary:
      "Mobile app interfaces and mobile-first product experiences connected to real business systems and APIs.",
    whoFor:
      "Businesses that need a mobile channel for customers, field teams or retail operations without building a separate disconnected system.",
    problems: [
      "Customer or staff workflows that still depend on phone calls, paper or desktop-only tools.",
      "A mobile idea that needs a practical interface, backend and delivery plan.",
    ],
    includes: [
      "Mobile user flows and interface design",
      "Mobile-first frontend development",
      "API and backend integration",
      "Authentication and account flows",
      "Testing across screen sizes and devices",
    ],
    technologies: ["React", "Mobile UI", "REST APIs", "Node.js"],
    projects: ["logicorex", "jantanet"],
  },
  {
    slug: "fullstack-development",
    title: "Full-Stack Development",
    summary:
      "Frontend, backend, APIs, authentication and databases - built as one coherent product.",
    whoFor:
      "Organisations that need a complete application rather than a collection of disconnected templates and third-party tools.",
    problems: [
      "A product idea that requires both a usable interface and a dependable backend.",
      "Existing tools that do not share data or cannot support the way the business actually works.",
    ],
    includes: [
      "Frontend applications (React / Next.js)",
      "Backend services (Node.js / Express)",
      "REST APIs and authentication",
      "Database design and management",
      "Deployment and maintenance",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    projects: ["shopey", "airtime-scratch-system", "logicorex"],
  },
  {
    slug: "api-development",
    title: "API Development & Integration",
    summary:
      "REST APIs and third-party integrations that connect products to the services they depend on.",
    whoFor:
      "Teams that need systems to exchange data reliably with payment providers, messaging services, internal tools or other applications.",
    problems: [
      "Manual data transfer between systems that should be connected.",
      "Integrations that fail silently or are difficult to monitor and maintain.",
    ],
    includes: [
      "REST API design and development",
      "Third-party integrations",
      "Webhooks and scheduled jobs",
      "API documentation and testing",
      "Error handling and monitoring",
    ],
    technologies: ["Node.js", "Express", "REST", "Axios", "Swagger"],
    projects: ["airtime-scratch-system", "jantanet", "logicorex"],
  },
  {
    slug: "payment-integrations",
    title: "Payment Integrations",
    summary:
      "M-Pesa (Daraja) and card payments wired into stores and systems, with receipts and reconciliation.",
    whoFor:
      "Businesses selling online or collecting payments through a custom system who need a checkout that matches how their customers actually pay.",
    problems: [
      "Checkout flows that lose orders or leave customers unsure whether a payment succeeded.",
      "Payment records that have to be reconciled manually after every transaction.",
    ],
    includes: [
      "M-Pesa Daraja integration (STK Push)",
      "Card payments via Stripe",
      "Payment confirmation & receipts",
      "Webhook handling and reconciliation",
      "Transaction history & reporting",
    ],
    technologies: ["M-Pesa Daraja", "Stripe", "Webhooks", "Node.js"],
    projects: ["shopey", "farm-shop", "hoppie"],
  },
  {
    slug: "dashboard-admin-systems",
    title: "Dashboard & Admin Systems",
    summary:
      "Internal dashboards, admin panels, POS terminals and reporting tools for teams that need control.",
    whoFor:
      "Operations teams, retailers and administrators who need one clear view of users, sales, stock, payments or business performance.",
    problems: [
      "Operational data spread across spreadsheets, paper and disconnected tools.",
      "Staff who need role-based access to the right information without seeing everything.",
    ],
    includes: [
      "Admin panels and user roles",
      "Sales, inventory and reporting dashboards",
      "POS terminals with eTIMS integration",
      "Data visualisation and export",
      "Audit trails and security",
    ],
    technologies: ["React", "Node.js", "Charts", "eTIMS", "MongoDB"],
    projects: ["logicorex", "airtime-scratch-system"],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    summary:
      "Product catalogues, shopping carts, checkout systems and payment integrations.",
    whoFor:
      "Retailers, wholesalers and growing brands that need a storefront they can manage and scale beyond social-media selling.",
    problems: [
      "Product catalogues that are difficult to browse or update as the range grows.",
      "Checkout and payment steps that create friction for local customers.",
    ],
    includes: [
      "Product catalogue and search",
      "Cart and checkout flows",
      "M-Pesa (Daraja) and Stripe payments",
      "Order management and notifications",
      "Responsive storefront design",
    ],
    technologies: ["React", "Next.js", "M-Pesa Daraja", "Stripe"],
    projects: ["shopey", "farm-shop", "hoppie"],
  },
  {
    slug: "technical-consultancy",
    title: "Technical Consultancy",
    summary:
      "Technical audits, architecture guidance and training for teams adopting or improving digital systems.",
    whoFor:
      "Teams that need an experienced review of their product, stack or delivery plan before investing further.",
    problems: [
      "Technical decisions being made without a clear picture of cost, risk or maintainability.",
      "A system that works today but has no practical plan for growth or handover.",
    ],
    includes: [
      "Technical audits and code reviews",
      "Architecture and stack guidance",
      "Mentoring and knowledge transfer",
      "Vendor and tool evaluation",
      "Ongoing technical support",
    ],
    technologies: ["Product planning", "Architecture", "Training"],
    projects: ["logicorex"],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    summary:
      "Practical digitisation of manual processes, paper records and disconnected business tools.",
    whoFor:
      "SACCOs, SMEs, retailers, farms and organisations moving core operations from paper or spreadsheets into dependable digital systems.",
    problems: [
      "Business processes that depend on manual records, duplicated entry or unclear ownership.",
      "Existing digital tools that do not reflect how the team actually works.",
    ],
    includes: [
      "Process mapping and requirements analysis",
      "System and data structure planning",
      "Custom business systems and dashboards",
      "Migration and staff onboarding",
      "Ongoing support and iteration",
    ],
    technologies: ["Requirements analysis", "Business systems", "Databases", "Training"],
    projects: ["logicorex", "airtime-scratch-system"],
  },
  {
    slug: "brand-graphic-design",
    title: "Brand & Graphic Design",
    summary:
      "Visual identities and digital marketing assets that make a business look established.",
    whoFor:
      "Businesses and organisations that need a consistent visual identity across their website, social channels and customer materials.",
    problems: [
      "Inconsistent logos, colours and layouts that make the business look less established.",
      "Marketing materials that do not match the quality of the product or service.",
    ],
    includes: [
      "Brand identity and logo work",
      "Marketing and social media graphics",
      "Catalogues and business collateral",
      "Consistent visual language across channels",
    ],
    technologies: ["Illustrator", "Photoshop", "Figma"],
    projects: ["logicorex"],
  },
  {
    slug: "digital-product-strategy",
    title: "Digital Product Strategy",
    summary:
      "Product structure, user experience and technical planning before a single line of code.",
    whoFor:
      "Founders and teams with a product idea that needs structure, scope and a realistic technical direction before development begins.",
    problems: [
      "A product idea with unclear requirements, priorities or success measures.",
      "Scope that keeps growing because the product structure and technical plan were never defined.",
    ],
    includes: [
      "Requirements and business analysis",
      "Product structure and roadmap",
      "Technical architecture planning",
      "Budget and timeline guidance",
    ],
    technologies: ["Discovery", "Roadmapping", "Architecture"],
    projects: ["logicorex", "airtime-scratch-system"],
  },
  {
    slug: "coding-education-mentorship",
    title: "Coding Education & Mentorship",
    summary:
      "Practical training and mentorship for people learning design, development and the transition from one discipline to the other.",
    whoFor:
      "Individuals and teams who need practical guidance on design, development, systems or the step from design into code.",
    problems: [
      "Learning materials that explain concepts but do not connect them to real product work.",
      "Teams using software without understanding the workflows behind it.",
    ],
    includes: [
      "One-to-one design and development mentorship",
      "Practical project guidance",
      "Staff training on business systems",
      "Design-to-development career guidance",
      "Code and portfolio feedback",
    ],
    technologies: ["React", "UI/UX Design", "Web development", "Product thinking"],
    projects: ["logicorex"],
  },
];

export const getService = (slug) => services.find((service) => service.slug === slug);
