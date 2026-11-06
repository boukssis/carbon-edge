import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities — MEP retrofit, plant replacement and BMS",
  description:
    "MEP decarbonisation, mechanical plant replacement, low-carbon heating, BMS upgrades, lifecycle energy analysis and heritage retrofit in London.",
};

const indexLabel: Record<string, string> = {
  "mep-decarbonisation": "Decarbonisation",
  "plant-replacement": "Plant replacement",
  "low-carbon": "Low-carbon heating",
  bms: "Building controls",
  lifecycle: "Lifecycle analysis",
  validation: "Technical investigation",
  heritage: "Heritage retrofit",
  delivery: "Project delivery",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Capabilities"
        title="Engineering expertise"
        titleAccent="for existing buildings."
        lede="Eight areas of work for owners and consultants dealing with ageing plant, constrained fabric and the need to lower operational carbon."
      />

      <div className="on-light bg-cream">
        <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-16">
          <nav aria-label="Service index" className="mb-10 lg:mb-0">
            <details className="border border-navy-900/10 bg-paper lg:hidden">
              <summary className="cursor-pointer px-4 py-3 font-mono text-[11px] tracking-[0.16em] text-navy-900 uppercase">
                Jump to a service
              </summary>
              <ul className="border-t border-navy-900/10">
                {services.map((service) => (
                  <li key={service.id}>
                    <a href={`#${service.id}`} className="block px-4 py-3 text-sm text-navy-800 hover:bg-stone">
                      {service.index} {indexLabel[service.id]}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

            <ul className="sticky top-[calc(var(--header-h)+1.25rem)] hidden space-y-1 lg:block">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#${service.id}`}
                    className="flex items-baseline gap-3 py-1.5 font-mono text-[11px] tracking-[0.08em] text-charcoal/70 uppercase transition-colors hover:text-copper"
                  >
                    <span className="text-copper">{service.index}</span>
                    {indexLabel[service.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-[calc(var(--header-h)+1.25rem)] border-t border-navy-900/10 py-14 first:border-t-0 first:pt-0 lg:py-16"
              >
                <p className="font-mono text-[12px] tracking-[0.2em] text-copper">{service.index}</p>
                <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-navy-900 md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/80">{service.intro}</p>

                <div className="mt-10 grid gap-10 md:grid-cols-2">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-copper uppercase">Key capabilities</p>
                    <ul className="mt-4 space-y-2.5">
                      {service.applications.slice(0, 5).map((item) => (
                        <li key={item} className="border-l border-copper/40 pl-3 text-sm leading-relaxed text-navy-800">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-copper uppercase">Why it matters</p>
                    <ul className="mt-4 space-y-3">
                      {service.benefits.slice(0, 3).map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-charcoal/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {"note" in service && service.note ? (
                  <p className="mt-8 max-w-2xl text-sm text-charcoal/70">{service.note}</p>
                ) : null}

                <Link
                  href="/contact"
                  className="mt-8 inline-flex font-mono text-[11px] tracking-[0.16em] text-copper uppercase"
                >
                  Discuss this capability
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <FinalCta
        title="Start with the existing conditions."
        copy="If the plant is at the end of its life, or a retrofit option needs an honest look, tell us what you are working on."
      />
    </main>
  );
}
