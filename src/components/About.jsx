import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/about.css";

export default function AboutPage() {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const footer = document.querySelector(".footer");
    const sentinel = document.querySelector(".footer-sentinel");

    let footerObserver;
    if (footer && sentinel) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            footer.classList.add("footer-lock");
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

    const hero = document.querySelector(".about-hero");
    const parallaxItems = document.querySelectorAll("[data-parallax]");
    const toTopButton = document.querySelector(".to-top");

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroRect = hero?.getBoundingClientRect();
        const offset = heroRect
          ? Math.min(Math.max(-heroRect.top / 4, -30), 30)
          : 0;
        const zoom = 1 + Math.min(scrollY / 2000, 0.06);

        if (hero) {
          hero.style.setProperty("--hero-zoom", zoom.toString());
        }

        parallaxItems.forEach((item) => {
          item.style.setProperty("--parallax-y", `${offset}px`);
        });

        if (toTopButton) {
          toTopButton.classList.toggle("show", scrollY > 600);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      revealObserver.disconnect();
      if (footerObserver) footerObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <main className="about">
        {/* HERO */}
        <section className="about-hero" data-reveal="up">
          <div className="about-hero-text">
            <h1 className="about-name">Jayram Sangawat</h1>
            <h2 className="about-native">जयराम सांगावत</h2>
            <p className="about-pronunciation">/ jay-ram san-ga-wat /</p>
          </div>

          <div className="about-hero-images">
            <div className="about-image-main" data-parallax>
              <img src="/me.png" alt="Jayram working" />
            </div>
            <div className="about-image-side" data-parallax>
              <img src="/me-2.png" alt="Jayram collaborating" />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="about-intro" data-reveal="up">
          <div className="intro-label">About me</div>
          <div className="intro-body">
            <p className="intro-lead">
              I’m a{" "}
              <span className="text-highlight">Computer Science student</span>{" "}
              who started coding out of curiosity—wondering how websites are
              built and why some feel effortless to use.
            </p>

            <p>
              I began with frontend development in my first year, experimenting
              with layouts and customizing my own portfolio. The basics weren’t
              easy at first—JavaScript logic and CSS behavior took time to
              click. But small progress, consistency, and building things step
              by step kept me moving forward.
            </p>

            <p>
              Over time, my interest grew beyond UI into backend systems, APIs,
              databases, and application performance. I enjoy building complete
              systems where functionality, speed, and smooth user experience
              matter equally.
            </p>

            <p className="about-easter">
              Psst… hover the hero image for a tiny surprise ✨
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="about-section" data-reveal="left">
          <div className="section-label">Experience</div>
          <div className="section-content">
            <div className="about-item" data-reveal="up">
              <div className="item-header">
                <strong>Project-Based Development</strong>
                <span>2022 — Present</span>
              </div>
              <p>
                Built multiple real-world projects including chat systems,
                certificate generators, AI-powered tools, and full-stack web
                applications. I focus on writing practical code that solves real
                problems and scales beyond demos.
              </p>
            </div>

            <div className="about-item" data-reveal="up">
              <div className="item-header">
                <strong>Team & Hackathon Work</strong>
                <span>2023 — Present</span>
              </div>
              <p>
                Worked in team-based environments during hackathons and college
                projects. I often take responsibility for integrating frontend
                and backend pieces, coordinating tasks, and turning ideas into
                working systems.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="about-section" data-reveal="right">
          <div className="section-label">Values</div>
          <div className="section-content">
            <div className="about-item" data-reveal="up">
              <div className="item-header">
                <strong>Learning by building</strong>
                <span>Growth mindset</span>
              </div>
              <p>
                I understand concepts best when I apply them in projects. I
                break large problems into smaller parts, read documentation,
                experiment, debug errors, and iterate until things work
                reliably.
              </p>
            </div>

            <div className="about-item" data-reveal="up">
              <div className="item-header">
                <strong>Impact over perfection</strong>
                <span>Product thinking</span>
              </div>
              <p>
                I value building useful and meaningful products—whether it’s a
                chat app used by friends, a certificate system used for events,
                or accessibility-focused tools that help real users.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="about-section" data-reveal="left">
          <div className="section-label">Education</div>
          <div className="section-content">
            <div className="about-item" data-reveal="up">
              <div className="item-header">
                <strong>B.Tech in Computer Science & Engineering</strong>
                <span>2023 — Present</span>
              </div>
              <p>
                Studying core computer science subjects while actively building
                projects in web development, backend systems, and applied AI.
                Currently focused on gaining real-world experience through
                internships and collaborative projects.
              </p>
            </div>
          </div>
        </section>

        {/* IMAGE GRID */}
        <section className="about-gallery" data-reveal="up">
          <img src="/me.png" alt="Late-night coding session" data-reveal="up" />
          <img src="/me-2.png" alt="Working with teammates" data-reveal="up" />
          <img src="/profile.jpg" alt="Profile portrait" data-reveal="up" />
          <img src="/me.png" alt="Debugging a project" data-reveal="up" />
          <img src="/me-2.png" alt="Project discussion" data-reveal="up" />
          <img src="/profile.jpg" alt="Profile portrait" data-reveal="up" />
        </section>
      </main>

      <button type="button" className="fab" aria-label="Quick contact">
        ✉️
      </button>

      <button
        type="button"
        className="to-top"
        onClick={handleScrollToTop}
        aria-label="Return to top"
      >
        ↑
      </button>

      <div className="footer-sentinel" />

      <Footer />
    </>
  );
}
