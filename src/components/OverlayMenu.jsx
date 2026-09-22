import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const items = [
  ["01", "Home", "home"],
  ["02", "About", "about"],
  ["03", "Skills", "skills"],
  ["04", "Projects", "projects"],
  ["05", "Experience", "experience"],
  ["06", "Testimonials", "testimonials"],
  ["07", "Contact", "contact"],
];

export default function OverlayMenu({ isOpen, onClose }) {
  const [active, setActive] = useState(3);

  useEffect(() => {
    if (!isOpen) return;

    const escape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", escape);

    return () => window.removeEventListener("keydown", escape);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const selected = items[active];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed inset-0 z-[9999]
            bg-[#090909]
            text-white
            overflow-hidden
          "
          initial={{
            clipPath: "inset(0 0 100% 0)",
          }}
          animate={{
            clipPath: "inset(0 0 0% 0)",
          }}
          exit={{
            clipPath: "inset(100% 0 0 0)",
          }}
          transition={{
            duration: 0.42,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* =================================================
              BACKGROUND LIGHT
          ================================================= */}

          <motion.div
            className="
              pointer-events-none
              absolute
              -right-32
              top-1/2
              h-[500px]
              w-[500px]
              -translate-y-1/2
              rounded-full
              bg-cyan-400/[0.045]
              blur-[110px]
            "
            animate={{
              x: active * 8,
              opacity: 0.4 + active * 0.04,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="
              pointer-events-none
              absolute
              -left-40
              bottom-[-150px]
              h-[450px]
              w-[450px]
              rounded-full
              bg-violet-500/[0.045]
              blur-[120px]
            "
            animate={{
              x: -active * 5,
            }}
            transition={{
              duration: 0.35,
            }}
          />

          {/* =================================================
              TOP
          ================================================= */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              z-20
              flex
              items-center
              justify-between
              px-6
              py-6
              sm:px-10
              sm:py-8
              lg:px-14
            "
          >
            {/* logo */}

            <div className="flex items-center gap-3">
              <div
                className="
                  relative
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    absolute
                    h-6
                    w-6
                    rotate-45
                    rounded-[7px]
                    border
                    border-white/20
                  "
                />

                <span
                  className="
                    relative
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-white
                    shadow-[0_0_14px_white]
                  "
                />
              </div>

              <span className="text-sm font-medium text-white/80">
                Kartikeya
              </span>
            </div>

            {/* center label */}

            <div
              className="
                hidden
                sm:block
                absolute
                left-1/2
                -translate-x-1/2
                font-mono
                text-[8px]
                uppercase
                tracking-[.35em]
                text-white/20
              "
            >
              Menu
            </div>

            {/* close */}

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="
                group
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  hidden
                  sm:block
                  text-[9px]
                  uppercase
                  tracking-[.2em]
                  text-white/25
                  transition-colors
                  group-hover:text-white/70
                "
              >
                Close
              </span>

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.025]
                  transition-all
                  duration-300
                  group-hover:rotate-90
                  group-hover:border-white/30
                  group-hover:bg-white/[0.08]
                "
              >
                <FiX />
              </span>
            </button>
          </div>

          {/* =================================================
              MAIN
          ================================================= */}

          <main
            className="
              relative
              flex
              h-full
              w-full
              items-center
              px-6
              pt-24
              pb-20
              sm:px-10
              lg:px-14
            "
          >
            <div
              className="
                mx-auto
                grid
                w-full
                max-w-[1450px]
                grid-cols-1
                lg:grid-cols-[1fr_260px]
                gap-10
              "
            >
              {/* =================================================
                  MENU
              ================================================= */}

              <nav className="relative">
                {/* giant active text */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-8
                    top-1/2
                    -translate-y-1/2
                    overflow-hidden
                  "
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selected[1]}
                      initial={{
                        y: "70%",
                        opacity: 0,
                      }}
                      animate={{
                        y: "0%",
                        opacity: 1,
                      }}
                      exit={{
                        y: "-70%",
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        whitespace-nowrap
                        text-[18vw]
                        lg:text-[12vw]
                        font-bold
                        leading-none
                        tracking-[-.08em]
                        text-white/[0.025]
                      "
                    >
                      {selected[1]}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* items */}

                <div className="relative z-10">
                  {items.map(([number, label, id], index) => (
                    <motion.a
                      key={id}
                      href={`#${id}`}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={onClose}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.08 + index * 0.025,
                        duration: 0.32,
                        ease: "easeOut",
                      }}
                      className="
                        group
                        flex
                        items-center
                        py-2
                        sm:py-2.5
                        lg:py-3
                      "
                    >
                      {/* number */}

                      <span
                        className={`
                          w-10
                          sm:w-14
                          font-mono
                          text-[8px]
                          tracking-[.12em]
                          transition-colors
                          duration-200
                          ${
                            active === index
                              ? "text-cyan-300/80"
                              : "text-white/20"
                          }
                        `}
                      >
                        {number}
                      </span>

                      {/* line */}

                      <span
                        className={`
                          mr-4
                          h-px
                          transition-all
                          duration-300
                          ${
                            active === index
                              ? "w-10 bg-cyan-300/70"
                              : "w-4 bg-white/10"
                          }
                        `}
                      />

                      {/* text */}

                      <span
                        className={`
                          text-[11vw]
                          sm:text-[8vw]
                          lg:text-[5.2vw]
                          font-medium
                          leading-[.88]
                          tracking-[-.055em]
                          transition-all
                          duration-300
                          ${
                            active === index
                              ? "translate-x-2 text-white"
                              : "text-white/25"
                          }
                          group-hover:text-white
                        `}
                      >
                        {label}
                      </span>

                      {/* arrow */}

                      <FiArrowUpRight
                        className={`
                          ml-3
                          text-2xl
                          transition-all
                          duration-300
                          ${
                            active === index
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-3 opacity-0"
                          }
                        `}
                      />
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* =================================================
                  SIDE PANEL
              ================================================= */}

              <aside
                className="
                  hidden
                  lg:flex
                  flex-col
                  justify-end
                  pb-3
                "
              >
                <div className="mb-5 h-px w-full bg-white/10" />

                <div className="mb-3 font-mono text-[8px] tracking-[.2em] uppercase text-white/20">
                  Currently viewing
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected[1]}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <div className="text-2xl font-medium tracking-tight">
                      {selected[1]}
                    </div>

                    <div className="mt-2 text-xs leading-relaxed text-white/30">
                      Explore this section of the portfolio.
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex justify-between font-mono text-[8px] tracking-[.15em] text-white/15">
                  <span>IND / 2026</span>
                  <span>
                    {String(active + 1).padStart(2, "0")} / 07
                  </span>
                </div>
              </aside>
            </div>
          </main>

          {/* =================================================
              BOTTOM STATUS
          ================================================= */}

          <div
            className="
              absolute
              bottom-5
              left-6
              right-6
              flex
              items-center
              justify-between
              sm:left-10
              sm:right-10
              lg:left-14
              lg:right-14
            "
          >
            <span
              className="
                font-mono
                text-[7px]
                uppercase
                tracking-[.25em]
                text-white/15
              "
            >
              Select a destination
            </span>

            <span
              className="
                font-mono
                text-[7px]
                uppercase
                tracking-[.25em]
                text-white/15
              "
            >
              ESC
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
