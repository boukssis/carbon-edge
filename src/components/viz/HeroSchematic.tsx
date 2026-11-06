"use client";

import { motion, useReducedMotion } from "motion/react";

export function HeroSchematic() {
  const reduce = useReducedMotion();
  const duration = reduce ? 0 : 1.2;

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] md:block" aria-hidden="true">
      <svg viewBox="0 0 640 480" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <motion.path
          d="M80 430 V250 H210 V150 H340 V70"
          fill="none"
          stroke="#d4b45c"
          strokeWidth="1.2"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration, delay: 0.35, ease: "easeInOut" }}
        />
        <motion.path
          d="M120 430 V300 H260 V190 H460"
          fill="none"
          stroke="#c8571d"
          strokeWidth="1.2"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M160 430 V340 H300 V230 H520 V120"
          fill="none"
          stroke="#8a9640"
          strokeWidth="1.2"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.75 }}
          transition={{ duration, delay: 0.65, ease: "easeInOut" }}
        />
        {[
          [210, 150],
          [340, 70],
          [260, 190],
          [460, 190],
          [300, 230],
        ].map(([x, y], index) => (
          <motion.g
            key={`${x}-${y}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduce ? 0 : 0.9 + index * 0.06 }}
          >
            <circle cx={x} cy={y} r="3.2" fill="#0b1424" stroke="#d4b45c" />
          </motion.g>
        ))}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduce ? 0 : 1.05 }}
          fill="#d4b45c"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
          letterSpacing="1.4"
        >
          <text x="224" y="142">
            LTHW
          </text>
          <text x="348" y="64">
            RISER
          </text>
          <text x="308" y="222">
            PLANT
          </text>
          <text x="468" y="182">
            CONTROLS
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
