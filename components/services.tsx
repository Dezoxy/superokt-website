import { Eyebrow } from "@/components/eyebrow"
import type { Dictionary } from "@/lib/content"

export function Services({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="services" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-28">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {t.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">{t.lead}</p>
        <ul className="mt-10 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {t.items.map((service) => (
            <li
              key={service}
              className="flex items-start gap-3 border-b border-line py-4 text-neutral-700"
            >
              <span
                aria-hidden="true"
                className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-neutral-400"
              />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
