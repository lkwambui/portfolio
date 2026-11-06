import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import TechnologyList from "../components/ui/TechnologyList";
import { selectedWork } from "../data/selectedWork";
import { imageReveal } from "../lib/motion";

function ProjectPlaceholder({ title }) {
  return (
    <div className="flex h-full min-h-[16rem] flex-col justify-between rounded-[1.5rem] border border-line bg-ivory p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-accent">
          Preview placeholder
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ink/65">
          In development
        </span>
      </div>
      <div className="py-8">
        <p className="font-display text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-none tracking-[-0.06em] text-ink/15">
          {title}
        </p>
        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink/65">
          <span>Stock</span>
          <span>Products</span>
          <span>Orders</span>
        </div>
      </div>
      <p className="text-sm text-muted">
        Product screenshots are being prepared. This preview is intentionally
        labelled and does not represent finished interface work.
      </p>
    </div>
  );
}

function ProjectMedia({ project, aspect = "aspect-[4/3]" }) {
  if (project.isPlaceholder) {
    return <ProjectPlaceholder title={project.title} />;
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block"
      aria-label={`View the ${project.title} case study`}
    >
      <m.div
        data-motion="project-image"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={imageReveal}
        className={`image-reveal group/media overflow-hidden rounded-[1.5rem] border border-line bg-ivory ${aspect}`}
      >
        <img
          src={project.featuredImage.src}
          alt={project.featuredImage.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-editorial group-hover/media:scale-[1.03]"
        />
      </m.div>
    </Link>
  );
}

function ProjectDetails({ project, index }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink/65">
        <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
        <span className="h-px w-5 bg-ink/20" aria-hidden="true" />
        <span>{project.category}</span>
        <span aria-hidden="true">/</span>
        <span>{project.industry}</span>
      </div>

      <h3 className="mt-4 font-display text-[clamp(1.6rem,2.8vw,2.3rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-ink">
        {project.isPlaceholder ? (
          project.title
        ) : (
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-primary"
          >
            {project.title}
          </Link>
        )}
      </h3>

      <p className="mt-3 max-w-xl text-[0.94rem] leading-[1.75] text-muted">
        {project.description}
      </p>

      <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-4 text-left">
        <div>
          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/65">
            Role
          </dt>
          <dd className="mt-1 text-xs leading-relaxed text-ink/75">{project.role}</dd>
        </div>
        <div>
          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/65">
            Status
          </dt>
          <dd className="mt-1 text-xs leading-relaxed text-ink/75">
            {project.status || (project.year ? `Delivered ${project.year}` : "Delivered")}
          </dd>
        </div>
      </dl>

      <TechnologyList items={project.technologies} className="mt-4" />

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
        {!project.isPlaceholder && (
          <Link
            to={`/projects/${project.slug}`}
            className="group inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-dark"
          >
            View project
            <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/65 transition-colors hover:text-primary"
          >
            Visit live site
            <LuArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function FeatureProject({ project, index, reverse = false, aspect = "aspect-[16/10]" }) {
  return (
    <article className="rounded-[2rem] border border-line bg-white p-3 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-4">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
          <ProjectMedia project={project} aspect={aspect} />
        </div>
        <Reveal className={`px-2 pb-5 lg:col-span-5 lg:px-3 lg:pb-0 ${reverse ? "lg:order-1" : ""}`}>
          <ProjectDetails project={project} index={index} />
        </Reveal>
      </div>
    </article>
  );
}

function HalfProject({ project, index }) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-line bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <ProjectMedia project={project} aspect="aspect-[4/3]" />
      <Reveal className="flex flex-1 flex-col px-2 pb-4 pt-6 sm:px-3">
        <ProjectDetails project={project} index={index} />
      </Reveal>
    </article>
  );
}

export default function SelectedWork() {
  const [lead, reverse, halfOne, halfTwo, wide, halfThree, halfFour] = selectedWork;

  return (
    <section id="work" className="border-b border-line bg-paper">
      <div className="container-page py-16 md:py-24 lg:py-28">
        <div className="flex flex-col justify-between gap-8 border-b border-line pb-10 lg:flex-row lg:items-end">
          <Reveal>
            <p className="eyebrow">Selected projects</p>
            <h2 className="display-lg mt-5">Thoughtful work, built for real use.</h2>
          </Reveal>
          <Reveal className="max-w-md lg:pb-1" delay={80}>
            <p className="body-lg">
              A selection of digital products, platforms and experiences shaped
              by product thinking, design and engineering.
            </p>
            <Link to="/projects" className="arrow-link mt-5">
              View all projects
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 space-y-8 md:mt-14 md:space-y-10">
          <FeatureProject project={lead} index={0} aspect="aspect-[16/10]" />

          <FeatureProject
            project={reverse}
            index={1}
            reverse
            aspect="aspect-[4/3]"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            <HalfProject project={halfOne} index={2} />
            <HalfProject project={halfTwo} index={3} />
          </div>

          <FeatureProject project={wide} index={4} aspect="aspect-[16/10]" />

          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            <HalfProject project={halfThree} index={5} />
            <HalfProject project={halfFour} index={6} />
          </div>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link to="/projects" className="btn-outline">
            View all projects
            <LuArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
