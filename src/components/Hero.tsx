const chips = ["React · Node · MongoDB", "TypeScript", "Lagos, Nigeria"];

export function Hero() {
  return (
    <section className="relative px-7 pb-16 pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-magenta/25 bg-brand-magenta/10 px-3.5 py-1.5 font-mono text-xs tracking-wide text-brand-magenta opacity-0">
            ● Full-Stack Engineer
          </span>

          <h1
            className="mb-5 animate-fade-up font-display text-4xl font-extrabold leading-[1.05] tracking-tight opacity-0 sm:text-5xl lg:text-[58px]"
            style={{ animationDelay: "80ms" }}
          >
            I build{" "}
            <span className="bg-gradient-to-br from-brand-amber to-brand-magenta bg-clip-text text-transparent">
              production SaaS
            </span>{" "}
            that handles real money and real users.
          </h1>

          <p
            className="mb-8 max-w-lg animate-fade-up text-[17.5px] leading-relaxed text-dim opacity-0"
            style={{ animationDelay: "160ms" }}
          >
            Full-stack developer shipping multi-tenant platforms, subscription billing, and messaging
            infrastructure — on React, Node, and MongoDB. Open to full-time, contract, or freelance work,
            remote or on-site.
          </p>

          <div className="mb-10 flex animate-fade-up flex-wrap gap-3.5 opacity-0" style={{ animationDelay: "240ms" }}>
            <a
              href="#work"
              className="rounded-xl bg-gradient-to-br from-brand-amber to-brand-magenta px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-brand-magenta/25 transition hover:-translate-y-0.5"
            >
              View my work →
            </a>
            <a
              href="#hire"
              className="rounded-xl border border-surface/10 bg-surface/5 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5"
            >
              Ways to work together
            </a>
            <a
              href="/files/Ade-CV.pdf"
              download
              className="rounded-xl border border-surface/10 bg-surface/5 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:-translate-y-0.5"
            >
              Download CV ↓
            </a>
          </div>

          <div className="flex animate-fade-up flex-wrap gap-2.5 opacity-0" style={{ animationDelay: "320ms" }}>
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-surface/10 bg-surface/5 px-3 py-1.5 font-mono text-[11.5px] text-dim">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
