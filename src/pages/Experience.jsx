import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaSection from "../components/ui/CtaSection";
import { experience, milestones } from "../data/experience";

export default function Experience() {
  usePageMeta({ path: "/experience" });

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Experience"
            title="A journey from design into full-stack development."
            description="Professional roles, education and the work that shaped how I build products today."
            as="h1"
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-page py-16 md:py-24">
          <ol className="border-t border-line">
            {experience.map((job, index) => (
              <Reveal
                key={`${job.company}-${job.role}`}
                delay={index * 40}
                className="grid gap-5 border-b border-line py-8 sm:grid-cols-12 sm:gap-8"
              >
                <div className="sm:col-span-3">
                  <div className="flex items-center gap-2">
                    {job.current && (
                      <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    )}
                    <p
                      className={`text-[0.64rem] font-semibold uppercase tracking-[0.16em] ${
                        job.current ? "text-accent" : "text-ink/45"
                      }`}
                    >
                      {job.period}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-ink/45">{job.location}</p>
                </div>
                <div className="sm:col-span-9">
                  <h2 className="font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-ink">
                    {job.role}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {job.summary}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-relaxed text-ink/70"
                      >
                        <span className="mt-[0.55rem] h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
            {milestones.map((item) => (
              <Reveal key={item.title}>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-accent">
                  Education · {item.period}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-ink/60">{item.place}</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 border border-line bg-ivory p-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.035em] text-ink">
                Today — LogicoreX &amp; client projects
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                Leading software development and product design across websites,
                e-commerce platforms and business systems for organisations in Kenya.
              </p>
            </div>
            <Link to="/projects/logicorex" className="btn-primary shrink-0">
              View the LogicoreX work
              <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
