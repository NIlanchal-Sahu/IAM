import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "../../data/content";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", email: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  else if (values.name.trim().length < 2) errors.name = "Name looks too short.";

  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) errors.message = "Message is required.";
  else if (values.message.trim().length < 10) {
    errors.message = "Please write at least a few words (10+ characters).";
  }

  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    message: false,
  });

  function handleBlur(field: keyof FormState) {
    setTouched((t) => ({ ...t, [field]: true }));
    if (touched[field] || form[field]) {
      setErrors(validate({ ...form, [field]: form[field] }));
    }
  }

  function update<K extends keyof FormState>(key: K, value: string) {
    const next = { ...form, [key]: value };
    setForm(next);
    if (touched[key] || (key === "message" && next.message)) {
      setErrors(validate(next));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = `Portfolio: message from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n— ${form.name.trim()} <${form.email.trim()}>`;
    const max = 2000;
    const safeBody = body.length > max ? `${body.slice(0, max)}…` : body;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(safeBody)}`;
    setSubmitted(true);
    setForm(initial);
    setTouched({ name: false, email: false, message: false });
    window.location.href = mailto;
  }

  const { social } = profile;

  return (
    <section id="contact" className="scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold sm:text-4xl"
        >
          Contact
        </motion.h2>
        <p className="mt-2 max-w-2xl text-zinc-400 light:text-zinc-600">
          Send a message — validation runs in the browser. Submit opens your email client; swap in EmailJS
          (see <code className="rounded bg-white/5 px-1 text-xs">README</code>) for API delivery without mailto.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400/90 light:text-cyan-700">
              Social
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-300 transition hover:text-cyan-300 light:text-zinc-700 light:hover:text-cyan-700"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-300 transition hover:text-cyan-300 light:text-zinc-700 light:hover:text-cyan-700"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={social.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-300 transition hover:text-cyan-300 light:text-zinc-700 light:hover:text-cyan-700"
                >
                  NITA Classes
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs text-zinc-500 light:text-zinc-500">
              Direct:{" "}
              <a
                className="text-cyan-400 hover:underline light:text-cyan-700"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
              {" · "}
              <a
                className="text-cyan-400 hover:underline light:text-cyan-700"
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
              >
                {profile.phone}
              </a>
            </p>
          </div>

          <form
            onFocus={() => setSubmitted(false)}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 lg:col-span-3"
            noValidate
          >
            {submitted && (
              <p
                className="mb-4 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-200 light:border-cyan-200 light:bg-cyan-50 light:text-cyan-900"
                role="status"
              >
                Thanks — if your email app didn’t open, copy your message and email{" "}
                {profile.email} directly.
              </p>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 light:text-zinc-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 light:border-zinc-200 light:bg-white light:text-zinc-900"
                  placeholder="Your name"
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-xs text-rose-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 light:text-zinc-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 light:border-zinc-200 light:bg-white light:text-zinc-900"
                  placeholder="you@example.com"
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-xs text-rose-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 light:text-zinc-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 light:border-zinc-200 light:bg-white light:text-zinc-900"
                  placeholder="What would you like to build or discuss?"
                />
                {errors.message && touched.message && (
                  <p className="mt-1 text-xs text-rose-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/15 transition hover:shadow-cyan-500/25 sm:w-auto sm:px-8"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
