import { useState } from "react";
import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import ProjectFilter from "../components/projects/ProjectFilter";
import CtaSection from "../components/ui/CtaSection";
import { designItems, designFilters } from "../data/design";

function DesignCard({ item }) {
  return (
    <article className="group flex flex-col">
      <Link
        to={item.href}
        className="relative block aspect-[4/3] overflow-hidden border border-primary/15 bg-[#f0f0f0]"
        aria-label={item.exploration ? `${item.title} — design exploration` : `${item.title} — view project`}
      >
        <img
          src={item.image.src}
          alt={item.image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {item.exploration && (
          <span className="absolute left-3 top-3 border border-white/40 bg-white/90 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink">
            Exploration
          </span>
        )}
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-accent text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <LuArrowUpRight className="h-4 w-4" />
        </span>
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
          {item.kind}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
          <Link to={item.href} className="transition-colors hover:text-primary">
            {item.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
      </div>
    </article>
  );
}

export default function Design() {
  usePageMeta({
    title: "UI/UX Design",
    description:
      "Lucy Kamau's UI/UX design portfolio — landing pages, dashboards, mobile interfaces, e-commerce designs and design systems.",
    path: "/ui-ux",
  });

  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? designItems
      : designItems.filter((item) => item.kind === activeFilter);

  return (
    <>
      <section className="bg-cream">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="UI/UX Design"
            title="Interfaces designed to be used, not just looked at."
            description="Landing pages, dashboards, mobile interfaces, e-commerce designs and design systems — with structure, flows and the user in mind."
            as="h1"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16 md:py-24">
          <Reveal className="mt-2">
            <ProjectFilter
              filters={designFilters}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </Reveal>

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, index) => (
              <Reveal key={item.id} delay={(index % 3) * 60}>
                <DesignCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="How I design"
            title="From structure to interface."
            className="[&_h2]:text-white [&_.eyebrow]:text-accent"
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
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
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="border-t border-white/15 pt-6">
                <span className="font-display text-3xl font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}