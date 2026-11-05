import { useMemo, useState } from "react";
import { LuArrowUpRight, LuCheck } from "react-icons/lu";
import { site } from "../../data/site";

const projectTypes = [
  "Website",
  "Web application",
  "E-commerce platform",
  "Product design / UI/UX",
  "Business system",
  "Technical consultancy",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

const inputClass =
  "w-full border border-line bg-white px-3.5 py-3 text-sm text-ink placeholder:text-ink/30 transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/25";

function Field({ label, htmlFor, required, error, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink/55"
      >
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({ whatsapp = site.whatsapp }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const set = (key) => (event) => {
    setForm((previous) => ({ ...previous, [key]: event.target.value }));
    if (errors[key]) {
      setErrors((previous) => ({ ...previous, [key]: undefined }));
    }
  };

  const messageBody = useMemo(
    () =>
      [
        "Hello Lucy, I'd like to talk about a project.",
        "",
        `Name: ${form.name || "—"}`,
        `Email: ${form.email || "—"}`,
        `Project type: ${form.projectType || "Not specified"}`,
        "",
        "Project details:",
        form.message || "—",
      ].join("\n"),
    [form]
  );

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      form.projectType ? `Project enquiry: ${form.projectType}` : "Project enquiry"
    );
    return `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(messageBody)}`;
  }, [form.projectType, messageBody]);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please add your full name.";
    if (!form.email.trim()) {
      next.email = "Please add your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please check the email address.";
    }
    if (!form.projectType) next.projectType = "Please choose a project type.";
    if (!form.message.trim()) next.message = "Please describe the project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("idle");
    if (!validate()) return;

    const url = `${whatsapp}?text=${encodeURIComponent(messageBody)}`;
    const opened = window.open(url, "_blank");
    if (opened) opened.opener = null;
    setStatus(opened ? "opened" : "blocked");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
            placeholder="Your full name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>

        <Field label="Email address" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={set("email")}
            className={inputClass}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>

      <Field
        label="Project type"
        htmlFor="projectType"
        required
        error={errors.projectType}
      >
        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={set("projectType")}
          className={inputClass}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-y`}
          placeholder="What are you hoping to build? What problem should it solve?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-line pt-5">
        <button type="submit" className="btn-primary">
          Send via WhatsApp
          <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <a
          href={mailtoHref}
          className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/60 transition-colors hover:text-accent"
        >
          Send by email instead
        </a>
      </div>

      <p className="max-w-lg text-xs leading-relaxed text-ink/45">
        This site has no form backend. Submitting opens WhatsApp with your message
        ready to send. The email link opens your mail app with the same details.
      </p>

      <div aria-live="polite">
        {status === "opened" && (
          <p className="flex items-start gap-2 border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-ink/80">
            <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            WhatsApp should have opened in a new tab with your message. Review it,
            then press send. If it did not open, use the email link above.
          </p>
        )}
        {status === "blocked" && (
          <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            Your browser blocked the WhatsApp window. Allow pop-ups for this site,
            or use the email link above to continue.
          </p>
        )}
      </div>
    </form>
  );
}
