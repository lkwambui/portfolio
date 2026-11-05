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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-line text-accent">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-ink transition-colors group-hover:text-accent">
          {value}
        </span>
      </span>
      {href && (
        <LuArrowUpRight
          className="h-4 w-4 shrink-0 text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
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
    <section id="contact" className="border-b border-line bg-paper">
      <div className="container-page py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">{contact.eyebrow}</p>
              <h2 className="display-lg mt-5 max-w-lg">{contact.heading}</h2>
              <p className="mt-6 max-w-md text-[0.98rem] leading-[1.85] text-muted">
                {contact.body}
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-9 border-t border-line">
              <ContactRow
                icon={LuMail}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <div className="border-t border-line">
                <ContactRow
                  icon={LuMessageCircle}
                  label="WhatsApp"
                  value={site.phoneDisplay}
                  href={site.whatsapp}
                  external
                />
              </div>
              {linkedIn && (
                <div className="border-t border-line">
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
                <div className="border-t border-line">
                  <ContactRow
                    icon={LuGithub}
                    label="GitHub"
                    value="lkwambui"
                    href={gitHub.href}
                    external
                  />
                </div>
              )}
              <div className="border-t border-line">
                <ContactRow icon={LuMapPin} label="Location" value={site.location} />
              </div>
            </Reveal>

            <Reveal delay={140} className="mt-7">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                Elsewhere
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="me noopener noreferrer"
                      className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/55 transition-colors hover:text-accent"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <div className="border border-line bg-white p-6 sm:p-8">
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
