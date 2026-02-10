"use client";

import { motion } from "framer-motion";
import { TARGET_AUDIENCES } from "@/lib/constants";

export default function WhyNow() {
  return (
    <section id="why-now" className="py-32 px-4 bg-ally-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-inter-tight">
            Why Now
          </h2>
          <p className="text-xl md:text-2xl text-ally-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            AI has made "doing" faster and cheaper than ever.
          </p>
          <p className="text-lg text-ally-white/60 max-w-3xl mx-auto leading-relaxed">
            If more of your time is still going into tasks others—or AI—could
            handle, you're leaving leverage on the table. We believe the leaders
            who thrive will focus on what only they can decide, improve their
            decision quality continuously, and build systems that keep everything
            else moving without them. Ally helps you design and run that system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {TARGET_AUDIENCES.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-ally-bg border-2 border-ally-gray-800 hover:border-ally-pink/30 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4 text-ally-pink">
                {audience.title}
              </h3>
              <p className="text-ally-white/70 leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
