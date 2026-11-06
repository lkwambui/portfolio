import { Link } from "react-router-dom";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import { site } from "../data/site";
import portrait from "../assets/home/lucy-kamau.jpeg";

export default function ResumeSection() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-page py-14 md:py-20">
        <Reveal>
          <article className="relative overflow-hidden rounded-[2rem] bg-primary p-6 text-white shadow-card sm:p-9 lg:p-10">
            <div
              className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-accent-bright/20"
              aria-hidden="true"
            />
            <div className="relative grid items-center gap-6 sm:grid-cols-[auto_1fr_auto] sm:gap-7">
              <img
                src={portrait}
                alt=""
                width="1080"
                height="1620"
                loading="lazy"
                decoding="async"
                className="h-20 w-20 rounded-2xl border-2 border-accent-bright object-cover object-[center_18%] shadow-sm sm:h-24 sm:w-24"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-bright">
                  Resume
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight text-white">
                  Lucy Kamau
                </h2>
                <p className="mt-1 text-sm font-medium text-white/80">{site.role}</p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
                  Explore my experience across product design, software
                  development and digital product delivery.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 sm:justify-end">
                <a href={site.cv} download="Lucy_Kamau_CV.pdf" className="btn-primary">
                  <LuDownload className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
                <Link
                  to="/resume"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-bright hover:text-accent-bright"
                >
                  Full resume
                  <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
