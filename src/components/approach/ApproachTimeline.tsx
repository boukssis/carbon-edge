"use client";

import { motion, useReducedMotion } from "motion/react";
import { approachSteps } from "@/lib/site";

export function ApproachTimeline() {
  const reduce = useReducedMotion();

  return (
    <ol className="relative mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <motion.div
        className="absolute top-20 bottom-20 left-[2.15rem] w-px bg-gold/30 sm:left-[2.65rem] lg:left-[4.15rem]"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
      {approachSteps.map((step, index) => (
        <li key={step.index} className="relative grid gap-6 py-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex items-start gap-5 lg:col-span-4">
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-navy-950 font-mono text-[11px] text-gold">
              {step.index}
            </span>
            <h2 className="font-display text-3xl tracking-tight text-cream md:text-4xl">
              {step.title}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-xl leading-snug text-cream/90">{step.summary}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">{step.detail}</p>
            {index < approachSteps.length - 1 ? (
              <svg className="mt-8 hidden h-12 w-40 text-gold/40 lg:block" viewBox="0 0 160 48" aria-hidden>
                <path d="M0 24 H140" stroke="currentColor" fill="none" />
                <path d="M128 16 L140 24 L128 32" stroke="currentColor" fill="none" />
              </svg>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
