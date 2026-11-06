import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import TechnologyList from "../ui/TechnologyList";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-line bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link
        to={`/projects/${project.slug}`}
        className="image-reveal block aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-line bg-ivory"
        aria-label={`View the ${project.title} case study`}
      >
        <img
          src={project.featuredImage.src}
          alt={project.featuredImage.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </Link>
      <div className="flex flex-1 flex-col px-2 pb-4 pt-5 sm:px-3">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-accent">
          {project.category}
          {project.year ? ` · ${project.year}` : ""}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-primary"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
        <p className="mt-3 text-xs font-medium text-ink/65">{project.role}</p>
        <TechnologyList items={project.technologies} className="mt-4" />
        <Link
          to={`/projects/${project.slug}`}
          className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-dark"
        >
          View project
          <LuArrowUpRight
            className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
