export default function Tag({ children, active = false, onClick, className = "" }) {
  const base = "inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors";
  const state = active
    ? "border-accent bg-accent text-primary"
    : "border-ink/20 bg-white text-ink/70 hover:border-primary hover:text-primary";
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${base} ${state} ${className}`}>
        {children}
      </button>
    );
  }
  return <span className={`${base} ${state} ${className}`}>{children}</span>;
}