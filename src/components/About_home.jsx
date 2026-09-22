import React, { useState } from "react";
import "./Portfolio.css";

import profileGirl from "../assets/profile_girl.jpg";

const Portfolio = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  return (
    <section className="portfolio-page">

      {/* =====================================================
          LEFT STICKY IMAGE
      ===================================================== */}
      <aside className="portfolio-sidebar">
        <div
          className="portfolio-bgimg"
          style={{ backgroundImage: `url(${profileGirl})` }}
        />
      </aside>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      <nav
        className={`portfolio-mobile-sidebar ${
          sidebarOpen ? "portfolio-sidebar-open" : ""
        }`}
      >
        <button
          type="button"
          onClick={closeNav}
          className="portfolio-close-btn"
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="portfolio-menu">
          <a href="#portfolio" onClick={closeNav}>
            Portfolio
          </a>

          <a href="#about" onClick={closeNav}>
            About
          </a>

          <a href="#contact" onClick={closeNav}>
            Contact
          </a>
        </div>
      </nav>

      {/* =====================================================
          RIGHT CONTENT
      ===================================================== */}
      <div className="portfolio-main">

        {/* Menu button */}
        <button
          type="button"
          className="portfolio-menu-button"
          onClick={openNav}
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* ===================================================
            HEADER
        =================================================== */}
        <header className="portfolio-header">

          <h1>
            <b>Kartikeya Tripathi</b>
          </h1>

          <p>Frontend && Web Deginer</p>

          {/* Mobile image */}
          <img
            src={profileGirl}
            alt="Kartikeya Tripathi"
            className="portfolio-profile-image"
          />

          <a
            href="Kartikeya_Tripathi_Resume .pdf"
            download
            className="portfolio-resume-btn"
          >
            ↓ Download Resume
          </a>

        </header>

        {/* ===================================================
            PORTFOLIO
        =================================================== */}
        <section
          className="portfolio-section"
          id="portfolio"
        >
          <h2>My Portfolio</h2>

          <hr />

          <div className="portfolio-grid">

            <div className="portfolio-column">

              <img
                src={profileGirl}
                alt="Wedding photography"
              />

              <img
                src={profileGirl}
                alt="Nature photography"
              />

              <img
                src={profileGirl}
                alt="Sailboat photography"
              />

            </div>

            <div className="portfolio-column">

              <img
                src={profileGirl}
                alt="Underwater photography"
              />

              <img
                src={profileGirl}
                alt="Chef photography"
              />

              <img
                src={profileGirl}
                alt="Wedding photography"
              />

              <img
                src={profileGirl}
                alt="Portfolio photography"
              />

            </div>

          </div>
        </section>

        {/* ===================================================
            ABOUT
        =================================================== */}
        <section
          className="about-section"
          id="about"
        >
          <h2>About</h2>

          <hr />

          <p>
            Some text about me. I am a passionate photographer
            and web designer who loves creating beautiful digital
            experiences. I work with modern technologies and
            creative photography to bring ideas to life.
          </p>

          {/* Skills */}
          <h3>My Skills</h3>

          <div className="skill">

            <p>Photography</p>

            <div className="skill-background">
              <div
                className="skill-progress"
                style={{ width: "95%" }}
              >
                95%
              </div>
            </div>

          </div>

          <div className="skill">

            <p>Web Design</p>

            <div className="skill-background">
              <div
                className="skill-progress"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>

          </div>

          <div className="skill">

            <p>Photoshop</p>

            <div className="skill-background">
              <div
                className="skill-progress"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>

          </div>

          {/* Statistics */}
          <div className="portfolio-stats">

            <div>
              <span>14+</span>
              <br />
              Partners
            </div>

            <div>
              <span>55+</span>
              <br />
              Projects Done
            </div>

            <div>
              <span>89+</span>
              <br />
              Happy Clients
            </div>

            <div>
              <span>150+</span>
              <br />
              Meetings
            </div>

          </div>

          <a
            href="/resume.pdf"
            download
            className="portfolio-resume-btn"
          >
            ↓ Download Resume
          </a>

          {/* =================================================
              TESTIMONIALS
          ================================================= */}
          <h3 className="reputation-title">
            My Reputation
          </h3>

          <div className="testimonial">

            <img
              src={profileGirl}
              alt="Chandler Bing"
            />

            <div>
              <p>
                <strong>Chandler Bing.</strong>{" "}
                Web Designer.
              </p>

              <p>
                Jane Doe is just awesome. I am so happy
                to have met her!
              </p>
            </div>

          </div>

          <div className="testimonial">

            <img
              src={profileGirl}
              alt="Chris Fox"
            />

            <div>
              <p>
                <strong>Chris Fox.</strong>{" "}
                CEO at Mighty Schools.
              </p>

              <p>
                Jane Doe saved us from a web disaster.
              </p>
            </div>

          </div>

          <div className="testimonial">

            <img
              src={profileGirl}
              alt="Rebecca Flex"
            />

            <div>
              <p>
                <strong>Rebecca Flex.</strong>{" "}
                CEO at Company.
              </p>

              <p>
                No one is better than Jane Doe.
              </p>
            </div>

          </div>

          {/* =================================================
              PRICING
          ================================================= */}
          <h3 className="pricing-title">
            My Price
          </h3>

          <div className="pricing-grid">

            {/* Basic */}
            <div className="pricing-card">

              <div className="pricing-header">
                Basic
              </div>

              <ul>

                <li>Web Design</li>

                <li>Photography</li>

                <li>5GB Storage</li>

                <li>Mail Support</li>

                <li className="price">
                  <h2>$10</h2>
                  <span>per month</span>
                </li>

                <li className="pricing-button">
                  <button type="button">
                    Sign Up
                  </button>
                </li>

              </ul>

            </div>

            {/* Pro */}
            <div className="pricing-card">

              <div className="pricing-header pro">
                Pro
              </div>

              <ul>

                <li>Web Design</li>

                <li>Photography</li>

                <li>50GB Storage</li>

                <li>Endless Support</li>

                <li className="price">
                  <h2>$25</h2>
                  <span>per month</span>
                </li>

                <li className="pricing-button">
                  <button type="button">
                    Sign Up
                  </button>
                </li>

              </ul>

            </div>

          </div>

        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}
        <section
          className="contact-section"
          id="contact"
        >
          <h2>Contact Me</h2>

          <hr />

          <div className="contact-info">

            <p>
              <span className="contact-icon">⌖</span>
              Chicago, US
            </p>

            <p>
              <span className="contact-icon">☎</span>
              Phone: +00 151515
            </p>

            <p>
              <span className="contact-icon">✉</span>
              Email: mail@mail.com
            </p>

          </div>

          <img
            src={profileGirl}
            alt="Location"
            className="contact-map"
          />

          <p>
            Let's get in touch. Send me a message:
          </p>

          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <input
              type="text"
              placeholder="Name"
              name="name"
              required
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />

            <textarea
              placeholder="Message"
              name="message"
              rows="5"
              required
            />

            <button type="submit">
              ➤ SEND MESSAGE
            </button>

          </form>

        </section>

      </div>
    </section>
  );
};

export default Portfolio;