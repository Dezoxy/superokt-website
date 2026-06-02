import { Logomark } from "@/components/logomark"
import { company } from "@/lib/content"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-neutral-700 ${className ?? ""}`}>
      <Logomark className="h-8 w-8 shrink-0" />
      <span className="text-[15px] font-light uppercase tracking-[0.2em]">{company.name}</span>
    </span>
  )
}
