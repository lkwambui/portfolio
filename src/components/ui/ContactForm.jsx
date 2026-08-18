import { useState } from "react";

const projectTypes = [
  "Website",
  "Web Application",
  "UI/UX Design",
  "E-commerce",
  "Branding",
  "Consultation",
  "Other",
];

const budgetRanges = [
  "Under KSh 50,000",
  "KSh 50,000 - 150,000",
  "KSh 150,000 - 400,000",
  "KSh 400,000+",
  "Not sure yet",
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
};

function Field({ label, htmlFor, required, error, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full border border-primary/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export default function ContactForm({ whatsapp }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.email.trim()) {
      next.email = "Please add your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!form.description.trim()) next.description = "Please describe your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const lines = [
      `Hello Lucy, I'd like to start a project.`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      form.projectType ? `Project type: ${form.projectType}` : null,
      form.budget ? `Budget range: ${form.budget}` : null,
      form.timeline ? `Timeline: ${form.timeline}` : null,
      ``,
      `Project description:`,
      form.description,
    ].filter(Boolean);
    const message = encodeURIComponent(lines.join("\n"));
    window.open(`${whatsapp}?text=${message}`, "_blank", "noopener");
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {submitted && (
        <div className="border border-primary/30 bg-primary/5 p-4 text-sm text-ink/80" role="status">
          Your message has been prepared - it should have opened in WhatsApp. If
          not, check your browser&apos;s pop-up settings.
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>
        <Field label="Email" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={set("email")}
            className={inputClass}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Company" htmlFor="company">
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={set("company")}
            className={inputClass}
            placeholder="Company or organisation"
            autoComplete="organization"
          />
        </Field>
        <Field label="Project type" htmlFor="project-type">
          <select
            id="project-type"
            value={form.projectType}
            onChange={set("projectType")}
            className={inputClass}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Budget range" htmlFor="budget">
          <select id="budget" value={form.budget} onChange={set("budget")} className={inputClass}>
            <option value="">Select a budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline (optional)" htmlFor="timeline">
          <input
            id="timeline"
            type="text"
            value={form.timeline}
            onChange={set("timeline")}
            className={inputClass}
            placeholder="e.g. within 2 months"
          />
        </Field>
      </div>

      <Field label="Project description" htmlFor="description" required error={errors.description}>
        <textarea
          id="description"
          rows={5}
          value={form.description}
          onChange={set("description")}
          className={`${inputClass} resize-y`}
          placeholder="What are you trying to build? What problem does it solve, and what does success look like?"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          Send inquiry
        </button>
        <p className="text-xs text-ink/55">
          This opens WhatsApp with your message ready to send. You can also email
          me directly - see the contact details beside this form.
        </p>
      </div>
    </form>
  );
}