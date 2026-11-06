import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RetrofitVisual } from "@/components/viz/RetrofitVisual";
import {
  approachSteps,
  expertiseStrip,
  fieldActivity,
  homeServices,
  sectors,
  site,
} from "@/lib/site";

export function ExpertiseStrip() {
  return (
    <section className="overflow-hidden border-y border-gold/15 bg-navy-900">
      <div className="flex gap-0 whitespace-nowrap py-4">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex min-w-full animate-none items-center justify-around">
            {expertiseStrip.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-8 px-6 font-mono text-[11px] tracking-[0.28em] text-gold uppercase"
              >
                {item}
                <span className="text-copper-mid">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Introduction() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">03 — Introduction</p>
          <h2 className="display-section mt-6">
            London’s buildings have a past.
            <br />
            <span className="text-copper">We help secure their future.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <p className="font-serif text-2xl leading-snug text-navy-800 md:text-[1.75rem]">
            The city’s commercial stock cannot be demolished into a lower-carbon
            future. The work is in the plant rooms, risers and controls behind
            facades that London intends to keep.
          </p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-charcoal/80">
            <p>
              Carbon Edge is a specialist building-services contractor focused on
              the modernisation of existing commercial buildings: MEP retrofit,
              plant replacement, and practical decarbonisation.
            </p>
            <p>
              Ageing infrastructure, limited plant space and occupied buildings
              are the starting conditions — not obstacles to be wished away.
              Engineering-led retrofit keeps architectural character while
              bringing services forward.
            </p>
          </div>
          <p className="mt-8 font-serif text-xl text-navy-800">{site.tagline}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesRows() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">04 — Capabilities</p>
            <h2 className="display-section mt-5 max-w-xl">
              Six ways we meet an existing building.
            </h2>
          </div>
          <Button href="/services" variant="ghost">
            All capabilities
          </Button>
        </Reveal>

        <ul className="mt-14">
          {homeServices.map((service) => (
            <li key={service.index} className="border-t border-navy-900/10 last:border-b">
              <Link
                href={service.href}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-7 md:grid-cols-[5rem_1fr_auto] md:gap-10 md:py-9"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-copper">
                  {service.index}
                </span>
                <span>
                  <span className="font-display block text-xl tracking-tight text-navy-900 md:text-3xl">
                    {service.title}
                  </span>
                  <span className="mt-2 hidden max-w-2xl text-sm leading-relaxed text-charcoal/70 md:block">
                    {service.summary}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-6 w-6 text-copper transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.4}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LegacyFuture() {
  return (
    <section className="bg-navy-950 text-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">05 — Legacy to future</p>
          <h2 className="display-section mt-5">
            Modern performance.
            <br />
            <span className="text-gold-light">Timeless architecture.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel">
            The facade is not the problem. The hidden services usually are.
            This is an illustrative view of the journey from legacy building
            services to modern, efficient systems — not a claim about a
            particular asset.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-12">
          <RetrofitVisual />
        </Reveal>
      </div>
    </section>
  );
}

export function SectorsPreview() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">06 — Sectors</p>
            <h2 className="display-section mt-5 max-w-2xl">
              Engineering for London’s complex buildings.
            </h2>
          </div>
          <Button href="/sectors" variant="ghost">
            View sectors
          </Button>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <Link
              key={sector.id}
              href={`/sectors#${sector.id}`}
              className="group relative min-h-[280px] overflow-hidden bg-navy-900 text-cream"
            >
              <Image
                src={sector.image}
                alt={sector.imageAlt}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-[10px] tracking-[0.22em] text-gold">
                  {sector.index}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight">{sector.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FieldPreview() {
  return (
    <section className="bg-navy-900 text-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">07 — Field activity</p>
          <h2 className="display-section mt-5">Current industry activity, clearly labelled.</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel">
            These are surveys, tenders and site visits drawn from publicly
            shared updates. They are not completed case studies.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px bg-gold/15 md:grid-cols-2">
          {fieldActivity.map((item) => (
            <Link
              key={item.id}
              href={`/field-work#${item.id}`}
              className="group bg-navy-950 p-7 transition-colors hover:bg-navy-800"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-gold">
                  {item.index} · {item.location}
                </span>
                <span className="rounded-full border border-gold/30 px-3 py-1 font-mono text-[9px] tracking-[0.16em] text-gold uppercase">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight group-hover:text-copper-light">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-steel">{item.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/field-work" variant="secondary">
            Read field activity
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FounderIntro() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-navy-900">
            <Image
              src="/brand/ashlee-rising.jpg"
              alt="Ashlee Rising, Founder and Director of Carbon Edge Building Services"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <p className="mt-3 font-mono text-[10px] tracking-[0.16em] text-copper uppercase">
            Ashlee Rising · Founder & Director
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow">08 — Founder</p>
          <h2 className="display-section mt-5">
            Built on experience.
            <br />
            Focused on the future.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80">
            {site.founder.experience} That experience belongs to Ashlee, not to
            the company: Carbon Edge was incorporated in 2026 to concentrate on
            the retrofit and decarbonisation of London’s existing buildings.
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            A hands-on MEP apprenticeship at sixteen became a career in
            estimating, commercial management and senior delivery leadership.
            The founding idea is simple: keep the character of the city’s
            buildings, and change the systems that make them expensive, carbon
            intensive and hard to run.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about" variant="ghost">
              About Ashlee
            </Button>
            <Button href={site.founder.linkedin} variant="ghost">
              LinkedIn
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HowWeWork() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal>
          <p className="eyebrow">09 — How we work</p>
          <h2 className="display-section mt-5 max-w-2xl">
            From existing conditions to future performance.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-charcoal/70">
            A practical sequence for complex building modernisation — not a
            proprietary methodology.
          </p>
        </Reveal>
        <ol className="mt-14 grid gap-px bg-navy-900/10 md:grid-cols-5">
          {approachSteps.map((step) => (
            <li key={step.index} className="bg-paper p-6">
              <p className="font-mono text-[11px] tracking-[0.2em] text-copper">{step.index}</p>
              <h3 className="mt-4 font-display text-xl tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{step.summary}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Button href="/approach" variant="ghost">
            Our approach
          </Button>
        </div>
      </div>
    </section>
  );
}
