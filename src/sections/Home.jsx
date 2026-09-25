import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaArrowRight,
  FaCode,
} from "react-icons/fa6";

import ParticlesBackground from "../components/ParticlesBackground";
import profileImage from "../assets/moj.jpg";

const socials = [
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/",
  },
  {
    Icon: FaXTwitter,
    label: "X",
    href: "https://x.com/",
  },
];

const roles = [
  "Frontend Developer",
  "MERN Developer",
  "Software Developer",
  "Web Developer",
  "Backend Developer",
];

const socialVariants = {
  initial: {
    y: 0,
    scale: 1,
  },

  hover: {
    y: -6,
    scale: 1.12,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },

  tap: {
    scale: 0.92,
  },
};

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = useMemo(
    () => roles[roleIndex],
    [roleIndex]
  );

  /* ---------------- TYPING EFFECT ---------------- */

  useEffect(() => {
    let timeout;

    if (!isDeleting && textIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 75);
    } else if (!isDeleting && textIndex === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && textIndex > 0) {
      timeout = setTimeout(() => {
        setTextIndex((prev) => prev - 1);
      }, 40);
    } else if (isDeleting && textIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [textIndex, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="
        relative min-h-screen w-full overflow-hidden
        bg-[#030708] text-white
      "
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <ParticlesBackground />

      {/* Main ambient gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-40 -top-40
            h-[520px] w-[520px]
            rounded-full
            bg-cyan-500/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute -bottom-40 -right-40
            h-[560px] w-[560px]
            rounded-full
            bg-emerald-500/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute left-[42%] top-[35%]
            h-[280px] w-[280px]
            rounded-full
            bg-purple-500/[0.06]
            blur-[110px]
          "
        />
      </div>

      {/* Decorative grid */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div
        className="
          relative z-10 mx-auto grid min-h-screen w-full
          max-w-[1500px]
          grid-cols-1
          items-center
          gap-10
          px-5 py-20
          sm:px-8
          lg:grid-cols-[1.05fr_.95fr]
          lg:px-12
        "
      >
        {/* ==================================================
            LEFT SIDE
        ================================================== */}

        <div className="relative z-20">
          <div className="max-w-3xl">

            {/* Small badge */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
                mb-7 inline-flex items-center gap-3
                rounded-full
                border border-white/10
                bg-white/[0.035]
                px-4 py-2
                backdrop-blur-xl
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-emerald-400 opacity-60
                  "
                />

                <span
                  className="
                    relative inline-flex h-2.5 w-2.5
                    rounded-full bg-emerald-400
                  "
                />
              </span>

              <span className="text-xs font-medium tracking-[0.18em] text-gray-300 uppercase">
                Available for opportunities
              </span>
            </motion.div>

            {/* Dynamic role */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="
                mb-5 flex items-center gap-3
                font-mono text-sm
                text-cyan-300
                sm:text-base
              "
            >
              <FaCode className="text-emerald-400" />

              <span className="text-gray-500">
                {"<"}
              </span>

              <span>
                {currentRole.substring(0, textIndex)}
              </span>

              <span
                className="
                  inline-block h-5 w-[2px]
                  animate-pulse bg-cyan-300
                "
              />

              <span className="text-gray-500">
                {"/>"}
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="
                text-[3.2rem]
                font-black
                leading-[0.95]
                tracking-[-0.06em]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.8rem]
              "
            >
              Building
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-300
                  via-emerald-300
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                "
              >
                digital
              </span>

              <br />

              <span className="text-white">
                experiences.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="
                mt-7 max-w-2xl
                text-base
                leading-7
                text-gray-400
                sm:text-lg
              "
            >
              I'm{" "}
              <span className="font-semibold text-white">
                Kartikeya Tripathi
              </span>
              , a developer focused on creating modern,
              responsive and interactive web experiences using
              React, JavaScript and the MERN stack.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="
                mt-9 flex flex-wrap
                items-center gap-4
              "
            >
              {/* Primary */}

              <motion.a
                href="#project"
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
                className="
                  group relative overflow-hidden
                  rounded-full
                  bg-white
                  px-6 py-3.5
                  font-semibold
                  text-black
                  shadow-[0_0_30px_rgba(45,212,191,.15)]
                "
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore my work

                  <FaArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>

                <span
                  className="
                    absolute inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-cyan-300
                    to-emerald-300
                    transition-transform
                    duration-500
                    group-hover:translate-x-0
                  "
                />
              </motion.a>

              {/* Resume */}

              <motion.a
                href="/Kartikeya_Tripathi_Resume.pdf"
                download
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.04]
                  px-6 py-3.5
                  font-medium
                  text-gray-200
                  backdrop-blur-xl
                  transition
                  hover:border-cyan-400/30
                  hover:bg-white/[0.08]
                "
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* Socials */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="
                mt-10 flex
                items-center gap-4
              "
            >
              <span className="mr-2 text-xs tracking-widest text-gray-600 uppercase">
                Connect
              </span>

              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variants={socialVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.035]
                    text-gray-400
                    backdrop-blur-xl
                    transition-colors
                    hover:border-cyan-400/30
                    hover:text-cyan-300
                  "
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ==================================================
            RIGHT SIDE
        ================================================== */}

        <div className="relative hidden h-[720px] lg:block">

          {/* Orbit */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute left-1/2 top-1/2
              h-[510px] w-[510px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border border-cyan-300/[0.08]
            "
          >
            <span
              className="
                absolute -right-1 top-1/2
                h-2 w-2
                rounded-full
                bg-cyan-300
                shadow-[0_0_20px_#67e8f9]
              "
            />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute left-1/2 top-1/2
              h-[410px] w-[410px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border border-emerald-300/[0.08]
            "
          >
            <span
              className="
                absolute -left-1 top-1/2
                h-1.5 w-1.5
                rounded-full
                bg-emerald-300
                shadow-[0_0_18px_#6ee7b7]
              "
            />
          </motion.div>

          {/* Glow behind image */}

          <div
            className="
              absolute left-1/2 top-1/2
              h-[400px] w-[400px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-gradient-to-br
              from-cyan-400/20
              via-emerald-400/10
              to-purple-500/10
              blur-[90px]
            "
          />

          {/* Glass card */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="
              absolute left-1/2 top-1/2
              h-[500px] w-[390px]
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-[3rem]
              border border-white/10
              bg-white/[0.025]
              shadow-2xl
              backdrop-blur-sm
            "
          >
            {/* Image */}

            <motion.img
              src={profileImage}
              alt="Kartikeya Tripathi"
              initial={{
                opacity: 0,
                y: 35,
                scale: 1.05,
              }}
              animate={{
                opacity: 1,
                y: [0, -12, 0],
                scale: 1,
              }}
              transition={{
                opacity: {
                  delay: 0.5,
                  duration: 0.8,
                },
                y: {
                  delay: 1,
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute bottom-0 left-1/2
                h-[108%] w-auto
                max-w-none
                -translate-x-1/2
                object-contain
              "
            />

            {/* Image gradient */}

            <div
              className="
                pointer-events-none
                absolute inset-x-0 bottom-0
                h-48
                bg-gradient-to-t
                from-[#030708]
                via-[#030708]/50
                to-transparent
              "
            />

            {/* Card label */}

            <div
              className="
                absolute bottom-6 left-6 right-6
                flex items-end justify-between
              "
            >
              <div>
                <p className="text-xs tracking-[0.25em] text-cyan-300 uppercase">
                  Developer
                </p>

                <p className="mt-1 text-lg font-bold">
                  Kartikeya Tripathi
                </p>
              </div>

              <div
                className="
                  rounded-full
                  border border-emerald-300/20
                  bg-emerald-300/10
                  px-3 py-1
                  text-[10px]
                  tracking-wider
                  text-emerald-300
                "
              >
                MERN
              </div>
            </div>
          </motion.div>

          {/* Floating tech cards */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute left-0 top-[22%]
              rounded-2xl
              border border-white/10
              bg-[#071012]/80
              px-4 py-3
              shadow-xl
              backdrop-blur-xl
            "
          >
            <p className="text-[10px] tracking-widest text-gray-500 uppercase">
              Focus
            </p>

            <p className="mt-1 text-sm font-semibold text-cyan-300">
              React.js
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute bottom-[22%] right-0
              rounded-2xl
              border border-white/10
              bg-[#071012]/80
              px-4 py-3
              shadow-xl
              backdrop-blur-xl
            "
          >
            <p className="text-[10px] tracking-widest text-gray-500 uppercase">
              Stack
            </p>

            <p className="mt-1 text-sm font-semibold text-emerald-300">
              JavaScript
            </p>
          </motion.div>

          {/* Corner code decoration */}

          <div
            className="
              absolute right-5 top-10
              font-mono text-xs
              leading-6
              text-white/[0.12]
            "
          >
            {"{ "}
            <br />
            &nbsp;&nbsp;design: true,
            <br />
            &nbsp;&nbsp;code: clean,
            <br />
            &nbsp;&nbsp;ideas: endless
            <br />
            {" }"}
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          absolute bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          items-center gap-3
          text-[10px]
          tracking-[0.3em]
          text-gray-600
          uppercase
          md:flex
        "
      >
        <span className="h-px w-10 bg-gray-700" />

        Scroll to explore

        <span className="h-px w-10 bg-gray-700" />
      </motion.div>
    </section>
  );
}
