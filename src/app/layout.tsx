import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Inter, Sora } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://carbon-edge-preview.local",
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${site.brandName} | MEP retrofit and decarbonisation, London`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Specialist MEP retrofit, plant modernisation and building decarbonisation for London’s existing commercial buildings.",
  applicationName: site.brandName,
  authors: [{ name: site.founder.name }],
  keywords: [
    "MEP retrofit London",
    "building decarbonisation London",
    "commercial plant replacement",
    "low-carbon building services",
    "mechanical plant modernisation",
    "building services contractor London",
    "air-source heat pump retrofit",
    "commercial HVAC refurbishment",
    "building management systems upgrade",
    "heritage building retrofit",
    "commercial building decarbonisation",
    "lifecycle energy assessment",
  ],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.brandName,
    title: `${site.brandName} | Preserve the character. Transform the performance.`,
    description:
      "Specialist MEP retrofit, plant modernisation and decarbonisation solutions for London’s existing buildings.",
    images: [{ url: "/brand/logo.jpg", width: 1024, height: 768, alt: site.brandName }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.brandName,
    description: site.tagline,
  },
  icons: {
    icon: "/brand/logo-mark.png",
    apple: "/brand/logo-mark.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brandName,
  legalName: site.legalName,
  foundingDate: "2026-06-21",
  description:
    "Specialist building-services contractor focused on decarbonisation, retrofit and modernisation of existing commercial buildings in London.",
  areaServed: {
    "@type": "City",
    name: "London",
    containedInPlace: { "@type": "Country", name: "United Kingdom" },
  },
  founder: {
    "@type": "Person",
    name: site.founder.name,
    jobTitle: site.founder.role,
    sameAs: site.founder.linkedin,
  },
  sameAs: [site.companyLinkedin],
  identifier: {
    "@type": "PropertyValue",
    name: "Company number",
    value: site.companyNumber,
  },
  slogan: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${sora.variable} ${inter.variable} ${instrument.variable} ${ibm.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <PreviewBanner />
        <Header />
        <div className="flex min-h-full flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
