import { Link } from "react-router-dom";
import { LuArrowUpRight, LuCheck } from "react-icons/lu";
import Reveal from "./Reveal";

export default function ServiceCard({ service, projects = [] }) {
  return (
    <Reveal className="flex h-full flex-col border border-primary/15 bg-white p-7">
      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">{service.summary}</p>

      <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/45">
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
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/45">
            Built with
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-primary/15 px-2.5 py-1 text-[0.7rem] font-medium text-ink/70"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {projects.length > 0 && (
        <div className="mt-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/45">
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

      <div className="mt-auto pt-6">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Discuss this service
          <LuArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </Reveal>
  );
}