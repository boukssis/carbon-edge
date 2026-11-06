"use client";

import { ArrowLeftRight } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "motion/react";

const legacy = {
  id: "legacy",
  label: "Before · Legacy systems",
  heading: "Legacy systems",
  copy: "Ageing boiler plant, limited controls, inefficient operation and a maintenance culture that reacts to the next failure.",
  points: [
    { title: "Ageing boiler plant", body: "Multiple boilers kept in service by patch repair." },
    { title: "Limited controls", body: "Partial BMS, local overrides and little visibility." },
    { title: "Inefficient operation", body: "Plant sequenced for another era of use and energy cost." },
    { title: "Reactive maintenance", body: "Failures set the programme. Capital keeps yesterday’s system alive." },
  ],
};

const modern = {
  id: "modern",
  label: "After · Modernised systems",
  heading: "Modernised systems",
  copy: "Efficient plant options, integrated controls, clearer monitoring and maintenance that can be planned.",
  points: [
    { title: "Modern plant options", body: "Replacement or hybrid plant chosen for the building’s loads, space and power." },
    { title: "Integrated BMS controls", body: "A strategy the facilities team can actually run." },
    { title: "Improved monitoring", body: "Temperatures, status and exceptions visible in one place." },
    { title: "Planned maintenance", body: "Access and a system that can be looked after, not rescued." },
  ],
};

export function RetrofitVisual() {
  const [mode, setMode] = useState<"legacy" | "modern">("legacy");
  const reduce = useReducedMotion();
  const active = mode === "legacy" ? legacy : modern;
  const accent = mode === "legacy" ? "#c8571d" : "#8a9640";
  const fill = mode === "legacy" ? "#3a2418" : "#243318";

  const select = (next: "legacy" | "modern") => setMode(next);

  const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    select(mode === "legacy" ? "modern" : "legacy");
  };

  return (
    <div className="border border-gold/25 bg-navy-900">
      <div className="border-b border-white/10 px-4 py-5 sm:px-6">
        <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-gold uppercase">
          <ArrowLeftRight className="h-3.5 w-3.5" aria-hidden />
          Select a system to explore the difference
        </p>
        <div
          className="mt-4 grid gap-2 sm:grid-cols-2"
          role="group"
          aria-label="Building system state"
          onKeyDown={onKey}
        >
          {([legacy, modern] as const).map((option) => {
            const selected = mode === option.id;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => select(option.id === "modern" ? "modern" : "legacy")}
                className={`border px-4 py-3 text-left font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-300 sm:text-[12px] ${
                  selected
                    ? option.id === "legacy"
                      ? "border-copper bg-copper text-navy-950"
                      : "border-olive bg-olive text-navy-950"
                    : "border-white/20 bg-transparent text-cream/80 hover:border-gold/60 hover:text-cream"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-12">
        <div className="px-3 py-6 sm:px-6 lg:col-span-7">
          <svg viewBox="0 0 640 380" className="h-auto w-full" role="img" aria-label={active.heading}>
            <rect x="18" y="28" width="210" height="300" fill="none" stroke="#314056" />
            <text x="32" y="52" fill="#c4a24a" fontSize="11" fontFamily="IBM Plex Mono, monospace" letterSpacing="1.5">
              PLANT ROOM
            </text>

            <motion.g
              key={mode}
              initial={reduce ? false : { opacity: 0.35 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              <rect x="40" y="72" width="70" height="96" fill={fill} stroke={accent} strokeWidth="1.5" />
              <rect x="122" y="72" width="70" height="96" fill={fill} stroke={accent} strokeWidth="1.5" />
              <text x="40" y="190" fill={accent} fontSize="11" fontFamily="IBM Plex Mono, monospace">
                {mode === "legacy" ? "BOILERS" : "PLANT"}
              </text>
              <text x="40" y="206" fill="#d7ddd8" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                {mode === "legacy" ? "AGEING" : "EFFICIENT"}
              </text>
              {mode === "modern" ? (
                <text x="40" y="228" fill="#c4a24a" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                  LOW-CARBON OPTION
                </text>
              ) : (
                <text x="40" y="228" fill="#aab2b4" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                  PATCH REPAIR
                </text>
              )}

              <path
                d="M192 120 H280 V64 H470"
                fill="none"
                stroke={accent}
                strokeWidth="1.6"
                strokeDasharray={mode === "legacy" ? "4 6" : "0"}
              />
              <path
                d="M192 168 H280 V300 H560"
                fill="none"
                stroke={accent}
                strokeWidth="1.6"
                strokeDasharray={mode === "legacy" ? "2 5" : "0"}
                opacity="0.85"
              />
              <circle cx="280" cy="120" r="4.5" fill="#101b2c" stroke={accent} />
              <circle cx="470" cy="64" r="4.5" fill="#101b2c" stroke={accent} />
              <circle cx="560" cy="300" r="4.5" fill="#101b2c" stroke={accent} />

              <rect x="430" y="36" width="160" height="56" fill={mode === "modern" ? "#1c2814" : "none"} stroke={accent} />
              <text x="444" y="60" fill={accent} fontSize="11" fontFamily="IBM Plex Mono, monospace">
                {mode === "legacy" ? "AHU · LIMITED" : "AHU · MODULATED"}
              </text>
              <text x="444" y="76" fill="#d7ddd8" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                DISTRIBUTION
              </text>

              <rect x="430" y="248" width="180" height="64" fill={mode === "modern" ? "#1c2814" : "none"} stroke={accent} />
              <text x="444" y="274" fill={accent} fontSize="11" fontFamily="IBM Plex Mono, monospace">
                {mode === "legacy" ? "CONTROLS · PARTIAL" : "BMS · INTEGRATED"}
              </text>
              <text x="444" y="292" fill="#d7ddd8" fontSize="10" fontFamily="IBM Plex Mono, monospace">
                {mode === "legacy" ? "REACTIVE" : "MONITORED"}
              </text>
            </motion.g>
          </svg>
        </div>

        <div className="border-t border-white/10 px-5 py-7 sm:px-7 lg:col-span-5 lg:border-t-0 lg:border-l" aria-live="polite">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: accent }}>
            {mode === "legacy" ? "As found" : "After modernisation"}
          </p>
          <h3 className="mt-3 font-display text-3xl tracking-tight">{active.heading}</h3>
          <p className="mt-4 text-sm leading-relaxed text-mist">{active.copy}</p>
          <ul className="mt-6 space-y-4">
            {active.points.map((point) => (
              <li key={point.title} className="border-t border-white/10 pt-4">
                <p className="font-display text-base text-cream">{point.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-steel">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
