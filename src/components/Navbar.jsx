import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isLight, setIsLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lastScroll = useRef(0);
  const ticking = useRef(false);
  const homeVisible = useRef(true);

  // ---------------------------------------------------------
  // Detect section theme
  // Add data-theme="light" to light sections.
  // ---------------------------------------------------------

  useEffect(() => {
    const sections = document.querySelectorAll(
      "[data-theme]"
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (!visibleSections.length) return;

        const theme =
          visibleSections[0].target.dataset.theme;

        setIsLight(theme === "light");
      },
      {
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  // ---------------------------------------------------------
  // Home section
  // ---------------------------------------------------------

  useEffect(() => {
    const home = document.querySelector("#home");

    if (!home) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        homeVisible.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(home);

    return () => observer.disconnect();
  }, []);

  // ---------------------------------------------------------
  // Scroll behavior
  // ---------------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const current = window.scrollY;
        const delta = current - lastScroll.current;

        setScrolled(current > 40);

        if (!homeVisible.current) {
          if (delta > 8) {
            setVisible(false);
          }

          if (delta < -8) {
            setVisible(true);
          }
        }

        lastScroll.current = current;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------------------------------------------------------
  // Escape
  // ---------------------------------------------------------

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, []);

  // ---------------------------------------------------------
  // Body lock
  // ---------------------------------------------------------

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // ---------------------------------------------------------
  // Dynamic classes
  // ---------------------------------------------------------

  const text = isLight
    ? "text-black"
    : "text-white";

  const muted = isLight
    ? "text-black/45"
    : "text-white/45";

  const border = isLight
    ? "border-black/[0.08]"
    : "border-white/[0.10]";

  const glass = isLight
    ? "bg-white/65"
    : "bg-[#09090b]/60";

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-0

          z-[100]

          flex
          justify-center

          px-4
          sm:px-6
          lg:px-10

          pt-4
          sm:pt-6

          pointer-events-none

          transition-transform
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]

          ${
            visible
              ? "translate-y-0"
              : "-translate-y-[130%]"
          }
        `}
      >
        <nav
          className={`
            pointer-events-auto

            relative

            w-full
            max-w-6xl

            transition-all
            duration-700

            ${
              scrolled
                ? "scale-[0.98]"
                : "scale-100"
            }
          `}
        >
          {/* =================================================
              SOFT SHADOW
          ================================================= */}

          <div
            className={`
              pointer-events-none

              absolute

              inset-x-8
              bottom-[-12px]

              h-8

              rounded-full

              blur-2xl

              transition-all
              duration-700

              ${
                isLight
                  ? "bg-black/10"
                  : "bg-black/40"
              }
            `}
          />

          {/* =================================================
              GLASS SHELL
          ================================================= */}

          <div
            className={`
              relative

              flex
              items-center
              justify-between

              h-[60px]

              px-3
              sm:px-4
              md:px-5

              rounded-[20px]

              border

              backdrop-blur-2xl

              overflow-hidden

              transition-all
              duration-700

              ${border}
              ${glass}

              ${
                scrolled
                  ? "shadow-[0_12px_50px_rgba(0,0,0,.12)]"
                  : "shadow-[0_5px_30px_rgba(0,0,0,.05)]"
              }
            `}
          >
            {/* =================================================
                LIQUID REFLECTION
            ================================================= */}

            <div
              className={`
                pointer-events-none

                absolute

                left-1/2
                top-[-120px]

                h-[180px]
                w-[60%]

                -translate-x-1/2

                rounded-full

                blur-3xl

                transition-all
                duration-1000

                ${
                  isLight
                    ? "bg-white/80"
                    : "bg-white/[0.05]"
                }
              `}
            />

            {/* Top reflection */}

            <div
              className={`
                pointer-events-none

                absolute
                inset-x-8
                top-0

                h-px

                transition-colors
                duration-700

                ${
                  isLight
                    ? "bg-white"
                    : "bg-white/20"
                }
              `}
            />

            {/* =================================================
                LOGO
            ================================================= */}

            <a
              href="#home"
              className="group relative flex items-center"
            >
              {/* Logo mark */}

              <span
                className="
                  relative

                  mr-3

                  flex
                  h-8
                  w-8

                  items-center
                  justify-center
                "
              >
                {/* rotating glass square */}

                <span
                  className={`
                    absolute

                    h-6
                    w-6

                    rounded-[8px]

                    rotate-45

                    border

                    transition-all
                    duration-700

                    ${
                      isLight
                        ? "border-black/15 bg-black/[0.025]"
                        : "border-white/15 bg-white/[0.035]"
                    }

                    group-hover:
                    rotate-[135deg]

                    group-hover:
                    scale-110
                  `}
                />

                {/* core */}

                <span
                  className={`
                    relative

                    h-2
                    w-2

                    rounded-full

                    transition-all
                    duration-500

                    ${
                      isLight
                        ? "bg-black shadow-[0_0_12px_rgba(0,0,0,.25)]"
                        : "bg-white shadow-[0_0_12px_rgba(255,255,255,.6)]"
                    }

                    group-hover:
                    scale-125
                  `}
                />
              </span>

              <span
                className={`
                  text-[15px]
                  sm:text-[16px]

                  font-semibold

                  tracking-[-.025em]

                  transition-colors
                  duration-700

                  ${text}
                `}
              >
                Kartikeya
              </span>
            </a>

            {/* =================================================
                CENTER MENU
            ================================================= */}

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className={`
                group

                absolute

                left-1/2
                top-1/2

                -translate-x-1/2
                -translate-y-1/2

                flex
                items-center
                justify-center

                h-11
                w-11

                rounded-full

                border

                backdrop-blur-md

                transition-all
                duration-500

                hover:scale-110

                active:scale-95

                ${
                  isLight
                    ? "border-black/10 bg-black/[0.035]"
                    : "border-white/10 bg-white/[0.045]"
                }
              `}
            >
              {/* liquid inner */}

              <span
                className={`
                  absolute

                  inset-1

                  rounded-full

                  transition-all
                  duration-500

                  ${
                    isLight
                      ? "bg-gradient-to-br from-white via-black/[0.02] to-black/[0.06]"
                      : "bg-gradient-to-br from-white/[0.12] via-white/[0.02] to-black/20"
                  }

                  group-hover:
                  scale-90
                `}
              />

              {/* menu lines */}

              <span className="relative z-10 flex flex-col gap-[4px]">
                <span
                  className={`
                    h-[1px]
                    w-4

                    transition-colors
                    duration-700

                    ${
                      isLight
                        ? "bg-black"
                        : "bg-white"
                    }
                  `}
                />

                <span
                  className={`
                    ml-1
                    h-[1px]
                    w-3

                    transition-colors
                    duration-700

                    ${
                      isLight
                        ? "bg-black/45"
                        : "bg-white/45"
                    }
                  `}
                />

                <span
                  className={`
                    ml-2
                    h-[1px]
                    w-2

                    transition-colors
                    duration-700

                    ${
                      isLight
                        ? "bg-black/70"
                        : "bg-white/70"
                    }
                  `}
                />
              </span>
            </button>

            {/* =================================================
                RIGHT
            ================================================= */}

            <div className="flex items-center gap-2">
              {/* availability */}

              <div
                className={`
                  hidden
                  sm:flex

                  items-center
                  gap-2

                  mr-2

                  text-[9px]

                  font-medium

                  tracking-[.16em]

                  uppercase

                  transition-colors
                  duration-700

                  ${muted}
                `}
              >
                <span
                  className="
                    h-1.5
                    w-1.5

                    rounded-full

                    bg-emerald-500

                    shadow-[0_0_8px_rgba(34,197,94,.7)]

                    animate-pulse
                  "
                />

                Available
              </div>

              {/* contact */}

              <a
                href="#contact"
                className={`
                  group

                  relative

                  flex
                  items-center
                  gap-2

                  overflow-hidden

                  rounded-full

                  border

                  px-4
                  py-2

                  text-[11px]
                  sm:text-[12px]

                  font-medium

                  transition-all
                  duration-500

                  ${border}
                  ${text}

                  hover:scale-[1.03]
                `}
              >
                {/* hover liquid */}

                <span
                  className={`
                    absolute

                    inset-0

                    translate-y-full

                    transition-transform
                    duration-500

                    group-hover:
                    translate-y-0

                    ${
                      isLight
                        ? "bg-black/[0.04]"
                        : "bg-white/[0.07]"
                    }
                  `}
                />

                <span className="relative z-10">
                  Reach out
                </span>

                <span
                  className={`
                    relative
                    z-10

                    transition-transform
                    duration-500

                    group-hover:
                    translate-x-0.5
                    group-hover:
                    -translate-y-0.5

                    ${muted}
                  `}
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
