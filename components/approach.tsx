import { Eyebrow } from "@/components/eyebrow"
import type { Dictionary } from "@/lib/content"

export function Approach({ t }: { t: Dictionary["approach"] }) {
  return (
    <section id="approach" className="scroll-mt-20 border-b border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-28">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {t.title}
        </h2>
        <ol className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, index) => (
            <li key={step.title}>
              <div className="font-mono text-sm text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-medium text-neutral-900">{step.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-2xl leading-relaxed text-neutral-600">{t.summary}</p>
      </div>
    </section>
  )
}
