import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-ink/55">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-ink/75">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="transition-colors hover:text-primary">
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-ink/25">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
