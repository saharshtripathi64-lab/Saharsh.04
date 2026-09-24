"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

/* =========================================================
   MOBILE HOOK
========================================================= */

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    const update = () => {
      setIsMobile(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, [query]);

  return isMobile;
};

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index, isMobile }) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
    {
      stiffness: 250,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 250,
      damping: 20,
    }
  );

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        !isMobile
          ? {
              rotateX,
              rotateY,
              transformPerspective: 1200,
            }
          : {}
      }
      initial={{
        opacity: 0,
        y: 70,
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
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Glow */}
      <div
        className="absolute -inset-[1px] rounded-[28px] opacity-0 blur-xl transition duration-700 group-hover:opacity-40"
        style={{
          background: project.gradient,
        }}
      />

      {/* Card */}
      <div
        className="relative min-h-[520px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b0d]"
        style={{
          background: `
            radial-gradient(
              circle at 80% 20%,
              ${project.accent}20,
              transparent 35%
            ),
            #0b0b0d
          `,
        }}
      >
        {/* Top line */}
        <div
          className="absolute left-0 right-0 top-0 h-[2px] opacity-70"
          style={{
            background: project.gradient,
          }}
        />

        {/* Background number */}
        <div className="pointer-events-none absolute -right-5 -top-10 select-none text-[180px] font-black leading-none text-white/[0.025]">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Project visual */}
        <div className="relative h-[280px] overflow-hidden">
          <motion.div
            className="absolute inset-5 overflow-hidden rounded-2xl border border-white/10"
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              duration: 0.5,
            }}
            style={{
              background: project.background,
            }}
          >
            {/* Fake browser window */}
            <div className="absolute left-0 right-0 top-0 flex h-10 items-center gap-2 border-b border-white/10 bg-black/20 px-4 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
              <span className="h-2 w-2 rounded-full bg-green-400/70" />

              <div className="ml-4 h-5 flex-1 rounded-md bg-white/5" />
            </div>

            {/* Visual content */}
            <div className="flex h-full items-center justify-center pt-8">
              <motion.div
                animate={
                  isMobile
                    ? {}
                    : {
                        y: [0, -10, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-center"
              >
                <div
                  className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 shadow-2xl"
                  style={{
                    background: `${project.accent}18`,
                    boxShadow: `0 0 70px ${project.accent}25`,
                  }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{
                      color: project.accent,
                    }}
                  >
                    {project.short}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {project.category}
                </p>
              </motion.div>
            </div>

            {/* Shine */}
            <motion.div
              className="absolute inset-y-0 -left-[100%] w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
              whileHover={{
                left: "160%",
              }}
              transition={{
                duration: 0.8,
              }}
            />
          </motion.div>

          {/* Index */}
          <div className="absolute bottom-8 left-8 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-medium tracking-[0.2em] text-white/60 backdrop-blur-md">
            PROJECT {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="relative px-7 pb-7">
          <div className="mb-5 flex items-start justify-between gap-5">
            <div>
              <p
                className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{
                  color: project.accent,
                }}
              >
                {project.year}
              </p>

              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {project.title}
              </h3>
            </div>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white hover:text-black"
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight size={18} />
            </motion.a>
          </div>

          <p className="mb-6 max-w-lg text-sm leading-6 text-white/45">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom hover line */}
        <div
          className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          style={{
            background: project.gradient,
          }}
        />
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN PROJECT SECTION
========================================================= */

export default function Project() {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  /* =======================================================
     EDIT YOUR PROJECTS HERE
  ======================================================= */

  const projects = useMemo(
    () => [
      {
        title: "NK Studio",
        short: "NK",
        category: "Creative Studio",
        year: "2026",

        description:
          "A modern digital experience designed with bold visuals, smooth interactions and a strong creative identity.",

        link: "https://www.nk.stu",

        tags: [
          "Next.js",
          "Framer Motion",
          "UI/UX",
          "Creative",
        ],

        accent: "#a855f7",

        gradient:
          "linear-gradient(90deg, #7c3aed, #c026d3, #ec4899)",

        background:
          "radial-gradient(circle at 50% 45%, #7c3aed30, transparent 45%), linear-gradient(135deg, #120b1f, #09090b)",
      },

      {
        title: "Your Project",
        short: "02",
        category: "Web Experience",
        year: "2026",

        description:
          "Replace this content with your second project description and showcase the work you want visitors to remember.",

        link: "https://example.com",

        tags: [
          "React",
          "JavaScript",
          "Design",
          "Development",
        ],

        accent: "#22d3ee",

        gradient:
          "linear-gradient(90deg, #06b6d4, #3b82f6, #6366f1)",

        background:
          "radial-gradient(circle at 50% 45%, #06b6d430, transparent 45%), linear-gradient(135deg, #071820, #09090b)",
      },

      {
        title: "Another Project",
        short: "03",
        category: "Digital Product",
        year: "2026",

        description:
          "A third project can live here. Add your case study, product, experiment or personal project.",

        link: "https://example.com",

        tags: [
          "TypeScript",
          "Motion",
          "Frontend",
          "Creative",
        ],

        accent: "#fb7185",

        gradient:
          "linear-gradient(90deg, #f43f5e, #ec4899, #a855f7)",

        background:
          "radial-gradient(circle at 50% 45%, #f43f5e30, transparent 45%), linear-gradient(135deg, #1b080e, #09090b)",
      },
    ],
    []
  );

  return (
    <section
      id="project"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/[0.04] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ===================================================
          HEADER
      =================================================== */}

      <div className="relative mx-auto mb-16 max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
                Selected Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Things I've
              <br />

              <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">
                built.
              </span>
            </h2>
          </div>

          {/* Right text */}
          <div className="max-w-sm">
            <p className="text-sm leading-6 text-white/40">
              A collection of experiments, digital products and
              experiences built with obsessive attention to detail.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs text-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />

              Available for selected projects
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===================================================
          PROJECT GRID
      =================================================== */}

      <div className="relative mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        className="relative mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
      >
        <p className="text-xs text-white/30">
          More work coming soon.
        </p>

        <a
          href="#contact"
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
        >
          Start a project

          <ExternalLink
            size={13}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </motion.div>
    </section>
  );
}
