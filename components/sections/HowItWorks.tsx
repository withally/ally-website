"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";

/* ── Diagonal stripe overlay shared across all cards ── */
function DiagonalStripes() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(255,255,255,0.03) 5px, rgba(255,255,255,0.03) 6px)",
      }}
    />
  );
}

/* ── Card 1: Embed — browser mockup with toggle & pricing ── */
function EmbedVisual() {
  return (
    <div className="bg-[#111] rounded-xl p-4 border border-[#333]/40">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#424242]" />
          <div className="w-2 h-2 rounded-full bg-[#424242]" />
          <div className="w-2 h-2 rounded-full bg-[#424242]" />
        </div>
      </div>

      {/* Toggle row */}
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-4 py-2 border border-[#333]/40">
          <div className="w-3 h-3 rounded-full bg-[#d3ffca]" />
          <span className="text-[13px] font-inter-tight text-white font-medium">On</span>
        </div>
        <span className="text-[13px] font-inter-tight text-white/60">withally.com</span>
      </div>

      {/* Pricing buttons */}
      <div className="flex items-center justify-center gap-2">
        <button className="px-5 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333]/40 text-[12px] font-inter-tight text-white/70">
          Basic
        </button>
        <button className="px-5 py-1.5 rounded-full bg-[#7734b3] text-[12px] font-inter-tight text-white font-medium">
          Pro
        </button>
        <button className="px-5 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333]/40 text-[12px] font-inter-tight text-white/70">
          Custom
        </button>
      </div>
    </div>
  );
}

/* ── Card 2: Harvest — tool icon grid ── */
function ToolIconGrid() {
  return (
    <div className="rounded-xl border border-[#333]/40 overflow-hidden">
      <div className="grid grid-cols-4 gap-[1px] bg-[#333]/20">
        {/* Row 1 */}
        <IconCell>
          {/* Dots / menu */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="6" cy="10" r="1.5" fill="white" opacity="0.7" />
            <circle cx="10" cy="10" r="1.5" fill="white" opacity="0.7" />
          </svg>
        </IconCell>
        <IconCell>
          {/* GitHub */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.9">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </IconCell>
        <IconCell>
          {/* Framer */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="white" opacity="0.9">
            <path d="M3 0h14v7H10l7 7H3V7h7L3 0z" transform="translate(1.5,1) scale(0.85)" />
          </svg>
        </IconCell>
        <IconCell>
          {/* Spiral / Swirl */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" opacity="0.9">
            <path d="M12 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2 .9-2 2 .9 2 2 2 2-.9 2-2-.9-2-2-2-2 .9-2 2-.9 2-2 2-2-.9-2-2" strokeLinecap="round" />
          </svg>
        </IconCell>

        {/* Row 2 */}
        <IconCell>
          {/* Bird / Swift */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="white" opacity="0.9">
            <path d="M16.8 2.2s-3.2 1.8-6.4 5c-1.6 1.6-2.8 3.4-3.6 4.8-2-1.2-3.4-2.8-3.4-2.8s1.6 3.2 4.4 4.8c-1.2.8-2.4 1.2-2.4 1.2s2 .4 4.4-.4c3.6-1.2 6.4-4.4 7.6-7.2.4-1.2.4-2.4 0-3.2-.4-.8-0.6-2.2-0.6-2.2z" />
          </svg>
        </IconCell>
        <IconCell>
          {/* Asterisk / Snowflake */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" opacity="0.9">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </IconCell>
        <IconCell>
          {/* Discord */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" opacity="0.9">
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        </IconCell>
        <IconCell>
          {/* Notion */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="white" opacity="0.9">
            <path d="M3.5 2.5l8.5-.5 3 2.5.5 10.5-3 2.5-7-.5-2-1.5V2.5z" stroke="white" strokeWidth="0.5" />
            <path d="M6 5l5-.3v9.5L6 14.5V5z" fill="none" stroke="white" strokeWidth="1" />
            <path d="M7.5 7l2-.1v6l-2 .1V7z" />
          </svg>
        </IconCell>
      </div>
    </div>
  );
}

function IconCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#111] aspect-square flex items-center justify-center p-3">
      {children}
    </div>
  );
}

/* ── Card 3: Automate — code snippet with cursor ── */
function CodeVisual() {
  return (
    <div className="relative bg-[#111] rounded-xl p-5 border border-[#333]/40">
      <div className="text-[11px] font-mono text-white/30 leading-[1.8] overflow-hidden">
        <div>{"FeatureSection } from 'nebula-"}</div>
        <div>{"template';"}</div>
        <div className="mt-2">{"const App = () => {"}</div>
        <div>{"  return ("}</div>
        <div>{"    <div>"}</div>
        <div>{"      <Header />"}</div>
        <div>{"      <HeroSection />"}</div>
        <div>{"      <FeatureSection />"}</div>
        <div>{"      <Footer />"}</div>
      </div>

      {/* Cursor + name label */}
      <div className="absolute top-[42%] right-6 flex flex-col items-end gap-1">
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" className="opacity-60 -mr-1">
          <path d="M1 1l4 15 2.5-5.5L13 8z" fill="white" stroke="white" strokeWidth="0.5" />
        </svg>
        <span className="bg-[#fec9ff] text-[#0f0f0f] text-[10px] font-inter-tight font-medium px-3 py-1 rounded-full whitespace-nowrap">
          Tibor B
        </span>
      </div>
    </div>
  );
}

/* ── Per-card visual selector ── */
const CARD_VISUALS = [EmbedVisual, ToolIconGrid, CodeVisual];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-editorial text-[55px] tablet:text-[70px] desktop:text-[80px] desktop-lg:text-[90px] leading-[1.2] tracking-[-0.03em] text-white mb-8">
            {HOW_IT_WORKS.sectionLabel}
          </h2>

          <h3 className="font-editorial text-[24px] tablet:text-[30px] desktop:text-[35px] leading-[1.4] tracking-[-0.02em] mb-12">
            <span className="text-[#fec9ff]">Ship fast.</span>{" "}
            <span className="text-[#fec9ff]">Prove the win.</span>{" "}
            <span className="text-[#e8d8b7]">Scale what works.</span>
          </h3>
        </motion.div>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 desktop-lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS.steps.map((step, index) => {
            const Visual = CARD_VISUALS[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl bg-[#161616] border border-[#333]/30 overflow-hidden"
              >
                {/* Diagonal stripe overlay */}
                <DiagonalStripes />

                {/* Card visual */}
                <div className="relative z-[1] p-4">
                  <Visual />
                </div>

                {/* Card text */}
                <div className="relative z-[1] p-6 pt-4">
                  <h3 className="font-editorial leading-[1.15] text-white mb-3">
                    <span className="text-[#fec9ff] text-[28px] tablet:text-[32px] desktop:text-[36px]">
                      {step.number}
                    </span>{" "}
                    <span className="text-[36px] tablet:text-[42px] desktop:text-[48px]">
                      {step.title}
                    </span>
                  </h3>
                  <p className="text-[14px] font-inter-tight tracking-[0.3px] text-[#858585] leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-[15px] font-inter-tight tracking-[0.5px] text-[#858585] max-w-[500px] leading-[1.6]"
        >
          {HOW_IT_WORKS.bottomText}
        </motion.p>
      </div>
    </section>
  );
}
