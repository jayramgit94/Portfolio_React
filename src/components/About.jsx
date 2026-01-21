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
      if (ticking) {
        return;
      }

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
      if (footerObserver) {
        footerObserver.disconnect();
      }
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
              <img src="/me-2.png" alt="Jayram and companion" />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="about-intro" data-reveal="up">
          <div className="intro-label">Me me me</div>
          <div className="intro-body">
            <p className="intro-lead">
              I’m a <span className="text-highlight">frontend developer</span>
              from India who loves building clean, grounded, and elegant
              interfaces.
            </p>

            <p>
              I blend design sensitivity with engineering discipline—turning
              product goals into{" "}
              <span className="text-highlight">UI systems</span>
              that feel intuitive, scale gracefully, and stay fast. I focus on
              typography, spacing, and interaction details because that’s where
              trust is built.
            </p>

            <p>
              Outside of work, I study great digital products, refine my design
              taste, and keep experimenting with micro-interactions and motion
              to make interfaces feel alive.
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
                <strong>Frontend Developer</strong>
                <span>2023 — Present</span>
              </div>
              <p>
                Building modern React applications with a focus on
                accessibility, design systems, and performance. I collaborate
                closely with designers to keep UI consistent and shippable.
              </p>
            </div>

            <div className="about-item" data-reveal="up">
              <div className="item-header">
                <strong>Freelance Projects</strong>
                <span>2022 — Present</span>
              </div>
              <p>
                Delivered portfolio sites, dashboards, and marketing pages for
                clients. I handle layout architecture, component libraries, and
                responsive behavior end-to-end.
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
                <strong>Clarity over noise</strong>
                <span>UI Philosophy</span>
              </div>
              <p>
                I aim for calm interfaces with clear hierarchy, reducing
                cognitive load while keeping the experience visually delightful.
              </p>
            </div>

            <div className="about-item" data-reveal="up">
              <div className="item-header">
                <strong>Systems thinking</strong>
                <span>Consistency</span>
              </div>
              <p>
                I design components as reusable building blocks so products can
                scale without losing their identity.
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
                <strong>Bachelor of Computer Science</strong>
                <span>2021 — 2025</span>
              </div>
              <p>
                Studied data structures, databases, and software engineering,
                while building projects that bridge UI and real-world product
                needs.
              </p>
            </div>
          </div>
        </section>

        {/* IMAGE GRID */}
        <section className="about-gallery" data-reveal="up">
          <img src="/me.png" alt="Working setup" data-reveal="up" />
          <img src="/me-2.png" alt="Personal moment" data-reveal="up" />
          <img src="/profile.jpg" alt="Profile portrait" data-reveal="up" />
          <img src="/me.png" alt="Workspace" data-reveal="up" />
          <img src="/me-2.png" alt="Lifestyle" data-reveal="up" />
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
