import { Approach } from "@/components/approach"
import { Expectations } from "@/components/expectations"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { Services } from "@/components/services"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getDictionary, type Locale } from "@/lib/content"

export function SiteRoot({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)

  return (
    <div lang={locale}>
      <SiteHeader locale={locale} nav={t.nav} />
      <main>
        <Hero t={t.hero} />
        <Manifesto t={t.manifesto} />
        <Services t={t.services} />
        <Approach t={t.approach} />
        <Expectations t={t.expectations} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  )
}
