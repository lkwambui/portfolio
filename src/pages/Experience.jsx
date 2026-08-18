import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaSection from "../components/ui/CtaSection";
import { experience } from "../data/experience";

const milestones = [
  {
    period: "2018 — 2022",
    title: "Diploma in Information Communication Technology",
    place: "Rift Valley Institute of Science and Technology",
    detail:
      "The foundation for everything here — the start of a design and development journey.",
  },
  ...experience.map((job) => ({
    period: job.period,
    title: job.role,
    place: `${job.company} · ${job.location}`,
    detail: job.points.join(" "),
  })),
].sort((a, b) => {
  const yearA = parseInt(a.period, 10);
  const yearB = parseInt(b.period, 10);
  return yearB - yearA;
});

export default function Experience() {
  usePageMeta({
    title: "Experience",
    description:
      "Lucy Kamau's professional experience and education — UI/UX design, web development and full-stack work across Kenyan businesses.",
    path: "/experience",
  });

  return (
    <>
      <section className="bg-cream">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Experience"
            title="A journey from design into full-stack development."
            description="Professional roles, education and the work that shaped how I build products today."
            as="h1"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 md:py-24">
          <ol className="relative space-y-10 border-l border-primary/20 pl-8">
            {milestones.map((item, index) => (
              <Reveal key={`${item.title}-${item.period}`} delay={index * 40} className="relative">
                <span
                  className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white"
                  aria-hidden="true"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">{item.place}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 border border-primary/15 bg-cream p-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Today — LogicoreX &amp; client projects
              </h2>
              <p className="mt-2 max-w-xl text-sm text-ink/65">
                Beyond my UI/UX design role, I work with LogicoreX building
                business systems for SACCOs, SMEs, retailers and farmers — from
                POS terminals integrated with eTIMS to marketplaces and CRM
                tools.
              </p>
            </div>
            <Link to="/projects/logicorex" className="btn-primary shrink-0">
              View the LogicoreX work
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}