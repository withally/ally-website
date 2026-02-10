"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-20 px-4 border-t border-ally-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 font-inter-tight">Ally</h3>
            <p className="text-ally-white/60 text-sm">
              Executive Partners × AI Systems for Leaders
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <a
              href="mailto:hello@withally.com"
              className="text-ally-white/60 hover:text-ally-green transition-colors text-sm"
            >
              hello@withally.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-ally-white/60 hover:text-ally-green transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-ally-white/60 hover:text-ally-green transition-colors text-sm"
              >
                Twitter
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-ally-gray-800 text-center text-sm text-ally-white/40"
        >
          <p>© {new Date().getFullYear()} Ally. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
