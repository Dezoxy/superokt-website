import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { PrivacyContent } from "@/components/privacy-content"

const alternates = { en: "/privacy", hu: "/hu/adatkezeles" }

export const metadata: Metadata = {
  title: "Adatkezelési tájékoztató",
  description: "Hogyan kezeli a superokt a személyes adatokat ezen a weboldalon.",
  alternates: {
    canonical: "/hu/adatkezeles",
    languages: { en: "/privacy", hu: "/hu/adatkezeles" },
  },
}

export default function AdatkezelesPage() {
  return (
    <LegalPage locale="hu" alternates={alternates}>
      <PrivacyContent locale="hu" />
    </LegalPage>
  )
}
