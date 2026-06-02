import { LegalHeading } from "@/components/legal-page"
import type { Locale } from "@/lib/content"
import { imprint, registration } from "@/lib/legal"

export function ImprintContent({ locale }: { locale: Locale }) {
  const c = imprint[locale]

  const rows = [
    { label: c.labels.legalName, value: registration.legalName },
    { label: c.labels.seat, value: registration.seat },
    { label: c.labels.registrationNumber, value: registration.registrationNumber },
    { label: c.labels.taxNumber, value: registration.taxNumber },
    { label: c.labels.euVatNumber, value: registration.euVatNumber },
    {
      label: c.labels.managingDirector,
      value: registration.managingDirector || c.directorPlaceholder,
    },
    { label: c.labels.email, value: registration.email },
  ]

  return (
    <>
      <LegalHeading title={c.title} updated={c.updated} intro={c.intro} />

      <dl className="mt-10 border-t border-neutral-200 text-sm">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-1 border-b border-neutral-200 py-4 sm:grid-cols-[240px_1fr] sm:gap-6"
          >
            <dt className="text-neutral-500">{row.label}</dt>
            <dd className="text-neutral-900">
              {row.label === c.labels.email ? (
                <a
                  href={`mailto:${registration.email}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {registration.email}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-12 text-lg font-semibold text-neutral-900">{c.hostingTitle}</h2>
      <dl className="mt-4 border-t border-neutral-200 text-sm">
        <div className="grid grid-cols-1 gap-1 border-b border-neutral-200 py-4 sm:grid-cols-[240px_1fr] sm:gap-6">
          <dt className="text-neutral-500">{c.hostingLabels.name}</dt>
          <dd className="text-neutral-900">
            <a
              href={registration.hosting.url}
              target="_blank"
              rel="noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              {registration.hosting.name}
            </a>
          </dd>
        </div>
        <div className="grid grid-cols-1 gap-1 border-b border-neutral-200 py-4 sm:grid-cols-[240px_1fr] sm:gap-6">
          <dt className="text-neutral-500">{c.hostingLabels.address}</dt>
          <dd className="text-neutral-900">{registration.hosting.address}</dd>
        </div>
      </dl>
    </>
  )
}
