import { Reveal } from "./ui/Reveal";
import { StatCounter } from "./StatCounter";

const stats = [
  { target: 3, label: "Full-stack products shipped" },
  { target: 4, label: "Role tiers enforced via RBAC" },
  { target: 5, suffix: "+", label: "Live third-party integrations" },
  { target: 100, suffix: "%", label: "Comfortable owning frontend to deploy" },
];

export function Stats() {
  return (
    <section id="stats" className="relative z-[3] px-7 pb-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-surface/10 bg-surface/10 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
