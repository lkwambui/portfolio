import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  as: Tag = "h1",
  children,
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-primary text-white">
      <div
        className="pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-accent-bright/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-accent-bright/10"
        aria-hidden="true"
      />
      <div className="container-page relative py-14 md:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-bright">
              {eyebrow}
            </p>
          )}
          <Tag className="mt-5 font-display text-[clamp(2.1rem,4.6vw,3.8rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-white">
            {title}
          </Tag>
          {description && (
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-[1.85] text-white/65">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
