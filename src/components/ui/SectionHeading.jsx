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
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="max-w-2xl font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-ink">
        {title}
      </Tag>
      {description && <p className="prose-body max-w-xl">{description}</p>}
    </Reveal>
  );
}
