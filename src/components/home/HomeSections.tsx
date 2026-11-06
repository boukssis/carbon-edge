import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RetrofitVisual } from "@/components/viz/RetrofitVisual";
import { expertiseStrip, fieldActivity, homeServices, sectors, site } from "@/lib/site";

const featuredSectors = [sectors[0], sectors[1], sectors[2]];
const featuredActivity = [fieldActivity[0], fieldActivity[2]];

export function ExpertiseStrip() {
  return (
    <section className="border-b border-white/10 bg-navy-900" aria-label="Expertise">
      <ul className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-0 px-4 py-3.5 sm:px-6 lg:flex-nowrap lg:justify-between lg:px-8">
        {expertiseStrip.map((item, index) => (
          <li key={item} className="flex items-center">
            {index > 0 ? (
              <span className="mx-3 hidden text-copper/80 lg:inline" aria-hidden>
                /
              </span>
            ) : null}
            <span className="px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-gold uppercase sm:text-[11px]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Introduction() {
  return (
    <section className="on-light bg-cream">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">The practice</p>
          <h2 className="display-section mt-5">
            London’s buildings have a past.
            <br />
            <span className="text-copper">We help secure their future.</span>
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-charcoal/85">
            <p>
              Carbon Edge modernises the mechanical and electrical systems behind facades London intends to keep. The work is retrofit, plant replacement and practical decarbonisation.
            </p>
            <p>
              Ageing plant, limited space and occupied buildings are the starting conditions. The engineering respects the architecture and improves how the building performs.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
          <figure>
            <div className="relative aspect-[4/5] overflow-hidden bg-navy-900">
              <Image
                src="/images/british-museum.jpg"
                alt="The British Museum colonnade. Illustrative imagery, not a Carbon Edge project."
                fill
                sizes="(min-width:1024px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] tracking-[0.16em] text-charcoal/50 uppercase">
              Illustrative imagery
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesRows() {
  return (
    <section className="on-light bg-paper">
      <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="display-section mt-4 max-w-xl">How we improve an existing building.</h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-copper uppercase"
          >
            All capabilities
            <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.6} />
          </Link>
        </Reveal>

        <ul className="mt-10 border-t border-navy-900/10">
          {homeServices.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 gap-y-2 border-b border-navy-900/10 py-6 transition-colors duration-300 hover:border-copper/50 hover:bg-[color-mix(in_srgb,var(--copper)_8%,white)] focus-visible:border-copper focus-visible:bg-[color-mix(in_srgb,var(--copper)_10%,white)] sm:grid-cols-[4.5rem_1fr_auto] sm:items-center sm:gap-8 sm:py-8"
              >
                <span className="relative font-mono text-[12px] tracking-[0.16em] text-copper">
                  <span
                    className="absolute top-0 -left-3 hidden h-full w-px origin-center scale-y-0 bg-copper transition-transform duration-300 group-hover:scale-y-100 group-focus-visible:scale-y-100 sm:block"
                    aria-hidden
                  />
                  {service.index}
                </span>
                <span className="min-w-0">
                  <span className="font-display block text-xl tracking-tight text-navy-900 transition-colors duration-300 group-hover:text-copper group-focus-visible:text-copper sm:text-2xl lg:text-[1.7rem]">
                    {service.title}
                  </span>
                  <span className="mt-1.5 block max-w-2xl text-sm leading-relaxed text-charcoal/75">
                    {service.summary}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-1 h-5 w-5 text-copper transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 sm:mt-0"
                  strokeWidth={1.5}
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
      <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">From legacy to low carbon</p>
          <h2 className="display-section mt-4">
            Modern performance.
            <br />
            <span className="text-gold-light">Timeless architecture.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel">
            Explore how ageing building systems can evolve into smarter, more efficient infrastructure.
          </p>
        </Reveal>
        <div className="mt-10">
          <RetrofitVisual />
        </div>
      </div>
    </section>
  );
}

export function SectorsPreview() {
  return (
    <section className="on-light bg-cream">
      <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Sectors</p>
            <h2 className="display-section mt-4 max-w-xl">Where the building is already complex.</h2>
          </div>
          <Button href="/sectors" variant="ghost">
            All sectors
          </Button>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredSectors.map((sector) => (
            <Link key={sector.id} href={`/sectors#${sector.id}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-900">
                <Image
                  src={sector.image}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-gold">{sector.index}</p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight text-cream">{sector.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FieldTeaser() {
  return (
    <section className="on-light border-y border-navy-900/10 bg-stone">
      <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">In the field</p>
            <h2 className="mt-3 font-display text-2xl tracking-tight text-navy-900 sm:text-3xl">
              Current surveys and tenders.
            </h2>
          </div>
          <Link
            href="/field-work"
            className="font-mono text-[11px] tracking-[0.18em] text-copper uppercase"
          >
            Field activity
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featuredActivity.map((item) => (
            <Link
              key={item.id}
              href={`/field-work#${item.id}`}
              className="group border border-navy-900/10 bg-cream p-6 transition-colors duration-300 hover:border-copper/40"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] tracking-[0.16em] text-copper uppercase">
                  {item.location}
                </span>
                <span className="rounded-full border border-copper/30 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-navy-800 uppercase">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl tracking-tight text-navy-900 group-hover:text-copper">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FounderIntro() {
  return (
    <section className="on-light bg-cream">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
        <Reveal className="lg:col-span-4">
          <figure className="mx-auto w-full max-w-[320px] lg:mx-0">
            <div className="relative aspect-square overflow-hidden bg-navy-900">
              <Image
                src="/brand/ashlee-rising.jpg"
                alt="Ashlee Rising, Founder and Director of Carbon Edge Building Services"
                fill
                sizes="320px"
                className="object-cover object-center"
              />
            </div>
          </figure>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
          <p className="eyebrow">Founder</p>
          <h2 className="display-section mt-4">Ashlee Rising</h2>
          <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-copper uppercase">
            Founder & Director
          </p>
          <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-navy-800">
            {site.founder.experience}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/80">
            Carbon Edge was incorporated in 2026 to concentrate that experience on London’s existing buildings: practical engineering, careful retrofit and lower-carbon plant.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="ghost">
              About the practice
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
