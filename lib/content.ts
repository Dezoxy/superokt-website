export const locales = ["en", "hu"] as const
export type Locale = (typeof locales)[number]

export const company = {
  name: "superokt",
  email: "tom@superokt.com",
}

export type Dictionary = {
  htmlTitle: string
  metaDescription: string
  nav: {
    services: string
    approach: string
    contact: string
  }
  hero: {
    headline: string
    body: string
    primary: string
    secondary: string
  }
  manifesto: {
    eyebrow: string
    title: string
    lead: string
    paragraphs: string[]
  }
  services: {
    eyebrow: string
    title: string
    lead: string
    items: string[]
  }
  approach: {
    eyebrow: string
    title: string
    steps: { title: string; description: string }[]
    summary: string
  }
  expectations: {
    eyebrow: string
    title: string
    lead: string
    items: { title: string; body: string }[]
  }
  footer: {
    imprint: string
    privacy: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    htmlTitle: "superokt — Simple, practical IT systems for businesses",
    metaDescription:
      "superokt helps businesses build and improve the technical systems they actually need — websites, internal tools, automation, cloud infrastructure, deployment, monitoring, backups, and secure workflows.",
    nav: {
      services: "Services",
      approach: "Approach",
      contact: "Contact",
    },
    hero: {
      headline: "Simple, practical IT systems for businesses.",
      body: "We build and improve the technical systems businesses actually run on — websites, internal tools, automation, and the cloud setup, monitoring, and backups behind them.",
      primary: "Contact us",
      secondary: "View services",
    },
    manifesto: {
      eyebrow: "01 // Philosophy",
      title: "Full-pipeline IT thinking.",
      lead: "Businesses need reliable systems, not just disjointed applications.",
      paragraphs: [
        "Building an application is only one part of solving a business problem. A system that lasts covers the whole lifecycle — secure authentication, resilient hosting, automated deployment, sensible data design, and properly configured monitoring and backups.",
      ],
    },
    services: {
      eyebrow: "02 // Services",
      title: "What we help with",
      lead: "Most businesses don't need more software — they need the few systems they already depend on to work together and keep running. These are the practical pieces we help with:",
      items: [
        "Websites and landing pages",
        "Internal dashboards and admin tools",
        "Customer portals",
        "CRM / ERP-like lightweight systems",
        "Automation between tools",
        "Cloud hosting and deployment",
        "Authentication and user roles",
        "Monitoring and backup setup",
      ],
    },
    approach: {
      eyebrow: "03 // Process",
      title: "How we work",
      steps: [
        {
          title: "Understand the business problem",
          description:
            "We start with how your business actually works and where the friction is — not with a particular technology.",
        },
        {
          title: "Design the simplest useful system",
          description:
            "We propose the smallest solution that genuinely solves it, and explain the trade-offs in plain language.",
        },
        {
          title: "Build and deploy it",
          description:
            "We build it, set up hosting and deployment, and get it running in production — not just on a laptop.",
        },
        {
          title: "Document it and hand it over",
          description:
            "We set it up on your own accounts and document how it works — so your team can run it without ongoing dependency on us.",
        },
      ],
      summary:
        "We focus on systems that are understandable, maintainable, and useful in daily business operations.",
    },
    expectations: {
      eyebrow: "04 // Principles",
      title: "What you can expect",
      lead: "A few principles guide everything we build:",
      items: [
        {
          title: "Simple by default",
          body: "The fewest moving parts that solve the problem — no unnecessary complexity, no features you'll never use.",
        },
        {
          title: "Connected and automated",
          body: "Your tools talk to each other, so repetitive manual work quietly disappears.",
        },
        {
          title: "Reliable infrastructure",
          body: "Cloud hosting, deployment, monitoring, and backups set up properly from the start.",
        },
        {
          title: "Yours to keep",
          body: "Built on standard tools and your own accounts, and documented — so you're never locked in.",
        },
      ],
    },
    footer: {
      imprint: "Imprint",
      privacy: "Privacy",
    },
  },
  hu: {
    htmlTitle: "superokt — Egyszerű, praktikus IT-rendszerek vállalkozásoknak",
    metaDescription:
      "A superokt segít a vállalkozásoknak felépíteni és továbbfejleszteni a valóban szükséges technikai rendszereket — weboldalak, belső eszközök, automatizáció, felhőinfrastruktúra, üzembe helyezés, monitorozás, biztonsági mentések és biztonságos munkafolyamatok.",
    nav: {
      services: "Szolgáltatások",
      approach: "Munkamódszer",
      contact: "Kapcsolat",
    },
    hero: {
      headline: "Egyszerű, praktikus IT-rendszerek vállalkozásoknak.",
      body: "Felépítjük és továbbfejlesztjük azokat a technikai rendszereket, amelyeken a vállalkozások valóban működnek — weboldalak, belső eszközök, automatizáció, valamint a mögöttük álló felhőinfrastruktúra, monitorozás és biztonsági mentés.",
      primary: "Kapcsolatfelvétel",
      secondary: "Szolgáltatások megtekintése",
    },
    manifesto: {
      eyebrow: "01 // Szemlélet",
      title: "Full-pipeline IT thinking.",
      lead: "A vállalkozásoknak megbízható rendszerekre van szükségük, nem különálló alkalmazásokra.",
      paragraphs: [
        "Egy alkalmazás megírása csak egy része az üzleti probléma megoldásának. Egy tartós rendszer a teljes életciklust lefedi — biztonságos hitelesítés, megbízható tárhely, automatizált üzembe helyezés, átgondolt adatszerkezet, valamint megfelelően beállított monitorozás és biztonsági mentés.",
      ],
    },
    services: {
      eyebrow: "02 // Szolgáltatások",
      title: "Miben segítünk",
      lead: "A legtöbb vállalkozásnak nem több szoftverre van szüksége, hanem arra, hogy az a néhány rendszer, amelyre már most is támaszkodik, együttműködjön és megbízhatóan működjön. Ezekben a gyakorlati részekben segítünk:",
      items: [
        "Weboldalak és céloldalak",
        "Belső irányítópultok és adminisztrációs eszközök",
        "Ügyfélportálok",
        "CRM / ERP-jellegű, egyszerű rendszerek",
        "Eszközök közötti automatizáció",
        "Felhőalapú tárhely és üzembe helyezés",
        "Hitelesítés és felhasználói szerepkörök",
        "Monitorozás és biztonsági mentés beállítása",
      ],
    },
    approach: {
      eyebrow: "03 // Módszer",
      title: "Hogyan dolgozunk",
      steps: [
        {
          title: "Megértjük az üzleti problémát",
          description:
            "Azzal kezdjük, hogyan működik valójában a vállalkozása, és hol vannak a súrlódási pontok — nem egy konkrét technológiával.",
        },
        {
          title: "Megtervezzük a legegyszerűbb használható rendszert",
          description:
            "A legkisebb megoldást javasoljuk, amely valóban megoldja a problémát, és közérthetően elmagyarázzuk a kompromisszumokat.",
        },
        {
          title: "Megépítjük és üzembe helyezzük",
          description:
            "Megépítjük, beállítjuk a tárhelyet és az üzembe helyezést, és éles környezetben elindítjuk — nem csak egy laptopon.",
        },
        {
          title: "Dokumentáljuk és átadjuk",
          description:
            "Az Ön saját fiókjain állítjuk be, és dokumentáljuk a működését — így a csapata folyamatos függőség nélkül üzemeltetheti.",
        },
      ],
      summary:
        "Olyan rendszerekre koncentrálunk, amelyek érthetők, karbantarthatók és hasznosak a mindennapi üzleti működésben.",
    },
    expectations: {
      eyebrow: "04 // Alapelvek",
      title: "Mire számíthat",
      lead: "Néhány alapelv vezérel mindent, amit építünk:",
      items: [
        {
          title: "Egyszerűség alapból",
          body: "A lehető legkevesebb mozgó alkatrész, amely megoldja a problémát — felesleges bonyolultság és sosem használt funkciók nélkül.",
        },
        {
          title: "Összekapcsolva és automatizálva",
          body: "Az eszközei kommunikálnak egymással, így az ismétlődő, kézi munka észrevétlenül megszűnik.",
        },
        {
          title: "Megbízható infrastruktúra",
          body: "Felhőalapú tárhely, üzembe helyezés, monitorozás és biztonsági mentés — már az elejétől rendesen beállítva.",
        },
        {
          title: "Az Öné marad",
          body: "Bevett eszközökre és az Ön saját fiókjaira építünk, dokumentáltan — így soha nem marad egy szolgáltatóhoz láncolva.",
        },
      ],
    },
    footer: {
      imprint: "Impresszum",
      privacy: "Adatkezelési tájékoztató",
    },
  },
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
