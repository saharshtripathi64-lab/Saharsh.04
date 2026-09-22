import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const coreRef = useRef(null);
  const trailRef = useRef(null);
  const auraRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const smooth = useRef({
    x: 0,
    y: 0,
  });

  const trail = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    document.body.classList.add("custom-cursor");

    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMove, {
      passive: true,
    });

    // ------------------------------------------------------
    // INTERACTION
    // ------------------------------------------------------

    const handleEnter = (e) => {
      const target = e.target.closest(
        "a, button, [data-cursor]"
      );

      if (!target) return;

      document.body.dataset.cursor =
        target.dataset.cursor || "hover";
    };

    const handleLeave = (e) => {
      if (
        e.relatedTarget?.closest?.(
          "a, button, [data-cursor]"
        )
      ) {
        return;
      }

      delete document.body.dataset.cursor;
    };

    document.addEventListener(
      "mouseover",
      handleEnter
    );

    document.addEventListener(
      "mouseout",
      handleLeave
    );

    // ------------------------------------------------------
    // CLICK
    // ------------------------------------------------------

    const click = () => {
      document.body.classList.add("cursor-down");

      setTimeout(() => {
        document.body.classList.remove(
          "cursor-down"
        );
      }, 220);
    };

    window.addEventListener("mousedown", click);

    // ------------------------------------------------------
    // ANIMATION
    // ------------------------------------------------------

    let raf;

    const animate = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Main cursor
      smooth.current.x +=
        (mx - smooth.current.x) * 0.28;

      smooth.current.y +=
        (my - smooth.current.y) * 0.28;

      // Longer trailing movement
      trail.current.x +=
        (mx - trail.current.x) * 0.085;

      trail.current.y +=
        (my - trail.current.y) * 0.085;

      if (coreRef.current) {
        coreRef.current.style.transform =
          `translate3d(
            ${smooth.current.x}px,
            ${smooth.current.y}px,
            0
          ) translate(-50%, -50%)`;
      }

      if (trailRef.current) {
        trailRef.current.style.transform =
          `translate3d(
            ${trail.current.x}px,
            ${trail.current.y}px,
            0
          ) translate(-50%, -50%)`;
      }

      if (auraRef.current) {
        auraRef.current.style.transform =
          `translate3d(
            ${trail.current.x}px,
            ${trail.current.y}px,
            0
          ) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener(
        "mousemove",
        handleMove
      );

      document.removeEventListener(
        "mouseover",
        handleEnter
      );

      document.removeEventListener(
        "mouseout",
        handleLeave
      );

      window.removeEventListener(
        "mousedown",
        click
      );

      document.body.classList.remove(
        "custom-cursor"
      );

      delete document.body.dataset.cursor;
    };
  }, []);

  return (
    <>
      {/* ==================================================
          TRAIL
      ================================================== */}

      <div
        ref={trailRef}
        className="
          fixed
          left-0
          top-0
          z-[9997]

          pointer-events-none

          h-7
          w-7

          rounded-full

          border
          border-white/[0.08]

          opacity-60

          transition-[width,height,opacity]
          duration-500
        "
      />

      {/* ==================================================
          SOFT AURA
      ================================================== */}

      <div
        ref={auraRef}
        className="
          fixed
          left-0
          top-0
          z-[9996]

          pointer-events-none

          h-24
          w-24

          rounded-full

          bg-white/[0.025]

          blur-2xl

          opacity-70
        "
      />

      {/* ==================================================
          MAIN CORE
      ================================================== */}

      <div
        ref={coreRef}
        className="
          fixed
          left-0
          top-0
          z-[9999]

          pointer-events-none

          flex
          h-3
          w-3

          items-center
          justify-center

          rounded-full

          bg-white

          shadow-[0_0_20px_rgba(255,255,255,.45)]

          transition-[width,height,background,box-shadow]
          duration-300
        "
      >
        <span
          className="
            h-1
            w-1

            rounded-full

            bg-black

            transition-all
            duration-300
          "
        />
      </div>

      <style>{`
        @media (pointer: fine) {

          /* ----------------------------------------------
             HIDE SYSTEM CURSOR
          ---------------------------------------------- */

          body.custom-cursor,
          body.custom-cursor *,
          body.custom-cursor a,
          body.custom-cursor button {
            cursor: none !important;
          }

          /* ----------------------------------------------
             NORMAL
          ---------------------------------------------- */

          /* ----------------------------------------------
             HOVER
          ---------------------------------------------- */

          body[data-cursor="hover"]
            [class*="fixed"][class*="h-3"] {
            width: 24px;
            height: 24px;

            background: white;

            box-shadow:
              0 0 30px
              rgba(255,255,255,.25);
          }

          body[data-cursor="hover"]
            [class*="fixed"][class*="h-3"] span {
            width: 5px;
            height: 5px;
          }

          /* ----------------------------------------------
             VIEW
          ---------------------------------------------- */

          body[data-cursor="view"]
            [class*="fixed"][class*="h-3"] {
            width: 72px;
            height: 72px;

            background:
              rgba(255,255,255,.92);

            box-shadow:
              0 0 45px
              rgba(255,255,255,.2);
          }

          body[data-cursor="view"]
            [class*="fixed"][class*="h-3"] span {
            width: 34px;
            height: 34px;

            background: transparent;

            border:
              1px solid
              rgba(0,0,0,.18);
          }

          body[data-cursor="view"]
            [class*="fixed"][class*="h-7"] {
            width: 45px;
            height: 45px;

            opacity: .35;
          }

          /* ----------------------------------------------
             IMAGE
          ---------------------------------------------- */

          body[data-cursor="image"]
            [class*="fixed"][class*="h-3"] {
            width: 80px;
            height: 80px;

            background:
              rgba(255,255,255,.94);
          }

          body[data-cursor="image"]
            [class*="fixed"][class*="h-3"]::after {
            content: "VIEW";

            position: absolute;

            font-size: 7px;
            letter-spacing: .18em;
            font-weight: 600;

            color: black;
          }

          /* ----------------------------------------------
             CLICK
          ---------------------------------------------- */

          body.cursor-down
            [class*="fixed"][class*="h-3"] {
            width: 6px;
            height: 6px;

            box-shadow:
              0 0 35px
              rgba(255,255,255,.8);
          }

          body.cursor-down
            [class*="fixed"][class*="h-7"] {
            width: 50px;
            height: 50px;

            border-color:
              rgba(255,255,255,.3);
          }

          /* ----------------------------------------------
             HOVER TRAIL
          ---------------------------------------------- */

          body[data-cursor="hover"]
            [class*="fixed"][class*="h-7"] {
            width: 38px;
            height: 38px;

            border-color:
              rgba(255,255,255,.18);
          }
        }
      `}</style>
    </>
  );
}
