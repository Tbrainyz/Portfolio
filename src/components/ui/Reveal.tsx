import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export function Reveal({ children, className = "" }: RevealProps) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
