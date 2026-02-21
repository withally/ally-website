"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_CONTENT, SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

// Floating particle positions - fixed to avoid hydration mismatch
const PARTICLES = [
  { top: "8%", left: "12%", size: 3, opacity: 0.5, delay: 0 },
  { top: "15%", left: "52%", size: 2, opacity: 0.3, delay: 0.5 },
  { top: "5%", left: "78%", size: 2, opacity: 0.4, delay: 1.2 },
  { top: "22%", left: "25%", size: 3, opacity: 0.35, delay: 0.8 },
  { top: "12%", left: "88%", size: 2, opacity: 0.5, delay: 1.5 },
  { top: "30%", left: "8%", size: 2, opacity: 0.25, delay: 0.3 },
  { top: "35%", left: "42%", size: 3, opacity: 0.3, delay: 2.0 },
  { top: "28%", left: "65%", size: 2, opacity: 0.4, delay: 0.7 },
  { top: "45%", left: "5%", size: 2, opacity: 0.35, delay: 1.8 },
  { top: "50%", left: "92%", size: 3, opacity: 0.5, delay: 0.2 },
  { top: "55%", left: "18%", size: 2, opacity: 0.3, delay: 1.0 },
  { top: "60%", left: "75%", size: 2, opacity: 0.25, delay: 1.4 },
  { top: "68%", left: "35%", size: 3, opacity: 0.4, delay: 0.6 },
  { top: "72%", left: "55%", size: 2, opacity: 0.3, delay: 1.6 },
  { top: "78%", left: "10%", size: 2, opacity: 0.35, delay: 0.9 },
  { top: "82%", left: "85%", size: 3, opacity: 0.5, delay: 0.1 },
  { top: "88%", left: "48%", size: 2, opacity: 0.25, delay: 2.2 },
  { top: "92%", left: "22%", size: 2, opacity: 0.4, delay: 1.1 },
  { top: "40%", left: "95%", size: 2, opacity: 0.3, delay: 1.3 },
  { top: "18%", left: "38%", size: 2, opacity: 0.35, delay: 1.7 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 py-8 overflow-hidden">
      {/* Base dark background with subtle green tint */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 0% 0%, rgb(34, 38, 30) 0%, rgb(8, 8, 7) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 100% 100%, rgb(34, 38, 30) 0%, rgba(8, 7, 7, 0) 100%)",
          }}
        />
      </div>

      {/* Upper-right purple/lavender glow */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] z-[1] opacity-40 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(160, 120, 200, 0.6) 0%, transparent 70%)",
        }}
      />

      {/* ── Animated morphing glow blob ── */}
      {/* Centering wrapper — positions the glow behind the headline */}
      <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center">
        {/* Layer 1: Hot pink core */}
        <div
          className="absolute w-[350px] h-[350px] tablet:w-[550px] tablet:h-[450px] desktop:w-[750px] desktop:h-[550px] blur-[60px] tablet:blur-[80px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255, 20, 140, 0.85) 0%, rgba(236, 50, 150, 0.6) 35%, transparent 70%)",
            animation: "morphBlob1 12s ease-in-out infinite",
          }}
        />
        {/* Layer 2: Magenta/purple outer glow */}
        <div
          className="absolute w-[400px] h-[400px] tablet:w-[650px] tablet:h-[500px] desktop:w-[850px] desktop:h-[600px] blur-[80px] tablet:blur-[100px] opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200, 40, 180, 0.6) 0%, rgba(130, 30, 160, 0.3) 40%, transparent 70%)",
            animation: "morphBlob2 16s ease-in-out infinite",
          }}
        />
        {/* Layer 3: Warm orange/amber accent (offset left) */}
        <div
          className="absolute w-[200px] h-[200px] tablet:w-[300px] tablet:h-[280px] desktop:w-[400px] desktop:h-[350px] blur-[60px] opacity-50 -translate-x-[15%]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 140, 50, 0.6) 0%, rgba(255, 80, 60, 0.3) 40%, transparent 70%)",
            animation: "morphBlob3 10s ease-in-out infinite",
          }}
        />
      </div>

      {/* Floating star particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            animate={{
              opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
            }}
            transition={{
              duration: 3 + p.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Static top bar */}
      <div className="relative z-10 w-full max-w-[1400px] flex items-center justify-between mb-auto">
        <Image
          src="/images/ally-logo.svg"
          alt="ally"
          width={58}
          height={25}
          className="brightness-0 invert"
          priority
        />

        <nav className="hidden tablet:flex bg-[#0f0f0f]/60 backdrop-blur-[10px] border border-[#232323] rounded-[12px] px-2 py-2">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-4 py-2 rounded-md text-[14px] font-inter-tight tracking-[0.5px] text-white/70 hover:text-white transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={SITE_CONFIG.requestAccessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-[10px] text-[14px] font-inter-tight tracking-[0.5px] text-white border border-[#232323] hover:border-[#858585] transition-colors"
        >
          Request Access
        </a>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-[1000px] mx-auto text-center flex-1 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-editorial text-[60px] tablet:text-[85px] desktop:text-[100px] desktop-lg:text-[115px] leading-[1.1] tracking-[-0.03em] text-white mb-8"
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[18px] tablet:text-[20px] text-white/70 max-w-[620px] mx-auto mb-10 leading-[1.5] tracking-[0.2px] font-inter-tight"
        >
          {HERO_CONTENT.description}
        </motion.p>

        <motion.a
          href={SITE_CONFIG.requestAccessUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#191919]/80 text-white px-8 py-3.5 rounded-xl font-inter-tight text-[14px] font-normal tracking-[0.5px] border border-[#2a2a2a] hover:border-[#858585] transition-colors"
        >
          {HERO_CONTENT.cta}
        </motion.a>
      </div>

      {/* Bottom spacer to push content up */}
      <div className="h-[80px] tablet:h-[120px]" />
    </section>
  );
}
