import { Link } from "react-router-dom";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import ServiceCard from "../components/ui/ServiceCard";
import CtaSection from "../components/ui/CtaSection";
import { services } from "../data/services";
import { getProject } from "../data/projects";

const engagementSteps = [
  {
    title: "Tell me about the project",
    body: "Describe the product, the business and what you're trying to achieve.",
  },
  {
    title: "We scope it together",
    body: "I structure requirements, recommend an approach and give you a clear plan.",
  },
  {
    title: "I design and build",
    body: "From design to deployment, the product takes shape and stays honest to the plan.",
  },
];

export default function Services() {
  usePageMeta({
    title: "Services",
    description:
      "Web design, UI/UX design, full-stack development, e-commerce, branding and digital product strategy services from Lucy Kamau.",
    path: "/services",
  });

  return (
    <>
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Design and development services for real products."
          description="From a single website to a complete business system - each engagement is structured, transparent and built to solve a real problem."
          as="h1"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              projects={service.projects.map(getProject).filter(Boolean)}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-primary/15 bg-cream">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="How we work"
            title="A simple, honest engagement."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {engagementSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70} className="border-t border-primary/15 pt-6">
                <span className="font-display text-3xl font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 border border-primary/15 bg-white p-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Not sure what you need?
              </h2>
              <p className="mt-2 max-w-md text-sm text-ink/65">
                A short consultation helps. We can talk through the idea, the
                options and what a realistic path to launch looks like.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Book a consultation
              <LuArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">My process</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink">
              See exactly how a project moves forward.
            </h2>
          </Reveal>
          <Reveal delay={80} className="flex flex-col items-start justify-center">
            <p className="prose-body max-w-md">
              Every project follows the same six phases - from discovery and
              definition to design, build, test and launch.
            </p>
            <Link
              to="/process"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View the process
              <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}