import { useState } from "react";

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  label: string;
  variant?: "avatar" | "shot";
}

export function ImageWithFallback({ src, alt, label, variant = "shot" }: ImageWithFallbackProps) {
  const [broken, setBroken] = useState(false);

  if (!src || broken) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 bg-gradient-to-br from-brand-amber/10 to-brand-magenta/10 p-5 text-center text-dim">
        {variant === "avatar" ? (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-50">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        ) : (
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-45">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="10" r="1.5" />
            <path d="M21 16l-5-5-4 4-2-2-5 5" />
          </svg>
        )}
        <span className="font-mono text-[11px] tracking-wide">{label}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} onError={() => setBroken(true)} className="h-full w-full object-cover" />;
}
