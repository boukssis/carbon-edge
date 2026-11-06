import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Ashlee Rising and Carbon Edge",
  description:
    "Carbon Edge Building Services was founded in 2026 by Ashlee Rising, drawing on over 22 years of building-services industry experience.",
};

const statements = [
  {
    title: "Engineering experience",
    body: "A career that began as a hands-on MEP apprenticeship at sixteen, then moved through estimating, commercial management and senior leadership. The company is new. The judgement is not.",
  },
  {
    title: "Practical decarbonisation",
    body: "The opportunity sits in plant that already serves theatres, hotels, offices, retail and mansion blocks — replaced, electrified or better controlled where the building allows it.",
  },
  {
    title: "Long-term partnerships",
    body: "Retrofit is a relationship business: consultants, contractors, facilities teams and the owners who live with the asset.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title="Built on experience."
        titleAccent="Focused on the future."
        lede="Carbon Edge Building Services Limited was incorporated on 21 June 2026 to help London’s existing buildings move toward a lower-carbon future."
      />

      <section className="on-light bg-cream">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <figure className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden bg-navy-900">
              <Image
                src="/brand/ashlee-rising.jpg"
                alt="Portrait of Ashlee Rising, Founder and Director"
                fill
                sizes="(min-width:1024px) 480px, 90vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </figure>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow">Founder & Director</p>
            <h2 className="display-section mt-3">Ashlee Rising</h2>
            <p className="mt-3 font-mono text-[12px] tracking-[0.16em] text-copper uppercase">
              Carbon Edge Building Services
            </p>
            <p className="mt-8 max-w-xl font-serif text-2xl leading-snug text-navy-800">
              {site.founder.experience}
            </p>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-charcoal/80">
              <p>
                That experience belongs to Ashlee, not to a long trading history. The company was founded in 2026.
              </p>
              <p>
                The career started on the tools and grew into estimating, commercial control and senior delivery. Heritage retrofit, including mechanical services on a Grade I listed scientific institution, sits in that earlier experience and shaped the decision to start Carbon Edge.
              </p>
              <p>
                The practice combines traditional building-services judgement with a focus on performance, working alongside the consultants, contractors and owners who already know these buildings.
              </p>
            </div>
            <div className="mt-8">
              <Button href={site.founder.linkedin}>Ashlee on LinkedIn</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="on-light border-t border-navy-900/10 bg-stone">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 lg:py-20">
          {statements.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-2xl tracking-tight text-navy-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
