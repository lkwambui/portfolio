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

const fromProject = (slug, kind) => {
  const project = getProject(slug);
  if (!project) return null;

  return {
    id: slug,
    kind,
    title: project.title,
    description: project.description,
    image: project.featuredImage,
    href: `/projects/${slug}`,
  };
};

export const designItems = [
  fromProject("sole-kenya", "E-commerce"),
  fromProject("walking-shadow-poetry", "UI/UX"),
  fromProject("party-lounges", "Web Design"),
  fromProject("jefferson-mbuvi", "Web Design"),
  fromProject("perpetuachomba", "Web Design"),
  fromProject("mc-chelaa", "Web Design"),
  fromProject("logicorex", "Branding"),
].filter(Boolean);