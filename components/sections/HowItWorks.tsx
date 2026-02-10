"use client";

import { motion } from "framer-motion";
import { BENEFITS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-inter-tight">
            How It Works
          </h2>
          <p className="text-2xl text-ally-green max-w-3xl mx-auto mb-12">
            From working to winning: automate, augment, then scale what's proven.
          </p>
          <p className="text-xl text-ally-white/70 max-w-3xl mx-auto">
            We evolve your operating system to give you better clarity and scale
            your judgment.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 rounded-xl bg-ally-gray-900/20 border border-ally-gray-800/50 hover:border-ally-green/30 transition-colors"
            >
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-ally-green" />
              <p className="text-lg text-ally-white/80">{benefit}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-ally-white/50 text-sm max-w-2xl mx-auto">
            Not AI for AI's sake. We automate what's proven, augment your
            judgment, and scale what actually creates leverage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
