import { Link } from "react-router-dom";
import { LuDownload, LuPrinter } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import { site } from "../data/site";
import { experience } from "../data/experience";
import { technologyGroups } from "../data/technologies";
import { projects } from "../data/projects";

const selectedProjects = [
  "shopey",
  "logicorex",
  "airtime-scratch-system",
  "party-lounges",
  "farm-shop",
  "mygiftharbor",
].map((slug) => projects.find((p) => p.slug === slug));

function ResumeSection({ title, children }) {
  return (
    <section className="mt-12 print:mt-8">
      <h2 className="border-b-2 border-ink pb-2 font-display text-lg font-semibold tracking-tight text-ink">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ResumeItem({ role, company, period, location, points }) {
  return (
    <div className="mb-8 print:mb-6 print:break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-semibold text-ink">
          {role} <span className="text-primary">·</span>{" "}
          <span className="font-medium text-ink/80">{company}</span>
        </h3>
        <p className="text-xs font-medium text-ink/55">
          {period} {location && `· ${location}`}
        </p>
      </div>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink/75">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  usePageMeta({
    title: "Resume",
    description:
      "Lucy Kamau's resume — UI/UX designer and full-stack developer with experience across digital products, websites, business systems and e-commerce.",
    path: "/resume",
  });

  return (
    <div className="container-page py-16 md:py-24">
      <div className="no-print mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Resume</p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            An HTML resume you can print.
          </h1>
          <p className="mt-3 max-w-xl text-sm text-ink/65">
            The full details are also available as a PDF if you prefer.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={site.cv} download="Lucy_Kamau_CV.pdf" className="btn-dark">
            <LuDownload className="h-4 w-4" />
            Download CV
          </a>
          <button type="button" onClick={() => window.print()} className="btn-outline">
            <LuPrinter className="h-4 w-4" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      <article className="border border-primary/15 bg-white p-8 sm:p-12 md:p-16 print:border-0 print:p-0">
        <header className="border-b border-primary/15 pb-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
            Lucy Kamau
          </h2>
          <p className="mt-1 text-sm font-medium text-primary">
            UI/UX Designer · Web Designer · Web Developer · Front-End Developer
          </p>
          <p className="mt-3 text-sm text-ink/65">
            {site.location} · {site.email} · {site.phoneDisplay} ·{" "}
            <a href="https://github.com/lkwambui" className="text-primary underline-offset-2 hover:underline">
              github.com/lkwambui
            </a>{" "}
            ·{" "}
            <a
              href="https://www.linkedin.com/in/lucy-kamau-87bb75209/"
              className="text-primary underline-offset-2 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </header>

        <ResumeSection title="Profile">
          <p className="max-w-3xl text-sm leading-relaxed text-ink/80">
            Product designer and full-stack developer based in Kenya. I design
            user-centred digital products and build the technology behind them —
            from user research and design systems to frontend applications,
            backend services, databases and payment integrations.
          </p>
        </ResumeSection>

        <ResumeSection title="Experience">
          {experience.map((job) => (
            <ResumeItem key={`${job.company}-${job.role}`} {...job} />
          ))}
        </ResumeSection>

        <ResumeSection title="Selected Projects">
          <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-2">
            {selectedProjects.map((project) => (
              <div key={project.slug} className="border border-primary/15 p-4 print:break-inside-avoid">
                <h3 className="text-sm font-semibold text-ink">{project.title}</h3>
                <p className="mt-1 text-xs text-ink/60">{project.category}</p>
                <p className="mt-2 text-xs leading-relaxed text-ink/70">
                  {project.description}
                </p>
                {project.technologies.length > 0 && (
                  <p className="mt-2 text-xs font-medium text-primary">
                    {project.technologies.join(" · ")}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink/55">
            Full case studies:{" "}
            <Link to="/projects" className="text-primary underline-offset-2 hover:underline">
              lucykamau.netlify.app/projects
            </Link>
          </p>
        </ResumeSection>

        <ResumeSection title="Skills">
          <ul className="grid grid-cols-1 gap-3 text-sm text-ink/80 sm:grid-cols-2 print:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Wireframing &amp; prototyping
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> UI/UX design &amp; design systems
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> E-commerce design &amp; development
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Web development
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Full-stack development
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> System support &amp; training
            </li>
          </ul>
        </ResumeSection>

        <ResumeSection title="Technologies">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3">
            {technologyGroups.map((group) => (
              <div key={group.name}>
                <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink/50">
                  {group.name}
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-ink/75">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-semibold text-ink">
              Rift Valley Institute of Science and Technology
            </h3>
            <p className="text-xs font-medium text-ink/55">September 2018 — December 2022</p>
          </div>
          <p className="mt-1 text-sm text-ink/75">
            Diploma in Information Communication Technology
          </p>
        </ResumeSection>
      </article>
    </div>
  );
}