const disciplines = [
  "UI/UX Design",
  "Product Design",
  "Web Development",
  "Mobile Experiences",
  "Full-Stack Development",
  "Frontend Engineering",
  "API Development",
  "Digital Product Strategy",
  "E-commerce",
  "Design Systems",
  "Business Systems",
  "Technology Consultancy",
];

export default function ExpertiseMarquee() {
  const items = [...disciplines, ...disciplines];

  return (
    <section className="marquee-band" aria-label="Areas of expertise">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="marquee-item"
            aria-hidden={index >= disciplines.length ? "true" : undefined}
          >
            {item}
            <span className="marquee-dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
