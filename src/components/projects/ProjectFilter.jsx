import Tag from "../ui/Tag";

export default function ProjectFilter({ filters, active, onChange }) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter projects by category"
    >
      {filters.map((filter) => (
        <Tag key={filter} active={active === filter} onClick={() => onChange(filter)}>
          {filter}
        </Tag>
      ))}
    </div>
  );
}