interface NavProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#hire", label: "Hire me" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ theme, onToggleTheme }: NavProps) {
  return (
    <div className="sticky top-4 z-50 flex justify-center px-5">
      <nav className="flex items-center gap-1 rounded-full border border-surface/10 bg-ink/60 py-1.5 pl-4 pr-1.5 shadow-2xl shadow-ink/40 backdrop-blur-xl">
        <span className="mr-4 font-display text-sm font-bold">Gbadebo Wale</span>

        <div className="hidden gap-0.5 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[13.5px] text-dim transition hover:bg-surface/10 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/files/Ade-CV.pdf"
          download
          className="ml-2 rounded-full border border-surface/10 bg-surface/5 px-3.5 py-2 font-mono text-xs transition hover:border-brand-magenta"
        >
          CV ↓
        </a>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label="Toggle light and dark mode"
          className="ml-2 flex h-7 w-[52px] flex-shrink-0 items-center rounded-full border border-surface/15 bg-surface/10 p-1 transition"
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-brand-amber to-brand-magenta text-[10px] transition-transform ${
              theme === "light" ? "translate-x-[22px]" : "translate-x-0"
            }`}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </span>
        </button>

        <span className="ml-2 hidden items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1.5 font-mono text-[11.5px] text-brand-green md:flex">
          <span className="relative h-1.5 w-1.5 rounded-full bg-brand-green">
            <span className="absolute -inset-1 animate-ping rounded-full border border-brand-green" />
          </span>
          Available for work
        </span>
      </nav>
    </div>
  );
}
