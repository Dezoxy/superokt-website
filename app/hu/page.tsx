import type { Metadata } from "next"
import { SiteRoot } from "@/components/site-root"
import { getDictionary } from "@/lib/content"

const t = getDictionary("hu")

export const metadata: Metadata = {
  title: { absolute: t.htmlTitle },
  description: t.metaDescription,
  alternates: {
    canonical: "/hu",
    languages: {
      en: "/",
      hu: "/hu",
      "x-default": "/",
    },
  },
  openGraph: {
    title: t.htmlTitle,
    description: t.metaDescription,
    siteName: "superokt",
    locale: "hu_HU",
    type: "website",
  },
}

export default function HungarianHome() {
  return <SiteRoot locale="hu" />
}
