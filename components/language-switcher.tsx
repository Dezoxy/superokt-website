import Link from "next/link"
import type { Locale } from "@/lib/content"

function linkClass(active: boolean) {
  return active ? "font-medium text-accent" : "text-neutral-500 transition-colors hover:text-accent"
}

export function LanguageSwitcher({
  locale,
  hrefs = { en: "/", hu: "/hu" },
}: {
  locale: Locale
  hrefs?: { en: string; hu: string }
}) {
  return (
    <div className="flex items-center gap-2 text-[13px] sm:border-l sm:border-neutral-200 sm:pl-5 sm:text-sm">
      <Link
        href={hrefs.en}
        hrefLang="en"
        aria-current={locale === "en" ? "true" : undefined}
        className={linkClass(locale === "en")}
      >
        EN
      </Link>
      <span aria-hidden="true" className="text-neutral-300">
        /
      </span>
      <Link
        href={hrefs.hu}
        hrefLang="hu"
        aria-current={locale === "hu" ? "true" : undefined}
        className={linkClass(locale === "hu")}
      >
        HU
      </Link>
    </div>
  )
}
