export function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-[9px]">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-green">{children}</p>
    </div>
  )
}
