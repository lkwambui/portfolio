import { site, socials } from "./site";

export const card = {
  name: site.name,
  title: site.jobTitle,
  specialization: site.specialization,
  company: site.company,
  companyUrl: site.companyUrl,
  location: site.location,
  email: site.email,
  phone: "+254799656264",
  phoneDisplay: "+254 799 656 264",
  whatsapp: "https://wa.me/254750649936",
  portfolio: `${site.domain}/`,
  linkedin: socials.find((social) => social.label === "LinkedIn")?.href,
  cardUrl: `${site.domain}/card`,
  intro:
    "I design and build practical digital products for businesses — from intuitive interfaces and responsive front-ends to the APIs and business systems behind them.",
};

export const cardFocus = [
  {
    title: "Full-stack web development",
    description:
      "End-to-end web applications, from the interface through to the database and deployment.",
  },
  {
    title: "Frontend architecture",
    description:
      "Structured, responsive interfaces that stay fast, accessible and maintainable.",
  },
  {
    title: "UI/UX & product design",
    description:
      "User-centred flows, layouts and design systems that make products easy to use.",
  },
  {
    title: "APIs & product delivery",
    description:
      "Integrating services, data and business logic into one dependable product.",
  },
];
