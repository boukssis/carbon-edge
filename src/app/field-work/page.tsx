import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { fieldActivity } from "@/lib/site";

export const metadata: Metadata = {
  title: "Field activity — surveys, tenders and site visits",
  description:
    "Publicly discussed assessments, tenders and site visits shaping Carbon Edge’s work across London’s existing building stock. Not completed case studies.",
};

export default function FieldWorkPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="In the field"
        title="Insights, assessments and"
        titleAccent="project opportunities."
        lede="Activity shaping the next chapter of London’s building infrastructure. Most of what is published so far is survey, tender or site-visit work. It is labelled accordingly."
      />

      <section className="bg-cream px-4 py-12 sm:px-6 lg:px-10">
        <p className="mx-auto max-w-[1440px] border-l border-gold pl-5 text-sm leading-relaxed text-charcoal/75">
          Imagery is illustrative of building type and location character. It is
          not project photography, and no client has been named. If this website
          concept is approved, this page should be replaced with authorised case
          studies and media.
        </p>
      </section>

      {fieldActivity.map((item, index) => (
        <article
          key={item.id}
          id={item.id}
          className={index % 2 === 0 ? "bg-paper" : "bg-cream"}
        >
          <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
            <Reveal className="relative min-h-[280px] lg:col-span-5">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.2em] text-copper">
                  {item.index} · {item.location}
                </span>
                <span className="rounded-full border border-copper/40 px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-copper uppercase">
                  {item.status}
                </span>
              </div>
              <h2 className="display-section mt-5">{item.title}</h2>
              <p className="mt-5 font-serif text-xl leading-snug text-navy-800">
                {item.summary}
              </p>
              <ul className="mt-8 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-charcoal/80">
                    — {point}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-navy-900/10 pt-5 text-sm leading-relaxed text-copper">
                {item.caveat}
              </p>
            </Reveal>
          </div>
        </article>
      ))}

      <FinalCta
        title="A similar building on your books?"
        copy="Tender, survey or early assessment — the useful conversation starts with the existing plant, not a finished story."
      />
    </main>
  );
}
