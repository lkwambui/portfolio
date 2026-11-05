import Reveal from "../components/ui/Reveal";
import { testimonials } from "../data/testimonials";

export default function TestimonialsSection() {
  if (!testimonials.length) return null;

  return (
    <section className="border-b border-line bg-paper">
      <div className="container-page py-16 md:py-24">
        <p className="eyebrow">Testimonials</p>
        <h2 className="display-lg mt-5 max-w-2xl">Words from people I&apos;ve worked with.</h2>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={`${testimonial.name}-${index}`}
              delay={index * 60}
              className="border-b border-line pb-8"
            >
              <blockquote className="font-display text-xl font-medium leading-[1.5] tracking-[-0.02em] text-ink">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-5">
                <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {[testimonial.role, testimonial.company].filter(Boolean).join(", ")}
                </p>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
