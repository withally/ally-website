"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";

const TOOL_LOGOS = [
  { src: "/images/tool-logo-1.png", alt: "Tool" },
  { src: "/images/tool-logo-2.png", alt: "Slack" },
  { src: "/images/tool-logo-3.png", alt: "Google Sheets" },
  { src: "/images/tool-logo-4.png", alt: "Tool" },
  { src: "/images/tool-logo-5.png", alt: "Tool" },
  { src: "/images/tool-logo-6.png", alt: "Notion" },
  { src: "/images/tool-logo-7.png", alt: "Tool" },
];

function BrowserMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#111] rounded-xl p-4 border border-[#424242]/10">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#424242]" />
          <div className="w-2 h-2 rounded-full bg-[#424242]" />
          <div className="w-2 h-2 rounded-full bg-[#424242]" />
        </div>
        <div className="flex-1 bg-[#191919] rounded-md px-3 py-1 text-[10px] text-white/30 font-inter-tight">
          withally.com
        </div>
        <div className="flex gap-2 text-[9px] text-white/20 font-inter-tight">
          <span>Basic</span>
          <span>Pro</span>
          <span>Custom</span>
        </div>
      </div>
      {children}
    </div>
  );
}

function CodeDemo() {
  return (
    <div className="relative">
      <div className="bg-[#0a0a0a] rounded-lg p-4 text-[10px] font-mono text-white/40 leading-relaxed overflow-hidden h-[140px]">
        <div className="text-white/20">import React from &apos;react&apos;;</div>
        <div className="text-white/20">{"import { Header, Footer, HeroSection,"}</div>
        <div className="text-white/20">{"FeatureSection } from 'nebula-template';"}</div>
        <div className="text-white/15 mt-2">{"const App = () => {"}</div>
        <div className="text-white/15">{"  return ("}</div>
        <div className="text-white/15">{"    <div>"}</div>
        <div className="text-white/15">{"      <Header />"}</div>
        <div className="text-white/15">{"      <HeroSection />"}</div>
        <div className="text-white/15">{"      <FeatureSection />"}</div>
        <div className="text-white/15">{"      <Footer />"}</div>
      </div>
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <Image
          src="/images/cursor-icon.png"
          alt=""
          width={16}
          height={16}
          className="opacity-50"
        />
        <span className="text-[10px] text-white/30 font-inter-tight">Tibor B</span>
      </div>
    </div>
  );
}

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
          <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/60 mb-12">
            {HOW_IT_WORKS.sectionLabel}
          </p>

          <h2 className="font-editorial text-[38px] tablet:text-[80px] desktop:text-[80px] desktop-lg:text-[80px] leading-[1.1] tracking-tight text-white mb-12">
            {HOW_IT_WORKS.headline}
          </h2>
        </motion.div>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 desktop-lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[#191919] border border-[#424242]/20 overflow-hidden"
            >
              {/* Card visual */}
              <div className="p-4">
                <BrowserMockup>
                  {index === 0 ? (
                    <div className="flex items-center justify-center gap-3 py-6 flex-wrap">
                      {TOOL_LOGOS.map((logo, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 relative opacity-50 hover:opacity-80 transition-opacity"
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain invert"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <CodeDemo />
                  )}
                </BrowserMockup>
              </div>

              {/* Card text */}
              <div className="p-6 pt-2">
                <span className="text-[12px] font-inter-tight tracking-[0.5px] text-[#fec9ff] font-bold">
                  {step.number}
                </span>
                <h3 className="text-[30px] font-editorial leading-[1.2] text-white mt-1 mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/70 leading-[1.6]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-[14px] font-inter-tight tracking-[0.5px] text-white/50 max-w-[500px] leading-[1.6]"
        >
          {HOW_IT_WORKS.bottomText}
        </motion.p>
      </div>
    </section>
  );
}
