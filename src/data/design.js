import designMobileOnboarding from "../assets/projects/optimized/design-mobile-1.webp";
import designMobileLanding from "../assets/projects/optimized/design-mobile-2.webp";
import logicorexPos from "../assets/projects/optimized/logicorex-pos-etims.webp";
import logicorexApp from "../assets/projects/optimized/logicorex-airpods-app.webp";
import { getProject } from "./projects";

export const designFilters = [
  "All",
  "UI/UX",
  "Product Design",
  "Web Design",
  "E-commerce",
  "Dashboards",
  "Mobile",
  "Branding",
];

const fromProject = (slug, kind) => ({
  id: slug,
  kind,
  title: getProject(slug).title,
  description: getProject(slug).description,
  image: getProject(slug).featuredImage,
  href: `/projects/${slug}`,
});

export const designItems = [
  fromProject("shopey", "E-commerce"),
  fromProject("farm-shop", "E-commerce"),
  fromProject("hoppie", "E-commerce"),
  fromProject("sole-kenya", "E-commerce"),
  fromProject("techverse", "E-commerce"),
  fromProject("jantanet", "UI/UX"),
  fromProject("walking-shadow-poetry", "UI/UX"),
  {
    id: "mobile-onboarding",
    kind: "UI/UX",
    title: "Mobile onboarding & sign-up flow",
    description: "An onboarding and authentication flow designed for a mobile-first product.",
    image: {
      src: designMobileOnboarding,
      alt: "Mobile onboarding and sign-up interface",
    },
    href: "/lab",
    exploration: true,
  },
  {
    id: "luxury-landing",
    kind: "Web Design",
    title: "Luxury services landing page",
    description: "A landing page layout that lets premium imagery carry the message.",
    image: {
      src: designMobileLanding,
      alt: "Luxury services landing page design",
    },
    href: "/lab",
    exploration: true,
  },
  fromProject("party-lounges", "Web Design"),
  fromProject("mygiftharbor", "Web Design"),
  fromProject("sweet-moments", "Web Design"),
  fromProject("logisco", "Web Design"),
  fromProject("jefferson-mbuvi", "Web Design"),
  fromProject("codesolveafrica", "Web Design"),
  {
    id: "logicorex-pos",
    kind: "Dashboards",
    title: "LogicoreX POS terminal",
    description: "A POS dashboard integrated with eTIMS for tax-compliant retail sales.",
    image: { src: logicorexPos, alt: "LogicoreX POS terminal integrated with eTIMS" },
    href: "/projects/logicorex",
  },
  {
    id: "logicorex-app",
    kind: "Mobile",
    title: "LogicoreX retail app",
    description: "A mobile application for retail, built as part of the LogicoreX platform.",
    image: { src: logicorexApp, alt: "LogicoreX Airpods Store mobile application" },
    href: "/projects/logicorex",
  },
  fromProject("logicorex", "Branding"),
];