import type { Metadata } from "next";
import { ApproachTimeline } from "@/components/approach/ApproachTimeline";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { RetrofitVisual } from "@/components/viz/RetrofitVisual";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our approach — from existing conditions to future performance",
  description:
    "How Carbon Edge approaches MEP retrofit and plant modernisation: assess, plan, coordinate, implement and validate — without treating it as a secret methodology.",
};

export default function ApproachPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Our approach"
        title="From existing conditions"
        titleAccent="to future performance."
        lede="Complex building modernisation starts with what is already there. The sequence below is a practical way of working with occupied, constrained and often historic buildings. It is not a proprietary Carbon Edge methodology."
      />

      <section className="bg-navy-950 text-cream">
        <ApproachTimeline />
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">The engineering idea</p>
            <h2 className="display-section mt-5">
              Keep the building. Change the systems behind it.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/80">
              Heritage facades and tired plant rooms often belong to the same
              asset. Carbon Edge is set up for that contradiction: traditional
              building-services experience, applied to decarbonisation and
              performance rather than new-build volume.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <RetrofitVisual />
          </Reveal>
        </div>
      </section>

      <FinalCta title="If the plant room is the problem, start there." />
    </main>
  );
}
