export default function TechnologyList({ items, className = "" }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-line bg-paper px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-ink/70 transition-colors hover:border-primary/30 hover:text-primary"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
