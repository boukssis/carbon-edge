"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const legacy = {
  label: "Legacy systems",
  kicker: "The building as found",
  copy: "Ageing boiler plant, limited controls and a maintenance culture of keeping yesterday’s equipment alive for one more season.",
  nodes: [
    { title: "Existing boiler plant", body: "Multiple ageing boilers, often surviving on patch-and-repair rather than a planned replacement." },
    { title: "Limited controls", body: "Partial BMS, local overrides and little visibility of how the system actually runs." },
    { title: "Inefficient operation", body: "Plant sized and sequenced for a different era of occupancy and energy cost." },
    { title: "Reactive maintenance", body: "Failures dictate the programme. Capital is spent on keeping the system going, not on changing it." },
  ],
};

const modern = {
  label: "Modernised systems",
  kicker: "A considered retrofit",
  copy: "Efficient plant options, usable controls and a planned sequence that treats energy performance as an engineering outcome, not a slogan.",
  nodes: [
    { title: "Efficient plant options", body: "Replacement or hybrid plant selected against the building’s loads, space, power and fabric — including heat pumps where they are viable." },
    { title: "Modern controls", body: "A control strategy the facilities team can run, with plant monitoring that is actually used." },
    { title: "Improved monitoring", body: "Visibility of temperatures, plant status and exceptions — the basis for later performance work." },
    { title: "Planned maintenance", body: "Access, spares and a system that can be maintained, not another generation of emergency repair." },
  ],
};

export function RetrofitVisual() {
  const [mode, setMode] = useState<"legacy" | "modern">("legacy");
  const reduce = useReducedMotion();
  const active = mode === "legacy" ? legacy : modern;
  const accent = mode === "legacy" ? "#c8571d" : "#8a9640";

  return (
    <div className="grid overflow-hidden border border-gold/20 bg-navy-950 text-cream lg:grid-cols-12">
      <div className="relative lg:col-span-7">
        <div className="flex items-center justify-between gap-4 border-b border-gold/15 px-5 py-4 sm:px-8">
          <p className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase">
            From legacy to low carbon
          </p>
          <div className="flex rounded-full border border-gold/25 p-1">
            <button
              type="button"
              onClick={() => setMode("legacy")}
              className={`rounded-full px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors ${
                mode === "legacy" ? "bg-copper-mid text-navy-950" : "text-steel hover:text-cream"
              }`}
            >
              Legacy
            </button>
            <button
              type="button"
              onClick={() => setMode("modern")}
              className={`rounded-full px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors ${
                mode === "modern" ? "bg-olive text-navy-950" : "text-steel hover:text-cream"
              }`}
            >
              Modernised
            </button>
          </div>
        </div>

        <div className="relative min-h-[340px] px-4 py-8 sm:min-h-[420px] sm:px-8">
          <svg viewBox="0 0 640 360" className="h-full w-full" role="img" aria-label={active.label}>
            <rect x="24" y="40" width="180" height="250" fill="none" stroke="#243044" />
            <text x="36" y="62" fill="#aab2b4" fontSize="10" fontFamily="IBM Plex Mono, monospace" letterSpacing="2">
              PLANT ROOM
            </text>

            <motion.g animate={{ opacity: 1 }} key={mode}>
              <motion.rect
                x="48"
                y="88"
                width="52"
                height="86"
                fill={mode === "legacy" ? "#3a2418" : "#1c2a18"}
                stroke={accent}
                initial={reduce ? false : { opacity: 0.4 }}
                animate={{ opacity: 1 }}
              />
              <motion.rect
                x="112"
                y="88"
                width="52"
                height="86"
                fill={mode === "legacy" ? "#3a2418" : "#1c2a18"}
                stroke={accent}
                initial={reduce ? false : { opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.08 }}
              />
              <text x="54" y="190" fill={accent} fontSize="9" fontFamily="IBM Plex Mono, monospace">
                {mode === "legacy" ? "BOILER 1–2" : "PLANT A"}
              </text>
              <text x="54" y="204" fill="#aab2b4" fontSize="8" fontFamily="IBM Plex Mono, monospace">
                {mode === "legacy" ? "AGEING" : "EFFICIENT"}
              </text>

              <path
                d="M164 130 H250 V70 H430"
                fill="none"
                stroke={accent}
                strokeDasharray={mode === "legacy" ? "3 5" : "0"}
              />
              <path d="M164 160 H250 V250 H520" fill="none" stroke={accent} opacity="0.7" />
              <circle cx="250" cy="130" r="4" fill="#0b1424" stroke={accent} />
              <circle cx="430" cy="70" r="4" fill="#0b1424" stroke={accent} />
              <circle cx="520" cy="250" r="4" fill="#0b1424" stroke={accent} />

              <rect x="400" y="48" width="110" height="44" fill="none" stroke={accent} />
              <text x="412" y="68" fill={accent} fontSize="9" fontFamily="IBM Plex Mono, monospace">
                {mode === "legacy" ? "AHU · LIMITED" : "AHU · MODULATED"}
              </text>
              <text x="412" y="82" fill="#aab2b4" fontSize="8" fontFamily="IBM Plex Mono, monospace">
                DISTRIBUTION
              </text>

              <rect x="470" y="228" width="130" height="48" fill="none" stroke={accent} />
              <text x="482" y="250" fill={accent} fontSize="9" fontFamily="IBM Plex Mono, monospace">
                {mode === "legacy" ? "CONTROLS · PARTIAL" : "BMS · INTEGRATED"}
              </text>
              <text x="482" y="264" fill="#aab2b4" fontSize="8" fontFamily="IBM Plex Mono, monospace">
                {mode === "legacy" ? "REACTIVE" : "MONITORED"}
              </text>
            </motion.g>
          </svg>
          <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-steel uppercase">
            Illustrative schematic — not measured data from a specific building.
          </p>
        </div>
      </div>

      <div className="border-t border-gold/15 lg:col-span-5 lg:border-t-0 lg:border-l">
        <div className="px-5 py-8 sm:px-8">
          <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase">{active.kicker}</p>
          <h3 className="mt-3 font-display text-2xl tracking-tight">{active.label}</h3>
          <p className="mt-4 text-sm leading-relaxed text-steel">{active.copy}</p>
          <ul className="mt-8 space-y-5">
            {active.nodes.map((node) => (
              <li key={node.title} className="border-t border-gold/10 pt-4">
                <p className="font-display text-sm tracking-tight text-cream">{node.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-steel">{node.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
