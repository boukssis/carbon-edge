import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
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
        lede="The building types where ageing services, occupation and fabric tend to collide."
      />

      <div className="on-light bg-cream">
        {sectors.map((sector, index) => (
          <article
            key={sector.id}
            id={sector.id}
            className={`border-t border-navy-900/10 ${index % 2 === 1 ? "bg-stone" : "bg-cream"}`}
          >
            <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-20">
              <figure className={index % 2 === 1 ? "lg:order-2 lg:col-span-5" : "lg:col-span-5"}>
                <div className="relative aspect-[5/4] overflow-hidden bg-navy-900">
                  <Image
                    src={sector.image}
                    alt={sector.imageAlt}
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[10px] tracking-[0.16em] text-charcoal/50 uppercase">
                  Illustrative imagery
                </figcaption>
              </figure>

              <div className={index % 2 === 1 ? "lg:order-1 lg:col-span-7" : "lg:col-span-7"}>
                <p className="font-mono text-[11px] tracking-[0.2em] text-copper">{sector.index}</p>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-navy-900 md:text-4xl">
                  {sector.title}
                </h2>
                <p className="mt-4 max-w-xl font-serif text-xl leading-snug text-navy-800">{sector.headline}</p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/80">{sector.copy}</p>
                <p className="mt-8 font-mono text-[10px] tracking-[0.18em] text-copper uppercase">
                  Typical challenges
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {sector.challenges.map((item) => (
                    <li key={item} className="border-t border-navy-900/10 pt-3 text-sm leading-relaxed text-charcoal/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <FinalCta title="Tell us about the building." copy="The useful brief is the plant, the fabric and how the building has to stay in use." />
    </main>
  );
}
