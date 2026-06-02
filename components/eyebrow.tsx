export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-neutral-400">
      <span aria-hidden="true" className="h-px w-6 bg-accent/50" />
      <span>{children}</span>
    </div>
  )
}
