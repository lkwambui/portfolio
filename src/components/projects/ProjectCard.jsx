import { Link } from "react-router-dom";
import TechnologyList from "../ui/TechnologyList";

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col">
      <Link
        to={`/projects/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden border border-primary/15 bg-[#f0f0f0]"
        aria-label={`${project.title} case study`}
      >
        <img
          src={project.featuredImage.src}
          alt={project.featuredImage.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex flex-col pt-5">
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