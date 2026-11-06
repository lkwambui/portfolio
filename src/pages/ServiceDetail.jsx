import { Link, Navigate, useParams } from "react-router-dom";
import { LuArrowRight, LuArrowUpRight, LuCheck } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import TechnologyList from "../components/ui/TechnologyList";
import ProjectCard from "../components/projects/ProjectCard";
import CtaSection from "../components/ui/CtaSection";
import { getService } from "../data/services";
import { getProject } from "../data/projects";
import { site } from "../data/site";

const engagementSteps = [
  {
    title: "Understand the problem",
    body: "We discuss the business, the users and what the product needs to achieve before choosing a solution.",
  },
  {
    title: "Scope and design",
    body: "I define the requirements, structure the experience and agree on a realistic plan for delivery.",
  },
  {
    title: "Build and launch",
    body: "I design and build the product, test it in real conditions and support the handover or launch.",
  },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  usePageMeta({ path: `/services/${slug}` });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjects = service.projects.map(getProject).filter(Boolean);

  return (
    <>
      <article className="container-page py-14 md:py-20">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]}
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Service</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
              {service.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Start a project
                <LuArrowUpRight className="h-4 w-4" />
              </Link>
              {relatedProjects.length > 0 && (
                <a
                  href="#related-work"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:bg-paper"
                >
                  See related work
                  <LuArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <Reveal className="rounded-3xl border border-line bg-cream p-7 shadow-soft">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                Who it&apos;s for
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {service.whoFor}
              </p>
              <p className="mt-5 border-t border-line pt-5 text-sm leading-relaxed text-ink/70">
                Based in {site.location} and working with clients across Kenya.
              </p>
            </Reveal>
          </aside>
        </div>
      </article>

      <section className="border-t border-line bg-cream">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="The problem"
                title="What this service solves."
              />
              <ul className="mt-8 space-y-4">
                {service.problems.map((problem) => (
                  <li
                    key={problem}
                    className="flex items-start gap-3 text-[0.975rem] leading-relaxed text-ink/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow="What's included"
                title="What the work covers."
              />
              <ul className="mt-8 space-y-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[0.975rem] leading-relaxed text-ink/75"
                  >
                    <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {service.technologies?.length > 0 && (
            <Reveal className="mt-14 border-t border-line pt-8">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                Relevant tools &amp; technologies
              </p>
              <TechnologyList items={service.technologies} className="mt-4" />
            </Reveal>
          )}
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-white" id="related-work">
          <div className="container-page py-16 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Related work"
                title="Examples of this service in practice."
              />
              <Link
                to="/projects"
                className="hidden items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark md:inline-flex"
              >
                View all projects
                <LuArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project, index) => (
                <Reveal key={project.slug} delay={(index % 3) * 60}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-primary text-white">
        <div className="container-page py-16 md:py-24">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-bright">
            How we work
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
            A clear path from idea to launch.
          </h2>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">
            {engagementSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 60}
                className="bg-primary p-8"
              >
                <span className="font-display text-3xl font-semibold text-accent-bright">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={`Need ${service.title.toLowerCase()}?`}
        description="Tell me about the product or system you have in mind, and I'll help you work out the right approach."
      />
    </>
  );
}
