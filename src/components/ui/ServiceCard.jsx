import { Link } from "react-router-dom";
import {
  LuArrowUpRight,
  LuCheck,
  LuCode,
  LuGlobe,
  LuLayoutDashboard,
  LuLightbulb,
  LuMonitorSmartphone,
  LuPenTool,
  LuPlugZap,
  LuServer,
  LuShoppingBag,
  LuSparkles,
} from "react-icons/lu";
import Reveal from "./Reveal";

const serviceIcons = {
  "web-design-development": LuGlobe,
  "uiux-design": LuPenTool,
  "mobile-app-development": LuMonitorSmartphone,
  "fullstack-development": LuCode,
  "api-development": LuServer,
  "payment-integrations": LuPlugZap,
  "dashboard-admin-systems": LuLayoutDashboard,
  "ecommerce-development": LuShoppingBag,
  "technical-consultancy": LuLightbulb,
  "digital-transformation": LuSparkles,
  "brand-graphic-design": LuPenTool,
  "digital-product-strategy": LuLightbulb,
  "coding-education-mentorship": LuCode,
};

export default function ServiceCard({ service, projects = [] }) {
  const Icon = serviceIcons[service.slug] || LuCode;

  return (
    <Reveal className="h-full">
      <article className="premium-card group flex h-full flex-col">
        <span className="icon-badge">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>

        <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
          <Link
            to={`/services/${service.slug}`}
            className="transition-colors hover:text-primary"
          >
            {service.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>

        <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
          What&apos;s included
        </p>
        <ul className="mt-3 space-y-2.5">
          {service.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
              <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>

        {service.technologies?.length > 0 && (
          <div className="mt-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Built with
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-paper px-2.5 py-1 text-[0.7rem] font-medium text-ink/70"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {projects.length > 0 && (
          <div className="mt-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Relevant work
            </p>
            <ul className="mt-2 space-y-1.5">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/75 transition-colors hover:text-primary"
                  >
                    {project.title}
                    <LuArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Learn more
            <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-primary"
          >
            Discuss it
            <LuArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
