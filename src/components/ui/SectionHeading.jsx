import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  as: Tag = "h2",
}) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <div className={align === "center" ? "flex flex-col items-center gap-3" : "flex flex-col gap-3"}>
          <span className="h-1 w-12 rounded-full bg-accent-bright" aria-hidden="true" />
          <p className="eyebrow">{eyebrow}</p>
        </div>
      )}
      <Tag className="max-w-2xl font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-ink">
        {title}
      </Tag>
      {description && <p className="prose-body max-w-xl">{description}</p>}
    </Reveal>
  );
}
