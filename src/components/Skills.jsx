import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import "../styles/global.css";

export default function Skills() {
  return (
    <>
      {/* <Navbar /> */}

      <main className="skills-page">
        <section className="skills-intro">
          <h1>My Toolkit</h1>
          <p>
            Tools and technologies I use to design and build modern, responsive,
            and interactive web experiences.
          </p>
        </section>

        <section className="skills-grid">
          <Skill
            title="HTML"
            icon="⌘"
            desc="Semantic markup and structured layouts for accessible and SEO-friendly web pages."
            className="html"
          />

          <Skill
            title="CSS"
            icon="✦"
            desc="Modern layouts, animations, responsive design, and visual polish."
            className="css"
          />

          <Skill
            title="JavaScript"
            icon="JS"
            desc="ES6+ features, DOM manipulation, and dynamic client-side logic."
            className="js"
          />

          <Skill
            title="React"
            icon="⚛"
            desc="Component-based UI development using hooks and state management."
            className="react"
          />

          <Skill
            title="Git"
            icon="⎇"
            desc="Version control, collaboration, and clean commit workflows."
            className="git"
          />

          <Skill
            title="Figma"
            icon="◆"
            desc="UI exploration, layout planning, and developer-friendly design handoff."
            className="figma"
          />
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}

function Skill({ title, icon, desc, className }) {
  return (
    <div className={`skill-card ${className}`}>
      <div className="skill-front">
        <div className="skill-icon">{icon}</div>
        <h3>{title}</h3>
      </div>

      <div className="skill-back">
        <p>{desc}</p>
      </div>
    </div>
  );
}
