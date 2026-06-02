import { LegalHeading } from "@/components/legal-page"
import type { Locale } from "@/lib/content"
import { privacy } from "@/lib/legal"

export function PrivacyContent({ locale }: { locale: Locale }) {
  const c = privacy[locale]

  return (
    <>
      <LegalHeading title={c.title} updated={c.updated} intro={c.intro} />

      <div className="mt-10 space-y-10">
        {c.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-neutral-900">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-relaxed text-neutral-600">
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="mt-4 space-y-3">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-neutral-600">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-neutral-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </>
  )
}
