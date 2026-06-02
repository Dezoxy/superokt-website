import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { PrivacyContent } from "@/components/privacy-content"

const alternates = { en: "/privacy", hu: "/hu/adatkezeles" }

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How superokt processes personal data in connection with this website.",
  alternates: {
    canonical: "/privacy",
    languages: { en: "/privacy", hu: "/hu/adatkezeles" },
  },
}

export default function PrivacyPage() {
  return (
    <LegalPage locale="en" alternates={alternates}>
      <PrivacyContent locale="en" />
    </LegalPage>
  )
}
