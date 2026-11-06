import { Link } from "react-router-dom";
import {
  LuArrowUpRight,
  LuCode,
  LuGlobe,
  LuMonitorSmartphone,
  LuPenTool,
  LuServer,
  LuShoppingBag,
} from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import { expertise } from "../data/expertise";
import { services } from "../data/services";

const serviceIcons = {
  "web-design-development": LuGlobe,
  "uiux-design": LuPenTool,
  "mobile-app-development": LuMonitorSmartphone,
  "fullstack-development": LuCode,
  "api-development": LuServer,
  "ecommerce-development": LuShoppingBag,
};

export default function Expertise() {
  const featuredServices = services.slice(0, 6);

  return (
    <section id="expertise" className="border-b border-line bg-white">
      <div className="container-page py-16 md:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Expertise</p>
            <h2 className="display-lg mt-5 max-w-2xl">
              What I bring to the table.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={80}>
            <p className="body-lg max-w-md lg:ml-auto">
              Four connected areas of practice, shaped by real product work and a
              belief that the best technology is both useful and considered.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => {
            const Icon = serviceIcons[service.slug] || LuCode;
            return (
              <Reveal key={service.slug} delay={(index % 3) * 60}>
                <article className="premium-card group flex h-full flex-col">
                  <span className="icon-badge">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-ink">
                    <Link
                      to={`/services/${service.slug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary"
                  >
                    Learn more
                    <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="max-w-xl text-sm leading-relaxed text-muted">
            Need a particular combination of design and engineering? I&apos;m happy
            to talk through the shape of the work.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services" className="arrow-link shrink-0">
              All services
              <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/#contact" className="arrow-link shrink-0">
              Start a conversation
              <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-line pt-10">
          <Reveal>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Areas of practice
            </p>
          </Reveal>
          <div className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((area, index) => (
              <Reveal key={area.number} delay={index * 50}>
                <div className="border-t-2 border-accent-bright pt-4">
                  <p className="font-display text-sm font-bold text-accent">
                    {area.number}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {area.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
