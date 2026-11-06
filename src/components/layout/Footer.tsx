import Image from "next/image";
import Link from "next/link";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
        <div className="lg:col-span-4">
          <Image
            src="/brand/logo-lockup.png"
            alt={site.brandName}
            width={861}
            height={247}
            className="h-9 w-auto"
          />
          <p className="mt-6 max-w-xs font-serif text-xl leading-snug text-cream/90">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm text-steel">Greater London</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2">
              {[...nav, { href: "/contact", label: "Contact" }].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-cream/80 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Capabilities</p>
            <ul className="mt-4 space-y-2">
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
            <p className="eyebrow">Connect</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={site.companyLinkedin}
                  className="text-sm text-gold transition-colors hover:text-gold-light"
                  rel="noreferrer"
                  target="_blank"
                >
                  Company LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.founder.linkedin}
                  className="text-sm text-gold transition-colors hover:text-gold-light"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ashlee Rising
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-4 py-5 text-[11px] leading-relaxed text-steel sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <p>
              {site.legalName} · Company {site.companyNumber} · England and Wales · Incorporated{" "}
              {site.incorporated}
            </p>
            <p className="mt-1 max-w-2xl">
              {`Registered office: ${site.registeredOffice.line1}, ${site.registeredOffice.line2}, ${site.registeredOffice.city} ${site.registeredOffice.postcode}. Not a public visit address.`}
            </p>
          </div>
          <p className="lg:text-right">{site.preview}</p>
        </div>
      </div>
    </footer>
  );
}
