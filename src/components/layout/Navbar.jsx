import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMenu, LuX, LuArrowUpRight } from "react-icons/lu";
import { nav, navSecondary, site } from "../../data/site";

function Brand() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-baseline gap-1.5"
      aria-label="Lucy Kamau — home"
    >
      <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight text-ink">
        Lucy Kamau
      </span>
      <span className="text-accent text-[1.35rem] leading-none">.</span>
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav aria-label="Primary" className="hidden xl:block">
      <ul className="flex items-center gap-7">
        {nav.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative text-[0.8rem] font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-ink/70 hover:text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col overflow-y-auto bg-primary-dark xl:hidden transition-opacity duration-200 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div className="container-page flex items-center justify-between py-5">
        <Link to="/" onClick={onClose} className="flex items-baseline gap-1.5" aria-label="Lucy Kamau — home">
          <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight text-white">
            Lucy Kamau
          </span>
          <span className="text-accent text-[1.35rem] leading-none">.</span>
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-white/80 hover:text-white"
        >
          <LuX className="h-6 w-6" />
        </button>
      </div>
      <nav aria-label="Mobile" className="container-page mt-2 flex-1 pb-10">
        <ul className="flex flex-col divide-y divide-white/10">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between py-4 font-display text-2xl font-medium transition-colors ${
                    isActive ? "text-accent" : "text-white hover:text-accent"
                  }`
                }
              >
                {item.label}
                <LuArrowUpRight className="h-5 w-5 opacity-40" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/45">
            More
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {navSecondary.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className="text-sm text-white/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Link to="/contact" onClick={onClose} className="btn-primary w-full">
            Start a Project
          </Link>
          <p className="mt-6 text-sm text-white/60">{site.email}</p>
        </div>
      </nav>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print sticky top-0 z-40 transition-shadow ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.08)] backdrop-blur"
          : "bg-white"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-8">
        <Brand />
        <DesktopNav />
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden !px-5 !py-2.5 xl:inline-flex">
            Start a Project
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="p-2 text-ink hover:text-primary xl:hidden"
          >
            <LuMenu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}