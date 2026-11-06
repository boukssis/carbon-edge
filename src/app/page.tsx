import { FinalCta } from "@/components/ui/FinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import {
  ExpertiseStrip,
  FieldTeaser,
  FounderIntro,
  Introduction,
  LegacyFuture,
  SectorsPreview,
  ServicesRows,
} from "@/components/home/HomeSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEP retrofit and building decarbonisation, London",
  description:
    "Carbon Edge Building Services — specialist MEP retrofit, plant modernisation and decarbonisation for London’s existing commercial buildings.",
};

export default function HomePage() {
  return (
    <main id="main">
      <HomeHero />
      <ExpertiseStrip />
      <Introduction />
      <ServicesRows />
      <LegacyFuture />
      <SectorsPreview />
      <FieldTeaser />
      <FounderIntro />
      <FinalCta
        eyebrow="A conversation"
        title="Tell us about the building."
        copy="Plant replacement, retrofit or an early assessment. The useful starting point is the system already in the building."
      />
    </main>
  );
}
