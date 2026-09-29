import { useReveal } from "../hooks/useReveal";
import { useCountUp } from "../hooks/useCountUp";

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export function StatCounter({ target, suffix = "", label }: StatCounterProps) {
  const [ref, visible] = useReveal();
  const value = useCountUp(target, visible);

  return (
    <div ref={ref} className="bg-ink px-6 py-8 text-center">
      <div className="mb-2 bg-gradient-to-br from-brand-amber to-brand-magenta bg-clip-text font-display text-4xl font-extrabold text-transparent">
        {value}
        {suffix}
      </div>
      <div className="text-[13px] leading-snug text-dim">{label}</div>
    </div>
  );
}
