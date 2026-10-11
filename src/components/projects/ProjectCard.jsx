import { Link } from "react-router-dom";
import TechnologyList from "../ui/TechnologyList";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.8rem] border border-line bg-white shadow-[0_18px_35px_rgba(32,32,32,0.04)] transition-shadow duration-200 hover:shadow-[0_22px_45px_rgba(32,32,32,0.08)]">
      <Link
        to={`/projects/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden border-b border-line bg-[#f5f3ef]"
        aria-label={`${project.title} case study`}
      >
        <img
          src={project.featuredImage.src}
          alt={project.featuredImage.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="flex flex-col p-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/55">
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