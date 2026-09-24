import React, { useState } from "react";

const Contact = () => {
  const [activeForm, setActiveForm] = useState("project");

  const [projectData, setProjectData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [hireData, setHireData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    workType: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleProjectChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleHireChange = (e) => {
    setHireData({
      ...hireData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    // ==========================================
    // EMAIL / API INTEGRATION
    // Baad mein yahan apna EmailJS,
    // Formspree, Resend ya backend API lagao.
    // ==========================================

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");

    if (activeForm === "project") {
      setProjectData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } else {
      setHireData({
        name: "",
        company: "",
        email: "",
        role: "",
        workType: "",
        budget: "",
        message: "",
      });
    }

    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#05070d] px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}

        <div className="mb-14 max-w-3xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Let's build something
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              worth remembering.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Have a project, an exciting opportunity, or looking for someone
            to join your team? I'd love to hear what you're working on.
          </p>

        </div>

        {/* ================= HIRING BANNER ================= */}

        <div className="relative mb-8 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-600/[0.12] via-cyan-500/[0.06] to-transparent p-6 sm:p-8">

          {/* Decorative Circle */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-blue-400/10" />
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-blue-400/10" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">

              <div className="mb-3 flex items-center gap-2">

                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Open to opportunities
                </span>

              </div>

              <h3 className="text-2xl font-bold sm:text-3xl">
                Looking for someone to join your team?
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
                If your company is hiring for a developer, designer,
                or a role that matches my skills, let's talk.
              </p>

            </div>

            <button
              type="button"
              onClick={() => setActiveForm("hire")}
              className="group shrink-0 rounded-xl border border-blue-400/30 bg-blue-500/10 px-6 py-3.5 text-sm font-semibold text-blue-300 transition hover:border-blue-400/50 hover:bg-blue-500/20"
            >
              I'm hiring →
            </button>

          </div>
        </div>

        {/* ================= MAIN AREA ================= */}

        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

          {/* ================= LEFT CARD ================= */}

          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9">

            <div>

              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">

                {activeForm === "hire" ? (
                  <svg
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}

              </div>

              <h3 className="text-2xl font-semibold">
                {activeForm === "hire"
                  ? "Let's discuss the opportunity."
                  : "Let's talk about your idea."}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {activeForm === "hire"
                  ? "Tell me about your company, the role, and what you're looking for. I'll get back to you and we can take it from there."
                  : "Whether you need a website, web application, or a completely new digital experience, send me the details."}
              </p>

            </div>

            <div className="mt-12 space-y-4">

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  @
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    yourname@gmail.com
                  </p>
                </div>

              </div>

              {/* Availability */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/20 p-4">

                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">

                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Availability
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    Open to selected opportunities
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* ================= FORM CARD ================= */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:p-9">

            {/* Form Switcher */}

            <div className="mb-8 flex rounded-xl border border-white/10 bg-black/20 p-1">

              <button
                type="button"
                onClick={() => {
                  setActiveForm("project");
                  setStatus("");
                }}
                className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  activeForm === "project"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Project Inquiry
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveForm("hire");
                  setStatus("");
                }}
                className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  activeForm === "hire"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Hire Me
              </button>

            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* ================= PROJECT FORM ================= */}

              {activeForm === "project" && (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">

                    <Input
                      label="Your name"
                      name="name"
                      value={projectData.name}
                      onChange={handleProjectChange}
                      placeholder="John Doe"
                    />

                    <Input
                      label="Email address"
                      name="email"
                      type="email"
                      value={projectData.email}
                      onChange={handleProjectChange}
                      placeholder="john@example.com"
                    />

                  </div>

                  <Select
                    label="What can I help with?"
                    name="service"
                    value={projectData.service}
                    onChange={handleProjectChange}
                    options={[
                      ["", "Select a service"],
                      ["website", "Website Development"],
                      ["web-app", "Web Application"],
                      ["ui-ux", "UI / UX Design"],
                      ["freelance", "Freelance Project"],
                      ["other", "Something Else"],
                    ]}
                  />

                  <Textarea
                    label="Tell me about your project"
                    name="message"
                    value={projectData.message}
                    onChange={handleProjectChange}
                    placeholder="Tell me about your idea, goals, timeline, or anything else..."
                  />
                </>
              )}

              {/* ================= HIRING FORM ================= */}

              {activeForm === "hire" && (
                <>
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold">
                      Tell me about the role
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      A few details will help me understand the opportunity.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    <Input
                      label="Your name"
                      name="name"
                      value={hireData.name}
                      onChange={handleHireChange}
                      placeholder="Sarah Johnson"
                    />

                    <Input
                      label="Company name"
                      name="company"
                      value={hireData.company}
                      onChange={handleHireChange}
                      placeholder="Acme Inc."
                    />

                  </div>

                  <Input
                    label="Work email"
                    name="email"
                    type="email"
                    value={hireData.email}
                    onChange={handleHireChange}
                    placeholder="you@company.com"
                  />

                  <Input
                    label="Role / Position"
                    name="role"
                    value={hireData.role}
                    onChange={handleHireChange}
                    placeholder="Frontend Developer"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">

                    <Select
                      label="Work type"
                      name="workType"
                      value={hireData.workType}
                      onChange={handleHireChange}
                      options={[
                        ["", "Select work type"],
                        ["full-time", "Full-time"],
                        ["part-time", "Part-time"],
                        ["contract", "Contract"],
                        ["freelance", "Freelance"],
                        ["internship", "Internship"],
                      ]}
                    />

                    <Select
                      label="Budget / Salary range"
                      name="budget"
                      value={hireData.budget}
                      onChange={handleHireChange}
                      options={[
                        ["", "Select range"],
                        ["discuss", "Let's discuss"],
                        ["under-50k", "Under ₹50K"],
                        ["50k-1l", "₹50K – ₹1L"],
                        ["1l-2l", "₹1L – ₹2L"],
                        ["2l+", "₹2L+"],
                      ]}
                    />

                  </div>

                  <Textarea
                    label="Tell me about the opportunity"
                    name="message"
                    value={hireData.message}
                    onChange={handleHireChange}
                    placeholder="Tell me about your company, role, responsibilities, tech stack, location, or anything else..."
                  />
                </>
              )}

              {/* Submit */}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
              >

                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    Message sent
                    <span>✓</span>
                  </>
                ) : (
                  <>
                    {activeForm === "hire"
                      ? "Send hiring inquiry"
                      : "Send inquiry"}

                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}

              </button>

              {status === "success" && (
                <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-center text-sm text-emerald-300">
                  Thanks! Your message has been submitted successfully.
                </div>
              )}

              <p className="text-center text-xs text-gray-600">
                Your information will only be used to respond to your inquiry.
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


/* =====================================================
   REUSABLE INPUT COMPONENT
===================================================== */

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition duration-200 focus:border-blue-500/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
};


/* =====================================================
   REUSABLE SELECT COMPONENT
===================================================== */

const Select = ({
  label,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-gray-300 outline-none transition duration-200 focus:border-blue-500/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-blue-500/10"
      >
        {options.map(([value, label]) => (
          <option
            key={value}
            value={value}
            className="bg-gray-950"
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};


/* =====================================================
   REUSABLE TEXTAREA COMPONENT
===================================================== */

const Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        required
        rows="5"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-gray-600 transition duration-200 focus:border-blue-500/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
};

export default Contact;
