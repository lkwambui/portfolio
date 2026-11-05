import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import TechnologyList from "../components/ui/TechnologyList";
import { selectedWork } from "../data/selectedWork";
import { imageReveal } from "../lib/motion";

function ProjectPlaceholder({ title }) {
  return (
    <div className="flex h-full min-h-[18rem] flex-col justify-between border border-line bg-ivory p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-accent">
          Preview placeholder
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-ink/40">
          In development
        </span>
      </div>
      <div className="py-10">
        <p className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.06em] text-ink/15">
          {title}
        </p>
        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-line pt-5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
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

function ProjectMedia({ project, aspect = "aspect-[4/3]", className = "" }) {
  const media = project.isPlaceholder ? (
    <ProjectPlaceholder title={project.title} />
  ) : (
    <m.div
      data-motion="project-image"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={imageReveal}
      className={`image-reveal overflow-hidden border border-line bg-ivory ${aspect} ${className}`}
    >
      <img
        src={project.featuredImage.src}
        alt={project.featuredImage.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
    </m.div>
  );

  if (project.isPlaceholder) {
    return media;
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="block"
      aria-label={`View the ${project.title} case study`}
    >
      {media}
    </Link>
  );
}

function ProjectDetails({ project, index }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
        <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
        <span className="h-px w-5 bg-ink/20" aria-hidden="true" />
        <span>{project.category}</span>
        <span aria-hidden="true">/</span>
        <span>{project.industry}</span>
      </div>

      <h3 className="mt-4 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
        {project.isPlaceholder ? (
          project.title
        ) : (
          <Link to={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        )}
      </h3>

      <p className="mt-3 max-w-xl text-[0.94rem] leading-[1.75] text-muted">
        {project.description}
      </p>

      <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-4 text-left">
        <div>
          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
            Role
          </dt>
          <dd className="mt-1 text-xs leading-relaxed text-ink/75">{project.role}</dd>
        </div>
        <div>
          <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
            Status
          </dt>
          <dd className="mt-1 text-xs leading-relaxed text-ink/75">
            {project.status || (project.year ? `Delivered ${project.year}` : "Delivered")}
          </dd>
        </div>
      </dl>

      <TechnologyList items={project.technologies} className="mt-4" />

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        {!project.isPlaceholder && (
          <Link
            to={`/projects/${project.slug}`}
            className="group inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent"
          >
            Read the case study
            <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/55 transition-colors hover:text-accent"
          >
            Visit live site
            <LuArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}

const imageSpanClass = {
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
};

const textSpanClass = {
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
};

function WideProject({ project, index, reverse = false, imageSpan = 8, imageAspect }) {
  const mediaCol = reverse ? "lg:order-2" : "";
  const textCol = reverse ? "lg:order-1" : "";

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
      <div className={`${imageSpanClass[imageSpan]} ${mediaCol}`}>
        <ProjectMedia project={project} aspect={imageAspect} />
      </div>
      <Reveal className={`${textSpanClass[12 - imageSpan]} ${textCol}`}>
        <ProjectDetails project={project} index={index} />
      </Reveal>
    </div>
  );
}

function HalfProject({ project, index }) {
  return (
    <div className="flex h-full flex-col">
      <ProjectMedia project={project} aspect="aspect-[4/3]" />
      <Reveal className="mt-6 flex flex-1 flex-col">
        <ProjectDetails project={project} index={index} />
      </Reveal>
    </div>
  );
}

export default function SelectedWork() {
  const [lead, reverse, halfOne, halfTwo, wide, halfThree, halfFour] = selectedWork;

  return (
    <section id="work" className="border-b border-line bg-paper">
      <div className="container-page py-16 md:py-24 lg:py-28">
        <div className="flex flex-col justify-between gap-8 border-b border-line pb-10 lg:flex-row lg:items-end">
          <Reveal>
            <p className="eyebrow">Selected Work</p>
            <h2 className="display-lg mt-5">Selected work.</h2>
          </Reveal>
          <Reveal className="max-w-md lg:pb-1" delay={80}>
            <p className="body-lg">
              A collection of digital products, platforms and experiences I&apos;ve
              contributed to.
            </p>
            <Link
              to="/projects"
              className="arrow-link mt-5"
            >
              View all projects
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
          <WideProject
            project={lead}
            index={0}
            imageSpan={8}
            imageAspect="aspect-[16/10]"
          />

          <WideProject
            project={reverse}
            index={1}
            reverse
            imageSpan={6}
            imageAspect="aspect-[4/5]"
          />

          <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-2 md:gap-8 lg:gap-10">
            <HalfProject project={halfOne} index={2} />
            <HalfProject project={halfTwo} index={3} />
          </div>

          <div className="border-t border-line pt-12">
            <WideProject
              project={wide}
              index={4}
              imageSpan={7}
              imageAspect="aspect-[16/10]"
            />
          </div>

          <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-2 md:gap-8 lg:gap-10">
            <HalfProject project={halfThree} index={5} />
            <HalfProject project={halfFour} index={6} />
          </div>
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Link to="/projects" className="btn-outline">
            View all projects
            <LuArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
