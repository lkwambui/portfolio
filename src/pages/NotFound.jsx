import { Link } from "react-router-dom";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";

export default function NotFound() {
  usePageMeta({
    title: "Page not found",
    description: "That page doesn't exist.",
    path: "/404",
  });

  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-20 md:py-28">
      <p className="eyebrow">404</p>
      <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/70">
        Either it was moved, or you followed a bad link. Either way, there&apos;s
        plenty to look at on the work page.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">
          <LuArrowLeft className="h-4 w-4" />
          Back home
        </Link>
        <Link to="/projects" className="btn-outline">
          View my work
          <LuArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}