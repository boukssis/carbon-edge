"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cta, nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background,border-color,box-shadow] duration-300 ${
        solid
          ? "border-b border-gold/25 bg-navy-950 shadow-[0_12px_40px_rgba(7,14,24,0.45)]"
          : "border-b border-gold/10 bg-navy-950"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-6 lg:h-20 lg:px-10">
        <Link href="/" className="relative z-50 flex shrink-0 items-center" aria-label={site.brandName}>
          <Image
            src="/brand/logo-lockup.png"
            alt={site.brandName}
            width={861}
            height={247}
            className="h-9 w-auto sm:h-10 lg:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={`nav-link font-mono text-[11px] tracking-[0.18em] uppercase transition-colors ${
                  active ? "text-gold" : "text-cream/78 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={cta.href}
            className="group hidden items-center gap-2 rounded-full bg-copper-mid px-5 py-2.5 text-[10px] font-medium tracking-[0.2em] text-navy-950 uppercase transition-colors hover:bg-copper-light sm:inline-flex"
          >
            {cta.label}
          </Link>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-cream/5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-cream transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-3 bg-cream transition-all duration-300 ${
                  open ? "top-1.5 w-4 -rotate-45" : "top-2.5"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-0 z-40 bg-navy-950 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="flex h-full flex-col px-6 pb-8 pt-28"
          aria-label="Mobile"
        >
          <ul className="flex flex-1 flex-col gap-1">
            {[...nav, { href: "/contact", label: "Contact" }].map((item, index) => (
              <li
                key={item.href}
                style={{
                  transitionDelay: open ? `${80 + index * 40}ms` : "0ms",
                }}
                className={`border-b border-gold/10 transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  href={item.href}
                  className="flex items-baseline justify-between py-4"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-mono text-[11px] tracking-[0.22em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-3xl tracking-tight text-cream sm:text-4xl">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-copper-mid px-6 py-4 text-[11px] tracking-[0.2em] text-navy-950 uppercase"
          >
            Discuss a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
