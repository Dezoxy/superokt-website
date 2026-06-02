import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getDictionary, type Locale } from "@/lib/content"

export function LegalPage({
  locale,
  alternates,
  children,
}: {
  locale: Locale
  alternates: { en: string; hu: string }
  children: React.ReactNode
}) {
  const t = getDictionary(locale)
  const homeHref = locale === "hu" ? "/hu" : "/"

  return (
    <div lang={locale}>
      <SiteHeader
        locale={locale}
        nav={t.nav}
        homeHref={homeHref}
        sectionBase={homeHref}
        localeHrefs={alternates}
      />
      <main>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24">{children}</div>
      </main>
      <SiteFooter locale={locale} />
    </div>
  )
}

export function LegalHeading({
  title,
  updated,
  intro,
}: {
  title: string
  updated: string
  intro: string
}) {
  return (
    <header>
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-neutral-500">{updated}</p>
      <p className="mt-6 max-w-2xl leading-relaxed text-neutral-600">{intro}</p>
    </header>
  )
}
