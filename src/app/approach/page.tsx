import type { Metadata } from "next";
import { ApproachTimeline } from "@/components/approach/ApproachTimeline";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Our approach — from existing conditions to future performance",
  description:
    "How Carbon Edge approaches MEP retrofit and plant modernisation: assess, plan, coordinate, implement and validate.",
};

export default function ApproachPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our approach"
        title="From existing conditions"
        titleAccent="to future performance."
        lede="Complex building modernisation starts with what is already there: the plant, the fabric, the occupation and the constraints that decide what is possible."
      />

      <section className="on-light border-y border-navy-900/10 bg-cream">
        <ApproachTimeline />
      </section>

      <section className="bg-navy-950 text-cream">
        <div className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="eyebrow">The idea</p>
          <h2 className="display-section mt-5 max-w-3xl">
            Keep the building.
            <br />
            <span className="text-gold-light">Change the systems behind it.</span>
          </h2>
        </div>
      </section>

      <FinalCta title="If the plant room is the problem, start there." copy="Tell us what is already installed, and what the building has to keep doing." />
    </main>
  );
}
