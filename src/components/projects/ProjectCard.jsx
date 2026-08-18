import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import TechnologyList from "../ui/TechnologyList";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col transition-transform duration-300 hover:-translate-y-1">
      <Link
        to={`/projects/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden border border-primary/15 bg-[#f0f0f0]"
        aria-label={`${project.title} case study`}
      >
        <img
          src={project.featuredImage.src}
          alt={project.featuredImage.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-accent text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <LuArrowUpRight className="h-4 w-4" />
        </span>
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
          <Link to={`/projects/${project.slug}`} className="transition-colors hover:text-primary">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">{project.description}</p>
        <p className="mt-3 text-xs font-medium text-ink/45">{project.role}</p>
        <TechnologyList items={project.technologies} className="mt-4" />
      </div>
    </article>
  );
}