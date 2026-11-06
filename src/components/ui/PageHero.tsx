export function PageHero({
  eyebrow,
  title,
  titleAccent,
  lede,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lede?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden ${
        dark ? "bg-navy-950 text-cream" : "bg-cream text-ink"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 grid-frame opacity-40" />
      <div className="relative mx-auto max-w-[1440px] px-4 py-20 sm:px-6 md:py-28 lg:px-10 lg:py-32">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-page mt-6 max-w-5xl">
          {title}
          {titleAccent ? (
            <>
              <br />
              <span className="text-copper-light">{titleAccent}</span>
            </>
          ) : null}
        </h1>
        {lede ? (
          <p
            className={`mt-8 max-w-2xl text-base leading-relaxed md:text-lg ${
              dark ? "text-steel" : "text-charcoal/80"
            }`}
          >
            {lede}
          </p>
        ) : null}
      </div>
      <div className="hairline" />
    </section>
  );
}
