import { Logo } from "@/components/logo"
import { company, getDictionary, type Locale } from "@/lib/content"

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const year = new Date().getFullYear()
  const legal =
    locale === "hu"
      ? { imprint: "/hu/impresszum", privacy: "/hu/adatkezeles" }
      : { imprint: "/imprint", privacy: "/privacy" }

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <a href={legal.imprint} className="transition-colors hover:text-accent">
            {t.footer.imprint}
          </a>
          <a href={legal.privacy} className="transition-colors hover:text-accent">
            {t.footer.privacy}
          </a>
          <span className="text-neutral-400">
            © {year} {company.name}
          </span>
        </div>
      </div>
    </footer>
  )
}
