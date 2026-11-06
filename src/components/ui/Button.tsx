import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

function isExternal(href: string) {
  return href.startsWith("http");
}

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-copper-mid text-navy-950 hover:bg-copper-light border border-copper-mid",
  secondary:
    "bg-transparent text-cream border border-gold/50 hover:border-gold hover:bg-gold/10",
  ghost:
    "bg-transparent text-ink border border-navy-900/15 hover:border-copper-mid hover:text-copper",
  light:
    "bg-cream text-navy-950 hover:bg-white border border-cream",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  const classNameFull = `group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.6} /> : null}
    </>
  );

  if (isExternal(href)) {
    return (
      <a href={href} className={classNameFull} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameFull}>
      {content}
    </Link>
  );
}
