import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { LuArrowDown, LuArrowUpRight, LuCode, LuMapPin, LuPenTool } from "react-icons/lu";
import { homeContent } from "../data/homeContent";
import { site, socials } from "../data/site";
import portrait from "../assets/home/lucy-kamau.jpeg";
import { fadeUp, imageReveal, staggerContainer } from "../lib/motion";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <m.section
      id="home"
      className="relative overflow-hidden border-b border-line bg-paper"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-accent-bright/30 sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div className="container-page py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10 xl:gap-16">
          <m.div className="relative z-10" variants={staggerContainer}>
            <m.div
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-medium text-muted shadow-soft"
              variants={fadeUp}
            >
              <span className="h-2 w-2 rounded-full bg-accent-bright" aria-hidden="true" />
              {hero.eyebrow}
            </m.div>

            <m.p
              className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent"
              variants={fadeUp}
            >
              Hello, I&apos;m Lucy Kamau.
            </m.p>
            <m.h1
              className="mt-3 max-w-3xl font-display text-[clamp(2.55rem,4.7vw,4.1rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-ink"
              variants={staggerContainer}
            >
              <m.span className="block" variants={fadeUp}>
                Designing thoughtful
              </m.span>
              <m.span className="block text-accent" variants={fadeUp}>
                interfaces.
              </m.span>
              <m.span className="mt-1 block" variants={fadeUp}>
                Engineering powerful
              </m.span>
              <m.span className="block text-accent" variants={fadeUp}>
                digital products.
              </m.span>
            </m.h1>

            <m.p
              className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
              variants={fadeUp}
            >
              I&apos;m a Lead Software Developer and Product Designer at LogicoreX,
              combining creativity, engineering and strategic thinking to build
              meaningful digital experiences.
            </m.p>

            <m.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
              <Link to={hero.primaryCta.to} className="btn-primary group">
                Explore my work
                <LuArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link to={hero.secondaryCta.to} className="btn-outline">
                Let&apos;s work together
              </Link>
            </m.div>

            <m.div
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted"
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-2">
                <LuMapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.location}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-accent-bright sm:block" aria-hidden="true" />
              <a
                href={site.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-primary"
              >
                {site.company}
              </a>
            </m.div>

            <m.div className="mt-8 flex flex-wrap gap-2" variants={fadeUp}>
              {[
                { label: "Product design", icon: LuPenTool },
                { label: "Full-stack development", icon: LuCode },
              ].map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-medium text-ink"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </m.div>
          </m.div>

          <m.div
            className="relative mx-auto w-full max-w-[27rem] pb-4 lg:ml-auto lg:max-w-[31rem]"
            variants={imageReveal}
            data-motion="hero-image"
          >
            <div
              className="absolute -right-2 top-8 h-[19rem] w-[19rem] rounded-full bg-accent-bright sm:-right-4 sm:h-[23rem] sm:w-[23rem] lg:h-[25rem] lg:w-[25rem]"
              aria-hidden="true"
            />
            <div
              className="absolute -left-4 bottom-6 h-24 w-24 rounded-full border-[10px] border-primary/15 sm:h-32 sm:w-32"
              aria-hidden="true"
            />

            <figure className="relative overflow-hidden rounded-[2.25rem] border border-line bg-ivory p-2.5 shadow-[0_28px_80px_rgba(25,59,42,0.16)] sm:p-3">
              <img
                src={portrait}
                alt="Lucy Kamau, Lead Software Developer and Product Designer"
                width="1080"
                height="1620"
                {...{ fetchpriority: "high" }}
                decoding="async"
                className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[center_18%]"
              />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl border border-line bg-white px-4 py-3.5 shadow-soft sm:bottom-6 sm:left-6 sm:right-6">
                <div>
                  <p className="font-display text-base font-semibold tracking-tight text-ink">
                    Lucy Kamau
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    Software, design &amp; product strategy
                  </p>
                </div>
              </figcaption>
            </figure>

            <div className="absolute -left-3 top-[18%] z-10 hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-lift sm:flex lg:-left-8">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-accent-bright">
                <LuPenTool className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Thoughtful by design
            </div>
            <div className="absolute -right-2 top-[52%] z-10 hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-lift sm:flex lg:-right-6">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-accent-bright">
                <LuCode className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Built to work
            </div>
          </m.div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Social profiles">
            {socials.slice(0, 3).map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-xs font-medium text-muted transition-colors hover:text-primary"
                >
                  {social.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-xs font-medium text-muted transition-colors hover:text-primary"
              >
                Email
              </a>
            </li>
          </ul>
          <a
            href="#introduction"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-ink"
          >
            More about Lucy
            <LuArrowDown className="h-4 w-4 text-accent" aria-hidden="true" />
          </a>
        </div>
      </div>
    </m.section>
  );
}
