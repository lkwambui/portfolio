import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaSection from "../components/ui/CtaSection";

const designPrinciples = [
  {
    title: "Research & structure",
    body: "Understanding the business and users, then mapping information architecture and flows before pixels.",
  },
  {
    title: "Interface design",
    body: "High-fidelity interfaces, design systems and prototypes that make the product tangible.",
  },
  {
    title: "Built to work",
    body: "Designs are produced with development in mind, so what's designed is what gets built.",
  },
];

export default function Design() {
  usePageMeta({
    title: "UI/UX Design",
    description:
      "Lucy Kamau's UI/UX design portfolio - landing pages, dashboards, mobile interfaces, e-commerce designs and design systems.",
    path: "/ui-ux",
  });

  return (
    <>
      <section className="bg-cream">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="UI/UX Design"
            title="Interfaces designed to be used, not just looked at."
            description="Landing pages, dashboards, mobile interfaces, e-commerce designs and design systems - with structure, flows and the user in mind."
            as="h1"
          />
        </div>
      </section>

      <section className="bg-white border-t border-primary/15">
        <div className="container-page py-16 md:py-24">
          <div className="mt-2 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Product interfaces",
                body: "Dashboards, admin panels and application interfaces built for real workflows.",
                count: "4 projects",
              },
              {
                title: "E-commerce design",
                body: "Storefronts, product pages and checkout experiences for online retailers.",
                count: "5 projects",
              },
              {
                title: "Brand & marketing",
                body: "Websites, landing pages and digital presence for businesses and organisations.",
                count: "6 projects",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 60} className="border-t border-primary/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.count}
                </p>
                <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
                  {item.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
                How I design
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-[1.12] tracking-tight sm:text-3xl">
                From structure to interface.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-0">
                {designPrinciples.map((item, index) => (
                  <Reveal key={item.title} delay={index * 70} className="flex items-start gap-6 border-t border-white/15 py-6 last:border-b">
                    <span className="font-display text-3xl font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 border border-primary/15 p-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                Want to see design work in context?
              </h2>
              <p className="mt-2 text-sm text-ink/65">
                Every project here includes both the designed outcome and the technology behind it.
              </p>
            </div>
            <Link to="/projects" className="btn-primary shrink-0">
              View projects
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}