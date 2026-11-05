import { getProject } from "./projects";

const selected = [
  {
    slug: "logicorex",
    industry: "Business Systems",
    layout: "full",
  },
  {
    slug: "perpetuachomba",
    industry: "Health & Wellness",
    layout: "reverse",
  },
  {
    slug: "party-lounges",
    industry: "Events & Hospitality",
    layout: "half",
  },
  {
    slug: "sole-kenya",
    industry: "Retail & E-commerce",
    layout: "half",
  },
  {
    slug: "walking-shadow-poetry",
    industry: "Arts & Culture",
    layout: "wide",
  },
  {
    slug: "jefferson-mbuvi",
    industry: "Health & Wellness",
    layout: "half",
  },
  {
    slug: "mc-chelaa",
    industry: "Events & Creative",
    layout: "half",
  },
];

export const selectedWork = selected.map(({ slug, ...entry }) => ({
  ...getProject(slug),
  ...entry,
}));
