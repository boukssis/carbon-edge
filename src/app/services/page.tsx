import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/ui/FinalCta";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capabilities — MEP retrofit, plant replacement and BMS",
  description:
    "MEP decarbonisation, mechanical plant replacement, low-carbon heating, BMS upgrades, lifecycle energy analysis and heritage retrofit in London.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Capabilities"
        title="Technical depth for"
        titleAccent="existing buildings."
        lede="Eight areas of work for owners, asset managers and consultants dealing with ageing plant, constrained fabric and the need to lower operational carbon — without pretending every building is ready for the same solution."
      />

      <nav
        aria-label="Service index"
        className="border-b border-navy-900/10 bg-paper"
      >
        <div className="no-scrollbar mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-4 py-4 sm:px-6 lg:px-10">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="shrink-0 rounded-full border border-navy-900/15 px-4 py-2 font-mono text-[10px] tracking-[0.16em] text-navy-800 uppercase hover:border-copper hover:text-copper"
            >
              {service.index} {service.title}
            </a>
          ))}
        </div>
      </nav>

      {services.map((service, index) => (
        <article
          key={service.id}
          id={service.id}
          className={index % 2 === 0 ? "bg-cream" : "bg-paper"}
        >
          <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-24">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.22em] text-copper">
                {service.index} — {service.kicker}
              </p>
              <h2 className="display-section mt-5">{service.title}</h2>
              <p className="mt-6 font-serif text-xl leading-snug text-navy-800">
                {service.intro}
              </p>
              <p className="mt-5 text-base leading-relaxed text-charcoal/80">
                {service.body}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="ghost">
                  Discuss this capability
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="space-y-10 lg:col-span-6 lg:col-start-7">
              <div>
                <p className="eyebrow">Practical applications</p>
                <ul className="mt-4 divide-y divide-navy-900/10 border-y border-navy-900/10">
                  {service.applications.map((item) => (
                    <li key={item} className="py-3 text-sm text-charcoal/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Technical capabilities</p>
                <ul className="mt-4 space-y-2">
                  {service.capabilities.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-charcoal/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Client benefits</p>
                <ul className="mt-4 space-y-2">
                  {service.benefits.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-charcoal/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {"note" in service && service.note ? (
                <p className="border-l border-gold pl-4 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-copper">
                  {service.note}
                </p>
              ) : null}
            </Reveal>
          </div>
        </article>
      ))}

      <FinalCta
        title="Start with the existing conditions."
        copy="If a building’s plant is at the end of its life, or a retrofit option needs an honest assessment, tell us what you are working on."
      />
    </main>
  );
}
