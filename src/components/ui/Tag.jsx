export default function Tag({ children, active = false, onClick, className = "" }) {
  const base = "inline-flex items-center rounded-full border px-3.5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200";
  const state = active
    ? "border-primary bg-primary text-white"
    : "border-line bg-white text-ink/65 hover:border-primary/40 hover:text-primary";
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${base} ${state} ${className}`}>
        {children}
      </button>
    );
  }
  return <span className={`${base} ${state} ${className}`}>{children}</span>;
}
