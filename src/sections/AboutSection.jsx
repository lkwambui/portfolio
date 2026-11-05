import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import aboutPhoto from "../assets/aboutme/aboutme_2.webp";
import { homeContent } from "../data/homeContent";
import { site } from "../data/site";
import { imageReveal } from "../lib/motion";

export default function AboutSection() {
  const { about } = homeContent;

  return (
    <section id="about" className="border-b border-line bg-paper">
      <div className="container-page py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <figure className="relative">
              <m.div
                data-motion="about-image"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={imageReveal}
                className="image-reveal overflow-hidden border border-line bg-ivory"
              >
                <img
                  src={aboutPhoto}
                  alt="A mobile phone displaying a digital product mockup beside a notebook and pen"
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </m.div>
              <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
                <span>Lucy Kamau</span>
                <span>Nairobi, Kenya</span>
              </figcaption>
              <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                    Role
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/75">
                    Lead Software Developer &amp; Product Designer
                  </p>
                </div>
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                    Studio
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/75">LogicoreX</p>
                </div>
                <div>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                    Focus
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/75">
                    Product, design &amp; engineering
                  </p>
                </div>
              </div>
            </figure>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2 className="display-lg mt-5">{about.heading}</h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {about.body.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 60}>
                  <p className="text-[0.96rem] leading-[1.85] text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={180} className="mt-8 border-t border-line pt-7">
              <p className="max-w-xl font-display text-xl font-semibold leading-[1.35] tracking-[-0.03em] text-ink">
                {about.statement}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={site.cv}
                  download="Lucy_Kamau_CV.pdf"
                  className="btn-dark"
                >
                  <LuDownload className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
                <Link to="/about" className="arrow-link">
                  More about my journey
                  <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
