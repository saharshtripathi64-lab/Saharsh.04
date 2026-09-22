import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });

    let animationId;
    let particles = [];

    const mouse = {
      x: null,
      y: null,
      radius: 160,
    };

    const settings = {
      particleDensity: 0.000065,
      minParticles: 45,
      maxParticles: 130,

      minRadius: 0.6,
      maxRadius: 2.2,

      minSpeed: 0.08,
      maxSpeed: 0.32,

      connectionDistance: 135,
      mouseConnectionDistance: 190,
      mouseRepulsionDistance: 110,

      particleColor: "255,255,255",
      lineColor: "255,255,255",
    };

    let width = 0;
    let height = 0;
    let dpr = 1;

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.radius =
          settings.minRadius +
          Math.random() * (settings.maxRadius - settings.minRadius);

        const angle = Math.random() * Math.PI * 2;
        const speed =
          settings.minSpeed +
          Math.random() * (settings.maxSpeed - settings.minSpeed);

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.alpha = 0.25 + Math.random() * 0.65;

        // Subtle individual pulse
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.008 + Math.random() * 0.018;

        if (!initial) {
          // Spawn from a random edge when needed
          const edge = Math.floor(Math.random() * 4);

          if (edge === 0) {
            this.x = -10;
            this.y = Math.random() * height;
          } else if (edge === 1) {
            this.x = width + 10;
            this.y = Math.random() * height;
          } else if (edge === 2) {
            this.x = Math.random() * width;
            this.y = -10;
          } else {
            this.x = Math.random() * width;
            this.y = height + 10;
          }
        }
      }

      update() {
        this.pulse += this.pulseSpeed;

        this.x += this.vx;
        this.y += this.vy;

        // Very subtle mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (
            distance < settings.mouseRepulsionDistance &&
            distance > 0
          ) {
            const force =
              (settings.mouseRepulsionDistance - distance) /
              settings.mouseRepulsionDistance;

            this.x += (dx / distance) * force * 0.45;
            this.y += (dy / distance) * force * 0.45;
          }
        }

        // Wrap around screen
        const padding = 20;

        if (this.x < -padding) this.x = width + padding;
        if (this.x > width + padding) this.x = -padding;

        if (this.y < -padding) this.y = height + padding;
        if (this.y > height + padding) this.y = -padding;
      }

      draw() {
        const glow =
          0.55 +
          Math.sin(this.pulse) * 0.2;

        const alpha = Math.max(
          0.1,
          Math.min(1, this.alpha * glow)
        );

        // Outer glow
        ctx.beginPath();
        ctx.arc(
          this.x,
          this.y,
          this.radius * 3.8,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${settings.particleColor}, ${
          alpha * 0.08
        })`;

        ctx.fill();

        // Main particle
        ctx.beginPath();
        ctx.arc(
          this.x,
          this.y,
          this.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${settings.particleColor}, ${alpha})`;

        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${settings.particleColor}, ${
          alpha * 0.8
        })`;

        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    function getParticleCount() {
      const area = width * height;

      const calculated = Math.round(
        area * settings.particleDensity
      );

      return Math.min(
        settings.maxParticles,
        Math.max(settings.minParticles, calculated)
      );
    }

    function createParticles() {
      particles = [];

      const count = getParticleCount();

      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();

      width = window.innerWidth;
      height = window.innerHeight;

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    }

    function drawConnections() {
      const particleCount = particles.length;

      for (let i = 0; i < particleCount; i++) {
        const p1 = particles[i];

        // Particle → Particle
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distanceSquared = dx * dx + dy * dy;

          const maxDistance = settings.connectionDistance;

          if (
            distanceSquared <
            maxDistance * maxDistance
          ) {
            const distance = Math.sqrt(distanceSquared);

            const opacity =
              (1 - distance / maxDistance) * 0.22;

            ctx.beginPath();

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(${settings.lineColor}, ${opacity})`;

            ctx.lineWidth = 0.55;

            ctx.stroke();
          }
        }

        // Particle → Mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (
            distance < settings.mouseConnectionDistance
          ) {
            const opacity =
              (1 - distance / settings.mouseConnectionDistance) *
              0.4;

            ctx.beginPath();

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);

            ctx.strokeStyle = `rgba(${settings.lineColor}, ${opacity})`;

            ctx.lineWidth = 0.7;

            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Update
      for (const particle of particles) {
        particle.update();
      }

      // Draw network
      drawConnections();

      // Draw particles
      for (const particle of particles) {
        particle.draw();
      }

      animationId = requestAnimationFrame(animate);
    }

    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function handleTouchMove(event) {
      if (!event.touches.length) return;

      mouse.x = event.touches[0].clientX;
      mouse.y = event.touches[0].clientY;
    }

    function handleTouchEnd() {
      mouse.x = null;
      mouse.y = null;
    }

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: true }
    );

    window.addEventListener(
      "touchend",
      handleTouchEnd,
      { passive: true }
    );

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        fixed
        inset-0
        w-full
        h-full
        pointer-events-none
        z-0
      "
    />
  );
}
