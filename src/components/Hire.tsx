import { Reveal } from "./ui/Reveal";
import { CheckIcon } from "./ui/CheckIcon";

interface Tier {
  name: string;
  description: string;
  points: string[];
  featured?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Contract",
    description:
      "Bring me in for a defined scope — a feature, an integration, a migration — with a clear start and end.",
    points: [
      "Fixed-scope or time-boxed engagements",
      "Async-friendly, works across time zones",
      "Clean handoff with documentation",
    ],
  },
  {
    name: "Full-time",
    description: "Join a team and own real product surface area — remote or on-site, anywhere in the world.",
    points: [
      "End-to-end ownership, frontend to deploy",
      "Comfortable in early-stage, fast-moving teams",
      "Open to relocation for the right role",
    ],
    featured: true,
  },
  {
    name: "Freelance / Project",
    description: "Need an MVP built or an existing app fixed up? I can take it from brief to shipped.",
    points: [
      "MVP builds and product rebuilds",
      "Payments, messaging, and auth integrations",
      "Ongoing support after launch",
    ],
  },
];



export function Hire() {
  return (
    <section id="hire" className="relative z-[3] px-7 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <span className="mb-2.5 block font-mono text-xs tracking-wide text-brand-magenta">WAYS TO WORK TOGETHER</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Open to any structure that fits</h2>
          <p className="mt-3 max-w-lg text-dim">
            Full-time, contract, or a single well-scoped project — I adapt to what the work needs.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Reveal key={tier.name}>
              <div
                className={`relative h-full rounded-2xl border p-8 backdrop-blur-lg ${
                  tier.featured
                    ? "border-brand-magenta/40 bg-gradient-to-br from-brand-amber/10 to-brand-magenta/10"
                    : "border-surface/10 bg-surface/5"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-br from-brand-amber to-brand-magenta px-3 py-1 font-mono text-[10.5px] font-semibold text-black">
                    MOST FLEXIBLE
                  </span>
                )}

                <div className="mb-2.5 font-display text-xl font-bold">{tier.name}</div>
                <p className="mb-5 min-h-[88px] text-[14.5px] leading-relaxed text-dim">{tier.description}</p>

                <ul>
                  {tier.points.map((point, i) => (
                    <li
                      key={point}
                      className={`flex items-start gap-2.5 py-2 text-[13.5px] ${i > 0 ? "border-t border-surface/10" : ""}`}
                    >
                      <CheckIcon className="mt-0.5 text-brand-magenta" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
