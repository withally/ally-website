"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { WHAT_ALLY_IS } from "@/lib/constants";

function InlineBadge({
  variant,
  scrollProgress,
  start,
  end,
}: {
  variant: "sparkle" | "dynamite";
  scrollProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const gradient =
    variant === "sparkle"
      ? "radial-gradient(50% 75% at 88.6% 10.8%, #cc126f 0%, #471313 100%)"
      : "radial-gradient(50% 75% at 88.6% 10.8%, #8234c7fc 0%, #3f096e99 100%)";

  const opacity = useTransform(scrollProgress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-flex items-center justify-center align-middle mx-1 tablet:mx-2 w-[50px] h-[32px] tablet:w-[80px] tablet:h-[48px] desktop:w-[110px] desktop:h-[58px] rounded-full overflow-hidden relative"
    >
      <span className="absolute inset-0" style={{ background: gradient }} />
      <Image
        src="/images/badge-stars.png"
        alt=""
        fill
        className="object-cover opacity-60 mix-blend-screen"
      />
      <span className="relative z-10 text-[16px] tablet:text-[24px] desktop:text-[32px]">
        {variant === "sparkle" ? "✨" : "🧨"}
      </span>
    </motion.span>
  );
}

function RevealWord({
  text,
  targetColor,
  scrollProgress,
  start,
  end,
}: {
  text: string;
  targetColor: string;
  scrollProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const color = useTransform(scrollProgress, [start, end], ["#2a2a2a", targetColor]);
  return <motion.span style={{ color }}>{text}</motion.span>;
}

// Each line is rendered separately to avoid hooks-in-map issues
function HeadlineLine1({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <>
      <RevealWord text="Human" targetColor="#ffffff" scrollProgress={scrollProgress} start={0 / 13} end={1 / 13} />
      <RevealWord text=" first, " targetColor="#ffffff" scrollProgress={scrollProgress} start={1 / 13} end={2 / 13} />
      <InlineBadge variant="sparkle" scrollProgress={scrollProgress} start={2 / 13} end={3 / 13} />
      <RevealWord text=" " targetColor="#ffffff" scrollProgress={scrollProgress} start={3 / 13} end={4 / 13} />
      <RevealWord text="AI-native" targetColor="#fec9ff" scrollProgress={scrollProgress} start={4 / 13} end={5 / 13} />
    </>
  );
}

function HeadlineLine2({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <>
      <RevealWord text="partner" targetColor="#ffffff" scrollProgress={scrollProgress} start={5 / 13} end={6 / 13} />
      <RevealWord text=" — for " targetColor="#ffffff" scrollProgress={scrollProgress} start={6 / 13} end={7 / 13} />
      <RevealWord text="ambitious" targetColor="#ffffff" scrollProgress={scrollProgress} start={7 / 13} end={8 / 13} />
      <RevealWord text=" " targetColor="#ffffff" scrollProgress={scrollProgress} start={8 / 13} end={9 / 13} />
      <InlineBadge variant="dynamite" scrollProgress={scrollProgress} start={9 / 13} end={10 / 13} />
    </>
  );
}

function HeadlineLine3({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <>
      <RevealWord text="executives" targetColor="#d3ffca" scrollProgress={scrollProgress} start={10 / 13} end={11 / 13} />
      <RevealWord text=" industry " targetColor="#ffffff" scrollProgress={scrollProgress} start={11 / 13} end={12 / 13} />
      <RevealWord text="leaders." targetColor="#ffffff" scrollProgress={scrollProgress} start={12 / 13} end={13 / 13} />
    </>
  );
}

export default function WhatIsAlly() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: rawProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "center center"],
  });

  const scrollYProgress = useSpring(rawProgress, {
    stiffness: 30,
    damping: 50,
    restDelta: 0.0001,
  });

  return (
    <section id="what-is-ally" className="py-32 px-6" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-editorial text-[28px] tablet:text-[36px] desktop:text-[42px] leading-[1.4] tracking-[-0.02em] text-white/60 mb-12">
            {WHAT_ALLY_IS.sectionLabel}
          </h3>
        </motion.div>

        <div className="mb-16">
          <h2 className="font-inter-tight text-[40px] tablet:text-[70px] desktop:text-[90px] desktop-lg:text-[100px] leading-[1.1]">
            <HeadlineLine1 scrollProgress={scrollYProgress} />
            <br />
            <HeadlineLine2 scrollProgress={scrollYProgress} />
            <br />
            <HeadlineLine3 scrollProgress={scrollYProgress} />
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[15px] font-inter-tight tracking-[0.5px] text-white/60 max-w-[700px] leading-[1.6]"
        >
          {WHAT_ALLY_IS.body}
        </motion.p>
      </div>
    </section>
  );
}
