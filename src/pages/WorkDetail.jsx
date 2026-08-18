import { Link, useParams, Navigate } from "react-router-dom";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import Reveal from "../components/ui/Reveal";
import CaseStudyHeader from "../components/projects/CaseStudyHeader";
import ImageGallery from "../components/projects/ImageGallery";
import TechnologyList from "../components/ui/TechnologyList";
import CtaSection from "../components/ui/CtaSection";
import { getProject, projects } from "../data/projects";

function CaseSection({ eyebrow, title, children }) {
  return (
    <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
      </div>
      <div className="prose-body lg:col-span-8">{children}</div>
    </Reveal>
  );
}

function ParagraphBlock({ label, children }) {
  return (
    <div>
      {label && (
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-ink/55">
          {label}
        </h3>
      )}
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export default function WorkDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  usePageMeta({
    title: project ? `${project.title} - Case Study` : "Project",
    description: project?.description,
    path: `/projects/${slug}`,
    jsonLd: project
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          creator: { "@type": "Person", name: "Lucy Kamau" },
        }
      : undefined,
  });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const cs = project.caseStudy;

  return (
    <>
      <article className="container-page py-14 md:py-20">
        <CaseStudyHeader project={project} />

        {project.featuredImage && (
          <Reveal className="mt-12">
            <img
              src={project.featuredImage.src}
              alt={project.featuredImage.alt}
              className="w-full object-cover"
            />
          </Reveal>
        )}

        <div className="mx-auto mt-16 max-w-4xl space-y-16 md:mt-20 md:space-y-20">
          {cs?.overview && (
            <CaseSection eyebrow="Overview" title="What this is">
              {cs.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CaseSection>
          )}

          {cs?.problem && (
            <CaseSection eyebrow="The problem" title="Why it needed to exist">
              {cs.problem.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CaseSection>
          )}

          {(project.roleAreas?.length || cs?.role?.length) && (
            <CaseSection eyebrow="My role" title="What I did">
              <ul className="flex flex-wrap gap-2">
                {[...new Set([...(project.roleAreas || []), ...(cs?.role || [])])].map(
                  (role) => (
                    <li
                      key={role}
                      className="rounded-sm border border-primary/15 bg-white px-3 py-1.5 text-xs font-semibold text-ink/75"
                    >
                      {role}
                    </li>
                  )
                )}
              </ul>
            </CaseSection>
          )}

          {cs?.designProcess && (
            <CaseSection eyebrow="Design process" title="How it was designed">
              <ol className="space-y-3">
                {cs.designProcess.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </CaseSection>
          )}

          {cs?.development && (
            <CaseSection eyebrow="Development" title="How it was built">
              <div className="space-y-6">
                {cs.development.map((section) => (
                  <ParagraphBlock key={section.heading} label={section.heading}>
                    <p>{section.body}</p>
                  </ParagraphBlock>
                ))}
              </div>
            </CaseSection>
          )}
        </div>

        {project.gallery?.length > 0 && (
          <section className="mt-20">
            <Reveal className="mb-8 flex items-end justify-between">
              <div>
                <p className="eyebrow">UI design</p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                  The interface
                </h2>
              </div>
            </Reveal>
            <ImageGallery items={project.gallery} />
          </section>
        )}

        <div className="mx-auto mt-20 max-w-4xl space-y-16 md:space-y-20">
          {cs?.challenges && (
            <CaseSection eyebrow="Challenges" title="What was hard">
              <ul className="space-y-3">
                {cs.challenges.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
          )}

          {cs?.solutions && (
            <CaseSection eyebrow="Solutions" title="How it was solved">
              <ul className="space-y-3">
                {cs.solutions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>
          )}

          {cs?.outcome && (
            <CaseSection eyebrow="Outcome" title="Where it stands">
              {cs.outcome.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CaseSection>
          )}

          <Reveal className="border-t border-primary/15 pt-8">
            <p className="eyebrow">Technologies</p>
            <TechnologyList items={project.technologies} className="mt-4" />
          </Reveal>
        </div>
      </article>

      <nav
        className="container-page border-t border-primary/15 py-10"
        aria-label="Other projects"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            to={`/projects/${prev.slug}`}
            className="group flex flex-col border border-primary/15 p-6 transition-colors hover:border-primary/50"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">
              <LuArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              Previous project
            </span>
            <span className="mt-3 font-display text-xl font-semibold tracking-tight text-ink group-hover:text-primary">
              {prev.title}
            </span>
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="group flex flex-col border border-primary/15 p-6 text-right transition-colors hover:border-primary/50 sm:items-end"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">
              Next project
              <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-3 font-display text-xl font-semibold tracking-tight text-ink group-hover:text-primary">
              {next.title}
            </span>
          </Link>
        </div>
      </nav>

      <CtaSection
        title="Need something like this built?"
        description="Every product starts with a conversation. Let's talk about yours."
      />
    </>
  );
}