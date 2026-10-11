import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import { site, socials, nav, navSecondary } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="no-print border-t border-line bg-white text-ink">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold">
              Lucy Kamau<span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
              Software Developer & Product Designer based in Kenya. I design and
              build digital products that work.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink/75 transition-colors hover:border-accent hover:text-ink"
                >
                  {s.label}
                  <LuArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink/55">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {[...nav, ...navSecondary].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-ink/70 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink/55">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/75">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="transition-colors hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
            <Link to="/contact" className="btn-primary mt-6">
              Start a Project
              <LuArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-ink/60 sm:flex-row">
          <p>&copy; {year} Lucy Kamau. All rights reserved.</p>
          <p>Designed and built by Lucy Kamau.</p>
        </div>
      </div>
    </footer>
  );
}