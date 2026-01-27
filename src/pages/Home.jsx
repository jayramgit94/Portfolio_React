import { useEffect } from "react";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import "../styles/global.css";

function Home() {
  useEffect(() => {
    /* ===============================
       TOOLKIT CARD REVEAL
    ================================ */
    const cards = document.querySelectorAll(".tool-card");

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    cards.forEach((card) => cardObserver.observe(card));

    /* ===============================
       FOOTER LOCK REVEAL
    ================================ */
    const footer = document.querySelector(".footer");
    const sentinel = document.querySelector(".footer-sentinel");

    if (footer && sentinel) {
      const footerObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            footer.classList.add("footer-lock");
            footerObserver.disconnect(); // run once
          }
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "0px 0px -20% 0px",
        },
      );

      footerObserver.observe(sentinel);
    }

    return () => {
      cardObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Work />

      {/* ===== TOOLKIT SECTION ===== */}
      <section className="toolkit-section">
        <div className="toolkit-header">
          <h2>My Toolkit</h2>
        </div>

        <div className="toolkit-grid">
          {[
            {
              name: "HTML",
              icon: "⌘",
              info: "Semantic structure & accessibility",
              color: "html",
            },
            {
              name: "CSS",
              icon: "✦",
              info: "Layouts, motion, visual polish",
              color: "css",
            },
            {
              name: "JavaScript",
              icon: "JS",
              info: "Logic, interactivity, state",
              color: "js",
            },
            {
              name: "React",
              icon: "⚛",
              info: "Component systems & UI logic",
              color: "react",
            },
            {
              name: "GitHub",
              icon: "",
              info: "Collaboration & CI habits",
              color: "github",
            },
            {
              name: "Docker",
              icon: "🐳",
              info: "Containerized dev & deploy",
              color: "docker",
            },
            {
              name: "Python",
              icon: "Py",
              info: "Automation & data tooling",
              color: "python",
            },
            {
              name: "C++",
              icon: "C++",
              info: "Core logic & performance",
              color: "cpp",
            },
            {
              name: "Bootstrap",
              icon: "B",
              info: "Rapid UI scaffolding",
              color: "bootstrap",
            },
            {
              name: "Figma",
              icon: "◆",
              info: "Design, prototypes & handoff",
              color: "figma",
            },
          ].map((tool, i) => (
            <div
              key={tool.name}
              className={`tool-card hidden ${
                i % 2 === 0 ? "from-left" : "from-right"
              } ${tool.color}`}
            >
              <div className="tool-icon">{tool.icon}</div>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER SENTINEL (DO NOT STYLE) */}
      <div className="footer-sentinel" />

      <Footer />
    </>
  );
}

export default Home;
