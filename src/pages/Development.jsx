import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaSection from "../components/ui/CtaSection";
import TechnologyList from "../components/ui/TechnologyList";
import { getProject } from "../data/projects";

const developmentAreas = [
  {
    title: "Frontend Development",
    body: "Responsive, component-based interfaces built with React and Next.js, with accessible markup and considered states.",
    projects: ["shopey", "party-lounges", "jantanet", "techverse"],
  },
  {
    title: "Full-Stack Development",
    body: "Complete products where the frontend, backend, APIs and database are designed and built as one system.",
    projects: ["shopey", "logicorex", "airtime-scratch-system"],
  },
  {
    title: "Backend & API Development",
    body: "Node.js and Express services exposing clean REST APIs - from authentication to business logic.",
    projects: ["airtime-scratch-system", "logicorex"],
  },
  {
    title: "Authentication & Security",
    body: "JWT-based authentication, role-based access, password hashing, session management and input validation.",
    projects: ["jantanet", "airtime-scratch-system", "logicorex"],
  },
  {
    title: "Database Development",
    body: "Designing data models and schemas that hold up as products grow - from relational tables to MongoDB documents.",
    projects: ["logicorex", "airtime-scratch-system"],
  },
  {
    title: "Payment Integration",
    body: "Integrating payment systems that people actually use, including M-Pesa (Daraja) and Stripe.",
    projects: ["shopey", "airtime-scratch-system"],
  },
  {
    title: "Business Systems",
    body: "Systems that businesses run daily - SACCO management, POS with eTIMS, marketplaces, CRM and airtime infrastructure.",
    projects: ["logicorex", "airtime-scratch-system"],
  },
  {
    title: "Deployment & Maintenance",
    body: "Taking products live and keeping them running - hosting setup, builds, updates, backups and monitoring.",
    projects: ["shopey", "logicorex"],
  },
];

const tools = [
  "Git & GitHub",
  "VS Code",
  "Node.js & npm",
  "Postman",
  "MongoDB Compass",
  "Vercel",
  "Netlify",
  "Figma",
  "Linux",
];

function DevelopmentArea({ area, index }) {
  const featured = area.projects.map(getProject).filter(Boolean);
  return (
    <div className="grid gap-8 border-t border-primary/15 py-10 last:border-b lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
          {area.title}
        </h2>
        <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink/70">
          {area.body}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
        {featured.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="flex flex-col border border-primary/15"
          >
            <div className="aspect-[16/10] overflow-hidden bg-[#f0f0f0]">
              <img
                src={project.featuredImage.src}
                alt={project.featuredImage.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
              </div>
              <TechnologyList items={project.technologies} className="mt-3" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Development() {
  usePageMeta({
    title: "Development",
    description:
      "Lucy Kamau's development work - frontend, full-stack, backend APIs, authentication, databases, payments, business systems and deployment.",
    path: "/development",
  });

  return (
    <>
      <section className="bg-cream">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Development"
            title="I build beyond static websites."
            description="Frontend applications, backend services, authentication, payments, databases and business systems - development work that ships real products."
            as="h1"
          />
          <div className="mt-14">
            {developmentAreas.map((area, index) => (
              <DevelopmentArea key={area.title} area={area} index={index} />
            ))}
          </div>

          <div className="mt-14 border border-primary/15 bg-white p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Tools I work with
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {tools.map((tool) => (
                <li key={tool} className="text-sm text-ink/80">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}