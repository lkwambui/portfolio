import { Link } from "react-router-dom";
import { LuArrowUpRight, LuGithub, LuLinkedin } from "react-icons/lu";
import { nav, navSecondary, site, socials } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const linkedIn = socials.find((social) => social.label === "LinkedIn");
  const gitHub = socials.find((social) => social.label === "GitHub");

  return (
    <footer className="no-print bg-paper">
      <div className="container-page pt-14 md:pt-20">
        <div className="flex flex-col justify-between gap-8 border-b border-line pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Open to thoughtful work</p>
            <p className="display-md mt-4 max-w-xl">
              Let&apos;s build something that matters.
            </p>
          </div>
          <Link to="/#contact" className="btn-primary shrink-0">
            Start a conversation
            <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Lucy Kamau — home">
              <span className="h-2.5 w-2.5 bg-accent" aria-hidden="true" />
              <span className="font-display text-lg font-semibold tracking-[-0.04em] text-ink">
                Lucy Kamau
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.role} at{" "}
              <a
                href={site.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                {site.company}
              </a>
              . Building digital products with clarity, care and technical depth.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {linkedIn && (
                <a
                  href={linkedIn.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="Lucy Kamau on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center border border-line text-ink/60 transition-colors hover:border-accent hover:text-accent"
                >
                  <LuLinkedin className="h-4 w-4" />
                </a>
              )}
              {gitHub && (
                <a
                  href={gitHub.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="Lucy Kamau on GitHub"
                  className="flex h-9 w-9 items-center justify-center border border-line text-ink/60 transition-colors hover:border-accent hover:text-accent"
                >
                  <LuGithub className="h-4 w-4" />
                </a>
              )}
              <Link to="/card" className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-ink/45 transition-colors hover:text-accent">
                Business card
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.section}>
                  <Link
                    to={item.to}
                    className="text-sm text-ink/65 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
              More
            </p>
            <ul className="mt-4 space-y-2.5">
              {navSecondary.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-ink/65 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-ink/65 transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/65 transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="text-ink/65 transition-colors hover:text-accent"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="text-ink/45">{site.location}</li>
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink/45 transition-colors hover:text-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line py-6">
          <p className="font-display text-[clamp(2.3rem,7vw,6.5rem)] font-semibold leading-none tracking-[-0.065em] text-ink/10">
            Lucy Kamau
          </p>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-line py-6 text-[0.66rem] font-medium text-ink/45 sm:flex-row sm:items-center">
          <p>&copy; {year} Lucy Kamau. All rights reserved.</p>
          <p>Designed and developed by Lucy Kamau.</p>
        </div>
      </div>
    </footer>
  );
}
