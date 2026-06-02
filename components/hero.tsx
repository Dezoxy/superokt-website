import { company, type Dictionary } from "@/lib/content"

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28">
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
          {t.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg">
          {t.body}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={`mailto:${company.email}`}
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-neutral-950 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base sm:w-auto"
          >
            {t.primary}
          </a>
          <a
            href="#services"
            className="inline-flex h-11 w-full items-center justify-center rounded-md border border-neutral-300 px-6 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-400 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-base sm:w-auto"
          >
            {t.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}
