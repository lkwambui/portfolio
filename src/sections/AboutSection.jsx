import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { LuArrowUpRight, LuCode, LuDownload, LuPenTool } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import portrait from "../assets/home/lucy-kamau.jpeg";
import { homeContent } from "../data/homeContent";
import { site } from "../data/site";
import { experience } from "../data/experience";
import { selectedWork } from "../data/selectedWork";
import { imageReveal } from "../lib/motion";

export default function AboutSection() {
  const { about } = homeContent;

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-primary text-white"
    >
      <div
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full border border-accent-bright/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-primary-dark/50"
        aria-hidden="true"
      />

      <div className="container-page relative py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <figure className="relative mx-auto max-w-[26rem] lg:mx-0">
              <div
                className="absolute -right-4 -top-4 h-40 w-40 rounded-full bg-accent-bright sm:h-52 sm:w-52"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border-[10px] border-white/15 sm:h-32 sm:w-32"
                aria-hidden="true"
              />
              <m.div
                data-motion="about-image"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={imageReveal}
                className="image-reveal relative overflow-hidden rounded-[2rem] border border-white/20 bg-primary-dark p-2.5 shadow-[0_24px_70px_rgba(0,0,0,0.25)]"
              >
                <img
                  src={portrait}
                  alt="Lucy Kamau, Lead Software Developer and Product Designer"
                  width="1080"
                  height="1620"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[center_18%]"
                />
              </m.div>

              <div className="absolute -left-2 top-[16%] hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-lift sm:flex">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-accent-bright">
                  <LuPenTool className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                Product design
              </div>
              <div className="absolute -right-2 top-[56%] hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-lift sm:flex">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-accent-bright">
                  <LuCode className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                Full-stack
              </div>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-bright">
                {about.eyebrow}
              </p>
              <h2 className="display-lg mt-5 max-w-xl text-white">{about.heading}</h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {about.body.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 60}>
                  <p className="max-w-2xl text-[0.96rem] leading-[1.85] text-white/70">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={180} className="mt-7 border-l-2 border-accent-bright pl-5">
              <p className="max-w-xl font-display text-xl font-semibold leading-[1.4] tracking-[-0.03em] text-white">
                {about.statement}
              </p>
            </Reveal>

            <Reveal delay={210} className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {[
                { value: "03", label: "Connected disciplines" },
                { value: String(experience.length).padStart(2, "0"), label: "Career roles" },
                { value: String(selectedWork.length).padStart(2, "0"), label: "Featured projects" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/5 p-3.5 sm:p-4"
                >
                  <p className="font-display text-2xl font-semibold tracking-tight text-accent-bright">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.65rem] leading-snug text-white/70 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-4">
              <a href={site.cv} download="Lucy_Kamau_CV.pdf" className="btn-primary">
                <LuDownload className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-bright hover:text-accent-bright"
              >
                More about my journey
                <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
