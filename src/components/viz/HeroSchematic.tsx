"use client";

import { motion, useReducedMotion } from "motion/react";

export function HeroSchematic() {
  const reduce = useReducedMotion();
  const duration = reduce ? 0 : 1.4;

  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMaxYMid slice"
      >
        <motion.path
          d="M780 820 V520 H980 V360 H1120 V210"
          fill="none"
          stroke="#d4b45c"
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration, delay: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M820 820 V610 H1040 V280 H1180"
          fill="none"
          stroke="#c8571d"
          strokeWidth="1"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration, delay: 0.85, ease: "easeInOut" }}
        />
        <motion.path
          d="M860 820 V700 H920 V480 H1280 V330"
          fill="none"
          stroke="#8a9640"
          strokeWidth="1"
          initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration, delay: 1.05, ease: "easeInOut" }}
        />

        {[
          [980, 360],
          [1120, 210],
          [1040, 280],
          [1180, 280],
          [1280, 330],
          [920, 480],
        ].map(([x, y], index) => (
          <motion.g
            key={`${x}-${y}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduce ? 0 : 1.2 + index * 0.08 }}
          >
            <circle cx={x} cy={y} r="3.5" fill="#0b1424" stroke="#d4b45c" />
            <path
              d={`M${x - 7} ${y} H${x + 7} M${x} ${y - 7} V${y + 7}`}
              stroke="#d4b45c"
              strokeWidth="0.8"
            />
          </motion.g>
        ))}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: reduce ? 0 : 1.6 }}
          fontFamily="IBM Plex Mono, monospace"
          fontSize="10"
          letterSpacing="0.18em"
          fill="#d4b45c"
        >
          <text x="990" y="348">
            LTHW FLOW
          </text>
          <text x="1130" y="198">
            AHU
          </text>
          <text x="1050" y="268">
            RISER
          </text>
          <text x="1290" y="324">
            CONTROLS
          </text>
          <text x="790" y="800">
            PLANT
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
