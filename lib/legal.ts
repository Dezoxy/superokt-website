import type { Locale } from "@/lib/content"

// Official registration data (source: céginformáció.hu).
// NOTE: managingDirector is not public on céginformáció — fill it in before launch.
export const registration = {
  tradeName: "superokt",
  legalName: "SUPER-OKT Oktatásfejlesztő Korlátolt Felelősségű Társaság",
  legalNameShort: "SUPER-OKT Kft.",
  seat: "1084 Budapest, Víg utca 18.",
  registrationNumber: "01-09-667709",
  taxNumber: "12336915-2-42",
  euVatNumber: "HU12336915",
  managingDirector: "Horváth Tamás",
  email: "tom@superokt.com",
  hosting: {
    name: "Cloudflare, Inc.",
    address: "101 Townsend Street, San Francisco, CA 94107, USA",
    url: "https://www.cloudflare.com",
  },
}

type ImprintCopy = {
  title: string
  updated: string
  intro: string
  labels: {
    legalName: string
    seat: string
    registrationNumber: string
    taxNumber: string
    euVatNumber: string
    managingDirector: string
    email: string
  }
  hostingTitle: string
  hostingLabels: { name: string; address: string }
  directorPlaceholder: string
}

export const imprint: Record<Locale, ImprintCopy> = {
  en: {
    title: "Imprint",
    updated: "Last updated: 2 June 2026",
    intro: "Information about the operator of this website, as required under Hungarian law.",
    labels: {
      legalName: "Company",
      seat: "Registered seat",
      registrationNumber: "Company registration number",
      taxNumber: "Tax number",
      euVatNumber: "EU VAT number",
      managingDirector: "Managing director",
      email: "Email",
    },
    hostingTitle: "Hosting provider",
    hostingLabels: { name: "Provider", address: "Address" },
    directorPlaceholder: "[ add managing director's name ]",
  },
  hu: {
    title: "Impresszum",
    updated: "Utolsó frissítés: 2026. június 2.",
    intro: "A weboldal üzemeltetőjére vonatkozó, jogszabály által előírt adatok.",
    labels: {
      legalName: "Cégnév",
      seat: "Székhely",
      registrationNumber: "Cégjegyzékszám",
      taxNumber: "Adószám",
      euVatNumber: "Közösségi adószám",
      managingDirector: "Ügyvezető",
      email: "E-mail",
    },
    hostingTitle: "Tárhelyszolgáltató",
    hostingLabels: { name: "Szolgáltató", address: "Cím" },
    directorPlaceholder: "[ ügyvezető neve ]",
  },
}

export type PrivacySection = {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

type PrivacyCopy = {
  title: string
  updated: string
  intro: string
  sections: PrivacySection[]
}

export const privacy: Record<Locale, PrivacyCopy> = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: 2 June 2026",
    intro:
      "This notice explains how superokt (operated by SUPER-OKT Kft.) processes personal data in connection with this website. We keep data collection to the minimum needed to run the site and respond to inquiries.",
    sections: [
      {
        heading: "Data controller",
        paragraphs: [
          "SUPER-OKT Oktatásfejlesztő Kft., registered seat: 1084 Budapest, Víg utca 18., Hungary.",
          "Questions about your data: tom@superokt.com.",
        ],
      },
      {
        heading: "What we process and why",
        paragraphs: [
          "This is a static, informational website with no accounts, no sign-up, and no tracking cookies. We process personal data only in these cases:",
        ],
        list: [
          "If you contact us by email, we process your name, email address, and the content of your message to reply and, where relevant, to take steps toward a possible engagement (GDPR Art. 6(1)(b) and (f)).",
          "Our hosting and CDN provider (Cloudflare) processes technical request data such as your IP address and browser details to deliver the site and protect it from abuse (legitimate interest, Art. 6(1)(f)).",
          "We use Cloudflare Web Analytics, a privacy-first, cookieless analytics tool that produces aggregated visit statistics without building profiles or tracking you across sites (legitimate interest, Art. 6(1)(f)).",
        ],
      },
      {
        heading: "Cookies",
        paragraphs: [
          "The site sets no advertising or tracking cookies. Cloudflare may set strictly necessary cookies for security; the analytics is cookieless.",
        ],
      },
      {
        heading: "Processors and international transfers",
        paragraphs: [
          "We rely on Cloudflare, Inc. (USA) for hosting, content delivery, and analytics. Where data is transferred outside the EEA, it is covered by the European Commission's Standard Contractual Clauses and Cloudflare's data protection terms.",
        ],
      },
      {
        heading: "How long we keep data",
        paragraphs: [
          "Email correspondence is kept for as long as needed to handle your inquiry and any resulting business relationship, then deleted. Technical logs and aggregated analytics are retained according to Cloudflare's standard periods.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under the GDPR you can request access to, correction, or erasure of your data, restrict or object to processing, and request portability. To exercise any of these, email tom@superokt.com.",
          "If you believe your data is handled unlawfully, you can lodge a complaint with the Hungarian Data Protection Authority (NAIH), 1055 Budapest, Falk Miksa utca 9-11., www.naih.hu.",
        ],
      },
      {
        heading: "Changes to this notice",
        paragraphs: [
          "We may update this notice as the site or our tools change. The current version always lives on this page.",
        ],
      },
    ],
  },
  hu: {
    title: "Adatkezelési tájékoztató",
    updated: "Utolsó frissítés: 2026. június 2.",
    intro:
      "Ez a tájékoztató bemutatja, hogyan kezeli a superokt (üzemeltető: SUPER-OKT Kft.) a személyes adatokat ezen a weboldalon. Az adatgyűjtést a weboldal működtetéséhez és a megkeresések megválaszolásához szükséges minimumra korlátozzuk.",
    sections: [
      {
        heading: "Adatkezelő",
        paragraphs: [
          "SUPER-OKT Oktatásfejlesztő Kft., székhely: 1084 Budapest, Víg utca 18.",
          "Adatkezeléssel kapcsolatos kérdések: tom@superokt.com.",
        ],
      },
      {
        heading: "Milyen adatokat és miért kezelünk",
        paragraphs: [
          "Ez egy statikus, tájékoztató jellegű weboldal, fiókok, regisztráció és nyomkövető sütik nélkül. Személyes adatot csak az alábbi esetekben kezelünk:",
        ],
        list: [
          "Ha e-mailben felveszi velünk a kapcsolatot, a nevét, e-mail-címét és üzenete tartalmát a válaszadás, illetve egy esetleges együttműködés előkészítése céljából kezeljük (GDPR 6. cikk (1) bekezdés b) és f) pont).",
          "Tárhely- és CDN-szolgáltatónk (Cloudflare) technikai adatokat – például IP-címet és böngészőadatokat – kezel a weboldal kiszolgálása és a visszaélések elleni védelem érdekében (jogos érdek, 6. cikk (1) bekezdés f) pont).",
          "Cloudflare Web Analytics megoldást használunk: ez egy adatvédelem-központú, sütimentes elemző eszköz, amely összesített látogatottsági statisztikát készít profilalkotás és oldalakon átívelő nyomkövetés nélkül (jogos érdek, 6. cikk (1) bekezdés f) pont).",
        ],
      },
      {
        heading: "Sütik",
        paragraphs: [
          "A weboldal nem helyez el hirdetési vagy nyomkövető sütit. A Cloudflare biztonsági okból elhelyezhet feltétlenül szükséges sütit; az elemzés sütimentes.",
        ],
      },
      {
        heading: "Adatfeldolgozók és nemzetközi adattovábbítás",
        paragraphs: [
          "A tárhelyhez, tartalomkiszolgáláshoz és elemzéshez a Cloudflare, Inc. (USA) szolgáltatásait vesszük igénybe. Az EGT-n kívülre továbbított adatokra az Európai Bizottság általános szerződési feltételei (SCC) és a Cloudflare adatvédelmi feltételei vonatkoznak.",
        ],
      },
      {
        heading: "Az adatok megőrzése",
        paragraphs: [
          "A levelezést addig őrizzük meg, amíg az a megkeresés és az esetleges együttműködés kezeléséhez szükséges, majd töröljük. A technikai naplókat és az összesített statisztikákat a Cloudflare szokásos megőrzési ideje szerint kezeljük.",
        ],
      },
      {
        heading: "Az Ön jogai",
        paragraphs: [
          "A GDPR alapján kérheti adataihoz való hozzáférést, azok helyesbítését vagy törlését, az adatkezelés korlátozását, tiltakozhat az adatkezelés ellen, és kérheti az adathordozhatóságot. Ezek gyakorlásához írjon a tom@superokt.com címre.",
          "Ha úgy véli, hogy adatait jogszerűtlenül kezeljük, panasszal fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH), 1055 Budapest, Falk Miksa utca 9-11., www.naih.hu.",
        ],
      },
      {
        heading: "A tájékoztató módosítása",
        paragraphs: [
          "A tájékoztatót a weboldal vagy az eszközeink változásával frissíthetjük. A mindenkori aktuális változat ezen az oldalon érhető el.",
        ],
      },
    ],
  },
}
