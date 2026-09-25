import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  /*
   * =====================================================
   * IMPORTANT
   * =====================================================
   *
   * Replace this with your REAL Formspree endpoint.
   *
   * Example:
   *
   * const FORMSPREE_ENDPOINT =
   *   "https://formspree.io/f/xabcdefg";
   *
   */

  const FORMSPREE_ENDPOINT =
     "https://formsubmit.co/ajax/saharshtripathi64@gmail.com";

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
      url: "https://github.com/saharshtripathi64-lab",
      symbol: "GH",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kartikeya-tripathi-188511338?utm_spurce=share_via&utm_medium=member_android",
      symbol: "in",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/saharsh.04/",
      symbol: "◎",
    },
  ];

  /*
   * =====================================================
   * ESCAPE KEY
   * =====================================================
   */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsFormOpen(false);
      }
    };

    if (isFormOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isFormOpen]);

  /*
   * =====================================================
   * FORM INPUT
   * =====================================================
   */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /*
   * =====================================================
   * FORM SUBMIT
   * =====================================================
   */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      /*
       * Basic protection against accidentally
       * deploying with the placeholder.
       */

      if (FORMSPREE_ENDPOINT.includes("L")) {
        throw new Error(  );
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.errors?.[0]?.message ||
            "Form submission failed."
        );
      }

      /*
       * SUCCESS
       */

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Formspree error:", error);

      setStatus("error");

      setErrorMessage(
        error?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  /*
   * =====================================================
   * CLOSE FORM
   * =====================================================
   */

  const closeForm = () => {
    if (status === "submitting") return;

    setIsFormOpen(false);

    setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 300);
  };

  return (
    <>
      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        id="contact"
        className="relative overflow-hidden bg-[#060608] text-white"
      >
        {/* =================================================
            BACKGROUND
        ================================================== */}

        <div className="pointer-events-none absolute inset-0">

          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-48 top-0 h-[550px] w-[550px] rounded-full bg-violet-600/10 blur-[160px]"
          />

          <motion.div
            animate={{
              x: [0, -70, 0],
              y: [0, 70, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[160px]"
          />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.025] blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

          {/* =================================================
              CTA
          ================================================== */}

          <section className="py-24 sm:py-32 lg:py-40">

            <div className="mb-10 flex items-center gap-4">

              <span className="h-px w-12 bg-violet-400" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                Have a project?
              </span>

            </div>

            <div className="flex flex-col justify-between gap-14 lg:flex-row lg:items-end">

              <div>

                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="text-[17vw] font-black leading-[0.75] tracking-[-0.09em] sm:text-[13vw] lg:text-[10.5vw]"
                >
                  LET'S
                  <br />

                  <span className="bg-gradient-to-r from-white via-white/70 to-violet-400 bg-clip-text text-transparent">
                    CREATE.
                  </span>
                </motion.h2>

                <p className="mt-10 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
                  Have an idea, project or product in mind?
                  Let's turn it into something people
                  remember.
                </p>

              </div>

              {/* =================================================
                  START PROJECT BUTTON
              ================================================== */}

              <motion.button
                type="button"
                onClick={() => setIsFormOpen(true)}
                whileHover="hover"
                whileTap={{
                  scale: 0.94,
                }}
                className="group relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-white text-black transition-colors duration-500 hover:bg-violet-500 hover:text-white sm:h-44 sm:w-44"
              >

                {/* outer ring */}

                <motion.span
                  variants={{
                    hover: {
                      scale: 1.12,
                      rotate: 180,
                    },
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="absolute inset-[-8px] rounded-full border border-dashed border-violet-400/30"
                />

                <div className="relative text-center">

                  <motion.div
                    variants={{
                      hover: {
                        x: 6,
                        y: -6,
                        rotate: 8,
                      },
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="mb-2 text-2xl"
                  >
                    ↗
                  </motion.div>

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                    Start a project
                  </span>

                </div>
              </motion.button>
            </div>
          </section>

          {/* =================================================
              LINE
          ================================================== */}

          <div className="h-px bg-white/10" />

          {/* =================================================
              MIDDLE
          ================================================== */}

          <section className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">

            {/* BRAND */}

            <div className="lg:col-span-5">

              <a
                href="#home"
                className="group inline-flex text-4xl font-black tracking-[-0.08em]"
              >
                KT
                <span className="text-violet-400 transition-colors duration-300 group-hover:text-fuchsia-400">
                  .
                </span>
              </a>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/30">
                Creative developer building modern digital
                experiences where design, technology and
                motion come together.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5">

                <span className="relative h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative block h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Available for work
                </span>

              </div>
            </div>

            {/* NAVIGATION */}

            <div className="lg:col-span-3">

              <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-white/20">
                Explore
              </p>

              <div className="grid grid-cols-2 gap-y-5">

                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-white/40 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="text-[8px] text-white/15">
                      0{index + 1}
                    </span>

                    {item.name}

                    <span className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                ))}

              </div>
            </div>

            {/* SOCIALS */}

            <div className="lg:col-span-4">

              <p className="mb-7 text-[9px] uppercase tracking-[0.3em] text-white/20">
                Find me online
              </p>

              <div className="space-y-3">

                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                  >

                    <div className="flex items-center gap-3">

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[9px] font-bold text-white/40 transition-all duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-400/10 group-hover:text-violet-300">
                        {social.symbol}
                      </span>

                      <span className="text-sm text-white/40 transition-colors group-hover:text-white">
                        {social.name}
                      </span>

                    </div>

                    <span className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300">
                      ↗
                    </span>

                  </a>
                ))}

              </div>
            </div>
          </section>

          {/* =================================================
              BOTTOM
          ================================================== */}

          <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-7 sm:flex-row sm:items-center">

            <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
              © 2026 @saharsh.04 . All rights reserved.
            </p>

            <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
              Designed & Built with{" "}
              <span className="text-violet-400">
                Passion
              </span>
            </p>

          </div>

          {/* =================================================
              HUGE TEXT
          ================================================== */}

          <div className="pointer-events-none overflow-hidden">

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
              className="whitespace-nowrap text-[25vw] font-black leading-[0.65] tracking-[-0.11em] text-white/[0.025]"
            >
              HELLO.
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
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-6 backdrop-blur-2xl"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeForm();
              }
            }}
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[30px] border border-white/10 bg-[#0b0b0e] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.8)] sm:p-9"
            >

              {/* glow */}

              <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

              {/* CLOSE */}

              <button
                type="button"
                onClick={closeForm}
                disabled={status === "submitting"}
                aria-label="Close"
                className="group absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white/40 transition-all duration-300 hover:rotate-90 hover:border-violet-400/40 hover:bg-violet-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                ×
              </button>

              {/* HEADER */}

              <div className="relative mb-8">

                <div className="mb-4 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

                  <span className="text-[9px] uppercase tracking-[0.3em] text-violet-400">
                    Start a conversation
                  </span>

                </div>

                <h3 className="text-4xl font-semibold leading-[0.95] tracking-[-0.06em]">
                  Let's work
                  <br />
                  <span className="text-white/30">
                    together.
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-6 text-white/35">
                  Tell me about your project and I'll get
                  back to you as soon as possible.
                </p>
              </div>

              {/* =================================================
                  SUCCESS
              ================================================== */}

              {status === "success" ? (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="py-12 text-center"
                >

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-3xl text-emerald-400">
                    ✓
                  </div>

                  <h4 className="mt-7 text-2xl font-semibold">
                    Message sent!
                  </h4>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/35">
                    Thanks for reaching out. I'll get back
                    to you shortly.
                  </p>

                  <motion.button
                    type="button"
                    onClick={closeForm}
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="mt-8 rounded-full bg-white px-7 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]"
                  >
                    Close
                  </motion.button>

                </motion.div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="relative space-y-5"
                >

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-white/30"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/15 focus:border-violet-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                    />

                  </div>

                  {/* EMAIL + PHONE */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="email"
                        className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-white/30"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/15 focus:border-violet-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-white/30"
                      >
                        Phone number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/15 focus:border-violet-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                      />

                    </div>

                  </div>

                  {/* SUBJECT */}

                  <div>

                    <label
                      htmlFor="subject"
                      className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-white/30"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project enquiry"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/15 focus:border-violet-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                    />

                  </div>

                  {/* MESSAGE */}

                  <div>

                    <label
                      htmlFor="message"
                      className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-white/30"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/15 focus:border-violet-400/50 focus:bg-white/[0.05] focus:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                    />

                  </div>

                  {/* ERROR */}

                  {status === "error" && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="rounded-2xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-xs leading-5 text-red-300"
                    >
                      {errorMessage ||
                        "Message could not be sent. Please try again."}
                    </motion.div>
                  )}

                  {/* SUBMIT BUTTON */}

                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={{
                      scale: status === "submitting" ? 1 : 1.01,
                    }}
                    whileTap={{
                      scale: status === "submitting" ? 1 : 0.97,
                    }}
                    className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-white px-6 py-4 text-[9px] font-bold uppercase tracking-[0.25em] text-black transition-all duration-500 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] disabled:cursor-not-allowed disabled:opacity-50"
                  >

                    <span className="relative z-10 flex items-center gap-3">

                      {status === "submitting" ? (
                        <>
                          <span className="h-3 w-3 animate-spin rounded-full border-2 border-black/20 border-t-black group-hover:border-white/20 group-hover:border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message

                          <span className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
                            ↗
                          </span>
                        </>
                      )}

                    </span>

                  </motion.button>

                  <p className="text-center text-[9px] leading-5 text-white/15">
                    Your details will only be used to respond
                    to your enquiry.
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
