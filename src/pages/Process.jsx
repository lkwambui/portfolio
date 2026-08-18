import { Link } from "react-router-dom";
import { LuArrowRight, LuCheck } from "react-icons/lu";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import ProcessStep from "../components/ui/ProcessStep";
import CtaSection from "../components/ui/CtaSection";
import { processSteps } from "../data/process";

const phaseDetails = [
  {
    phase: "Discover",
    questions: [
      "What problem are we solving, and for who?",
      "What does the business need from this product?",
      "What do we already know about users and competitors?",
    ],
  },
  {
    phase: "Define",
    questions: [
      "What are the requirements, in order of importance?",
      "How should the information be structured?",
      "What does success look like?",
    ],
  },
  {
    phase: "Design",
    questions: [
      "What are the key user flows?",
      "What does the interface look and feel like?",
      "What needs prototyping before building?",
    ],
  },
  {
    phase: "Build",
    questions: [
      "What is the technical architecture?",
      "Which parts are built first?",
      "How do APIs, databases and payments come together?",
    ],
  },
  {
    phase: "Test",
    questions: [
      "Does it work across devices and browsers?",
      "Can users actually complete the flows?",
      "Is it fast enough and does it hold up?",
    ],
  },
  {
    phase: "Launch",
    questions: [
      "Where is it deployed and how is it monitored?",
      "What documentation and handover does the client need?",
      "What do we learn and iterate on next?",
    ],
  },
];

export default function Process() {
  usePageMeta({
    title: "Process",
    description:
      "How Lucy Kamau takes a digital product from idea to launch - discovery, definition, design, build, test and launch.",
    path: "/process",
  });

  return (
    <>
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Process"
          title="From idea to launch, in six clear phases."
          description="A working process that keeps projects moving, decisions documented and everyone aligned - without unnecessary ceremony."
          as="h1"
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.step} step={step} index={index} />
          ))}
        </div>
      </section>

      <section className="border-t border-primary/15 bg-primary text-white">
        <div className="container-page py-16 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent">
              What to expect
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
              Every phase asks the questions that matter.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {phaseDetails.map((detail, index) => (
              <Reveal key={detail.phase} delay={(index % 3) * 60} className="bg-primary p-8">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">
                  Phase {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                  {detail.phase}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {detail.questions.map((question) => (
                    <li key={question} className="flex items-start gap-2.5 text-sm text-white/70">
                      <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {question}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-xl text-[0.975rem] leading-relaxed text-white/70">
              You always know what phase the project is in, what&apos;s been
              decided, and what comes next.
            </p>
            <Link
              to="/contact"
              className="btn-accent"
            >
              Start your project
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="See it in practice"
              title="The same process behind every case study."
            />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-7">
            {[
              "Shopey - e-commerce with M-Pesa and Stripe",
              "LogicoreX - business systems for SACCOs, retailers and farmers",
              "Airtime Scratch System - a fintech checkout built from scratch",
            ].map((item) => (
              <Link
                key={item}
                to="/projects"
                className="group flex items-center justify-between border border-primary/15 p-5 transition-colors hover:border-primary/50"
              >
                <span className="font-display text-lg font-semibold tracking-tight text-ink group-hover:text-primary">
                  {item}
                </span>
                <LuArrowRight className="h-5 w-5 text-ink/40 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}