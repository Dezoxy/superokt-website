import type { Metadata } from "next"
import { ImprintContent } from "@/components/imprint-content"
import { LegalPage } from "@/components/legal-page"

const alternates = { en: "/imprint", hu: "/hu/impresszum" }

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal information about the operator of superokt.",
  alternates: {
    canonical: "/imprint",
    languages: { en: "/imprint", hu: "/hu/impresszum" },
  },
}

export default function ImprintPage() {
  return (
    <LegalPage locale="en" alternates={alternates}>
      <ImprintContent locale="en" />
    </LegalPage>
  )
}
