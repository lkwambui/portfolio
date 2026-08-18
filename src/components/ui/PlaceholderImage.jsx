export default function PlaceholderImage({ label, aspect = "aspect-[4/3]" }) {
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-3 border border-dashed border-primary/25 bg-cream`}
    >
      <span className="flex h-14 w-14 items-center justify-center border border-primary/15 font-display text-xl font-semibold text-ink/50">
        {initials}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
        Screenshots to be added
      </span>
    </div>
  );
}