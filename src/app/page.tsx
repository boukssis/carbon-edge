import { FinalCta } from "@/components/ui/FinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import {
  ExpertiseStrip,
  FieldPreview,
  FounderIntro,
  HowWeWork,
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
      <FieldPreview />
      <FounderIntro />
      <HowWeWork />
      <FinalCta />
    </main>
  );
}
