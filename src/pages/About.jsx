import { Link } from "react-router-dom";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import aboutPhoto from "../assets/aboutme/aboutme_2.webp";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaSection from "../components/ui/CtaSection";
import TechnologyList from "../components/ui/TechnologyList";
import { site } from "../data/site";
import { technologyGroups } from "../data/technologies";
import { experience } from "../data/experience";

const designTools = [
  "Figma",
  "UI/UX Design",
  "Prototyping",
  "Design Systems",
  "Responsive Design",
  "GIMP",
];

function PortraitBlock() {
  return (
    <Reveal className="relative">
      <div className="absolute -left-3 -top-3 h-full w-full border border-primary/15" aria-hidden="true" />
      <img
        src={aboutPhoto}
        alt="Portrait of Lucy Kamau"
        className="relative aspect-[3/2] w-full object-cover"
      />
    </Reveal>
  );
}

export default function About() {
  usePageMeta({
    title: "About",
    description:
      "Lucy Kamau is a UI/UX designer and full-stack developer based in Kenya, working across design, development and digital product strategy.",
    path: "/about",
  });

  return (
    <>
      <section className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              I design products, then I build the technology behind them.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              I&apos;m Lucy Kamau — a UI/UX designer, web designer and full-stack
              developer based in {site.location}. For most of my career I&apos;ve
              designed interfaces. What I enjoy most is going one step further and
              building the product myself.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <PortraitBlock />
        </div>
      </section>

      <section className="border-t border-primary/15 bg-cream">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Who I am" title="A designer who codes." />
            </div>
            <div className="prose-body space-y-5 lg:col-span-7">
              <p>
                I started in design and fell into development the way many people
                do — I wanted to see the interfaces I designed actually work. That
                curiosity turned into a career where I move between Figma and code
                in the same afternoon.
              </p>
              <p>
                I&apos;ve worked as a UI/UX designer on digital products, built
                websites for businesses of every size, supported office systems,
                and contributed to a SACCO management system from the database up.
                Today I work across the whole product: understanding the business,
                designing the experience, and building frontend, backend and
                payment integrations.
              </p>
              <p>
                My approach is practical. I care less about decoration and more
                about whether the product solves a real problem, is easy to use,
                and can actually be built and maintained.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Philosophy" title="Design and development are one conversation." />
          </div>
          <div className="prose-body space-y-5 lg:col-span-7">
            <p>
              The biggest failures in digital products usually aren&apos;t visual —
              they&apos;re gaps between what was designed, what was built and what
              the business actually needed. Because I design and develop, I can
              close those gaps.
            </p>
            <p>
              When I design, I think about structure and user flows first. When I
              build, I think about the interface I designed as a working system.
              The result is products where the UI, the experience and the
              technology are consistent with each other.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-primary/15 bg-cream">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Background"
            title="Professional experience."
            description="Where I've worked and what I did there."
          />
          <div className="mt-12 space-y-0">
            {experience.map((job, index) => (
              <Reveal
                key={`${job.company}-${job.role}`}
                delay={index * 40}
                className="grid gap-4 border-t border-primary/15 py-8 last:border-b sm:grid-cols-12"
              >
                <div className="sm:col-span-4">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{job.company}</p>
                  <p className="mt-1 text-xs text-ink/55">
                    {job.period} · {job.location}
                  </p>
                </div>
                <ul className="space-y-2 sm:col-span-8">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-ink/70">
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Education</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
                Rift Valley Institute of Science and Technology
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                Diploma in Information Communication Technology, 2018 — 2022
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="eyebrow">Top skills</p>
              <ul className="mt-3 space-y-2 text-sm text-ink/70">
                <li>Wireframing and prototyping</li>
                <li>E-commerce design and development</li>
                <li>Web development and design systems</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <SectionHeading eyebrow="Skills & tools" title="What I work with." />
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group, index) => (
            <Reveal key={group.name} delay={index * 50}>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary">
                {group.name}
              </p>
              <TechnologyList items={group.items} className="mt-4" />
            </Reveal>
          ))}
          <Reveal delay={250}>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Design tools
            </p>
            <TechnologyList items={designTools} className="mt-4" />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-primary/15 bg-primary text-white">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
                  LogicoreX
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
                  Work with LogicoreX — an agency building systems for Kenyan
                  businesses.
                </h2>
                <p className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-white/70">
                  Through LogicoreX I&apos;ve helped build business systems for
                  SACCOs, SMEs, retailers and farmers — from POS terminals
                  integrated with eTIMS to marketplaces and CRM tools. It&apos;s
                  where my design background and development skills meet real
                  business operations.
                </p>
                <Link
                  to="/projects/logicorex"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white"
                >
                  View the LogicoreX case study
                  <LuArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={100}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
                  Mentoring &amp; education
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
                  I care about teaching and digital education.
                </h2>
                <p className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-white/70">
                  I&apos;ve trained staff on systems, helped teams understand the
                  software they use, and I&apos;m interested in mentoring designers
                  and developers who are starting out — especially making the jump
                  from design to development.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-6 border border-primary/15 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Want the full picture?
            </h2>
            <p className="mt-2 text-sm text-ink/65">
              Download my CV, or read the full HTML resume.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.cv} download="Lucy_Kamau_CV.pdf" className="btn-dark">
              <LuDownload className="h-4 w-4" />
              Download CV
            </a>
            <Link to="/resume" className="btn-outline">
              View resume
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaSection
        title="Let's work together."
        description="If you have a product to design, build or rethink, I'd like to hear about it."
      />
    </>
  );
}