import type { MetadataRoute } from "next"

const base = "https://superokt.com"

function langs(en: string, hu: string) {
  return { languages: { en: `${base}${en}`, hu: `${base}${hu}` } }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: langs("/", "/hu"),
    },
    {
      url: `${base}/hu`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: langs("/", "/hu"),
    },
    {
      url: `${base}/imprint`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: langs("/imprint", "/hu/impresszum"),
    },
    {
      url: `${base}/hu/impresszum`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: langs("/imprint", "/hu/impresszum"),
    },
    {
      url: `${base}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: langs("/privacy", "/hu/adatkezeles"),
    },
    {
      url: `${base}/hu/adatkezeles`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: langs("/privacy", "/hu/adatkezeles"),
    },
  ]
}
