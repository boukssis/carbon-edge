"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cta, nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    if (open) firstLink.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
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
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-navy-950 transition-colors duration-300 ${
        scrolled || open ? "border-gold/30" : "border-white/10"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative z-50 flex shrink-0 items-center" aria-label={site.brandName}>
          <Image
            src="/brand/logo-lockup.png"
            alt={site.brandName}
            width={861}
            height={247}
            className="h-8 w-auto lg:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={`nav-link whitespace-nowrap font-mono text-[10px] tracking-[0.16em] uppercase transition-colors xl:text-[11px] xl:tracking-[0.18em] ${
                  active ? "text-gold" : "text-cream/75 hover:text-cream"
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
            className="group hidden items-center gap-2 rounded-full bg-copper-mid px-4 py-2.5 text-[10px] font-medium tracking-[0.18em] text-navy-950 uppercase transition-colors duration-300 hover:bg-gold-light lg:inline-flex"
          >
            {cta.label}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-cream transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 h-px bg-cream transition-all duration-300 ${
                  open ? "top-1.5 w-4 -rotate-45" : "top-2.5 w-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-navy-950 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col px-6 pt-[calc(var(--header-h)+1.5rem)] pb-8" aria-label="Mobile">
          <ul className="flex flex-1 flex-col">
            {[...nav, { href: "/contact", label: "Contact" }].map((item, index) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  ref={index === 0 ? firstLink : undefined}
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  className="flex items-baseline justify-between gap-6 py-4"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-mono text-[11px] tracking-[0.2em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[1.75rem] tracking-tight text-cream">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-copper-mid px-6 py-4 text-[11px] tracking-[0.18em] text-navy-950 uppercase"
          >
            Discuss a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
