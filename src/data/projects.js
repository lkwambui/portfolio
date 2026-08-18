import shopeyHome from "../assets/projects/optimized/shopey-home.webp";
import logicorexPlatform from "../assets/projects/optimized/logicorex-platform.webp";
import logicorexPos from "../assets/projects/optimized/logicorex-pos-etims.webp";
import logicorexApp from "../assets/projects/optimized/logicorex-airpods-app.webp";
import logicorexMc from "../assets/projects/optimized/logicorex-mc-website.webp";
import kredoChapchap from "../assets/projects/optimized/kredo-chapchap.webp";
import farmShop from "../assets/projects/optimized/farm-shop.webp";
import hoppieStore from "../assets/projects/optimized/hoppie-store.webp";
import soleKenya from "../assets/projects/optimized/sole-kenya.webp";
import techverse from "../assets/projects/optimized/techverse.webp";
import partylounges from "../assets/projects/optimized/partylounges.webp";
import partyloungesGallery from "../assets/projects/optimized/partylounges-gallery.webp";
import partyloungesContact from "../assets/projects/optimized/partylounges-contact.webp";
import jantanet from "../assets/projects/optimized/jantanet.webp";
import mygiftharbor from "../assets/projects/optimized/mygiftharbor.webp";
import mygiftharbor2 from "../assets/projects/optimized/mygiftharbor-2.webp";
import walkingshadowpoetry from "../assets/projects/optimized/walkingshadowpoetry.webp";
import logisco from "../assets/projects/optimized/logisco.webp";
import sweetMoments from "../assets/projects/optimized/sweet-moments.webp";
import sweetMomentsBanner from "../assets/projects/optimized/sweet-moments-banner.webp";
import jeffersonMbuvi from "../assets/projects/optimized/jefferson-mbuvi.webp";
import codesolveafrica from "../assets/projects/optimized/codesolveafrica.webp";
import airpodsProduct from "../assets/projects/optimized/airpods-product.webp";

export const workFilters = [
  "All",
  "Web Development",
  "Full-Stack",
  "UI/UX",
  "E-commerce",
  "Dashboards",
  "Systems",
  "Mobile/Web Apps",
];

export const projects = [
  {
    slug: "shopey",
    title: "Shopey",
    category: "E-commerce",
    categories: ["E-commerce", "UI/UX", "Full-Stack"],
    description:
      "A full e-commerce platform with product catalogues, shopping cart, checkout and payments.",
    role: "Product Design, UI/UX, Full-Stack Development",
    roleAreas: ["Product Design", "UI/UX Design", "Frontend Development", "Backend Development"],
    year: 2025,
    duration: "Ongoing",
    technologies: ["Next.js", "Tailwind CSS", "M-Pesa Daraja API", "Stripe"],
    featured: true,
    order: 1,
    status: "Live",
    liveUrl: "https://shopey.co.ke",
    featuredImage: { src: shopeyHome, alt: "Shopey e-commerce homepage" },
    gallery: [
      {
        src: shopeyHome,
        alt: "Shopey e-commerce homepage",
        caption: "E-commerce homepage",
        span: "full",
        type: "desktop",
      },
      {
        src: airpodsProduct,
        alt: "Shopey product detail page",
        caption: "Product detail experience",
        span: "standard",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "Shopey is an e-commerce platform built to let online shoppers browse a catalogue, add items to a cart and complete purchases through payment methods that people in Kenya actually use.",
        "The platform was designed and developed as a complete product: information architecture, user flows, interface design and the underlying application that powers it.",
      ],
      problem: [
        "Online sellers need a storefront that feels trustworthy and easy to use, but local payment preferences make a big difference — shoppers expect a smooth, familiar checkout experience rather than being pushed towards payment methods they do not use.",
      ],
      designProcess: [
        "Product structure and information architecture",
        "User flows for browsing, searching, cart and checkout",
        "Wireframes and low-fidelity prototypes",
        "Visual design and responsive interface system",
        "Prototype review and usability passes",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Built with Next.js and Tailwind CSS, with a responsive, component-based interface across desktop and mobile.",
        },
        {
          heading: "Payments",
          body: "Checkout supports M-Pesa via the Daraja API and Stripe, with clear feedback for every payment state.",
        },
      ],
      challenges: [
        "Designing one checkout flow that handles both M-Pesa and card payments without confusing the user.",
        "Keeping the interface consistent across many product types, prices and promotions.",
      ],
      solutions: [
        "A single, clearly-sequenced checkout with explicit payment feedback and order confirmation states.",
        "A reusable product-card and layout system so new categories scale without redesign.",
      ],
      outcome: [
        "A live e-commerce platform that combines design and development into one product.",
      ],
    },
  },
  {
    slug: "logicorex",
    title: "LogicoreX",
    category: "Systems",
    categories: ["Systems", "Web Development", "Dashboards"],
    description:
      "Agency digital brand and platform covering business systems for SACCOs, SMEs, agriculture marketplaces and retail.",
    role: "Product Design, UI/UX, Full-Stack Development",
    roleAreas: ["Product Design", "UI/UX Design", "Frontend Development", "Backend Development"],
    year: 2025,
    duration: "Ongoing",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "eTIMS integration"],
    featured: true,
    order: 2,
    status: "Live",
    liveUrl: "https://logicorex.co.ke",
    featuredImage: { src: logicorexPlatform, alt: "LogicoreX platform overview" },
    gallery: [
      {
        src: logicorexPlatform,
        alt: "LogicoreX platform modules overview",
        caption: "Platform modules — SACCO management, agriculture marketplace, WhatsApp CRM",
        span: "full",
        type: "desktop",
      },
      {
        src: logicorexPos,
        alt: "LogicoreX POS integrated with eTIMS",
        caption: "POS terminal integrated with eTIMS",
        span: "standard",
        type: "dashboard",
      },
      {
        src: logicorexApp,
        alt: "LogicoreX Airpods Store mobile application",
        caption: "Retail mobile application",
        span: "standard",
        type: "mobile",
      },
      {
        src: logicorexMc,
        alt: "LogicoreX website for an event MC",
        caption: "Event services website built for an MC",
        span: "standard",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "LogicoreX is a technology agency, and this work covers both its own digital brand and the business systems it builds for clients — including a SACCO management system, an agriculture produce marketplace, a WhatsApp CRM for SMEs and a POS terminal integrated with eTIMS.",
        "The emphasis is on systems that small and medium businesses can actually run day-to-day: finance, savings, loan management, sales and customer communication.",
      ],
      problem: [
        "Many SMEs, SACCOs and retailers still run their money, stock and customer relationships on spreadsheets and paper. The challenge was to build affordable, clear systems for these businesses while keeping the interfaces simple enough for non-technical teams.",
      ],
      designProcess: [
        "Requirement gathering with each business type (SACCO, retailer, farmer, SME)",
        "Information architecture and module mapping",
        "User flows for contributions, loans, orders and sales",
        "Interface design for dashboard, POS and mobile",
      ],
      development: [
        {
          heading: "Architecture",
          body: "Modular system design so finance, marketplace, CRM and retail modules share a consistent foundation.",
        },
        {
          heading: "POS & eTIMS",
          body: "A POS terminal integrated with eTIMS for tax-compliant sales in the retail module.",
        },
        {
          heading: "Mobile",
          body: "Mobile application for retail and customer-facing channels.",
        },
      ],
      challenges: [
        "Supporting very different business models (finance, agriculture, retail, SME services) under one platform.",
        "Keeping compliance-related flows like eTIMS simple for everyday staff.",
      ],
      solutions: [
        "A modular information architecture where each business type gets the module it needs without a custom build.",
        "Role-based interfaces so each team only sees the tools relevant to their job.",
      ],
      outcome: [
        "A live agency brand and a growing platform of business systems used across finance, agriculture and retail.",
      ],
    },
  },
  {
    slug: "airtime-scratch-system",
    title: "Airtime Scratch System",
    category: "Systems",
    categories: ["Systems", "Full-Stack", "Mobile/Web Apps"],
    description:
      "A fast, reliable airtime purchasing system with M-Pesa checkout and instant delivery.",
    role: "Backend Development, Full-Stack Development",
    roleAreas: ["Backend Development", "Frontend Development"],
    year: 2025,
    duration: "In production",
    technologies: ["Node.js", "PostgreSQL"],
    featured: true,
    order: 3,
    status: "Live",
    featuredImage: { src: kredoChapchap, alt: "Airtime purchase checkout" },
    gallery: [
      {
        src: kredoChapchap,
        alt: "Airtime purchase checkout with M-Pesa",
        caption: "Airtime checkout — transparent totals before payment",
        span: "full",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "An airtime scratch system that replaces physical scratch cards with an instant digital purchase flow. Users enter their number and amount, see the full total before paying, and complete the purchase through M-Pesa.",
      ],
      problem: [
        "Scratch cards are slow and wasteful, while many airtime channels have poor feedback on whether a purchase actually went through. The system needed to be fast, secure and trustworthy.",
      ],
      designProcess: [
        "Purchase flow design — number, amount, transparent total, payment confirmation",
        "Clear status feedback at every step",
      ],
      development: [
        {
          heading: "Backend",
          body: "Node.js service with PostgreSQL for orders, users and delivery records.",
        },
        {
          heading: "Payments",
          body: "M-Pesa-backed checkout with confirmed totals before payment and automated delivery of airtime.",
        },
      ],
      challenges: [
        "Making sure payment confirmation and airtime delivery stay in sync so users never pay without receiving value.",
      ],
      solutions: [
        "Transparent pre-payment totals, explicit transaction states and automated fulfilment once payment is confirmed.",
      ],
      outcome: [
        "A working airtime system with a straightforward, honest checkout flow.",
      ],
    },
  },
  {
    slug: "party-lounges",
    title: "Party Lounges",
    category: "Web Development",
    categories: ["Web Development", "UI/UX"],
    description:
      "Premium event rentals and full-service event planning website with catalogue, gallery and quote request flow.",
    role: "UI/UX Design, Web Design, Frontend Development",
    roleAreas: ["UI/UX Design", "Web Design", "Frontend Development"],
    year: 2024,
    duration: "Delivered",
    technologies: ["Web design", "Responsive design", "UI/UX"],
    featured: true,
    order: 4,
    status: "Live",
    liveUrl: "https://partylounges.com",
    featuredImage: { src: partylounges, alt: "Party Lounges homepage" },
    gallery: [
      {
        src: partylounges,
        alt: "Party Lounges homepage",
        caption: "Homepage — where creativity meets purpose",
        span: "wide",
        type: "desktop",
      },
      {
        src: partyloungesGallery,
        alt: "Party Lounges gallery page",
        caption: "Event gallery",
        span: "standard",
        type: "desktop",
      },
      {
        src: partyloungesContact,
        alt: "Party Lounges contact and quote page",
        caption: "Get a quote flow",
        span: "standard",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "A website for a premium event rentals and full-service event planning company. It presents their services and catalogue, showcases the work through a gallery, and turns enquiries into a structured quote request flow.",
      ],
      problem: [
        "Event planners need to build trust quickly — clients want to see the quality of the work before reaching out. The site needed to look premium and make the path from browsing to getting a quote effortless.",
      ],
      designProcess: [
        "Service and catalogue structure",
        "Visual design with an upscale, event-oriented feel",
        "Gallery and quote request flows",
        "Responsive layout for mobile enquiries",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive website covering home, catalogue, about, gallery and contact.",
        },
        {
          heading: "Enquiries",
          body: "A structured quote request form that captures event details (date, number of pax) so the team can respond quickly.",
        },
      ],
      challenges: [
        "Presenting a large catalogue and gallery without making the site feel heavy or cluttered.",
      ],
      solutions: [
        "A clean editorial layout where imagery carries the message and enquiry paths stay short.",
      ],
      outcome: ["A live website that positions the business as a premium event service."],
    },
  },
  {
    slug: "farm-shop",
    title: "Farm Shop",
    category: "E-commerce",
    categories: ["E-commerce", "Mobile/Web Apps"],
    description:
      "Fresh produce e-commerce store sourcing directly from farms in Nakuru, with WhatsApp ordering.",
    role: "Product Design, UI/UX, Web Development",
    roleAreas: ["Product Design", "UI/UX Design", "Frontend Development"],
    year: 2025,
    duration: "Delivered",
    technologies: ["E-commerce", "WhatsApp ordering", "Responsive web"],
    featured: true,
    order: 5,
    status: "Live",
    featuredImage: { src: farmShop, alt: "Farm Shop produce storefront" },
    gallery: [
      {
        src: farmShop,
        alt: "Farm Shop homepage with produce catalogue",
        caption: "Fresh produce catalogue — harvested to order",
        span: "full",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "An e-commerce store for a farm in Nakuru selling fresh produce — maize, beans, peas and potatoes — harvested to order and delivered across Kenya.",
      ],
      problem: [
        "Farmers sell produce directly to local buyers but had no way to reach customers beyond their region. The store needed to feel fresh and trustworthy while keeping ordering simple for customers who may not be comfortable with complex checkout flows.",
      ],
      designProcess: [
        "Product catalogue structure with pricing clarity",
        "Cart and order flow",
        "WhatsApp ordering as a low-friction checkout option",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive storefront with product cards, cart and order actions.",
        },
        {
          heading: "Orders",
          body: "Order via WhatsApp keeps the checkout familiar and practical for the target customers.",
        },
      ],
      challenges: [
        "Balancing a clean product store with the simplicity that local customers expect.",
      ],
      solutions: [
        "Straightforward product cards with clear prices and dual add-to-cart and WhatsApp order options.",
      ],
      outcome: ["A live produce store connecting the farm to customers nationwide."],
    },
  },
  {
    slug: "mygiftharbor",
    title: "MyGiftHarbor",
    category: "E-commerce",
    categories: ["E-commerce", "Web Development", "UI/UX"],
    description:
      "A CMS-based e-commerce website for gift hampers, custom apparel and digital services.",
    role: "UI/UX Design, Web Design, Frontend Development",
    roleAreas: ["UI/UX Design", "Web Design", "Frontend Development"],
    year: 2024,
    duration: "Delivered",
    technologies: ["CMS", "E-commerce", "Responsive design"],
    featured: true,
    order: 6,
    status: "Live",
    liveUrl: "https://mygiftharbor.com",
    featuredImage: { src: mygiftharbor, alt: "MyGiftHarbor homepage" },
    gallery: [
      {
        src: mygiftharbor,
        alt: "MyGiftHarbor homepage with gift hampers",
        caption: "Homepage — gift hampers and custom apparel",
        span: "wide",
        type: "desktop",
      },
      {
        src: mygiftharbor2,
        alt: "MyGiftHarbor product sections",
        caption: "Product sections — hampers, apparel and digital services",
        span: "standard",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "An e-commerce website for a gift business selling hampers, custom apparel and digital services, built on a CMS so the team can manage products and promotions themselves.",
      ],
      problem: [
        "A growing gift business needed to move from social-media-only selling to a proper storefront, while keeping the ability to update products, offers and gift sets without touching code.",
      ],
      designProcess: [
        "Information architecture for hampers, apparel and services",
        "Visual design with a warm, gift-oriented identity",
        "Responsive product sections and promotions",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive storefront with category sections and product areas.",
        },
        {
          heading: "CMS",
          body: "Content-managed product and promotion areas so the team updates the store independently.",
        },
      ],
      challenges: [
        "Organising many product types — hampers, apparel, digital services — into one clean storefront.",
      ],
      solutions: [
        "Clear product sections with featured and on-sale areas that are easy to manage from the CMS.",
      ],
      outcome: ["A live, self-manageable e-commerce website for the gift business."],
    },
  },
  {
    slug: "hoppie",
    title: "Hoppie",
    category: "E-commerce",
    categories: ["E-commerce", "Mobile/Web Apps"],
    description:
      "An e-commerce store for fashion, watches and electronics with wholesale support.",
    role: "Product Design, UI/UX, Web Development",
    roleAreas: ["Product Design", "UI/UX Design", "Frontend Development"],
    year: 2025,
    duration: "Delivered",
    technologies: ["E-commerce", "Wholesale", "Responsive web"],
    featured: false,
    order: 7,
    status: "Live",
    featuredImage: { src: hoppieStore, alt: "Hoppie product catalogue" },
    gallery: [
      {
        src: hoppieStore,
        alt: "Hoppie product catalogue",
        caption: "Product catalogue — fashion, watches and electronics",
        span: "full",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "An e-commerce store selling fashion, watches and electronics, with a product catalogue, sorting and wholesale entry points.",
      ],
      problem: [
        "A multi-category retail business needed a catalogue that keeps luxury and everyday products organised, browsable and easy to scale as categories grow.",
      ],
      role: ["Product Design", "UI/UX Design", "Frontend Development"],
      designProcess: [
        "Catalogue architecture across categories and price points",
        "Product listing and sorting experience",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive product catalogue with category navigation, sorting and product detail pages.",
        },
      ],
      challenges: ["Presenting a wide range of products and price points without visual noise."],
      solutions: [
        "A structured catalogue with clean product cards and consistent listing behaviour.",
      ],
      outcome: ["A live e-commerce catalogue for the brand."],
    },
  },
  {
    slug: "sole-kenya",
    title: "Sole Kenya",
    category: "E-commerce",
    categories: ["E-commerce", "Mobile/Web Apps"],
    description:
      "Wholesale-first e-commerce store for shoes with retail browsing and bulk pricing.",
    role: "Product Design, UI/UX, Web Development",
    roleAreas: ["Product Design", "UI/UX Design", "Frontend Development"],
    year: 2025,
    duration: "Delivered",
    technologies: ["E-commerce", "Wholesale pricing", "Responsive web"],
    featured: false,
    order: 8,
    status: "Live",
    featuredImage: { src: soleKenya, alt: "Sole Kenya shoe catalogue" },
    gallery: [
      {
        src: soleKenya,
        alt: "Sole Kenya wholesale shoe store",
        caption: "Wholesale shoe store with size selection",
        span: "full",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "A wholesale-first e-commerce store for shoes. Customers can browse by category, see retail and wholesale pricing, select sizes and order through WhatsApp.",
      ],
      problem: [
        "Shoe wholesalers sell in bulk with minimum order quantities, which regular e-commerce templates handle poorly. The store needed to communicate wholesale rules clearly while staying easy to browse.",
      ],
      designProcess: [
        "Category and product structure",
        "Size selection and wholesale pricing display",
        "WhatsApp order flow",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive storefront with category navigation, product cards, size options and wholesale pricing.",
        },
      ],
      challenges: ["Showing wholesale minimums and pricing without confusing retail visitors."],
      solutions: [
        "Clear dual pricing, explicit minimum quantities and a WhatsApp order path.",
      ],
      outcome: ["A live wholesale store for the shoe business."],
    },
  },
  {
    slug: "techverse",
    title: "TechVerse",
    category: "E-commerce",
    categories: ["E-commerce", "Mobile/Web Apps"],
    description:
      "A tech gadgets e-commerce store with trending products, audio, smart devices and promotions.",
    role: "Product Design, UI/UX, Web Development",
    roleAreas: ["Product Design", "UI/UX Design", "Frontend Development"],
    year: 2025,
    duration: "Delivered",
    technologies: ["E-commerce", "Responsive web"],
    featured: false,
    order: 9,
    status: "Live",
    featuredImage: { src: techverse, alt: "TechVerse gadget store" },
    gallery: [
      {
        src: techverse,
        alt: "TechVerse homepage with trending tech products",
        caption: "Homepage — latest tech and trending products",
        span: "full",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "An e-commerce store for tech gadgets with product search, trending products, audio and smart-device sections, and promotional areas.",
      ],
      problem: [
        "A gadget retailer needed a store that feels current and easy to browse, with strong merchandising for promotions and trending items.",
      ],
      designProcess: [
        "Store structure around device categories",
        "Homepage merchandising and search experience",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive storefront with search, category sections and product grids.",
        },
      ],
      challenges: ["Keeping a high-volume gadget catalogue merchandisable and fast to scan."],
      solutions: [
        "Editorial homepage sections and consistent product cards that scale across categories.",
      ],
      outcome: ["A live gadget store for the retailer."],
    },
  },
  {
    slug: "logisco",
    title: "Logisco Cargo",
    category: "Web Development",
    categories: ["Web Development"],
    description:
      "A cargo and logistics services website covering maritime freight, land freight and transport services.",
    role: "Web Design, Frontend Development",
    roleAreas: ["Web Design", "Frontend Development"],
    year: 2025,
    duration: "Delivered",
    technologies: ["Web design", "Responsive design"],
    featured: false,
    order: 10,
    status: "Live",
    featuredImage: { src: logisco, alt: "Logisco Cargo homepage" },
    gallery: [
      {
        src: logisco,
        alt: "Logisco Cargo homepage",
        caption: "Homepage — cargo and transport services",
        span: "full",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "A website for a cargo and logistics company presenting their transport services, from maritime freight to land freight and trucking.",
      ],
      problem: [
        "Logistics customers need a clear, trustworthy summary of what a company moves, how, and why to choose them.",
      ],
      designProcess: [
        "Service structure and messaging",
        "Clean, professional visual design",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive website covering services, fleet and transport information.",
        },
      ],
      challenges: ["Communicating complex logistics services simply."],
      solutions: ["Straightforward service sections built around what the company does best."],
      outcome: ["A live website for the logistics business."],
    },
  },
  {
    slug: "sweet-moments",
    title: "Sweet Moments Bakery",
    category: "Web Development",
    categories: ["Web Development"],
    description:
      "A bakery website with a warm, appetite-driven homepage and product showcase.",
    role: "Web Design, Frontend Development",
    roleAreas: ["Web Design", "Frontend Development"],
    year: 2025,
    duration: "Delivered",
    technologies: ["Web design", "Responsive design"],
    featured: false,
    order: 11,
    status: "Live",
    featuredImage: { src: sweetMoments, alt: "Sweet Moments Bakery homepage" },
    gallery: [
      {
        src: sweetMoments,
        alt: "Sweet Moments Bakery product page",
        caption: "Freshly baked, just for you",
        span: "wide",
        type: "desktop",
      },
      {
        src: sweetMomentsBanner,
        alt: "Sweet Moments Bakery promotional banner",
        caption: "Bakery showcase",
        span: "standard",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "A website for a bakery built around a fresh, appetite-driven visual identity that puts the product first.",
      ],
      problem: [
        "A bakery needed a site that made people want to buy — the food had to be the hero.",
      ],
      designProcess: [
        "Visual identity and photography-led layout",
        "Product showcase structure",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive website with an image-led homepage and product showcase.",
        },
      ],
      challenges: ["Letting food photography do the selling while keeping the site fast."],
      solutions: ["An editorial, image-first layout with restrained supporting text."],
      outcome: ["A live website for the bakery."],
    },
  },
  {
    slug: "jantanet",
    title: "JantaNet",
    category: "Mobile/Web Apps",
    categories: ["Mobile/Web Apps", "UI/UX", "Full-Stack"],
    description:
      "A casual jobs application platform with account creation and sign-in.",
    role: "UI/UX Design, Frontend Development, Web Design",
    roleAreas: ["UI/UX Design", "Frontend Development"],
    year: 2024,
    duration: "Delivered",
    technologies: ["Web application", "Auth", "Responsive design"],
    featured: false,
    order: 12,
    status: "Live",
    liveUrl: "https://jantanet.com",
    featuredImage: { src: jantanet, alt: "JantaNet sign-up screen" },
    gallery: [
      {
        src: jantanet,
        alt: "JantaNet account creation screen",
        caption: "Account creation with Google sign-in",
        span: "full",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "A web application for casual jobs where users create accounts, sign in and access work opportunities.",
      ],
      problem: [
        "Casual-job platforms live or die on a frictionless start — the account creation and sign-in experience had to be quick and reassuring.",
      ],
      designProcess: [
        "Auth flow design — sign up, sign in, social sign-in",
        "Clear form structure and validation cues",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive application interface with account creation, login and social sign-in.",
        },
      ],
      challenges: ["Making the first-time experience feel quick without skipping important steps."],
      solutions: ["A focused auth flow with a simple form and one-tap Google sign-in."],
      outcome: ["A live casual-jobs application for the platform."],
    },
  },
  {
    slug: "walking-shadow-poetry",
    title: "Walking Shadow Poetry",
    category: "Web Development",
    categories: ["Web Development", "UI/UX"],
    description:
      "A poetry and art website with episodes, performances, gallery and shop.",
    role: "UI/UX Design, Web Design",
    roleAreas: ["UI/UX Design", "Web Design"],
    year: 2024,
    duration: "Delivered",
    technologies: ["Web design", "Responsive design"],
    featured: false,
    order: 13,
    status: "Live",
    liveUrl: "https://www.walkingshadowpoetry.com",
    featuredImage: { src: walkingshadowpoetry, alt: "Walking Shadow Poetry homepage" },
    gallery: [
      {
        src: walkingshadowpoetry,
        alt: "Walking Shadow Poetry homepage",
        caption: "Homepage — poetry, performances and shop",
        span: "full",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "A website for a poetry and art project featuring performances, an episodes archive, gallery and shop.",
      ],
      problem: [
        "A creative artist needed a home for their work that respects the emotional tone of poetry while still handling practical things like episodes, events and sales.",
      ],
      designProcess: [
        "Content structure — episodes, performances, gallery, shop",
        "Visual tone aligned with the poetry",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive website with episode and performance listings, gallery and shop.",
        },
      ],
      challenges: ["Matching the website's design to the emotional character of the work."],
      solutions: ["A considered editorial tone and clear content hierarchy."],
      outcome: ["A live website for the poetry project."],
    },
  },
  {
    slug: "jefferson-mbuvi",
    title: "Jefferson Mbuvi",
    category: "Web Development",
    categories: ["Web Development"],
    description:
      "A medical practice website with services, patient testimonials and doctor profile.",
    role: "Web Design, Frontend Development",
    roleAreas: ["Web Design", "Frontend Development"],
    year: 2025,
    duration: "Delivered",
    technologies: ["Web design", "Responsive design"],
    featured: false,
    order: 14,
    status: "Live",
    featuredImage: { src: jeffersonMbuvi, alt: "Jefferson Mbuvi medical website" },
    gallery: [
      {
        src: jeffersonMbuvi,
        alt: "Jefferson Mbuvi medical services page",
        caption: "Medical services and patient feedback",
        span: "full",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "A website for a medical practitioner covering services, patient feedback and how to book or reach the practice.",
      ],
      problem: [
        "Patients research before they book. The practice needed a professional site that explained services and built confidence through real patient feedback.",
      ],
      designProcess: [
        "Service and content structure",
        "Trust-building layout with patient feedback",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive website with service sections, doctor profile and patient feedback.",
        },
      ],
      challenges: ["Feeling professional and trustworthy without becoming cold or clinical."],
      solutions: ["A calm, clear layout with human-centred content."],
      outcome: ["A live website for the medical practice."],
    },
  },
  {
    slug: "codesolveafrica",
    title: "CodeSolveAfrica",
    category: "Web Development",
    categories: ["Web Development"],
    description:
      "A technology company website presenting services, projects and available work.",
    role: "Web Design, Frontend Development",
    roleAreas: ["Web Design", "Frontend Development"],
    year: 2025,
    duration: "Delivered",
    technologies: ["Web design", "Responsive design"],
    featured: false,
    order: 15,
    status: "Live",
    liveUrl: "https://codesolveafrica.co.ke",
    featuredImage: { src: codesolveafrica, alt: "CodeSolveAfrica projects page" },
gallery: [
      {
        src: codesolveafrica,
        alt: "CodeSolveAfrica projects page",
        caption: "Technology services and available projects",
        span: "full",
        type: "desktop",
      },
    ],
    caseStudy: {
      overview: [
        "A website for a technology company covering the services it offers and the projects it builds for companies across Africa.",
      ],
      problem: [
        "A tech company needed a credible site that showcases both services and work — including a practical way to list projects available for sale.",
      ],
      designProcess: [
        "Service and project structure",
        "Clear commercial layout",
      ],
      development: [
        {
          heading: "Frontend",
          body: "Responsive website with services, projects and listings.",
        },
      ],
      challenges: ["Presenting services and available work without cluttering the message."],
      solutions: ["A structured layout where each section has one clear purpose."],
      outcome: ["A live website for the technology company."],
    },
  },
];

export const upcomingProjects = [
  {
    slug: "stockease",
    title: "StockEase",
    category: "Systems",
    description:
      "Inventory and business management platform for tracking stock, products and business operations.",
    technologies: ["MERN stack"],
    note: "Screenshots to be added.",
  },
  {
    slug: "createhub-kenya",
    title: "CreateHub Kenya",
    category: "Product Design",
    description:
      "Creator economy platform — product design, marketplace architecture and web technologies.",
    technologies: ["Product design", "Marketplace architecture", "Web technologies"],
    note: "Screenshots to be added.",
  },
  {
    slug: "kenya-math-quest",
    title: "Kenya Math Quest",
    category: "Mobile/Web Apps",
    description: "Educational platform for mathematics practice and learning.",
    technologies: ["React", "Node.js", "Express", "MySQL", "PDFKit"],
    note: "Screenshots to be added.",
  },
  {
    slug: "modern-habitat",
    title: "Modern Habitat",
    category: "Web Development",
    description: "Real estate and property website.",
    technologies: ["Next.js", "Tailwind CSS"],
    note: "Screenshots to be added.",
  },
  {
    slug: "loveline-market",
    title: "Loveline Market",
    category: "E-commerce",
    description: "Marketplace and e-commerce project.",
    technologies: ["Prisma", "PostgreSQL"],
    note: "Screenshots to be added.",
  },
  {
    slug: "wifi-billing-hotspot",
    title: "WiFi Billing & Hotspot Management System",
    category: "Systems",
    description:
      "ISP management and hotspot billing system for internet service providers.",
    technologies: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Redis"],
    note: "Screenshots to be added.",
  },
  {
    slug: "kimze-gadgets",
    title: "Kimze Gadgets",
    category: "E-commerce",
    description: "E-commerce project for a gadgets retailer.",
    technologies: [],
    note: "Project details and screenshots to be added.",
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);