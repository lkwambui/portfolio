import {
  LuArrowUpRight,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuMessageCircle,
} from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import ContactForm from "../components/ui/ContactForm";
import { homeContent } from "../data/homeContent";
import { site, socials } from "../data/site";

function ContactRow({ icon: Icon, label, value, href, external }) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-accent-bright">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/65">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-white transition-colors group-hover:text-accent-bright">
          {value}
        </span>
      </span>
      {href && (
        <LuArrowUpRight
          className="h-4 w-4 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-bright"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (!href) {
    return <div className="flex items-center gap-4 py-4">{content}</div>;
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 py-4"
    >
      {content}
    </a>
  );
}

export default function ContactSection() {
  const { contact } = homeContent;
  const linkedIn = socials.find((social) => social.label === "LinkedIn");
  const gitHub = socials.find((social) => social.label === "GitHub");

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-white/10 bg-primary-dark text-white"
    >
      <div
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full border border-accent-bright/20"
        aria-hidden="true"
      />
      <div className="container-page relative py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-bright">
                {contact.eyebrow}
              </p>
              <h2 className="display-lg mt-5 max-w-lg text-white">{contact.heading}</h2>
              <p className="mt-6 max-w-md text-[0.98rem] leading-[1.85] text-white/70">
                {contact.body}
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-9 border-t border-white/15">
              <ContactRow
                icon={LuMail}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <div className="border-t border-white/15">
                <ContactRow
                  icon={LuMessageCircle}
                  label="WhatsApp"
                  value={site.phoneDisplay}
                  href={site.whatsapp}
                  external
                />
              </div>
              {linkedIn && (
                <div className="border-t border-white/15">
                  <ContactRow
                    icon={LuLinkedin}
                    label="LinkedIn"
                    value="Lucy Kamau"
                    href={linkedIn.href}
                    external
                  />
                </div>
              )}
              {gitHub && (
                <div className="border-t border-white/15">
                  <ContactRow
                    icon={LuGithub}
                    label="GitHub"
                    value="lkwambui"
                    href={gitHub.href}
                    external
                  />
                </div>
              )}
              <div className="border-t border-white/15">
                <ContactRow icon={LuMapPin} label="Location" value={site.location} />
              </div>
            </Reveal>

            <Reveal delay={140} className="mt-7">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/65">
                Elsewhere
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="me noopener noreferrer"
                      className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-accent-bright"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-[2rem] border border-white/15 bg-white p-6 text-ink shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-accent">
                Project enquiry
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                Tell me what you have in mind.
              </h3>
              <p className="mt-1.5 text-sm text-muted">
                A little context helps me give you a useful response.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
