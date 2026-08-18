import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaSection from "../components/ui/CtaSection";
import { technologyGroups } from "../data/technologies";

const designSkills = [
  "User flows & information architecture",
  "Wireframing & interactive prototypes",
  "High-fidelity interface design",
  "Design systems & component libraries",
  "Responsive & accessible UI",
  "Visual hierarchy & typography",
  "Design-to-development handoff",
];

const developmentSkills = [
  "Component-based frontend (React / Next.js)",
  "Backend services & REST APIs (Node.js / Express)",
  "Database design - SQL & document models",
  "Authentication & security basics",
  "Payment integration (M-Pesa Daraja, Stripe)",
  "Deployment & maintenance",
];

const softSkills = [
  "Client communication & requirement gathering",
  "Translating business needs into product specs",
  "Training non-technical teams on systems",
  "Working across design and engineering teams",
  "Honest scoping and clear expectations",
  "End-to-end product ownership",
];

export default function Skills() {
  usePageMeta({
    title: "Skills",
    description:
      "Lucy Kamau's skills - design, development, tools and professional strengths, with real project context rather than arbitrary ratings.",
    path: "/skills",
  });

  const groups = [
    {
      name: "Design skills",
      items: designSkills,
      tone: "text-primary",
    },
    {
      name: "Development skills",
      items: developmentSkills,
      tone: "text-primary",
    },
    {
      name: "Professional strengths",
      items: softSkills,
      tone: "text-primary",
    },
  ];

  return (
    <>
      <section className="bg-cream">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Skills"
            title="Skills you can verify through the work."
            description="Rather than arbitrary percentages, these are the skills - each one backed by a project or product on this site."
            as="h1"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-3">
            {groups.map((group, index) => (
              <Reveal
                key={group.name}
                delay={index * 60}
                className="border border-primary/15 bg-white p-8"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary">
                  {group.name}
                </p>
                <ul className="mt-5 space-y-3">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-sm text-ink/80">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Tools & technologies"
            title="The stack behind the work."
            description="Technologies grouped by where they live in the product - used in real projects, not just listed."
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {technologyGroups.map((group, index) => (
              <Reveal key={group.name} delay={index * 50} className="border border-primary/15 bg-white p-7">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary">
                  {group.name}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-primary/15 bg-white px-3 py-1 text-xs font-medium text-ink/80"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 border border-primary/15 bg-white p-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Want to see these skills in action?
              </h2>
              <p className="mt-2 text-sm text-ink/65">
                Every project on this site uses a real combination of the tools
                above.
              </p>
            </div>
            <Link to="/projects" className="btn-primary shrink-0">
              Explore the projects
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}