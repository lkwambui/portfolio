import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import TechnologyList from "../ui/TechnologyList";
import Reveal from "../ui/Reveal";

export default function FeaturedProject({ project, variant = "split", index = 0 }) {
  const meta = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">
      <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
      <span className="h-px w-6 bg-ink/20" aria-hidden="true" />
      <span>{project.category}</span>
      {project.year && <span>· {project.year}</span>}
    </div>
  );

  const text = (
    <>
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink/70">
        {project.description}
      </p>
      <p className="mt-3 text-xs font-medium text-ink/50">{project.role}</p>
      <TechnologyList items={project.technologies} className="mt-4" />
      <Link
        to={`/projects/${project.slug}`}
        className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
      >
        View Case Study
        <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </>
  );

  const image = (
    <Link
      to={`/projects/${project.slug}`}
      className="group block aspect-[16/10] overflow-hidden border border-primary/15 bg-[#f0f0f0]"
      aria-label={`${project.title} case study`}
    >
      <img
        src={project.featuredImage.src}
        alt={project.featuredImage.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </Link>
  );

  if (variant === "full") {
    return (
      <Reveal className="group grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Link
            to={`/projects/${project.slug}`}
            className="block aspect-[16/9] overflow-hidden border border-primary/15 bg-[#f0f0f0]"
            aria-label={`${project.title} case study`}
          >
            <img
              src={project.featuredImage.src}
              alt={project.featuredImage.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center lg:col-span-4">
          {meta}
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
            {project.description}
          </p>
          <TechnologyList items={project.technologies} className="mt-4" />
          <Link
            to={`/projects/${project.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            View Case Study
            <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>
    );
  }

  if (variant === "split" || variant === "split-reverse") {
    const reverse = variant === "split-reverse";
    return (
      <Reveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={reverse ? "lg:order-2" : ""}>{image}</div>
        <div className={reverse ? "lg:order-1" : ""}>
          {meta}
          {text}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className="flex h-full flex-col border border-primary/15 bg-white">
      <Link
        to={`/projects/${project.slug}`}
        className="group block aspect-[4/3] overflow-hidden border border-primary/15 bg-[#f0f0f0]"
        aria-label={`${project.title} case study`}
      >
        <img
          src={project.featuredImage.src}
          alt={project.featuredImage.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        {meta}
        {text}
      </div>
    </Reveal>
  );
}