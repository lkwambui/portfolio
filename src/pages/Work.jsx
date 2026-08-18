import { useState } from "react";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaSection from "../components/ui/CtaSection";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilter from "../components/projects/ProjectFilter";
import { projects, upcomingProjects, workFilters } from "../data/projects";

export default function Work() {
  usePageMeta({
    title: "Projects",
    description:
      "Selected projects and case studies by Lucy Kamau - e-commerce platforms, business systems, websites and product design.",
    path: "/projects",
  });

  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <>
      <section className="bg-cream">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Projects"
            title="A complete archive of products I've designed and built."
            description="Every project below is a real product - designed and developed with the problems and people in mind. Use the filters to explore by type."
            as="h1"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 md:py-24">
          <Reveal className="mt-2">
            <ProjectFilter
              filters={workFilters}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </Reveal>

          {filtered.length > 0 ? (
            <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, index) => (
                <Reveal key={project.slug} delay={(index % 3) * 60}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-12 text-sm text-ink/60">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="In progress & systems"
            title="Products and systems being built."
            description="These projects are in active development. Case studies and screenshots will be added as they become available."
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-primary/15 bg-primary/15 md:grid-cols-2">
            {upcomingProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={(index % 2) * 60}
                className="bg-cream p-7"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {project.description}
                </p>
                {project.technologies.length > 0 && (
                  <p className="mt-3 text-xs font-medium text-ink/50">
                    {project.technologies.join(" · ")}
                  </p>
                )}
                <p className="mt-3 text-xs text-ink/40">{project.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}