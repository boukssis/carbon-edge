import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sectors — heritage, commercial, hospitality and portfolios",
  description:
    "Building-services retrofit thinking for London’s heritage venues, offices, hotels, retail, mansion blocks and property portfolios.",
};

export default function SectorsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Sectors"
        title="Engineering solutions for"
        titleAccent="London’s complex buildings."
        lede="These are the types of buildings where ageing services, occupation and fabric constraints tend to collide. They are relevant sectors — not a claim that Carbon Edge has completed a named project in each one."
      />

      {sectors.map((sector, index) => (
        <article
          key={sector.id}
          id={sector.id}
          className={index % 2 === 0 ? "bg-cream" : "bg-navy-950 text-cream"}
        >
          <div className="mx-auto grid max-w-[1440px] items-stretch gap-0 lg:grid-cols-12">
            <div
              className={`relative min-h-[320px] lg:col-span-5 ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={sector.image}
                alt={sector.imageAlt}
                fill
                sizes="(min-width:1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              className={`px-4 py-16 sm:px-8 lg:col-span-7 lg:px-14 lg:py-24 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <Reveal>
                <p
                  className={`font-mono text-[11px] tracking-[0.22em] ${
                    index % 2 === 1 ? "text-gold" : "text-copper"
                  }`}
                >
                  {sector.index}
                </p>
                <h2 className="display-section mt-4">{sector.title}</h2>
                <p
                  className={`mt-4 font-serif text-xl leading-snug ${
                    index % 2 === 1 ? "text-cream/90" : "text-navy-800"
                  }`}
                >
                  {sector.headline}
                </p>
                <p
                  className={`mt-6 max-w-2xl text-base leading-relaxed ${
                    index % 2 === 1 ? "text-steel" : "text-charcoal/80"
                  }`}
                >
                  {sector.copy}
                </p>
                <p className="eyebrow mt-10">Typical challenges</p>
                <ul className="mt-4 space-y-2">
                  {sector.challenges.map((item) => (
                    <li
                      key={item}
                      className={`text-sm leading-relaxed ${
                        index % 2 === 1 ? "text-mist" : "text-charcoal/80"
                      }`}
                    >
                      — {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </article>
      ))}

      <FinalCta title="Tell us about the building, not the sector label." />
    </main>
  );
}
