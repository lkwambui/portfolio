import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import { nav, navSecondary, site, socials } from "../../data/site";
import { fadeUp, staggerContainer } from "../../lib/motion";

function Wordmark({ onClick, light = false }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex shrink-0 items-center gap-2.5"
      aria-label="Lucy Kamau — home"
    >
      <span
        className={`h-2.5 w-2.5 bg-accent transition-transform duration-300 group-hover:scale-125 ${
          light ? "bg-accent" : ""
        }`}
        aria-hidden="true"
      />
      <span
        className={`font-display text-[1.05rem] font-semibold tracking-[-0.035em] ${
          light ? "text-ink" : "text-ink"
        }`}
      >
        Lucy Kamau
      </span>
    </Link>
  );
}

function useActiveSection() {
  const { pathname } = useLocation();
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return undefined;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.scrollY + 130;
      let current = "home";
      nav.forEach((item) => {
        const element = document.getElementById(item.section);
        if (element && element.offsetTop <= marker) current = item.section;
      });
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return active;
}

function DesktopNav({ active }) {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-6 xl:gap-8">
        {nav.map((item) => {
          const isActive = active === item.section;
          return (
            <li key={item.section}>
              <Link
                to={item.to}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                  isActive ? "text-ink" : "text-ink/50 hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MobileMenu({ open, onClose, menuButtonRef }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event) => {
      if (event.key === "Escape") {
        onClose();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, menuButtonRef]);

  return (
    <m.div
      data-motion="mobile-menu"
      className="fixed inset-0 z-50 overflow-y-auto bg-paper lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-page flex items-center justify-between border-b border-line py-5">
        <Wordmark onClick={onClose} />
        <button
          ref={closeRef}
          type="button"
          onClick={() => {
            onClose();
            menuButtonRef.current?.focus();
          }}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <LuX className="h-5 w-5" />
        </button>
      </div>

      <nav aria-label="Mobile" className="container-page py-8">
        <m.ul
          className="border-t border-line"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {nav.map((item) => (
            <m.li key={item.section} className="border-b border-line" variants={fadeUp}>
              <Link
                to={item.to}
                onClick={onClose}
                className="group flex items-center justify-between py-4"
              >
                <span className="font-display text-[1.65rem] font-semibold tracking-[-0.04em] text-ink transition-colors group-hover:text-accent">
                  {item.label}
                </span>
                <LuArrowUpRight
                  className="h-5 w-5 text-ink/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </Link>
            </m.li>
          ))}
        </m.ul>

        <div className="mt-8">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
            More
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {navSecondary.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink/55 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            {site.email}
          </a>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-[0.66rem] font-semibold uppercase tracking-[0.13em] text-ink/50 transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <Link to="/#contact" onClick={onClose} className="btn-primary mt-8 w-full">
          Let&apos;s collaborate
          <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </nav>
    </m.div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.header
      data-motion="site-nav"
      className={`no-print sticky top-0 z-40 border-b bg-paper/95 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? "border-line" : "border-transparent"
      }`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`container-page flex items-center justify-between gap-8 transition-all duration-300 ${
        scrolled ? "h-[3.75rem] md:h-16" : "h-16 md:h-[4.5rem]"
      }`}>
        <Wordmark />

        <DesktopNav active={active} />

        <div className="flex items-center gap-3">
          <Link
            to="/#contact"
            className="btn-primary hidden !px-5 !py-3 lg:inline-flex"
          >
            Let&apos;s collaborate
            <LuArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            <LuMenu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <MobileMenu
            open={open}
            onClose={() => setOpen(false)}
            menuButtonRef={menuButtonRef}
          />
        )}
      </AnimatePresence>
    </m.header>
  );
}
