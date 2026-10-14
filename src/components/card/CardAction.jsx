import { LuArrowUpRight } from "react-icons/lu";

const baseClasses =
  "group flex w-full items-center gap-3.5 rounded-2xl border px-4 py-3.5 text-left " +
  "motion-safe:transition-colors motion-safe:duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

const variantClasses = {
  primary:
    "border-transparent bg-accent text-ink shadow-[0_12px_28px_rgba(255,200,61,0.32)] hover:bg-accent-hover",
  outline: "border-line bg-white text-ink hover:border-accent hover:bg-[#fffaf0]",
};

const iconClasses = {
  primary: "bg-ink/10 text-ink",
  outline: "bg-[#FFF7E3] text-primary",
};

export default function CardAction({
  icon: Icon,
  label,
  description,
  href,
  onClick,
  external = false,
  variant = "outline",
}) {
  const content = (
    <>
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClasses[variant]}`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold leading-tight">{label}</span>
        {description && (
          <span
            className={`mt-0.5 block truncate text-xs ${
              variant === "primary" ? "text-ink/70" : "text-muted"
            }`}
          >
            {description}
          </span>
        )}
      </span>
      {external && (
        <LuArrowUpRight className="h-4 w-4 shrink-0 opacity-55" aria-hidden="true" />
      )}
    </>
  );

  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  );
}
