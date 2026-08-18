import { LuMail, LuPhone, LuMapPin, LuArrowUpRight } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import ContactForm from "../components/ui/ContactForm";
import CtaSection from "../components/ui/CtaSection";
import { site, socials } from "../data/site";

const contactDetails = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: LuMail,
  },
  {
    label: "Phone / WhatsApp",
    value: site.phoneDisplay,
    href: site.whatsapp,
    icon: LuPhone,
  },
  {
    label: "Location",
    value: site.location,
    icon: LuMapPin,
  },
];

export default function Contact() {
  usePageMeta({
    title: "Contact",
    description:
      "Start a project with Lucy Kamau — tell me about the website, product or business system you want designed and built.",
    path: "/contact",
  });

  return (
    <>
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title="Tell me what you want to build."
              description="Share a few details about your project and I'll come back with thoughts on approach, scope and what it takes to launch."
              as="h1"
            />

            <div className="mt-10 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/15 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="mt-0.5 block text-sm font-medium text-ink transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-ink">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                Elsewhere
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="chip hover:border-primary hover:text-primary"
                  >
                    {s.label}
                    <LuArrowUpRight className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Reveal delay={80} className="lg:col-span-7">
            <div className="border border-primary/15 bg-cream p-7 sm:p-10">
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                Project inquiry
              </h2>
              <p className="mt-1 text-sm text-ink/60">
                The more context you give, the more useful my reply will be.
              </p>
              <div className="mt-8">
                <ContactForm whatsapp={site.whatsapp} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection
        title="Prefer to jump straight in?"
        description="You can also send an email or message me on WhatsApp at any time."
      />
    </>
  );
}