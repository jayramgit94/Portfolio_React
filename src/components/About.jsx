import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import "../styles/global.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about">
        {/* HERO */}
        <section className="about-hero">
          <div className="about-hero-left">
            <h1>
              Jayram Sangawat <br />
              <span className="about-native">जयराम सांगावत</span>
            </h1>
            <p className="about-pronounce">/ jay-ram sang-a-wat /</p>
          </div>

          <div className="about-hero-right">
            <img src="/me.png" alt="Portrait" />
            <img src="/me-2.png" alt="Secondary" />
          </div>
        </section>

        {/* INTRO TEXT */}
        <section className="about-intro">
          <p>
            I’m a frontend developer from India, focused on building calm,
            readable, and reliable interfaces for the web.
          </p>

          <p>
            With a background in computer science, I enjoy translating complex
            ideas into clear UI systems that scale well and feel intuitive to
            use.
          </p>

          <p>
            Outside of work, I enjoy studying high-quality digital products,
            improving my design taste, and refining my frontend engineering
            skills.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="about-section">
          <h2>Experience</h2>

          <div className="about-item">
            <strong>Frontend Developer</strong>
            <span>2023 — Present</span>
            <p>
              Working on modern React applications with a focus on clean
              architecture, accessibility, and performance.
            </p>
          </div>

          <div className="about-item">
            <strong>Freelance Projects</strong>
            <span>2022 — Present</span>
            <p>
              Built portfolio websites, dashboards, and UI components for
              individual clients and student projects.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="about-section">
          <h2>Education</h2>

          <div className="about-item">
            <strong>Bachelor of Computer Science</strong>
            <span>2021 — 2025</span>
            <p>
              Studied core computer science subjects including data structures,
              databases, and software engineering.
            </p>
          </div>
        </section>

        {/* IMAGE GRID */}
        <section className="about-gallery">
          <img src="/me.png" alt="" />
          <img src="/me-2.png" alt="" />
          <img src="/profile.jpg" alt="" />
          <img src="/me.png" alt="" />
          <img src="/me-2.png" alt="" />
          <img src="/profile.jpg" alt="" />
        </section>
      </main>

      <Footer />
    </>
  );
}
