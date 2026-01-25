"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll get back to you!
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors group"
          >
            Get In Touch
            <ArrowUpRight
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              size={18}
            />
          </a>
        </motion.div>

        {/* Links & Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-800">
          {/* Name/Brand */}
          <div className="text-xl font-bold">
            {personalInfo.name.split(" ")[0]}
            <span className="text-blue-500">.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-zinc-600 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}