// biome-ignore-all lint/security/noDangerouslySetInnerHtml: this file injects static, developer-controlled JSON-LD structured data
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata, Viewport } from "next"
import { registration } from "@/lib/legal"
import "./globals.css"

const siteUrl = "https://superokt.com"

export const metadata: Metadata = {
  // Update this to the real production domain so canonical/hreflang/OG URLs are absolute.
  metadataBase: new URL(siteUrl),
  title: {
    default: "superokt — Simple, practical IT systems for businesses",
    template: "%s — superokt",
  },
  applicationName: "superokt",
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#f6f1e8",
  colorScheme: "light",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "superokt",
  legalName: registration.legalName,
  url: siteUrl,
  email: registration.email,
  logo: `${siteUrl}/icon.svg`,
  description:
    "Simple, practical IT systems for businesses — websites, internal tools, automation, cloud setup, monitoring, and backups.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Víg utca 18.",
    postalCode: "1084",
    addressLocality: "Budapest",
    addressCountry: "HU",
  },
  areaServed: { "@type": "Country", name: "Hungary" },
  vatID: registration.euVatNumber,
  taxID: registration.taxNumber,
  availableLanguage: ["hu", "en"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cfBeaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {cfBeaconToken ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: cfBeaconToken })}
          />
        ) : null}
      </body>
    </html>
  )
}
