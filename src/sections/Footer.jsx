import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // ============================================
  // PUT YOUR FORMSPREE FORM ID HERE
  // ============================================

  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  const navigation = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#project",
    },
    {
      name: "Experience",
      href: "#experience",
    },
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/",
    },
  ];

  return (
    <>
      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        id="contact"
        className="relative w-full overflow-hidden bg-[#050505] text-white"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-fuchsia-600/5 blur-[120px]" />
        </div>

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">

          {/* =================================================
              CTA
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
            className="border-b border-white/10 pb-20"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-400" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Have a project?
              </span>
            </div>

            <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

              <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl">
                Let's make
                <br />

                <span className="bg-gradient-to-r from-white via-white/70 to-white/20 bg-clip-text text-transparent">
                  something.
                </span>
              </h2>

              {/* ==========================================
                  GET IN TOUCH BUTTON
              =========================================== */}

              <motion.button
                type="button"
                onClick={() => setIsFormOpen(true)}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-white text-black transition-all duration-500 hover:bg-purple-500 hover:text-white sm:h-40 sm:w-40"
              >
                <div className="text-center">

                  <div className="mb-2 text-2xl transition-transform duration-500 group-hover:rotate-12">
                    ↗
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                    Get in touch
                  </p>

                </div>
              </motion.button>

            </div>

            <p className="mt-10 max-w-lg text-sm leading-7 text-white/35">
              Have an idea, a project or just want to say hello?
              Drop me a message and let's talk.
            </p>
          </motion.div>

          {/* =================================================
              MIDDLE
          ================================================== */}

          <div className="grid gap-12 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}

            <div className="lg:col-span-2">

              <a
                href="#home"
                className="text-3xl font-bold tracking-[-0.05em]"
              >
                NK<span className="text-purple-400">.</span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/30">
                Creative developer crafting digital experiences
                where design, technology and motion meet.
              </p>

              <div className="mt-7 flex items-center gap-3">

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                  <span className="relative h-2 w-2 rounded-full bg-green-400" />
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Available for work
                </span>

              </div>

            </div>

            {/* Navigation */}

            <div>

              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-white/25">
                Navigation
              </p>

              <div className="flex flex-col gap-4">

                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex w-fit items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {item.name}

                    <span className="opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                ))}

              </div>

            </div>

            {/* Social */}

            <div>

              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-white/25">
                Connect
              </p>

              <div className="flex flex-col gap-4">

                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {social.name}

                    <span className="opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* =================================================
              COPYRIGHT
          ================================================== */}

          <div className="flex flex-col justify-between gap-5 py-7 sm:flex-row sm:items-center">

            <p className="text-[10px] uppercase tracking-[0.15em] text-white/20">
              © 2026 NK Studio. All rights reserved.
            </p>

            <p className="text-[10px] uppercase tracking-[0.15em] text-white/20">
              Designed & Built with{" "}
              <span className="text-purple-400/70">
                Passion
              </span>
            </p>

          </div>

          {/* Giant Text */}

          <div className="pointer-events-none mt-8 overflow-hidden">

            <motion.h3
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className="whitespace-nowrap text-[24vw] font-black leading-[0.7] tracking-[-0.09em] text-white/[0.025]"
            >
              LET'S TALK
            </motion.h3>

          </div>

        </div>
      </footer>


      {/* =====================================================
          CONTACT MODAL
      ====================================================== */}

      <AnimatePresence>

        {isFormOpen && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-5 py-10 backdrop-blur-xl"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                setIsFormOpen(false);
              }
            }}
          >

            {/* Modal */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-white/10 bg-[#0b0b0d] p-6 shadow-2xl sm:p-10"
            >

              {/* Close */}

              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:bg-white hover:text-black"
              >
                ×
              </button>


              {/* Form Header */}

              <div className="mb-8">

                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-purple-400">
                  Start a conversation
                </p>

                <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let's work together.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  Tell me a little about your project and I'll
                  get back to you as soon as possible.
                </p>

              </div>


              {/* ============================================
                  SUCCESS
              ============================================= */}

              {state.succeeded ? (

                <div className="py-12 text-center">

                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-400/10 text-2xl text-green-400">
                    ✓
                  </div>

                  <h4 className="text-2xl font-semibold">
                    Message sent!
                  </h4>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/35">
                    Thanks for reaching out. I'll get back to
                    you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="mt-8 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-purple-400"
                  >
                    Close
                  </button>

                </div>

              ) : (

                /* ==========================================
                   FORM
                =========================================== */

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Name */}

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition focus:border-purple-400/50 focus:bg-white/[0.05] placeholder:text-white/20"
                    />

                  </div>


                  {/* Email */}

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition focus:border-purple-400/50 focus:bg-white/[0.05] placeholder:text-white/20"
                    />

                  </div>


                  {/* Subject */}

                  <div>

                    <label
                      htmlFor="subject"
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Let's build something amazing"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition focus:border-purple-400/50 focus:bg-white/[0.05] placeholder:text-white/20"
                    />

                  </div>


                  {/* Message */}

                  <div>

                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/35"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      placeholder="Tell me about your project..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition focus:border-purple-400/50 focus:bg-white/[0.05] placeholder:text-white/20"
                    />

                  </div>


                  {/* Error */}

                  {state.errors && (
                    <p className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-xs text-red-300">
                      Something went wrong. Please try again.
                    </p>
                  )}


                  {/* Submit */}

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{
                      scale: state.submitting ? 1 : 1.01,
                    }}
                    whileTap={{
                      scale: state.submitting ? 1 : 0.98,
                    }}
                    className="w-full rounded-xl bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {state.submitting
                      ? "Sending..."
                      : "Send Message ↗"}
                  </motion.button>

                  <p className="text-center text-[10px] leading-5 text-white/20">
                    Your information will only be used to respond
                    to your message.
                  </p>

                </form>

              )}

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Footer;
