"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-medium mb-2">MY WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden"
            >
              {/* Project image */}
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Links overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="text-zinc-500 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    size={20}
                  />
                </div>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-center"
            >
              Other Projects
            </motion.h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {otherProjects.map((project) => (
                <motion.a
                  key={project.title}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Github className="text-zinc-500" size={24} />
                    <ArrowUpRight
                      className="text-zinc-600 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      size={18}
                    />
                  </div>
                  <h4 className="font-bold mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-zinc-500 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}