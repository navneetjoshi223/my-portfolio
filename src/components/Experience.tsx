"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-medium mb-2">MY JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-1/2" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 mt-2 z-10" />

              {/* Date - visible on desktop */}
              <div className={`hidden md:flex md:w-1/2 ${
                index % 2 === 0 ? "justify-start pl-12" : "justify-end pr-12"
              }`}>
                <span className="text-zinc-500 font-medium mt-1">{exp.period}</span>
              </div>

              {/* Content card */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
                  {/* Mobile date */}
                  <span className="md:hidden text-zinc-500 text-sm mb-2 block">
                    {exp.period}
                  </span>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Briefcase className="text-blue-500" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-blue-500">{exp.company}</p>
                      <p className="text-zinc-500 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-zinc-400 text-sm flex gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 5 && (
                      <span className="px-2 py-1 text-xs text-zinc-500">
                        +{exp.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}