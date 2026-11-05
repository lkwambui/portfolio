import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import { expertise } from "../data/expertise";

export default function Expertise() {
  return (
    <section id="expertise" className="border-b border-line bg-ivory">
      <div className="container-page py-16 md:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Expertise</p>
            <h2 className="display-lg mt-5">What I bring to the table.</h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={80}>
            <p className="body-lg max-w-md lg:ml-auto">
              Four connected areas of practice, shaped by real product work and a
              belief that the best technology is both useful and considered.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid border-t border-line md:mt-16 md:grid-cols-2">
          {expertise.map((area, index) => (
            <Reveal
              key={area.number}
              delay={(index % 2) * 60}
              className={`group border-b border-line py-8 md:px-8 lg:px-10 ${
                index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-display text-2xl font-semibold tracking-tight text-accent">
                  {area.number}
                </span>
                <span className="mt-1 h-px flex-1 bg-line" aria-hidden="true" />
              </div>

              <h3 className="mt-6 font-display text-[clamp(1.35rem,2.3vw,1.8rem)] font-semibold tracking-[-0.035em] text-ink">
                {area.title}
              </h3>
              <p className="mt-3 max-w-md text-[0.94rem] leading-[1.75] text-muted">
                {area.summary}
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-2">
                {area.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="text-[0.78rem] leading-relaxed text-ink/70"
                  >
                    {capability}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-line/80 pt-4">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                  Selected tools
                </p>
                <p className="mt-2 text-[0.72rem] font-medium leading-relaxed text-ink/60">
                  {area.technologies.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-5">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            Need a particular combination of design and engineering? I&apos;m happy
            to talk through the shape of the work.
          </p>
          <Link to="/#contact" className="arrow-link shrink-0">
            Start a conversation
            <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
