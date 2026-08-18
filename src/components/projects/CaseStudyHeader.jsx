import { LuExternalLink, LuArrowUpRight } from "react-icons/lu";
import TechnologyList from "../ui/TechnologyList";

export default function CaseStudyHeader({ project }) {
  return (
    <header>
      <p className="eyebrow">{project.category}</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
        {project.description}
      </p>

      <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-primary/15 pt-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/50">
            Role
          </dt>
          <dd className="mt-2 text-sm text-ink/80">{project.role}</dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/50">
            Timeline
          </dt>
          <dd className="mt-2 text-sm text-ink/80">
            {project.year}
            {project.duration ? ` · ${project.duration}` : ""}
          </dd>
        </div>
        <div>
          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/50">
            Status
          </dt>
          <dd className="mt-2 text-sm text-ink/80">{project.status}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <TechnologyList items={project.technologies} />
        <div className="ml-auto flex flex-wrap items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Live Project
              <LuExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/70 hover:text-primary"
            >
              GitHub
              <LuArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </header>
  );
}