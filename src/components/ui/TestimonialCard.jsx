export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-soft">
      <blockquote className="font-display text-lg leading-relaxed text-ink">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-line pt-5">
        <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
        {testimonial.role && (
          <p className="mt-0.5 text-sm text-ink/65">
            {testimonial.role}
            {testimonial.company ? `, ${testimonial.company}` : ""}
          </p>
        )}
      </figcaption>
    </figure>
  );
}