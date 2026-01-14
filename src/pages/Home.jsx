import { useEffect } from "react";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Footer from "../components/Footer";
import "../styles/global.css";

function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll(".tool-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
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
          <p>
            Technologies and tools I use to design and build clean, responsive,
            and engaging web experiences.
          </p>
        </div>

        <div className="toolkit-grid">
          {[
            {
              name: "HTML",
              icon: "⌘",
              info: "Semantic, accessible markup",
              color: "html",
            },
            {
              name: "CSS",
              icon: "✦",
              info: "Layouts, animation, polish",
              color: "css",
            },
            {
              name: "JavaScript",
              icon: "JS",
              info: "Logic & interactivity",
              color: "js",
            },
            {
              name: "React",
              icon: "⚛",
              info: "Component-based UI",
              color: "react",
            },
            {
              name: "Git",
              icon: "⎇",
              info: "Version control & workflow",
              color: "git",
            },
            {
              name: "Figma",
              icon: "◆",
              info: "Design & handoff",
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
              <span className="tool-info">{tool.info}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
