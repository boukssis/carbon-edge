import Image from "next/image";
import Link from "next/link";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream">
      <div className="hairline" />
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-5">
          <Image
            src="/brand/logo-lockup.png"
            alt={site.brandName}
            width={861}
            height={247}
            className="h-12 w-auto"
          />
          <p className="mt-8 max-w-sm font-serif text-2xl leading-snug text-cream/90">
            {site.tagline}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-steel">
            Specialist building-services contractor for MEP retrofit, plant
            modernisation and decarbonisation across Greater London.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-cream/80 transition-colors hover:text-gold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Capabilities</p>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/services#${item.id}`}
                    className="text-sm text-cream/80 transition-colors hover:text-gold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">London</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              Greater London
              <br />
              Existing commercial buildings
            </p>
            <p className="mt-6">
              <a
                href={site.companyLinkedin}
                className="text-sm text-gold transition-colors hover:text-copper-light"
                rel="noreferrer"
                target="_blank"
              >
                Company LinkedIn
              </a>
            </p>
            <p className="mt-2">
              <a
                href={site.founder.linkedin}
                className="text-sm text-gold transition-colors hover:text-copper-light"
                rel="noreferrer"
                target="_blank"
              >
                Ashlee Rising on LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-6 text-[11px] leading-relaxed tracking-[0.04em] text-steel sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <p>
              {site.legalName} · Company number {site.companyNumber}
            </p>
            <p className="mt-1">
              Incorporated {site.incorporated} · Registered in England and Wales
            </p>
            <p className="mt-2 max-w-xl text-steel/80">
              Registered office: {site.registeredOffice.line1},{" "}
              {site.registeredOffice.line2}, {site.registeredOffice.city}{" "}
              {site.registeredOffice.postcode}. This is a registered office
              address, not a public customer-visit location.
            </p>
          </div>
          <p className="max-w-sm lg:text-right">
            {site.preview}
          </p>
        </div>
      </div>
    </footer>
  );
}
