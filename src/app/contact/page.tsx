import type { Metadata } from "next";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { buyers, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — discuss a London retrofit or plant replacement",
  description:
    "Planning a building-services upgrade, plant replacement or retrofit in London? Tell Carbon Edge what you are working on.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Let’s build a"
        titleAccent="lower-carbon future."
        lede="Planning a building-services upgrade, plant replacement or retrofit project? Tell us what you’re working on."
      />

      <section className="on-light bg-cream">
        <div className="mx-auto grid max-w-[1240px] gap-14 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
          <div className="lg:col-span-4">
            <p className="eyebrow">Who this is for</p>
            <ul className="mt-6 space-y-2">
              {buyers.map((item) => (
                <li key={item} className="border-t border-navy-900/10 pt-2 text-sm text-charcoal/80">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-2 text-sm">
              <a
                className="block text-copper transition-colors hover:text-navy-900"
                href={site.companyLinkedin}
                target="_blank"
                rel="noreferrer"
              >
                Carbon Edge on LinkedIn
              </a>
              <a
                className="block text-copper transition-colors hover:text-navy-900"
                href={site.founder.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Ashlee Rising on LinkedIn
              </a>
              <p className="pt-4 font-mono text-[11px] tracking-[0.14em] text-charcoal/60 uppercase">
                Greater London
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
