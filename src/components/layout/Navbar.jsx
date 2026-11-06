import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import { nav, navSecondary, site, socials } from "../../data/site";
import { fadeUp, staggerContainer } from "../../lib/motion";

function Wordmark({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex shrink-0 items-center gap-2.5"
      aria-label="Lucy Kamau — home"
    >
      <span className="font-display text-[1.02rem] font-semibold tracking-[-0.035em] text-white">
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
      const marker = window.scrollY + 150;
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
      <ul className="flex items-center gap-1 xl:gap-2">
        {nav.map((item) => {
          const isActive = active === item.section;
          return (
            <li key={item.section}>
              <Link
                to={item.to}
                aria-current={isActive ? "location" : undefined}
                className={`relative rounded-full px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 xl:px-3.5 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/65 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-accent-bright transition-all duration-300 ${
                    isActive ? "w-4" : "w-0"
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
      className="fixed inset-0 z-50 overflow-y-auto bg-primary text-white lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-page flex items-center justify-between border-b border-white/15 py-5">
        <Wordmark onClick={onClose} />
        <button
          ref={closeRef}
          type="button"
          onClick={() => {
            onClose();
            menuButtonRef.current?.focus();
          }}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent-bright hover:text-accent-bright"
        >
          <LuX className="h-5 w-5" />
        </button>
      </div>

      <nav aria-label="Mobile" className="container-page py-8">
        <m.ul
          className="border-t border-white/15"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {nav.map((item) => (
            <m.li key={item.section} className="border-b border-white/15" variants={fadeUp}>
              <Link
                to={item.to}
                onClick={onClose}
                className="group flex items-center justify-between py-4"
              >
                <span className="font-display text-[1.65rem] font-semibold tracking-[-0.04em] text-white transition-colors group-hover:text-accent-bright">
                  {item.label}
                </span>
                <LuArrowUpRight
                  className="h-5 w-5 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-bright"
                  aria-hidden="true"
                />
              </Link>
            </m.li>
          ))}
        </m.ul>

        <div className="mt-8">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/65">
            More
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {navSecondary.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/70 transition-colors hover:text-accent-bright"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-white/15 pt-6">
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-medium text-white transition-colors hover:text-accent-bright"
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
                className="text-[0.66rem] font-semibold uppercase tracking-[0.13em] text-white/65 transition-colors hover:text-accent-bright"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <Link to="/#contact" onClick={onClose} className="btn-accent mt-8 w-full">
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
      className="no-print sticky top-0 z-40 bg-paper/95 px-3 pt-3 backdrop-blur-sm md:px-5 md:pt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`mx-auto flex max-w-page items-center justify-between gap-6 rounded-[1.6rem] bg-primary px-4 text-white transition-all duration-300 sm:px-5 md:px-6 ${
          scrolled ? "h-14 shadow-lift md:h-16" : "h-16 shadow-card md:h-[4.5rem]"
        }`}
      >
        <Wordmark />

        <DesktopNav active={active} />

        <div className="flex items-center gap-2.5">
          <Link
            to="/#contact"
            className="btn-accent hidden !min-h-0 !px-5 !py-2.5 !text-xs lg:inline-flex"
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent-bright hover:text-accent-bright lg:hidden"
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
