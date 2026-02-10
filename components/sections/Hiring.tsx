"use client";

import { motion } from "framer-motion";
import { HIRING_ROLES } from "@/lib/constants";

export default function Hiring() {
  return (
    <section id="hiring" className="py-32 px-4 bg-ally-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-inter-tight">
            Hiring
          </h2>
          <p className="text-xl text-ally-white/70 max-w-3xl mx-auto">
            If you're a high-agency operator or systems thinker, we'd love to
            meet you. Roles evolve with the work; we hire for judgment, clarity,
            and craft.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {HIRING_ROLES.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-ally-bg border border-ally-gray-800 hover:border-ally-green/40 transition-all hover:shadow-lg hover:shadow-ally-green/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-ally-green">
                {role.title}
              </h3>
              <ul className="space-y-3">
                {role.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-ally-white/70 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-ally-green mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
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
          <button className="bg-ally-green text-ally-bg px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-ally-green/20 transition-all hover:scale-105">
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
