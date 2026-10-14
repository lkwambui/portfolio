import { useEffect, useState } from "react";
import {
  LuDownload,
  LuPhone,
  LuMail,
  LuLinkedin,
  LuGlobe,
  LuBuilding2,
  LuShare2,
  LuMapPin,
} from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { usePageMeta } from "../lib/seo";
import { card, cardFocus } from "../data/card";
import { downloadVCard } from "../lib/vcard";
import { shareOrCopy } from "../lib/share";
import CardAction from "../components/card/CardAction";
import CardQrCode from "../components/card/CardQrCode";
import profilePhoto from "../assets/home/lucy-kamau.jpeg";

const cardJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: card.name,
  jobTitle: card.title,
  description: card.intro,
  url: card.cardUrl,
  image: `${card.portfolio}og-image.jpg`,
  telephone: card.phone,
  email: card.email,
  worksFor: {
    "@type": "Organization",
    name: card.company,
    url: card.companyUrl,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wote",
    addressRegion: "Makueni",
    addressCountry: "KE",
  },
  sameAs: [card.portfolio, card.linkedin, card.companyUrl],
};

const actions = [
  {
    label: "WhatsApp",
    description: "Start a chat",
    href: card.whatsapp,
    icon: FaWhatsapp,
    external: true,
  },
  {
    label: "Call",
    description: card.phoneDisplay,
    href: `tel:${card.phone}`,
    icon: LuPhone,
  },
  {
    label: "Email",
    description: card.email,
    href: `mailto:${card.email}`,
    icon: LuMail,
  },
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: card.linkedin,
    icon: LuLinkedin,
    external: true,
  },
  {
    label: "View Portfolio",
    description: "Projects & case studies",
    href: card.portfolio,
    icon: LuGlobe,
    external: true,
  },
  {
    label: "Visit LogicoreX",
    description: "logicorex.co.ke",
    href: card.companyUrl,
    icon: LuBuilding2,
    external: true,
  },
];

export default function Card() {
  const [feedback, setFeedback] = useState("");
  const [sharing, setSharing] = useState(false);

  usePageMeta({
    fullTitle: "Lucy Kamau | Full-Stack Software Developer",
    description:
      "Lucy Kamau is a Full-Stack Software Developer and Product Designer at LogicoreX Technologies, building practical web applications, APIs and digital products for businesses.",
    path: "/card",
    image: "/og-image.jpg",
    jsonLd: cardJsonLd,
  });

  useEffect(() => {
    if (!feedback) return undefined;
    const timer = window.setTimeout(() => setFeedback(""), 5000);
    return () => window.clearTimeout(timer);
  }, [feedback]);

  const handleSaveContact = () => {
    try {
      downloadVCard();
      setFeedback("Contact downloaded — check your downloads folder.");
    } catch {
      setFeedback("Sorry, the contact could not be downloaded.");
    }
  };

  const handleShare = async () => {
    setSharing(true);
    try {
      const result = await shareOrCopy({
        title: `${card.name} — ${card.title}`,
        text: `${card.name}, ${card.title} at ${card.company}.`,
        url: card.cardUrl,
      });
      if (result === "shared") {
        setFeedback("Card shared.");
      } else if (result === "copied") {
        setFeedback("Link copied to clipboard.");
      } else {
        setFeedback("");
      }
    } catch {
      setFeedback("Sharing isn't available — copy the link manually.");
    } finally {
      setSharing(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto w-full max-w-xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="space-y-5">
          <header className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_20px_55px_rgba(32,32,32,0.07)]">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-line bg-paper px-5 py-3">
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary/70">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                {card.company}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-muted">
                <LuMapPin className="h-3.5 w-3.5 text-primary/60" aria-hidden="true" />
                {card.location}
              </span>
            </div>

            <div className="px-6 py-7 sm:px-8 sm:py-8">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
                <img
                  src={profilePhoto}
                  alt="Portrait of Lucy Kamau"
                  width="112"
                  height="168"
                  className="aspect-[2/3] w-28 shrink-0 rounded-2xl object-cover object-top ring-4 ring-accent/40 sm:w-32"
                />
                <div className="min-w-0">
                  <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.1rem]">
                    {card.name}
                  </h1>
                  <p className="mt-1.5 text-sm font-semibold text-primary">
                    {card.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">
                    {card.specialization} · {card.company}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-ink/75">{card.intro}</p>
            </div>
          </header>

          <section aria-labelledby="card-actions-heading" className="space-y-3">
            <h2 id="card-actions-heading" className="sr-only">
              Contact Lucy Kamau
            </h2>

            <CardAction
              icon={LuDownload}
              label="Save Contact"
              description="Download .vcf for your phone"
              onClick={handleSaveContact}
              variant="primary"
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {actions.map((action) => (
                <CardAction key={action.label} {...action} />
              ))}
            </div>

            <p
              role="status"
              aria-live="polite"
              className="min-h-[1.25rem] px-1 text-xs font-medium text-muted"
            >
              {feedback}
            </p>
          </section>

          <section
            aria-labelledby="card-focus-heading"
            className="rounded-3xl border border-line bg-white p-6 shadow-[0_16px_40px_rgba(32,32,32,0.05)] sm:p-7"
          >
            <h2
              id="card-focus-heading"
              className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary/70"
            >
              Professional focus
            </h2>
            <dl className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {cardFocus.map((item) => (
                <div key={item.title} className="border-l-2 border-accent pl-4">
                  <dt className="text-sm font-semibold text-ink">{item.title}</dt>
                  <dd className="mt-1 text-xs leading-relaxed text-muted">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            aria-labelledby="card-share-heading"
            className="rounded-3xl border border-line bg-white p-6 shadow-[0_16px_40px_rgba(32,32,32,0.05)] sm:p-7"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xs">
                <h2
                  id="card-share-heading"
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary/70"
                >
                  Share &amp; scan
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Share this card, or let someone scan the code to open it on their
                  phone.
                </p>
                <button
                  type="button"
                  onClick={handleShare}
                  disabled={sharing}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink motion-safe:transition-colors motion-safe:duration-200 hover:border-accent hover:bg-[#fffaf0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60"
                >
                  <LuShare2 className="h-4 w-4" aria-hidden="true" />
                  {sharing ? "Sharing…" : "Share Card"}
                </button>
              </div>

              <div className="sm:shrink-0">
                <CardQrCode />
              </div>
            </div>
          </section>

          <footer className="flex flex-col items-center gap-2 pt-2 pb-4 text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary/45">
              {card.company}
            </p>
            <a
              href={card.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary motion-safe:transition-colors hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              logicorex.co.ke
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
