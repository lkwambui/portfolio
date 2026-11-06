import { Link } from "react-router-dom";
import { LuArrowRight, LuBriefcaseBusiness } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import { experience } from "../data/experience";

export default function ExperienceSection() {
  const roles = experience.slice(0, 4);

  return (
    <section id="experience" className="border-b border-line bg-paper">
      <div className="container-page py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Professional experience</p>
            <h2 className="display-lg mt-4 max-w-xl">A path shaped by the work.</h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
              Experience spanning software development, product design, web
              delivery and hands-on systems support.
            </p>
          </Reveal>
        </div>

        <ol className="mt-10 grid gap-5 lg:grid-cols-2">
          {roles.map((job, index) => (
            <Reveal key={`${job.company}-${job.role}`} delay={(index % 2) * 55}>
              <li className="premium-card group flex h-full flex-col">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-accent-bright">
                    <LuBriefcaseBusiness className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.period}
                  </span>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                      <span className="h-2 w-2 rounded-full bg-accent-bright" aria-hidden="true" />
                      Current role
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {job.company}
                  <span className="px-2 text-line" aria-hidden="true">/</span>
                  <span className="font-normal text-muted">{job.location}</span>
                </p>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{job.summary}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft sm:px-6">
          <p className="text-sm text-muted">
            Explore the full record, including earlier roles and responsibilities.
          </p>
          <Link to="/experience" className="arrow-link">
            Full experience
            <LuArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
