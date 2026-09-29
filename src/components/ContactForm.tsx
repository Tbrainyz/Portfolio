import { useState, type FormEvent } from "react";

// Sign up free at https://formspree.io, create a form, and paste its endpoint
// below. Until you do, the form still works in the UI but submissions won't
// actually send anywhere — status will just show "error".
const FORM_ENDPOINT = "https://formspree.io/f/xeebwlbv";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-surface/10 bg-surface/5 p-8 backdrop-blur-lg"
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="rounded-lg border border-surface/10 bg-ink/40 px-4 py-3 text-sm text-fg placeholder:text-dim focus:border-brand-magenta focus:outline-none"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email Address"
        className="rounded-lg border border-surface/10 bg-ink/40 px-4 py-3 text-sm text-fg placeholder:text-dim focus:border-brand-magenta focus:outline-none"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell me about your project"
        className="resize-none rounded-lg border border-surface/10 bg-ink/40 px-4 py-3 text-sm text-fg placeholder:text-dim focus:border-brand-magenta focus:outline-none"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-xl bg-gradient-to-br from-brand-amber to-brand-magenta px-6 py-3.5 text-sm font-semibold text-black transition disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm text-brand-green">Message sent — I'll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-brand-ember">
          Something went wrong — try emailing me directly instead.
        </p>
      )}
    </form>
  );
}
