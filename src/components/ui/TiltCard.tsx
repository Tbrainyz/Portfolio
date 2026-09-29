import { useRef, type MouseEvent, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    const bounds = el.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    el.style.setProperty("--ry", `${(x / bounds.width - 0.5) * 8}deg`);
    el.style.setProperty("--rx", `${-(y / bounds.height - 0.5) * 8}deg`);
    el.style.setProperty("--mx", `${(x / bounds.width) * 100}%`);
    el.style.setProperty("--my", `${(y / bounds.height) * 100}%`);
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card group relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--color-surface) / 0.08), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
