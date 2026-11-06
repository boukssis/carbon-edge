"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { HeroSchematic } from "@/components/viz/HeroSchematic";

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy-950 text-cream">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero-facade.jpg"
          alt="A classical London church facade at golden hour, used illustratively. Not a Carbon Edge project."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_42%] md:object-[72%_38%]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/88 to-navy-950/25 md:via-navy-950/78 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/35" />

      <HeroSchematic />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:justify-center lg:px-10 lg:pb-24 lg:pt-32">
        <motion.p
          className="eyebrow"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Carbon Edge Building Services · London
        </motion.p>

        <h1 className="display-hero mt-6 max-w-[18ch]">
          <motion.span
            className="block"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Preserve the character.
          </motion.span>
          <motion.span
            className="mt-2 block text-copper-light"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Transform the performance.
          </motion.span>
        </h1>

        <motion.p
          className="mt-7 max-w-xl text-base leading-relaxed text-mist md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          Specialist MEP retrofit, plant modernisation and decarbonisation
          solutions for London’s existing buildings.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Button href="/contact">Discuss your project</Button>
          <Button href="/services" variant="secondary">
            Explore our capabilities
          </Button>
        </motion.div>

        <motion.p
          className="mt-10 font-mono text-[10px] tracking-[0.22em] text-gold/80 uppercase"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          MEP retrofit / Decarbonisation / Plant modernisation
        </motion.p>
        <p className="mt-3 max-w-md font-mono text-[10px] leading-relaxed tracking-[0.08em] text-steel">
          Engineering overlay is illustrative and does not describe the building shown.
        </p>
      </div>
    </section>
  );
}
