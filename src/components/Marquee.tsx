const stack = [
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "MongoDB",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Paystack",
  "WhatsApp Cloud API",
  "Vercel",
  "Render",
];

export function Marquee() {
  return (
    <div className="mask-fade-x relative z-[3] overflow-hidden border-y border-surface/10 py-5">
      <div className="flex w-max animate-marquee gap-12">
        {[...stack, ...stack].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2.5 whitespace-nowrap font-mono text-[13px] text-dim before:h-1 before:w-1 before:rounded-full before:bg-dim"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
