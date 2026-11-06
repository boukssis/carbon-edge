import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Ashlee Rising and Carbon Edge",
  description:
    "Carbon Edge Building Services was founded in 2026 by Ashlee Rising, drawing on over 22 years of building-services industry experience.",
};

const statements = [
  {
    title: "Engineering experience",
    body: "A career that began as a hands-on MEP apprenticeship at sixteen, then moved through estimating, commercial management and senior leadership on complex London schemes. The company is new. The judgement is not.",
  },
  {
    title: "Practical decarbonisation",
    body: "London cannot rebuild its way to lower carbon. The opportunity is in the plant that already serves theatres, hotels, offices, retail and mansion blocks — replaced, electrified or better controlled where the building allows it.",
  },
  {
    title: "Long-term partnerships",
    body: "Retrofit is a relationship business: consultants, contractors, facilities teams and owners who live with the asset. Carbon Edge is being built on those relationships, without claiming a roster of named clients.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title="Built on experience."
        titleAccent="Focused on the future."
        lede="Carbon Edge Building Services Limited was incorporated on 21 June 2026. It exists to help London transition existing buildings toward a lower-carbon future through practical engineering, MEP upgrades and intelligent retrofits."
      />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-navy-900">
              <Image
                src="/brand/ashlee-rising.jpg"
                alt="Portrait of Ashlee Rising, Founder and Director"
                fill
                sizes="(min-width:1024px) 40vw, 90vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow">Founder & Director</p>
            <h2 className="display-section mt-4">Ashlee Rising</h2>
            <p className="mt-2 font-mono text-[12px] tracking-[0.16em] text-copper uppercase">
              Carbon Edge Building Services
            </p>
            <p className="mt-8 font-serif text-2xl leading-snug text-navy-800">
              {site.founder.experience}
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80">
              <p>
                Ashlee has described a career that started on the tools and grew
                into senior leadership: design awareness, estimating, commercial
                control and the unglamorous work of making major building-services
                packages deliverable.
              </p>
              <p>
                That background sits behind a new company, not a 22-year-old
                contractor. Carbon Edge was founded because so much of London’s
                landmark and everyday commercial stock is running on plant that
                is tired, inefficient and increasingly misaligned with the city’s
                carbon ambitions.
              </p>
              <p>
                Publicly, Ashlee has spoken about the influence of heritage
                retrofit — including mechanical services on a Grade I listed
                scientific institution — on the decision to establish Carbon
                Edge. That work predates the company. It is part of why the
                firm exists, not a Carbon Edge case study.
              </p>
              <p>
                The professional bet is straightforward: combine traditional
                building-services experience with a specialist focus on
                performance and decarbonisation, and do it in collaboration with
                the consultants, contractors and owners who already know these
                buildings.
              </p>
            </div>
            <div className="mt-8">
              <Button href={site.founder.linkedin}>Ashlee on LinkedIn</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 text-cream">
        <div className="mx-auto grid max-w-[1440px] gap-px px-0 py-0 lg:grid-cols-3">
          {statements.map((item) => (
            <div key={item.title} className="bg-navy-950 px-6 py-16 sm:px-10">
              <h3 className="font-display text-2xl tracking-tight text-gold-light md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-steel">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10">
          <p className="max-w-3xl text-sm leading-relaxed text-charcoal/70">
            Carbon Edge Building Services Limited is a private limited company
            registered in England and Wales, company number {site.companyNumber}.
            Nature of business as filed: electrical installation; plumbing, heat
            and air-conditioning installation; other specialised construction
            activities. No awards, certifications or client lists are shown here
            because none have been authorised for this concept.
          </p>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
