import React from "react";
import { motion } from "framer-motion";
import KT from "../assets/KT.jpg"
import Contact from "./Contact";

export default function About() {
  const stats = [
    {
      value: "1+",
      label: "Years Experience",
    },
    {
      value: "10+",
      label: "Projects Built",
    },
    {
      value: "100%",
      label: "Passion for Code",
    },
  ];

  const technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ];

  const floatingCards = [
    {
      title: "Frontend",
      value: "React.js",
      position: "top-6 -right-8 md:-right-16",
      delay: 0,
    },
    {
      title: "Backend",
      value: "Node.js",
      position: "bottom-8 -left-8 md:-left-16",
      delay: 0.2,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-[#030303] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main glow */}
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00bf8f]/10 blur-[150px]" />

        {/* Cyan glow */}
        <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-[#1cd8d2]/10 blur-[130px]" />

        {/* Purple glow */}
        <div className="absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-[#302b63]/20 blur-[140px]" />

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

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#1cd8d2]">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-gradient-to-r from-transparent via-[#1cd8d2] to-transparent" />
        </motion.div>

        {/* =========================================================
            PROFILE + CONTENT
        ========================================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =====================================================
              PROFILE AREA
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative mx-auto w-full max-w-[400px]"
          >
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-5 rounded-[2rem] border border-dashed border-[#1cd8d2]/20"
            />

            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 blur-2xl" />

            {/* Main Card */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
                <img
                  src={KT}
                  alt="Kartikey Tripathi"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Bottom profile info */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#1cd8d2]">
                      Software Developer
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      Kartikeya Tripathi
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  opacity: {
                    duration: 0.5,
                    delay: card.delay,
                  },
                  scale: {
                    duration: 0.5,
                    delay: card.delay,
                  },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay,
                  },
                }}
                viewport={{ once: true }}
                className={`absolute ${card.position} hidden rounded-xl border border-white/10 bg-[#0b0b0b]/80 px-5 py-3 shadow-xl backdrop-blur-xl sm:block`}
              >
                <p className="text-xs text-gray-500">{card.title}</p>
                <p className="font-semibold text-[#1cd8d2]">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* =====================================================
              ABOUT CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Intro */}
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00bf8f]">
              Hello, I'm Kartikeya 👋
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              I build{" "}
              <span className="bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] bg-clip-text text-transparent">
                modern digital experiences
              </span>{" "}
              that actually feel good to use.
            </h3>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-400 sm:text-lg">
              <p>
                I'm a passionate Full Stack Developer who enjoys transforming
                ideas into modern, scalable, and interactive web applications.
                I love working on both frontend and backend technologies to
                build complete digital products.
              </p>

              <p>
                My approach is simple — write clean code, create intuitive
                interfaces, focus on performance, and continuously learn
                better ways to solve problems.
              </p>
            </div>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-9 grid grid-cols-3 gap-3 sm:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(28,216,210,0.4)",
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-center backdrop-blur-md transition-colors"
                >
                  <p className="text-2xl font-black text-[#1cd8d2] sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                TECHNOLOGIES
            ================================================== */}

            <div className="mt-9">
              <p className="mb-4 text-sm font-semibold text-gray-300">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -3,
                      scale: 1.04,
                    }}
                    className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 transition hover:border-[#1cd8d2]/40 hover:bg-[#1cd8d2]/10 hover:text-[#1cd8d2]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="#Project"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-black transition hover:bg-[#1cd8d2]"
              >
                View My Projects

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>

              <motion.a
                href="#Contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:border-[#1cd8d2]/40 hover:bg-[#1cd8d2]/10 hover:text-[#1cd8d2]"
              >
                Let's Connect
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM LINE
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 h-px w-full origin-center bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm text-gray-600"
        >
          Turning ideas into clean, scalable & meaningful experiences.
        </motion.p>
      </div>
    </section>
  );
}
