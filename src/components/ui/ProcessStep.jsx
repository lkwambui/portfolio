import Reveal from "./Reveal";

export default function ProcessStep({ step, index }) {
  return (
    <Reveal
      delay={index * 60}
      className="group border-t border-primary/15 pt-8"
    >
      <div className="flex items-baseline justify-between">
        <span className="font-display text-4xl font-semibold text-ink/20 transition-colors group-hover:text-primary sm:text-5xl">
          {step.step}
        </span>
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/40">
          Phase {index + 1}
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
        {step.title}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/70">
        {step.description}
      </p>
    </Reveal>
  );
}