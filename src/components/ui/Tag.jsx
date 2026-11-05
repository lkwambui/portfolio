export default function Tag({ children, active = false, onClick, className = "" }) {
  const base = "inline-flex items-center border px-3.5 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200";
  const state = active
    ? "border-accent bg-accent text-white"
    : "border-line bg-transparent text-ink/60 hover:border-ink/40 hover:text-ink";
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${base} ${state} ${className}`}>
        {children}
      </button>
    );
  }
  return <span className={`${base} ${state} ${className}`}>{children}</span>;
}
