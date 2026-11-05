import Reveal from "../components/ui/Reveal";
import { homeContent } from "../data/homeContent";

export default function Intro() {
  const { intro } = homeContent;

  return (
    <section id="introduction" className="border-b border-line bg-paper">
      <div className="container-page py-16 md:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">{intro.eyebrow}</p>
              <h2 className="display-md mt-5 max-w-sm">{intro.heading}</h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {intro.body.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 80}>
                  <p className="text-[0.98rem] leading-[1.85] text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={160} className="mt-12 border-t border-line pt-8 md:mt-16 md:pt-10">
              <p className="max-w-3xl font-display text-[clamp(1.6rem,3.2vw,2.8rem)] font-semibold leading-[1.16] tracking-[-0.04em] text-ink">
                <span className="mr-2 text-accent">“</span>
                {intro.statement}
                <span className="ml-1 text-accent">”</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
