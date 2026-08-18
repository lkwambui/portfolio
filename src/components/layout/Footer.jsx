import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import { site, socials, nav, navSecondary } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="no-print bg-primary-dark text-white">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold">
              Lucy Kamau<span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              Software Developer &amp; UI/UX Designer based in Kenya. I design and
              build modern digital products, websites, web applications and user
              experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1 text-xs font-medium text-white/80 transition-colors hover:border-accent hover:text-accent"
                >
                  {s.label}
                  <LuArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {[...nav, ...navSecondary].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/75 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="transition-colors hover:text-accent">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
            <Link to="/contact" className="btn-accent mt-6">
              Start a Project
              <LuArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <p>&copy; {year} Lucy Kamau. All rights reserved.</p>
          <p>Designed and built by Lucy Kamau.</p>
        </div>
      </div>
    </footer>
  );
}