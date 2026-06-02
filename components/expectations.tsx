import { Eyebrow } from "@/components/eyebrow"
import type { Dictionary } from "@/lib/content"

export function Expectations({ t }: { t: Dictionary["expectations"] }) {
  return (
    <section id="expectations" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-28">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {t.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">{t.lead}</p>
        <dl className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:mt-12 sm:grid-cols-2">
          {t.items.map((item) => (
            <div key={item.title}>
              <dt className="font-medium text-neutral-900">{item.title}</dt>
              <dd className="mt-2 leading-relaxed text-neutral-600">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
