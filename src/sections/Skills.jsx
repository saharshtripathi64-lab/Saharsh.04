import React from "react";
import { motion } from "framer-motion";

import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiAngular,
  SiJavascript,
  SiGit,
  SiGithub,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "Java",
      icon: <FaJava />,
      level: 85,
      color: "#f89820",
      category: "Backend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: 90,
      color: "#f7df1e",
      category: "Frontend",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: 92,
      color: "#61dafb",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      level: 85,
      color: "#ffffff",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: 82,
      color: "#3178c6",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 90,
      color: "#38bdf8",
      category: "Frontend",
    },
    {
      name: "Angular",
      icon: <SiAngular />,
      level: 75,
      color: "#dd0031",
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      level: 82,
      color: "#68a063",
      category: "Backend",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      level: 80,
      color: "#ffffff",
      category: "Backend",
    },
    {
      name: "Python",
      icon: <SiPython />,
      level: 78,
      color: "#3776ab",
      category: "Backend",
    },
    {
      name: "FastAPI",
      icon: <SiFastapi />,
      level: 75,
      color: "#009688",
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: 82,
      color: "#47a248",
      category: "Database",
    },
    {
      name: "Docker",
      icon: <SiDocker />,
      level: 70,
      color: "#2496ed",
      category: "Tools",
    },
    {
      name: "Git",
      icon: <SiGit />,
      level: 88,
      color: "#f05032",
      category: "Tools",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      level: 88,
      color: "#ffffff",
      category: "Tools",
    },
  ];

  const categories = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, modern and interactive user interfaces.",
      icon: "⚡",
      skills: skills.filter((skill) => skill.category === "Frontend"),
    },
    {
      title: "Backend Development",
      description:
        "Creating scalable APIs, server-side applications and services.",
      icon: "⚙️",
      skills: skills.filter((skill) => skill.category === "Backend"),
    },
    {
      title: "Database & Tools",
      description:
        "Managing data, version control and development environments.",
      icon: "🛠️",
      skills: skills.filter(
        (skill) =>
          skill.category === "Database" || skill.category === "Tools"
      ),
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full overflow-hidden bg-[#030303] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main cyan glow */}
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#1cd8d2]/10 blur-[150px]" />

        {/* Green glow */}
        <div className="absolute -left-40 bottom-10 h-[400px] w-[400px] rounded-full bg-[#00bf8f]/10 blur-[140px]" />

        {/* Purple glow */}
        <div className="absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-[#302b63]/20 blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-semibold uppercase text-[#1cd8d2]"
          >
            My Expertise
          </motion.p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A collection of technologies and tools I use to design,
            develop and deploy modern web applications.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-gradient-to-r from-transparent via-[#1cd8d2] to-transparent" />
        </motion.div>

        {/* ===================================================
            SKILL CATEGORY CARDS
        ==================================================== */}

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.15,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
            >
              {/* Card Glow */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#1cd8d2]/10 blur-[70px] transition duration-500 group-hover:bg-[#1cd8d2]/20" />

              {/* Header */}
              <div className="relative mb-7 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#1cd8d2]/20 bg-[#1cd8d2]/10 text-xl">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="relative space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-lg"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </span>

                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-xs text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, #1cd8d2)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===================================================
            ALL TECHNOLOGIES
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

            <h3 className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              My Tech Stack
            </h3>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative"
              >
                {/* Glow */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 blur-xl transition duration-500 group-hover:opacity-30"
                  style={{
                    backgroundColor: skill.color,
                  }}
                />

                {/* Card */}
                <div className="relative flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.07]">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -8, 8, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl"
                    style={{
                      color: skill.color,
                    }}
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Name */}
                  <p className="mt-4 text-sm font-semibold text-gray-400 transition group-hover:text-white">
                    {skill.name}
                  </p>

                  {/* Category */}
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-600">
                    {skill.category}
                  </p>

                  {/* Bottom Indicator */}
                  <div
                    className="mt-3 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-8"
                    style={{
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            LEARNING SECTION
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 backdrop-blur-xl sm:p-10">
            {/* Decorative Glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1cd8d2]/10 blur-[100px]" />

            <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
              {/* Text */}
              <div className="text-center md:text-left">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1cd8d2]/20 bg-[#1cd8d2]/10 px-4 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#1cd8d2]" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1cd8d2]">
                    Currently Learning
                  </span>
                </div>

                <h3 className="text-2xl font-bold sm:text-3xl">
                  Always learning.{" "}
                  <span className="text-gray-500">
                    Always building.
                  </span>
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                  Technology never stops evolving, and neither do I.
                  I continuously explore new tools, frameworks and
                  development practices to improve my skills.
                </p>
              </div>

              {/* Animated Code Icon */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-[#1cd8d2]/20 bg-[#1cd8d2]/10 text-3xl text-[#1cd8d2] shadow-[0_0_40px_rgba(28,216,210,0.08)]"
              >
                {"</>"}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 h-px origin-center bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-gray-700"
        >
          Turning ideas into reality through code
        </motion.p>
      </div>
    </section>
  );
}
