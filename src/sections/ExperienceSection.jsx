import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import { experience, milestones } from "../data/experience";

export default function ExperienceSection() {
  const roles = experience.slice(0, 4);

  return (
    <section id="experience" className="border-b border-line bg-paper">
      <div className="container-page py-16 md:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">Experience &amp; Journey</p>
              <h2 className="display-lg mt-5 max-w-sm">Experience &amp; journey.</h2>
              <p className="mt-5 max-w-sm text-[0.96rem] leading-[1.85] text-muted">
                A professional path shaped by design thinking, technical delivery
                and a willingness to work across the whole product.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-10 border-t border-line pt-6">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                Education
              </p>
              {milestones.map((item) => (
                <div key={item.title} className="mt-3">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent">
                    {item.period}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-ink">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{item.place}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {roles.map((job, index) => (
                <Reveal
                  key={`${job.company}-${job.role}`}
                  delay={index * 50}
                  className="grid gap-4 border-b border-line py-7 sm:grid-cols-12 sm:gap-6"
                >
                  <div className="sm:col-span-3">
                    <div className="flex items-center gap-2">
                      {job.current && (
                        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                      )}
                      <p
                        className={`text-[0.64rem] font-semibold uppercase tracking-[0.16em] ${
                          job.current ? "text-accent" : "text-ink/45"
                        }`}
                      >
                        {job.period}
                      </p>
                    </div>
                    <p className="mt-1 text-xs text-ink/50">{job.location}</p>
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-ink">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {job.summary}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8">
              <Link to="/experience" className="arrow-link">
                View the full experience
                <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
