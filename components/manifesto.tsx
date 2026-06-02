import type { Dictionary } from "@/lib/content"

// Decorative technical readout (Budapest). Not localized — reads as a HUD label.
const COORDS = "47.50°N · 19.04°E"
const STATUS = "STATUS: OPERATIONAL"
const SYS_LABEL = "// SYS.ARCH"
const READOUT = `${COORDS}  //  ${STATUS}`

export function Manifesto({ t }: { t: Dictionary["manifesto"] }) {
  return (
    <section id="manifesto" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="relative border border-line bg-[#fdfbf6]/60 p-6 sm:p-10 lg:p-14">
          {/* corner ticks */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-px -top-px h-3.5 w-3.5 border-l-2 border-t-2 border-accent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-px -top-px h-3.5 w-3.5 border-r-2 border-t-2 border-accent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -left-px h-3.5 w-3.5 border-b-2 border-l-2 border-accent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -right-px h-3.5 w-3.5 border-b-2 border-r-2 border-accent"
          />

          {/* top readout */}
          <div className="mb-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
            <span className="text-accent">{SYS_LABEL}</span>
            <span className="hidden sm:inline">{READOUT}</span>
            <span className="sm:hidden">{STATUS}</span>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]">
            <div>
              <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-950 sm:text-4xl">
                {t.title}
              </h2>
              <div className="mt-6 h-px w-12 bg-accent/50" />
              <div className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-neutral-400">
                {t.eyebrow}
              </div>
            </div>

            <div>
              <p className="text-lg font-medium leading-snug text-neutral-900">{t.lead}</p>
              <div className="mt-6 space-y-4 leading-relaxed text-neutral-600">
                {t.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
