export default function TechnologyList({ items, className = "" }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-sm border border-primary/15 bg-white px-2.5 py-1 text-xs font-medium text-ink/80"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}