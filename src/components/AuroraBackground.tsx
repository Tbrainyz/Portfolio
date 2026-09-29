export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-32 -top-44 h-[560px] w-[560px] animate-float-1 rounded-full bg-brand-amber opacity-35 blur-[90px]" />
      <div className="absolute -right-40 top-32 h-[480px] w-[480px] animate-float-2 rounded-full bg-brand-magenta opacity-35 blur-[90px]" />
      <div className="absolute bottom-[-160px] left-[30%] h-[420px] w-[420px] animate-float-3 rounded-full bg-brand-ember opacity-20 blur-[90px]" />
    </div>
  );
}
