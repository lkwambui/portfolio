import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { LuArrowDown, LuArrowUpRight } from "react-icons/lu";
import { homeContent } from "../data/homeContent";
import { site, socials } from "../data/site";
import heroPhoto from "../assets/home/home_2.webp";
import { fadeUp, imageReveal, staggerContainer } from "../lib/motion";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <m.section
      id="home"
      className="relative overflow-hidden border-b border-line"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container-page pt-10 pb-12 sm:pt-14 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <m.div className="flex flex-col lg:col-span-7" variants={staggerContainer}>
            <m.div className="flex flex-wrap items-center gap-3" variants={fadeUp}>
              <span className="h-2 w-2 bg-accent" aria-hidden="true" />
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink/70">
                {hero.eyebrow}
              </p>
            </m.div>

            <m.h1 className="display-xl mt-7 text-balance" variants={staggerContainer}>
              <m.span className="block" variants={fadeUp}>{hero.headline[0]}</m.span>
              <m.span className="mt-2 block text-ink/70" variants={fadeUp}>{hero.headline[1]}</m.span>
            </m.h1>

            <m.p className="mt-8 max-w-xl text-[1.02rem] leading-[1.8] text-muted sm:text-lg" variants={fadeUp}>
              {hero.intro}
            </m.p>

            <m.div className="mt-8 flex flex-wrap items-center gap-3" variants={fadeUp}>
              <Link to={hero.primaryCta.to} className="btn-primary group">
                {hero.primaryCta.label}
                <LuArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
              <Link to={hero.secondaryCta.to} className="btn-outline">
                {hero.secondaryCta.label}
              </Link>
            </m.div>

            <m.div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5" variants={fadeUp}>
              <p className="text-[0.72rem] font-medium text-muted">
                {hero.designation}
              </p>
              <span className="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />
              <p className="text-[0.72rem] font-medium text-muted">{hero.location}</p>
            </m.div>

            <m.div className="mt-auto flex flex-wrap items-center justify-between gap-5 pt-10 sm:pt-14" variants={fadeUp}>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Social profiles">
                {socials.slice(0, 4).map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="me noopener noreferrer"
                      className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-ink/55 transition-colors hover:text-accent"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-ink/55 transition-colors hover:text-accent"
                  >
                    Email
                  </a>
                </li>
              </ul>

              <a
                href="#introduction"
                className="group inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-ink/55 transition-colors hover:text-accent"
              >
                Scroll
                <span className="flex h-8 w-8 items-center justify-center border border-line transition-colors group-hover:border-accent">
                  <LuArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            </m.div>
          </m.div>

          <m.div className="lg:col-span-5" variants={imageReveal} data-motion="hero-image">
            <figure className="relative mx-auto w-full max-w-md lg:ml-auto lg:max-w-none">
              <div className="absolute -bottom-3 -left-3 h-full w-full border border-accent/35" aria-hidden="true" />
              <div className="relative overflow-hidden border border-line bg-ivory p-2.5">
                <img
                  src={heroPhoto}
                  alt="A bright creative workspace with a laptop, notebook and desk"
                  width="3064"
                  height="4400"
                  {...{ fetchpriority: "high" }}
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
                <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 bg-paper/95 px-4 py-3 backdrop-blur-sm">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-accent">
                      Lucy Kamau
                    </p>
                    <p className="mt-1 text-[0.68rem] font-medium text-ink/70">
                      Software &amp; Product Design
                    </p>
                  </div>
                  <span className="font-display text-xl font-semibold tracking-tight text-ink/30">
                    01
                  </span>
                </figcaption>
              </div>
            </figure>
          </m.div>
        </div>
      </div>
    </m.section>
  );
}
