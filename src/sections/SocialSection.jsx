import { LuArrowUpRight, LuMail, LuMessageCircle } from "react-icons/lu";
import Reveal from "../components/ui/Reveal";
import { site, socials } from "../data/site";

export default function SocialSection() {
  const profiles = [
    ...socials.map((profile) => ({
      ...profile,
      iconText: profile.label === "LinkedIn" ? "in" : profile.label.slice(0, 1),
    })),
    { label: "WhatsApp", href: site.whatsapp, icon: LuMessageCircle },
    { label: "Email", href: `mailto:${site.email}`, icon: LuMail },
  ];

  return (
    <section id="connect" className="border-b border-line bg-paper">
      <div className="container-page py-14 md:py-20">
        <div className="grid gap-7 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <Reveal>
            <p className="eyebrow">Connect</p>
            <h2 className="display-md mt-4">Find me around the web.</h2>
          </Reveal>
          <Reveal delay={70}>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {profiles.map(({ label, href, icon: Icon, iconText }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "me noopener noreferrer"}
                    className="group flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-line bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-soft text-xs font-bold text-accent">
                        {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : iconText}
                      </span>
                      <span className="text-sm font-medium text-ink">{label}</span>
                    </span>
                    <LuArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
