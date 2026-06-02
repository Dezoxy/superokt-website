import type { Metadata } from "next"
import { SiteRoot } from "@/components/site-root"
import { getDictionary } from "@/lib/content"

const t = getDictionary("en")

export const metadata: Metadata = {
  title: { absolute: t.htmlTitle },
  description: t.metaDescription,
  alternates: {
    canonical: "/",
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
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return <SiteRoot locale="en" />
}
