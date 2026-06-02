import type { Metadata } from "next"
import { ImprintContent } from "@/components/imprint-content"
import { LegalPage } from "@/components/legal-page"

const alternates = { en: "/imprint", hu: "/hu/impresszum" }

export const metadata: Metadata = {
  title: "Impresszum",
  description: "A superokt üzemeltetőjére vonatkozó jogi adatok.",
  alternates: {
    canonical: "/hu/impresszum",
    languages: { en: "/imprint", hu: "/hu/impresszum" },
  },
}

export default function ImpresszumPage() {
  return (
    <LegalPage locale="hu" alternates={alternates}>
      <ImprintContent locale="hu" />
    </LegalPage>
  )
}
