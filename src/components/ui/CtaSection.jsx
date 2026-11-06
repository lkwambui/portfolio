import { Link } from "react-router-dom";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import Reveal from "./Reveal";

export default function CtaSection({
  title = "Have an idea worth building?",
  description = "Tell me about the product you want to design and build. I'll help you take it from concept to launch.",
  primary = { label: "Start a project", to: "/contact" },
  secondary = { label: "View projects", to: "/projects" },
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-primary text-white">
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-accent-bright/20"
        aria-hidden="true"
      />
      <div className="container-page relative py-16 md:py-24">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-bright">
              Let&apos;s work together
            </p>
            <h2 className="display-lg mt-5 max-w-2xl text-white">{title}</h2>
            {description && (
              <p className="mt-5 max-w-xl text-[0.98rem] leading-[1.85] text-white/65">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Link to={primary.to} className="btn-primary">
              {primary.label}
              <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to={secondary.to}
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-bright hover:text-accent-bright"
            >
              {secondary.label}
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
