"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    year: "2025 — Present",
    role: "Creative Developer",
    company: "Your Company",
    location: "Remote",
    description:
      "Building immersive digital experiences with a strong focus on interaction, performance and modern visual design.",
    technologies: [
      "React",
      "Next.js",
      "Framer Motion",
      "Tailwind",
    ],
  },

  {
    year: "2024 — 2025",
    role: "Frontend Developer",
    company: "Another Studio",
    location: "India",
    description:
      "Developed responsive interfaces and interactive web experiences while working closely with designers and creative teams.",
    technologies: [
      "JavaScript",
      "React",
      "GSAP",
      "CSS",
    ],
  },

  {
    year: "2023 — 2024",
    role: "Web Designer & Developer",
    company: "Freelance",
    location: "Worldwide",
    description:
      "Worked with different clients to turn ideas into clean, functional and visually distinctive websites.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/[0.035] blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
              Experience
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Where I've
              <br />

              <span className="bg-gradient-to-r from-white via-white/75 to-white/25 bg-clip-text text-transparent">
                been.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-white/40">
              A timeline of the places, people and projects that
              shaped the way I build digital experiences.
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            EXPERIENCE LIST
        ==================================================== */}

        <div className="relative">
          {/* Vertical timeline */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-purple-500/70 via-white/10 to-transparent md:left-[170px]" />

          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.year}`}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative grid gap-6 pl-10 md:grid-cols-[140px_1fr] md:gap-10 md:pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-purple-400/40 bg-[#050505] md:left-[163px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />
                </div>

                {/* Year */}
                <div className="pt-7">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-purple-300">
                    {experience.year}
                  </span>
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 group-hover:border-white/[0.15] group-hover:bg-white/[0.045] sm:p-8">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-purple-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top */}
                  <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                    <div>
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-purple-300/70">
                        {experience.location}
                      </p>

                      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-sm text-white/40">
                        {experience.company}
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 5,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/40 transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-purple-500/10 group-hover:text-purple-300"
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="relative mt-7 max-w-2xl text-sm leading-7 text-white/40">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="relative mt-7 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/35 transition-colors duration-300 group-hover:border-white/10 group-hover:text-white/50"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 border-t border-white/[0.08] pt-8"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-md text-xs leading-5 text-white/25">
              Every project taught me something new. Every experience
              changed the way I approach the next one.
            </p>

            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />

              Open to opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
