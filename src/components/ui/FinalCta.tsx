import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function FinalCta({
  eyebrow = "Next conversation",
  title = "A building. A plant room. A decision.",
  copy = "If you are planning a building-services upgrade, plant replacement or retrofit, we would like to understand the existing conditions first.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="bg-navy-900 text-cream">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display-section mt-5">{title}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-steel">{copy}</p>
        </Reveal>
        <Reveal delay={0.12} className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">Discuss your project</Button>
          <Button href="/services" variant="secondary">
            Explore capabilities
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
