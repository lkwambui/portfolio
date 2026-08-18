export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="flex h-full flex-col border border-primary/15 bg-white p-8">
      <blockquote className="font-display text-lg leading-relaxed text-ink">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-primary/15 pt-5">
        <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
        {testimonial.role && (
          <p className="mt-0.5 text-sm text-ink/55">
            {testimonial.role}
            {testimonial.company ? `, ${testimonial.company}` : ""}
          </p>
        )}
      </figcaption>
    </figure>
  );
}