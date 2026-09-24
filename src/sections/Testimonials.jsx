import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      number: "01",
      quote:
        "Working with NK was an amazing experience. The attention to detail, creativity, and ability to turn ideas into a polished digital experience was impressive.",
      name: "Your Client Name",
      role: "Founder / Client",
      company: "Company Name",
    },
    {
      number: "02",
      quote:
        "The website completely changed how our brand feels online. Everything from the design to the interactions feels intentional and premium.",
      name: "Client Name",
      role: "Creative Director",
      company: "Studio Name",
    },
    {
      number: "03",
      quote:
        "Professional, creative, and incredibly easy to work with. The final result was better than what we originally imagined.",
      name: "Client Name",
      role: "Founder",
      company: "Company Name",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[#050505] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/[0.06] blur-[160px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-400" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Testimonials
              </span>
            </div>

            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Kind words from
              <br />

              <span className="bg-gradient-to-r from-white via-white/60 to-white/20 bg-clip-text text-transparent">
                great people.
              </span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-7 text-white/30">
            A few words from people I've had the pleasure
            of working with.
          </p>

        </div>


        {/* =========================================
            TESTIMONIALS
        ========================================== */}

        <div className="border-t border-white/10">

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.number}
              className="group relative grid gap-8 border-b border-white/10 py-10 transition-colors duration-500 hover:bg-white/[0.015] md:grid-cols-[100px_1fr_220px] md:gap-12 md:py-14"
            >

              {/* Number */}

              <div className="text-xs tracking-[0.2em] text-white/20">
                {testimonial.number}
              </div>


              {/* Quote */}

              <div>

                <div className="mb-6 text-4xl leading-none text-purple-400/70">
                  “
                </div>

                <p className="max-w-3xl text-xl font-light leading-relaxed tracking-[-0.02em] text-white/75 transition-colors duration-500 group-hover:text-white sm:text-2xl lg:text-3xl">
                  {testimonial.quote}
                </p>

              </div>


              {/* Client */}

              <div className="flex flex-col justify-end md:items-end md:text-right">

                {/* Avatar */}

                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-xs font-medium text-white/60 md:ml-auto">
                  {testimonial.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <p className="text-sm font-medium text-white/70">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-white/25">
                  {testimonial.role}
                </p>

                <p className="mt-1 text-xs text-purple-400/60">
                  {testimonial.company}
                </p>

              </div>


              {/* Hover Arrow */}

              <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-2xl text-white/0 transition-all duration-500 group-hover:right-3 group-hover:text-purple-400 md:block">
                ↗
              </div>

            </div>
          ))}

        </div>


        {/* =========================================
            BOTTOM
        ========================================== */}

        <div className="flex flex-col justify-between gap-6 pt-12 sm:flex-row sm:items-center">

          <p className="text-[10px] uppercase tracking-[0.25em] text-white/20">
            Trusted by creative minds
          </p>

          <div className="flex items-center gap-3">

            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Let's create something memorable
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
