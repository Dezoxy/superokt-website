import { LanguageSwitcher } from "@/components/language-switcher"
import { Logo } from "@/components/logo"
import { company, type Dictionary, type Locale } from "@/lib/content"

export function SiteHeader({
  locale,
  nav,
  homeHref = "#top",
  sectionBase = "",
  localeHrefs,
}: {
  locale: Locale
  nav: Dictionary["nav"]
  homeHref?: string
  sectionBase?: string
  localeHrefs?: { en: string; hu: string }
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-6">
        <a href={homeHref} className="inline-flex items-center">
          <Logo />
        </a>
        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="hidden items-center gap-6 text-sm text-neutral-500 sm:flex">
            <a href={`${sectionBase}#services`} className="transition-colors hover:text-accent">
              {nav.services}
            </a>
            <a href={`${sectionBase}#approach`} className="transition-colors hover:text-accent">
              {nav.approach}
            </a>
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-accent">
              {nav.contact}
            </a>
          </nav>
          <LanguageSwitcher locale={locale} hrefs={localeHrefs} />
        </div>
      </div>
    </header>
  )
}
