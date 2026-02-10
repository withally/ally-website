"use client";

import { motion } from "framer-motion";
import { KEY_MESSAGES } from "@/lib/constants";

export default function WhatIsAlly() {
  return (
    <section id="what-is-ally" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-inter-tight">
            Remove friction from your day
          </h2>
          <p className="text-xl md:text-2xl text-ally-white/70 max-w-3xl mx-auto">
            Embed an Executive Partner and focus on what matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {KEY_MESSAGES.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-ally-gray-900/30 border border-ally-gray-800 hover:border-ally-green/30 transition-colors"
            >
              <p className="text-lg leading-relaxed">{message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
