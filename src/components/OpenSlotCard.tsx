export function OpenSlotCard() {
  return (
    <div className="h-full rounded-2xl border border-dashed border-surface/15 bg-surface/5">
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-brand-amber/10 to-brand-magenta/5">
        <span className="font-mono text-[11px] text-dim"></span>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-2.5">
          <span className="font-display text-xl font-bold tracking-tight">My next project</span>
          <span className="flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 font-mono text-[10.5px] text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Slot open
          </span>
        </div>
        <p className="text-[14.5px] leading-relaxed text-dim">
        </p>
      </div>
    </div>
  );
}
