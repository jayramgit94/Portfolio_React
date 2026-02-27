import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/about.css";

/* ── Spring-based scroll reveal ── */
const springTransition = {
  type: "spring",
  damping: 30,
  stiffness: 200,
  mass: 0.8,
};

const gentleSpring = {
  type: "spring",
  damping: 40,
  stiffness: 120,
  mass: 1,
};

function RevealSection({
  children,
  direction = "up",
  className = "",
  delay = 0,
  ...rest
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const variants = {
    up: { y: 24 },
    left: { x: -24 },
    right: { x: 24 },
  };

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...variants[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ ...springTransition, delay }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

/* ── Staggered card reveal ── */
function StaggerItem({ children, index = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        ...springTransition,
        delay: index * 0.08,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Gradient divider between about sections ── */
function AboutDivider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div className="about-divider" ref={ref}>
      <motion.div
        className="about-divider-line"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

/* ── Gallery image with 3D tilt (signature interaction) ── */
function GalleryImage({ src, alt, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rawRotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rawRotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const rotateX = useSpring(rawRotateX, { damping: 20, stiffness: 150 });
  const rotateY = useSpring(rawRotateY, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="gallery-item"
      style={isMobile ? {} : { rotateX, rotateY, transformPerspective: 600 }}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ ...springTransition, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} loading="lazy" />
      <div className="gallery-overlay">
        <span className="gallery-caption">{alt}</span>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const flipCardRef = useRef(null);
  const heroRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  /* Hero parallax */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const isMobileAbout =
    typeof window !== "undefined" && window.innerWidth < 768;
  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobileAbout ? 20 : 60],
  );
  const heroTextY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobileAbout ? -10 : -30],
  );

  /* Cursor-following glow in hero (signature micro-interaction) */
  const glowX = useMotionValue(0.5);
  const glowY = useMotionValue(0.5);
  const smoothGlowX = useSpring(glowX, { damping: 40, stiffness: 90 });
  const smoothGlowY = useSpring(glowY, { damping: 40, stiffness: 90 });
  const glowLeft = useTransform(smoothGlowX, (v) => `${v * 100}%`);
  const glowTop = useTransform(smoothGlowY, (v) => `${v * 100}%`);

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    glowX.set((e.clientX - rect.left) / rect.width);
    glowY.set((e.clientY - rect.top) / rect.height);
  };

  useEffect(() => {
    const isDesktop = window.matchMedia(
      "(min-width: 1025px) and (pointer: fine)",
    );
    const flipCard = flipCardRef.current;
    const aboutRoot = document.querySelector(".about");
    const secretTrigger = document.querySelector(".about-secret-trigger");
    const secretMessage = document.querySelector(".about-secret-message");

    let secretTimer;

    const handleSecretEnter = () => {
      if (!isDesktop.matches) return;
      window.clearTimeout(secretTimer);
      secretTimer = window.setTimeout(() => {
        secretMessage?.classList.add("show");
        aboutRoot?.classList.add("easter-enabled");
      }, 2000);
    };

    const handleSecretLeave = () => {
      window.clearTimeout(secretTimer);
      secretMessage?.classList.remove("show");
    };

    const handleFlipClick = () => {
      if (
        !isDesktop.matches ||
        !aboutRoot?.classList.contains("easter-enabled")
      )
        return;
      flipCard?.classList.add("is-flipped");
    };

    const handleFlipLeave = () => {
      flipCard?.classList.remove("is-flipped");
    };

    if (secretTrigger) {
      secretTrigger.addEventListener("mouseenter", handleSecretEnter);
      secretTrigger.addEventListener("mouseleave", handleSecretLeave);
    }

    if (flipCard) {
      flipCard.addEventListener("click", handleFlipClick);
      flipCard.addEventListener("mouseleave", handleFlipLeave);
    }

    return () => {
      if (secretTrigger) {
        secretTrigger.removeEventListener("mouseenter", handleSecretEnter);
        secretTrigger.removeEventListener("mouseleave", handleSecretLeave);
      }
      if (flipCard) {
        flipCard.removeEventListener("click", handleFlipClick);
        flipCard.removeEventListener("mouseleave", handleFlipLeave);
      }
    };
  }, []);

  /* Scroll-to-top visibility */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Cursor />
      <Navbar />

      <main className="about">
        {/* Noise texture overlay */}
        <div className="about-noise" aria-hidden="true" />

        {/* ═══ HERO ═══ */}
        <section
          className="about-hero"
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
        >
          {/* Cursor-following radial glow */}
          <motion.div
            className="about-hero-glow"
            style={{ left: glowLeft, top: glowTop }}
            aria-hidden="true"
          />

          <motion.div
            className="about-hero-text"
            style={{ y: heroTextY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.1 }}
          >
            <span className="about-role">Developer &amp; Builder</span>
            <h1 className="about-name">
              Jayram <span className="about-name-accent">Sangawat</span>
            </h1>
            <h2 className="about-native">
              &#2332;&#2351;&#2352;&#2366;&#2350;{" "}
              &#2360;&#2366;&#2306;&#2327;&#2366;&#2357;&#2340;
            </h2>
            <p className="about-pronunciation">/ jay-ram san-ga-wat /</p>
          </motion.div>

          <motion.div
            className="about-hero-images"
            style={{ y: heroImageY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springTransition, delay: 0.25 }}
          >
            {/* Decorative geometric ornaments */}
            <span className="deco deco-cross" aria-hidden="true" />
            <span className="deco deco-ring" aria-hidden="true" />
            <span className="deco deco-dot" aria-hidden="true" />

            <div className="about-image-main about-flip-card" ref={flipCardRef}>
              <div className="about-image-glow" />
              <div className="flip-inner">
                <div className="flip-front">
                  <img
                    src="/profile.jpg"
                    alt="Jayram Sangawat"
                    width="300"
                    height="380"
                    loading="eager"
                  />
                </div>
                <div className="flip-back">
                  <p>Hey there &#128075; Nice to meet you</p>
                  <span>Thanks for stopping by.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <AboutDivider />

        {/* ═══ INTRO ═══ */}
        <RevealSection className="about-intro" direction="up">
          <div className="intro-label">
            <span className="label-dot" />
            About me
          </div>
          <div className="intro-body">
            <p className="intro-lead">
              I&rsquo;m a{" "}
              <span className="text-highlight">Computer Science student</span>{" "}
              who started coding out of curiosity&mdash;wondering how websites
              are built and why some feel effortless to use.
            </p>
            <p>
              I began with frontend development in my first year, experimenting
              with layouts and customizing my own portfolio. The basics
              weren&rsquo;t easy at first&mdash;JavaScript logic and CSS
              behavior took time to click. But small progress, consistency, and
              building things step by step kept me moving forward.
            </p>
            <p>
              Over time, my interest grew beyond UI into backend systems, APIs,
              databases, and application performance. I enjoy building complete
              systems where functionality, speed, and smooth user experience
              matter equally.
            </p>
            <p className="about-easter">
              <span className="about-secret-trigger" tabIndex={0}>
                Hover here for 2 seconds&hellip;
              </span>
              <span className="about-secret-message">
                Go up and hover (or click) on the profile photo &#128064;
              </span>
            </p>
          </div>
        </RevealSection>

        <AboutDivider />

        {/* ═══ EXPERIENCE ═══ */}
        <RevealSection className="about-section" direction="up">
          <div className="section-label-about">
            <span className="label-dot" />
            Experience
          </div>
          <div className="section-content">
            <StaggerItem index={0} className="about-item">
              <div className="item-header">
                <strong>Project-Based Development</strong>
                <span className="item-badge">2022 &mdash; Present</span>
              </div>
              <p>
                Built multiple real-world projects including chat systems,
                certificate generators, AI-powered tools, and full-stack web
                applications. I focus on writing practical code that solves real
                problems and scales beyond demos.
              </p>
            </StaggerItem>

            <StaggerItem index={1} className="about-item">
              <div className="item-header">
                <strong>Team &amp; Hackathon Work</strong>
                <span className="item-badge">2023 &mdash; Present</span>
              </div>
              <p>
                Worked in team-based environments during hackathons and college
                projects. I often take responsibility for integrating frontend
                and backend pieces, coordinating tasks, and turning ideas into
                working systems.
              </p>
            </StaggerItem>
          </div>
        </RevealSection>

        <AboutDivider />

        {/* ═══ VALUES ═══ */}
        <RevealSection className="about-section" direction="up">
          <div className="section-label-about">
            <span className="label-dot" />
            Values
          </div>
          <div className="section-content">
            <StaggerItem index={0} className="about-item">
              <div className="item-header">
                <strong>Learning by building</strong>
                <span className="item-badge">Growth mindset</span>
              </div>
              <p>
                I understand concepts best when I apply them in projects. I
                break large problems into smaller parts, read documentation,
                experiment, debug errors, and iterate until things work
                reliably.
              </p>
            </StaggerItem>

            <StaggerItem index={1} className="about-item">
              <div className="item-header">
                <strong>Impact over perfection</strong>
                <span className="item-badge">Product thinking</span>
              </div>
              <p>
                I value building useful and meaningful products&mdash;whether
                it&rsquo;s a chat app used by friends, a certificate system used
                for events, or accessibility-focused tools that help real users.
              </p>
            </StaggerItem>
          </div>
        </RevealSection>

        <AboutDivider />

        {/* ═══ EDUCATION ═══ */}
        <RevealSection className="about-section" direction="up">
          <div className="section-label-about">
            <span className="label-dot" />
            Education
          </div>
          <div className="section-content">
            <StaggerItem index={0} className="about-item">
              <div className="item-header">
                <strong>B.Tech in Computer Science &amp; Engineering</strong>
                <span className="item-badge">2023 &mdash; Present</span>
              </div>
              <p>
                Studying core computer science subjects while actively building
                projects in web development, backend systems, and applied AI.
                Currently focused on gaining real-world experience through
                internships and collaborative projects.
              </p>
            </StaggerItem>
          </div>
        </RevealSection>

        <AboutDivider />

        {/* ═══ PHILOSOPHY (signature section) ═══ */}
        <RevealSection className="about-philosophy" direction="up">
          <motion.blockquote
            className="philosophy-quote"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...gentleSpring, delay: 0.15 }}
          >
            <span className="philosophy-ornament-top" aria-hidden="true" />
            <span className="philosophy-mark">&ldquo;</span>
            <p>
              I don&rsquo;t chase trends. I build things that work, feel right,
              and matter to the people using them.
            </p>
            <footer className="philosophy-attr">&mdash; Jayram Sangawat</footer>
            <span className="philosophy-ornament-bottom" aria-hidden="true" />
          </motion.blockquote>
        </RevealSection>

        <AboutDivider />

        {/* ═══ IMAGE GALLERY ═══ */}
        <section className="about-gallery-section">
          <RevealSection className="about-gallery-header" direction="up">
            <span className="section-label-about">
              <span className="label-dot" />
              Moments
            </span>
            <h3 className="gallery-title">Behind the screen</h3>
          </RevealSection>

          <div className="about-gallery">
            <GalleryImage src="/profile.jpg" alt="Profile portrait" index={0} />
            <GalleryImage src="/me.png" alt="Late-night coding" index={1} />
            <GalleryImage
              src="/me-2.png"
              alt="Working with teammates"
              index={2}
            />
          </div>
        </section>
      </main>

      <motion.button
        type="button"
        className="fab"
        aria-label="Quick contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", damping: 15, stiffness: 400 }}
        onClick={() => window.open("mailto:jayram@email.com")}
      >
        &#9993;&#65039;
      </motion.button>

      <motion.button
        type="button"
        className={`to-top ${showTop ? "show" : ""}`}
        onClick={handleScrollToTop}
        aria-label="Return to top"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        &uarr;
      </motion.button>

      <Footer />
    </>
  );
}
