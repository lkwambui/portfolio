import { Link } from "react-router-dom";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuPenTool,
  LuGlobe,
  LuLayers,
  LuBoxes,
  LuArrowDown,
} from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import heroPhoto from "../assets/home/home_2.webp";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaSection from "../components/ui/CtaSection";
import Wave from "../components/ui/Wave";
import FeaturedProject from "../components/projects/FeaturedProject";
import { featuredProjects } from "../data/projects";
import { technologyGroups } from "../data/technologies";

const capabilities = [
  "UI/UX Design",
  "Web Development",
  "Full-Stack Development",
  "E-commerce",
  "Product Strategy",
];

const whatIDo = [
  {
    icon: LuPenTool,
    title: "UI/UX Design",
    description:
      "User flows, wireframes, prototypes, high-fidelity interfaces and design systems that make products intuitive.",
    tech: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: LuGlobe,
    title: "Web Development",
    description:
      "Responsive websites and modern web experiences — designed to feel premium and built to perform.",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: LuLayers,
    title: "Full-Stack Development",
    description:
      "Frontend applications, backend APIs, databases, authentication and business logic — built as one product.",
    tech: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    icon: LuBoxes,
    title: "Digital Product Development",
    description:
      "Taking products from concept to implementation — e-commerce, dashboards, business systems and integrations.",
    tech: ["M-Pesa Daraja", "Stripe", "REST APIs"],
  },
];

const pipeline = [
  { label: "Idea", note: "Understand the business and the problem" },
  { label: "Design", note: "Flows, structure, interfaces and prototypes" },
  { label: "Build", note: "Frontend, backend, APIs and integrations" },
  { label: "Launch", note: "Deployment, testing and iteration" },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the business, the users and the requirements before anything is designed or built.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Structure the product and design the experience — flows, wireframes, UI and prototypes.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Build the frontend, backend, APIs and integrations that bring the design to life.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Test, deploy and hand over a product that works — then iterate based on real usage.",
  },
];

const stats = [
  { value: "15+", label: "Projects designed & built" },
  { value: "25+", label: "Technologies in production" },
  { value: "7", label: "UI/UX products designed" },
  { value: "2018", label: "Building since" },
];

function Hero() {
  return (
    <section className="bg-primary-dark text-white">
      <div className="container-page grid items-center gap-14 pb-24 pt-16 md:pb-28 md:pt-24 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Lucy Kamau — Software Developer &amp; UI/UX Designer
          </p>
          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.06] tracking-tight sm:text-6xl md:text-[4rem]">
            Designing thoughtful interfaces.
            <span className="mt-2 block text-white/85">
              Engineering powerful digital products.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
            I design and build modern digital products, websites, web
            applications and user experiences — from the first sketch to a
            deployed system. I don&apos;t just design interfaces. I understand how
            to build them.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn-accent">
              View Projects
              <LuArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-primary-dark"
            >
              Let&apos;s Work Together
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white/80"
              >
                {cap}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140} className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div
              className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-white/20"
              aria-hidden="true"
            />
            <img
              src={heroPhoto}
              alt="Portrait of Lucy Kamau"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-6 -right-3 rounded-xl border border-white/15 bg-primary-dark/95 px-5 py-4 shadow-lg sm:-right-6">
              <p className="font-display text-2xl font-semibold text-accent">
                Design → Code
              </p>
              <p className="mt-0.5 text-xs text-white/70">
                Product, design &amp; engineering in one
              </p>
            </div>
            <span
              className="absolute -right-2 top-10 h-16 w-16 rounded-full bg-accent/20"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
      <Wave fill="#F5F3EC" />
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="bg-cream">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="A few products I've designed and built."
          />
          <Link
            to="/projects"
            className="hidden items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark md:inline-flex"
          >
            View all projects
            <LuArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 space-y-16 md:space-y-20">
          {featuredProjects.map((project, index) => {
            const variant =
              index === 0
                ? "full"
                : index % 2 === 1
                  ? "split"
                  : "split-reverse";
            return (
              <FeaturedProject
                key={project.slug}
                project={project}
                variant={variant}
                index={index}
              />
            );
          })}
        </div>

        <Reveal className="mt-14 flex justify-center md:hidden">
          <Link to="/projects" className="btn-outline">
            View all projects
            <LuArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="What I do"
          title="Design, build and ship complete digital products."
          description="Four disciplines, one continuous product flow — from interface to infrastructure."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={index * 60}
                className="group flex flex-col border border-primary/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_32px_-12px_rgba(15,85,80,0.25)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
                  {item.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/15 px-2.5 py-0.5 text-[0.68rem] font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DevelopmentStack() {
  return (
    <section className="bg-cream">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Development stack"
            title="The technologies I build with."
            description="Selected tools across the frontend, backend, data and integrations I use in production."
          />
          <Link
            to="/development"
            className="hidden items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark md:inline-flex"
          >
            See development work
            <LuArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologyGroups.map((group, index) => (
            <Reveal
              key={group.name}
              delay={index * 50}
              className="border border-primary/15 bg-white p-7"
            >
              <p className="flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {group.name}
              </p>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-sm text-ink/80"
                  >
                    <span className="text-accent">—</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
      <Wave fill="#0F5550" />
    </section>
  );
}

function DesignDevelopment() {
  return (
    <section className="bg-primary text-white">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Design + Development
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              I don&apos;t just design interfaces. I understand how to build them.
            </h2>
            <p className="mt-6 max-w-xl text-[0.975rem] leading-relaxed text-white/75">
              And I don&apos;t just build applications. I understand how users
              interact with them. That combination means the interface, the
              experience and the technology stay consistent through the whole
              product.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white"
            >
              More about my approach
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="lg:col-span-6">
            <div className="flex flex-col gap-3">
              {pipeline.map((stage, index) => (
                <Reveal
                  key={stage.label}
                  delay={index * 80}
                  className="flex items-center gap-5 rounded-xl border border-white/15 bg-primary-dark/50 p-5"
                >
                  <span className="font-display text-3xl font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {stage.label}
                    </h3>
                    <p className="text-sm text-white/65">{stage.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Wave fill="#F5F3EC" />
    </section>
  );
}

function Statistics() {
  return (
    <section className="bg-cream">
      <div className="container-page py-16 md:py-24">
        <div className="grid gap-px overflow-hidden border border-primary/15 bg-primary/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 60}
              className="bg-cream p-8 text-center sm:text-left"
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-ink/65">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="My process"
            title="From idea to launch, in four clear phases."
          />
          <Link
            to="/process"
            className="hidden items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark md:inline-flex"
          >
            See the full process
            <LuArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 60}
              className="group border border-primary/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_32px_-12px_rgba(15,85,80,0.25)]"
            >
              <span className="font-display text-4xl font-semibold text-primary/20 transition-colors group-hover:text-accent">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {step.description}
              </p>
              <span className="mt-5 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
                <LuArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                Step {String(index + 1).padStart(2, "0")}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta({
    title: "Software Developer & UI/UX Designer",
    description:
      "Lucy Kamau is a Software Developer and UI/UX Designer based in Kenya, designing and building modern digital products, websites, web applications and user experiences.",
    path: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Lucy Kamau",
      jobTitle: "Software Developer & UI/UX Designer",
      url: "https://lucykamau.netlify.app",
      knowsAbout: [
        "UI/UX Design",
        "Web Design",
        "Frontend Development",
        "Full-Stack Development",
        "E-commerce",
        "Product Strategy",
      ],
    },
  });

  return (
    <>
      <Hero />
      <SelectedWork />
      <WhatIDo />
      <DevelopmentStack />
      <DesignDevelopment />
      <Statistics />
      <Process />
      <CtaSection />
    </>
  );
}