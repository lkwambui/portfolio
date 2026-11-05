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
    <section className="border-t border-line bg-ivory">
      <div className="container-page py-16 md:py-24">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-8">
            <p className="eyebrow">Let&apos;s work together</p>
            <h2 className="display-lg mt-5 max-w-2xl">{title}</h2>
            {description && (
              <p className="mt-5 max-w-xl text-[0.98rem] leading-[1.85] text-muted">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Link to={primary.to} className="btn-primary">
              {primary.label}
              <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to={secondary.to} className="btn-outline">
              {secondary.label}
              <LuArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
