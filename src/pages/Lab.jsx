import { useState } from "react";
import { usePageMeta } from "../lib/seo";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaSection from "../components/ui/CtaSection";
import Tag from "../components/ui/Tag";

const PRIMARY = [0x0f, 0x55, 0x50];

function mixToward(color, target, amount) {
  const mix = color.map((c, i) => Math.round(c + (target[i] - c) * amount));
  return `rgb(${mix[0]}, ${mix[1]}, ${mix[2]})`;
}

function BrandScale() {
  const [hover, setHover] = useState(null);
  const steps = Array.from({ length: 9 }, (_, i) => (i + 1) * 10);
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 gap-1">
        {steps.map((step) => (
          <button
            key={step}
            type="button"
            onMouseEnter={() => setHover(step)}
            onMouseLeave={() => setHover(null)}
            className="flex-1 border border-white/30 transition-transform hover:scale-y-105"
            style={{
              backgroundColor:
                step < 50
                  ? mixToward(PRIMARY, [255, 255, 255], (50 - step) / 50)
                  : mixToward(PRIMARY, [20, 20, 20], (step - 50) / 50),
            }}
            aria-label={`Shade ${step}% toward ${step < 50 ? "white" : "black"}`}
          />
        ))}
      </div>
      <p className="mt-3 text-sm text-ink/65">
        {hover === null
          ? "A single brand color, expanded into a usable scale."
          : `Brand teal at ${hover}% toward ${hover < 50 ? "white" : "black"}.`}
      </p>
    </div>
  );
}

function TypeSpecimen() {
  const [scale, setScale] = useState(1);
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-ink/45">
        <span>Scale {scale.toFixed(1)}×</span>
        <label htmlFor="type-scale" className="sr-only">
          Adjust type scale
        </label>
        <input
          id="type-scale"
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={scale}
          onChange={(e) => setScale(parseFloat(e.target.value))}
          className="w-32 accent-[#F5A623]"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col justify-center gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink/40">
            Display — Fraunces
          </p>
          <p
            className="font-display font-semibold leading-none tracking-tight text-ink"
            style={{ fontSize: `${2.75 * scale}rem` }}
          >
            Intuitive experiences.
          </p>
        </div>
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink/40">
            Body — Inter
          </p>
          <p className="mt-2 text-ink/75" style={{ fontSize: `${0.95 * scale}rem` }}>
            Two families carry the whole system — a considered display serif for
            hierarchy and a neutral sans for reading.
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonStates() {
  return (
    <div className="flex h-full flex-col">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink/40">
        Component states
      </p>
      <div className="mt-5 flex flex-1 flex-col justify-center gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="btn-primary !px-5 !py-2.5">
            Primary
          </button>
          <button type="button" className="btn-dark !px-5 !py-2.5">
            Secondary
          </button>
          <button type="button" className="btn-outline !px-5 !py-2.5">
            Outline
          </button>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Tag>Active filter</Tag>
          <Tag active>Selected filter</Tag>
          <Tag>Hover</Tag>
        </div>
        <p className="mt-6 text-sm text-ink/65">
          Buttons and chips defined once, used everywhere. Hover the elements to
          see focus and interaction states.
        </p>
      </div>
    </div>
  );
}

function DashboardConcept() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink/40">
          Dashboard layout study
        </p>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink/35">
          No real data
        </span>
      </div>
      <div className="mt-5 grid flex-1 grid-cols-2 gap-3">
        <div className="border border-primary/15 p-4">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink/45">
            Metric
          </p>
          <p className="mt-3 font-display text-3xl font-semibold text-ink">—</p>
          <div className="mt-3 h-1.5 w-full bg-ink/10" />
        </div>
        <div className="border border-primary/15 p-4">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink/45">
            Metric
          </p>
          <p className="mt-3 font-display text-3xl font-semibold text-ink">—</p>
          <div className="mt-3 h-1.5 w-full bg-primary/20" />
        </div>
        <div className="col-span-2 border border-primary/15 p-4">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink/45">
            Trend
          </p>
          <div className="mt-4 flex h-16 items-end gap-1">
            {[35, 55, 40, 70, 60, 85, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-ink/15"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const experiments = [
  {
    kind: "Interaction Experiment",
    title: "A single brand teal, expanded into a scale",
    description:
      "How the green brand color behaves across the full range of light and dark surfaces.",
    status: "Concept",
    Component: BrandScale,
  },
  {
    kind: "Typography Experiment",
    title: "Two-family type system",
    description:
      "Testing hierarchy and reading comfort with a display serif and a neutral sans.",
    status: "Concept",
    Component: TypeSpecimen,
  },
  {
    kind: "Design System Experiment",
    title: "Buttons and chips, one source of truth",
    description:
      "A small component set with consistent states used across every page.",
    status: "In progress",
    Component: ButtonStates,
  },
  {
    kind: "Dashboard Concept",
    title: "Quiet dashboard layout",
    description:
      "A layout study for data-heavy screens that keeps numbers calm and scannable.",
    status: "Concept",
    Component: DashboardConcept,
  },
];

export default function Lab() {
  usePageMeta({
    title: "Lab",
    description:
      "Lucy Kamau's lab — design experiments, interface explorations and development studies. Clearly labelled concepts, not client work.",
    path: "/lab",
  });

  return (
    <>
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Lab"
          title="Experiments, studies and the occasional rabbit hole."
          description="A playground for interface explorations, typography studies and development experiments. Everything here is clearly a concept — not client work."
          as="h1"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {experiments.map((experiment, index) => {
            const { Component } = experiment;
            return (
              <Reveal
                key={experiment.title}
                delay={(index % 2) * 60}
                className="flex flex-col border border-primary/15"
              >
                <div className="border-b border-primary/15 bg-white p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      {experiment.kind}
                    </p>
                    <span className="chip">{experiment.status}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                    {experiment.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {experiment.description}
                  </p>
                </div>
                <div className="flex-1 bg-cream p-7">
                  <Component />
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 border border-dashed border-primary/25 bg-cream p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/40">
            A note on the Lab
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
            This page exists so explorations and half-built ideas have an honest
            home. It is intentionally separate from the Work archive — nothing
            here is presented as client work. Experiments are moved into the
            portfolio only once they become real products.
          </p>
        </Reveal>
      </section>

      <CtaSection
        title="Have something to build?"
        description="Real products start with a conversation — the Lab is where ideas get explored."
      />
    </>
  );
}