"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { HeroSchematic } from "@/components/viz/HeroSchematic";

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-950 text-cream lg:h-[640px]">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero-facade.jpg"
          alt="A classical London facade in warm evening light. Illustrative imagery."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_40%]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/25" />
      <HeroSchematic />

      <div className="relative z-10 mx-auto flex max-w-[1320px] flex-col justify-end px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-14 lg:h-full lg:justify-center lg:px-8 lg:py-0">
        <motion.p
          className="eyebrow"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Carbon Edge Building Services · London
        </motion.p>

        <h1 className="display-hero mt-5 max-w-[14ch]">
          <motion.span
            className="block"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Preserve the character.
          </motion.span>
          <motion.span
            className="mt-1 block text-gold-light"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Transform the performance.
          </motion.span>
        </h1>

        <motion.p
          className="mt-5 max-w-md text-base leading-relaxed text-mist"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          Specialist MEP retrofit, plant modernisation and decarbonisation for London’s existing buildings.
        </motion.p>

        <motion.div
          className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.5 }}
        >
          <Button href="/contact">Discuss your project</Button>
          <Button href="/services" variant="secondary">
            Explore capabilities
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
