import { Link } from "react-router-dom";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import Reveal from "./Reveal";

export default function CtaSection({
  title = "Have an idea worth building?",
  description = "Tell me about the product you want to design and build. I'll help you take it from concept to launch.",
  primary = { label: "Start a Project", to: "/contact" },
  secondary = { label: "View Projects", to: "/projects" },
}) {
  return (
    <section className="relative overflow-hidden bg-[#fffaf0] text-ink">
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[#ffc83d] opacity-80" aria-hidden="true" />
      <div className="absolute -bottom-10 left-1/2 h-36 w-[120%] -translate-x-1/2 rounded-t-[60%] bg-[#ffc83d] opacity-80" aria-hidden="true" />
      <div className="container-page relative py-20 md:py-28">
        <Reveal className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink/60">
              Let&apos;s work together
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-ink/70">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to={primary.to} className="btn-primary">
              {primary.label}
              <LuArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to={secondary.to}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:bg-[#fffaf0]"
            >
              {secondary.label}
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}