import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { fieldActivity } from "@/lib/site";

export const metadata: Metadata = {
  title: "Field activity — surveys, tenders and site visits",
  description:
    "Assessments, tenders and site visits across London’s existing buildings. Status is shown on each engagement.",
};

export default function FieldWorkPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="In the field"
        title="Insights, assessments and"
        titleAccent="project opportunities."
        lede="Surveys, tenders and site visits shaping the next chapter of London’s building infrastructure."
      />

      <div className="on-light bg-cream">
        {fieldActivity.map((item, index) => (
          <article
            key={item.id}
            id={item.id}
            className={`border-t border-navy-900/10 ${index % 2 === 1 ? "bg-stone" : "bg-cream"}`}
          >
            <div className="mx-auto grid max-w-[1240px] items-start gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
              <figure className="lg:col-span-5">
                <div className="relative aspect-[5/4] overflow-hidden bg-navy-900">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[10px] tracking-[0.16em] text-charcoal/50 uppercase">
                  Illustrative imagery
                </figcaption>
              </figure>
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-copper uppercase">
                    {item.location}
                  </span>
                  <span className="rounded-full border border-copper/40 px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-navy-900 uppercase">
                    {item.status}
                  </span>
                </div>
                <h2 className="mt-4 max-w-xl font-display text-3xl tracking-tight text-navy-900 md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-5 max-w-xl font-serif text-xl leading-snug text-navy-800">{item.summary}</p>
                <ul className="mt-8 max-w-xl space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="border-l border-copper/40 pl-3 text-sm leading-relaxed text-charcoal/80">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <FinalCta
        title="A similar building on your books?"
        copy="The useful conversation starts with the existing plant."
      />
    </main>
  );
}
