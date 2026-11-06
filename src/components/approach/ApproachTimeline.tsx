"use client";

import { motion, useReducedMotion } from "motion/react";
import { approachSteps } from "@/lib/site";

export function ApproachTimeline() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute top-20 bottom-16 left-[23px] w-px bg-copper/40 lg:hidden" aria-hidden />
      <motion.div
        className="absolute top-[71px] right-8 left-8 hidden h-px origin-left bg-copper lg:block"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
      <ol className="relative space-y-10 lg:grid lg:grid-cols-5 lg:gap-8 lg:space-y-0">
        {approachSteps.map((step) => (
          <li key={step.index} className="relative pl-10 lg:pt-10 lg:pl-0">
            <span className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border border-copper bg-cream lg:top-0" />
            <p className="font-mono text-[11px] tracking-[0.18em] text-copper">{step.index}</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-navy-900 lg:text-[1.65rem] lg:leading-tight">
              {step.title}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/80 lg:max-w-none">
              {step.summary}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
