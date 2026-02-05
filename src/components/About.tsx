"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { stats } from "@/data/portfolio";

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

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-medium mb-2">GET TO KNOW ME</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Main bio card - spans 2 columns */}
          <motion.div
            variants={item}
            className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 overflow-hidden">
                {/* Replace with your actual image */}
                <img
                  src="/images/profile.png"
                  alt="Navneet Joshi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Navneet Joshi</h3>
                <p className="text-blue-500 font-medium mb-4">Senior Frontend Engineer</p>
                <p className="text-zinc-400 leading-relaxed">
                  I'm a frontend engineer who loves turning complex problems into simple, 
                  beautiful interfaces. With 6+ years of experience at companies like Baker Hughes and MAPC, 
                  I've built everything from real-time dashboards to design systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location card */}
          <motion.div
            variants={item}
            className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between"
          >
            <MapPin className="text-blue-500 mb-4" size={28} />
            <div>
              <p className="text-zinc-500 text-sm mb-1">LOCATION</p>
              <p className="text-xl font-semibold">Boston, MA</p>
              <p className="text-zinc-500 text-sm">Open to relocation</p>
            </div>
          </motion.div>

          {/* Stats cards */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center items-center text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">
                {stat.value}
              </p>
              <p className="text-zinc-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}

          {/* Experience highlight */}
          <motion.div
            variants={item}
            className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6"
          >
            <Briefcase className="text-blue-500 mb-4" size={28} />
            <p className="text-zinc-500 text-sm mb-1">MOST RECENT</p>
            <p className="text-lg font-semibold">MAPC</p>
            <p className="text-zinc-500 text-sm">Software Engineering Co-op</p>
          </motion.div>

          {/* Education card */}
          <motion.div
            variants={item}
            className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6"
          >
            <GraduationCap className="text-blue-500 mb-4" size={28} />
            <p className="text-zinc-500 text-sm mb-1">EDUCATION</p>
            <p className="text-lg font-semibold">Northeastern University</p>
            <p className="text-zinc-500 text-sm">MS Information Systems</p>
          </motion.div>

          {/* Tech focus card - spans 2 columns */}
          <motion.div
            variants={item}
            className="md:col-span-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-6"
          >
            <Code2 className="text-blue-500 mb-4" size={28} />
            <p className="text-zinc-500 text-sm mb-2">WHAT I DO BEST</p>
            <p className="text-xl font-semibold mb-3">
              Building High-Performance, Responsive and Accessible React Applications
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Next.js", "D3.js", "GraphQL", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-zinc-800/50 rounded-full text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}