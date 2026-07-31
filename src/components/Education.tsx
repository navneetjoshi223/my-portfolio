"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-medium mb-2">MY BACKGROUND</p>
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.school}
              variants={item}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <GraduationCap className="text-blue-500" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{edu.school}</h3>
                  <p className="text-blue-500">{edu.degree}</p>
                  <p className="text-zinc-500 text-sm">{edu.location}</p>
                </div>
              </div>
              <p className="text-zinc-500 text-sm mb-1">{edu.period}</p>
              {edu.note && (
                <p className="text-zinc-400 text-sm">{edu.note}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
