import { LuArrowUpRight } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import { homeContent } from "../data/homeContent";
import { site } from "../data/site";

export default function LogicorexSection() {
  const { connection } = homeContent;

  return (
    <section className="border-b border-line bg-ivory" aria-labelledby="logicorex-heading">
      <div className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">{connection.eyebrow}</p>
            <p className="mt-6 font-display text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-none tracking-[-0.055em] text-ink/15">
              LogicoreX
            </p>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={80}>
            <h2 id="logicorex-heading" className="display-md max-w-2xl">
              {connection.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-[1.85] text-muted">
              {connection.body}
            </p>
            <a
              href={site.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {connection.cta}
              <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
          <span>Technology studio</span>
          <span>Kenya</span>
          <span>Product · Design · Engineering</span>
        </div>
      </div>
    </section>
  );
}
