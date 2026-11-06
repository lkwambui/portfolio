import {
  LuCode,
  LuDatabase,
  LuLayers3,
  LuPalette,
  LuPlugZap,
} from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import { technologyGroups } from "../data/technologies";

const groupIcons = {
  Frontend: LuCode,
  Backend: LuLayers3,
  Databases: LuDatabase,
  Integrations: LuPlugZap,
  Design: LuPalette,
};

export default function TechnologySection() {
  return (
    <section id="skills" className="border-b border-line bg-white">
      <div className="container-page py-16 md:py-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow">Skills &amp; technologies</p>
            <h2 className="display-lg mt-4 max-w-2xl">
              A toolkit for the whole product.
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
              From early product thinking to production-ready interfaces and
              connected systems.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologyGroups.map((group, index) => {
            const Icon = groupIcons[group.name] || LuCode;
            return (
              <Reveal key={group.name} delay={(index % 3) * 55}>
                <article className="premium-card group h-full">
                  <div className="flex items-center justify-between gap-4">
                    <span className="icon-badge h-14 w-14">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-bold text-accent/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                    {group.name === "Design" ? "Design tools & practice" : group.name}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-ink/75 transition-colors hover:border-primary/30 hover:bg-primary hover:text-white"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-muted">
          Tools and technologies are drawn from the existing portfolio and project work.
        </p>
      </div>
    </section>
  );
}
