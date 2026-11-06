export function PageHero({
  eyebrow,
  title,
  titleAccent,
  lede,
  dark = false,
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
        dark ? "bg-navy-950 text-cream" : "on-light bg-cream text-ink"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 grid-frame opacity-30" />
      <div className="relative mx-auto max-w-[1320px] px-4 py-14 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-page mt-5 max-w-4xl">
          {title}
          {titleAccent ? (
            <>
              <br />
              <span className={dark ? "text-gold-light" : "text-copper"}>{titleAccent}</span>
            </>
          ) : null}
        </h1>
        {lede ? (
          <p
            className={`mt-6 max-w-xl text-base leading-relaxed md:text-lg ${
              dark ? "text-steel" : "text-charcoal/80"
            }`}
          >
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
