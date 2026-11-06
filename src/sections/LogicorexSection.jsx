import { LuArrowUpRight } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import { homeContent } from "../data/homeContent";
import { site } from "../data/site";

export default function LogicorexSection() {
  const { connection } = homeContent;

  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-primary-dark text-white"
      aria-labelledby="logicorex-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full border border-accent-bright/20"
        aria-hidden="true"
      />
      <div className="container-page relative py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-bright">
              {connection.eyebrow}
            </p>
            <p className="mt-6 font-display text-[clamp(2.3rem,4.2vw,3.6rem)] font-semibold leading-none tracking-[-0.055em] text-accent-bright/90">
              LogicoreX
            </p>
            <div className="gold-rule mt-6" aria-hidden="true" />
          </Reveal>

          <Reveal className="lg:col-span-8" delay={80}>
            <h2 id="logicorex-heading" className="display-md max-w-2xl text-white">
              {connection.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-[1.85] text-white/70">
              {connection.body}
            </p>
            <a
              href={site.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 border-b border-accent-bright/50 pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent-bright transition-colors hover:border-white hover:text-white"
            >
              {connection.cta}
              <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-white/65">
          <span>Technology studio</span>
          <span>Kenya</span>
          <span>Product · Design · Engineering</span>
        </div>
      </div>
    </section>
  );
}
