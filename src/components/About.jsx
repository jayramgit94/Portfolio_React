import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import {
  BreathingOrbs,
  SpotlightFollow,
} from "../components/MicroInteractions";
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

/* ── Signal-pulse divider between about sections ── */
function AboutDivider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div className="about-divider" ref={ref}>
      {/* left accent dots (outermost → innermost) */}
      <motion.span
        className="divider-dot"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.4 } : {}}
        transition={{ delay: 0.65, duration: 0.35, ease: "easeOut" }}
      />
      <motion.span
        className="divider-dot divider-dot--mid"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.55 } : {}}
        transition={{ delay: 0.5, duration: 0.35, ease: "easeOut" }}
      />

      {/* left line: grows from center outward */}
      <motion.div
        className="about-divider-line"
        style={{ transformOrigin: "right center" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* center diamond ornament */}
      <motion.div
        className="divider-ornament"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />

      {/* right line: grows from center outward */}
      <motion.div
        className="about-divider-line"
        style={{ transformOrigin: "left center" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* right accent dots (innermost → outermost) */}
      <motion.span
        className="divider-dot divider-dot--mid"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.55 } : {}}
        transition={{ delay: 0.5, duration: 0.35, ease: "easeOut" }}
      />
      <motion.span
        className="divider-dot"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.4 } : {}}
        transition={{ delay: 0.65, duration: 0.35, ease: "easeOut" }}
      />

      {/* light sweep that runs across once */}
      {inView && <span className="divider-shimmer" />}
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

/* ── Scroll-linked intro section ── */
/* (removed — replaced by unified timeline) */

/* ── Scroll-linked paragraph reveal for intro ── */
function ScrollRevealP({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.p
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...springTransition, delay: 0.05 }}
    >
      {children}
    </motion.p>
  );
}

/* ── Animated timeline dot — activates when scrolled into view ── */
function TimelineNode() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="tl-node" ref={ref}>
      <motion.span
        className={`tl-dot ${inView ? "tl-dot--active" : ""}`}
        initial={{ scale: 0.6, opacity: 0.4 }}
        animate={
          inView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0.4 }
        }
        transition={{ type: "spring", damping: 12, stiffness: 200 }}
      />
      {/* Expanding ring on activation */}
      {inView && (
        <motion.span
          className="tl-ring"
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}
    </div>
  );
}

/* ── Scroll-revealed card (used inside timeline) ── */
function ScrollRevealCard({ children, index = 0, className = "about-item" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...springTransition, delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  );
}

/* ── Confetti colors for hover burst ── */
const BURST_COLORS = [
  "#a78bfa",
  "#818cf8",
  "#34d399",
  "#f472b6",
  "#60a5fa",
  "#fbbf24",
  "#fb923c",
  "#c084fc",
];

function BurstPiece({ x, y, color, delay: d, size, shape }) {
  const fall = 400 + Math.random() * 500;
  const drift = (Math.random() - 0.5) * 300;
  return (
    <motion.span
      style={{
        position: "fixed",
        left: x,
        top: y,
        width: shape === "circle" ? size : size * 0.5,
        height: shape === "circle" ? size : size * 2.5,
        borderRadius: shape === "circle" ? "50%" : "2px",
        backgroundColor: color,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      initial={{ opacity: 1, scale: 0, y: 0, x: 0, rotate: 0 }}
      animate={{
        opacity: [1, 1, 0],
        scale: [0, 1.2, 0.6],
        y: fall,
        x: drift,
        rotate: Math.random() * 1080 - 540,
      }}
      transition={{
        duration: 2.2 + Math.random() * 1.2,
        delay: d,
        ease: [0.2, 0.8, 0.4, 1],
      }}
    />
  );
}

export default function AboutPage() {
  const flipCardRef = useRef(null);
  const heroRef = useRef(null);
  const nativeRef = useRef(null);
  const hoverTimer = useRef(null);
  const hasBurst = useRef(false);
  const [showTop, setShowTop] = useState(false);
  const [burstPieces, setBurstPieces] = useState([]);

  /* ── Timeline (single continuous line from About Me → Certifications) ── */
  const timelineRef = useRef(null);
  const { scrollYProgress: tlProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const smoothTl = useSpring(tlProgress, { damping: 30, stiffness: 100 });

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

    const handleSecretFocus = () => {
      if (!isDesktop.matches) return;
      window.clearTimeout(secretTimer);
      secretTimer = window.setTimeout(() => {
        secretMessage?.classList.add("show");
        aboutRoot?.classList.add("easter-enabled");
      }, 2000);
    };

    const handleSecretBlur = () => {
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
      secretTrigger.addEventListener("focus", handleSecretFocus);
      secretTrigger.addEventListener("blur", handleSecretBlur);
    }

    if (flipCard) {
      flipCard.addEventListener("click", handleFlipClick);
      flipCard.addEventListener("mouseleave", handleFlipLeave);
    }

    return () => {
      if (secretTrigger) {
        secretTrigger.removeEventListener("mouseenter", handleSecretEnter);
        secretTrigger.removeEventListener("mouseleave", handleSecretLeave);
        secretTrigger.removeEventListener("focus", handleSecretFocus);
        secretTrigger.removeEventListener("blur", handleSecretBlur);
      }
      if (flipCard) {
        flipCard.removeEventListener("click", handleFlipClick);
        flipCard.removeEventListener("mouseleave", handleFlipLeave);
      }
    };
  }, []);

  /* ── 2-second hover confetti on Hindi name (full-page, once only) ── */
  const triggerBurst = useCallback(() => {
    if (hasBurst.current) return;
    hasBurst.current = true;
    const vw = window.innerWidth;
    const shapes = ["circle", "rect"];
    const newPieces = Array.from({ length: 80 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * vw,
      y: -20 - Math.random() * 60,
      color: BURST_COLORS[i % BURST_COLORS.length],
      delay: Math.random() * 0.6,
      size: 5 + Math.random() * 8,
      shape: shapes[i % 2],
    }));
    setBurstPieces(newPieces);
    setTimeout(() => setBurstPieces([]), 4000);
  }, []);

  useEffect(() => {
    const el = nativeRef.current;
    if (!el) return;
    const onEnter = () => {
      if (hasBurst.current) return;
      hoverTimer.current = window.setTimeout(() => {
        triggerBurst();
        el.classList.remove("native-hovering");
        el.classList.add("native-done");
      }, 2000);
      el.classList.add("native-hovering");
    };
    const onLeave = () => {
      window.clearTimeout(hoverTimer.current);
      if (!hasBurst.current) el.classList.remove("native-hovering");
    };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      window.clearTimeout(hoverTimer.current);
    };
  }, [triggerBurst]);

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
      <SpotlightFollow />
      <Navbar />

      <main id="main-content" className="about">
        <BreathingOrbs count={3} />
        {/* Noise texture overlay */}
        <div className="about-noise" aria-hidden="true" />

        {/* ═══ HERO ═══ */}
        <section
          className="about-hero"
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
        >
          {/* Animated mesh gradient background */}
          <div className="hero-mesh" aria-hidden="true">
            <div className="hero-mesh-orb hero-mesh-orb--1" />
            <div className="hero-mesh-orb hero-mesh-orb--2" />
            <div className="hero-mesh-orb hero-mesh-orb--3" />
          </div>
          {/* Dot grid overlay */}
          <div className="hero-dotgrid" aria-hidden="true" />

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
            <span className="about-role">AI + Full-Stack Developer</span>
            <h1 className="about-name">
              Jayram G <span className="about-name-accent">Sangawat</span>
            </h1>
            <h2 className="about-native" ref={nativeRef}>
              &#2332;&#2351;&#2352;&#2366;&#2350;{" "}
              &#2360;&#2306;&#2327;&#2366;&#2357;&#2340;
            </h2>
            <p className="about-pronunciation">/ Jay-raam San-ga-vat /</p>
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
                    alt="Jayram G Sangawat"
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

        {/* Confetti burst pieces (from 2s hover on Hindi name) */}
        {burstPieces.length > 0 && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              pointerEvents: "none",
              zIndex: 9999,
            }}
          >
            {burstPieces.map((p) => (
              <BurstPiece key={p.id} {...p} />
            ))}
          </div>
        )}

        <AboutDivider />

        {/* ═══ UNIFIED TIMELINE: About Me → Certifications ═══ */}
        <div className="about-timeline" ref={timelineRef}>
          {/* Single continuous progress line */}
          <motion.div className="tl-line" style={{ scaleY: smoothTl }} />

          {/* ── About Me ── */}
          <div className="tl-section">
            <TimelineNode />
            <h2 className="tl-head">About me</h2>
            <div className="tl-content tl-content--intro">
              <ScrollRevealP className="intro-lead">
                I&rsquo;m a{" "}
                <span className="text-highlight">
                  Computer Science student with an 8.20 CGPA
                </span>{" "}
                at JD College of Engineering, Nagpur &mdash; passionate about
                building real-world software from problem solving to deployment.
              </ScrollRevealP>

              <ScrollRevealP>
                I&rsquo;ve shipped 5 live projects including a real-time sign
                language detector (93% accuracy), an automated certificate
                system (200+ issued), and AI-powered resume &amp; repo
                analyzers. My stack spans React, Python, FastAPI, TensorFlow,
                and MongoDB.
              </ScrollRevealP>

              <ScrollRevealP>
                Beyond building, I&rsquo;m an active problem solver &mdash; 150+
                DSA problems on LeetCode &amp; GeeksforGeeks, 5 certifications
                across React.js, JavaScript, C++, and Python, and 3 hackathon
                participations.
              </ScrollRevealP>

              <ScrollRevealP>
                Currently exploring advanced React patterns, machine learning
                fundamentals, and API architecture while looking for internship
                opportunities where I can contribute to real products.
              </ScrollRevealP>

              <ScrollRevealP className="about-easter">
                <span
                  className="about-secret-trigger"
                  tabIndex={0}
                  role="button"
                  aria-label="Hover or focus here for 2 seconds to reveal a hint"
                >
                  Hover here for 2 seconds&hellip;
                </span>
                <span className="about-secret-message">
                  Go up and hover (or click) on the profile photo &#128064;
                </span>
              </ScrollRevealP>
            </div>
          </div>

          {/* ── Experience ── */}
          <div className="tl-section">
            <TimelineNode />
            <h2 className="tl-head">Experience</h2>
            <div className="tl-content">
              <ScrollRevealCard index={0}>
                <div className="item-header">
                  <strong>AI &amp; Full-Stack Projects</strong>
                  <span className="item-badge">2023 &mdash; Present</span>
                </div>
                <p>
                  Built and deployed 5 end-to-end projects: a TensorFlow-based
                  sign language detector, an automated certificate generator
                  (200+ certificates issued), AI-powered resume &amp; repo
                  analyzers using Google Gemini, and an Airbnb-style full-stack
                  clone. All are live and open-source.
                </p>
              </ScrollRevealCard>
              <ScrollRevealCard index={1}>
                <div className="item-header">
                  <strong>DSA &amp; Competitive Practice</strong>
                  <span className="item-badge">150+ problems</span>
                </div>
                <p>
                  Practicing data structures and algorithms on LeetCode &amp;
                  GeeksforGeeks to build strong fundamentals in problem-solving,
                  time complexity analysis, and interview readiness.
                </p>
              </ScrollRevealCard>
            </div>
          </div>

          {/* ── Hackathons ── */}
          <div className="tl-section">
            <TimelineNode />
            <h2 className="tl-head">Hackathons</h2>
            <div className="tl-content">
              <ScrollRevealCard index={0}>
                <div className="item-header">
                  <strong>SB Jain Hackathon</strong>
                  <span className="item-badge">Cleared Round 1</span>
                </div>
                <p>
                  Built and presented a working solution that advanced past the
                  initial screening round, demonstrating problem-solving under
                  time constraints.
                </p>
              </ScrollRevealCard>
              <ScrollRevealCard index={1}>
                <div className="item-header">
                  <strong>Raisoni Hackathon</strong>
                  <span className="item-badge">Complete Implementation</span>
                </div>
                <p>
                  Developed a full end-to-end project during the hackathon,
                  delivering a complete working solution from ideation to demo.
                </p>
              </ScrollRevealCard>
              <ScrollRevealCard index={2}>
                <div className="item-header">
                  <strong>SB Jain Hackathon</strong>
                  <span className="item-badge">Team Collaboration</span>
                </div>
                <p>
                  Participated as part of a team, contributing to rapid
                  prototyping and collaborative problem-solving in a competitive
                  environment.
                </p>
              </ScrollRevealCard>
            </div>
          </div>

          {/* ── Values ── */}
          <div className="tl-section">
            <TimelineNode />
            <h2 className="tl-head">Values</h2>
            <div className="tl-content">
              <ScrollRevealCard index={0}>
                <div className="item-header">
                  <strong>Ship first, polish later</strong>
                  <span className="item-badge">Builder mindset</span>
                </div>
                <p>
                  Every project I&rsquo;ve built started as a rough prototype
                  that I iterated on until it worked reliably. I&rsquo;d rather
                  deploy something useful today than plan a perfect system that
                  never ships.
                </p>
              </ScrollRevealCard>
            </div>
          </div>

          {/* ── Education ── */}
          <div className="tl-section">
            <TimelineNode />
            <h2 className="tl-head">Education</h2>
            <div className="tl-content">
              <ScrollRevealCard index={0}>
                <div className="item-header">
                  <strong>B.Tech &mdash; Computer Science Engineering</strong>
                  <span className="item-badge">2023 &mdash; 2027</span>
                </div>
                <p>
                  JD College of Engineering and Management, Nagpur. Currently in
                  6th semester with an <strong>8.20 CGPA</strong>. Studying core
                  computer science subjects while actively building projects in
                  web development, backend systems, AI, and machine learning.
                </p>
              </ScrollRevealCard>
            </div>
          </div>

          {/* ── Certifications (last timeline section) ── */}
          <div className="tl-section tl-section--last">
            <TimelineNode />
            <h2 className="tl-head">Certifications</h2>
            <div className="tl-content">
              {[
                { name: "React.js", platform: "GeeksforGeeks" },
                { name: "JavaScript", platform: "GeeksforGeeks" },
                { name: "C++ Programming", platform: "GeeksforGeeks" },
                { name: "Soft Skills Development", platform: "GeeksforGeeks" },
                { name: "Python Programming", platform: "Coursera" },
              ].map((cert, i) => (
                <ScrollRevealCard key={cert.name} index={i}>
                  <div className="item-header">
                    <strong>{cert.name}</strong>
                    <span className="item-badge">{cert.platform}</span>
                  </div>
                </ScrollRevealCard>
              ))}
            </div>
          </div>

          {/* Terminal dot */}
          <div className="tl-terminal">
            <span className="tl-dot tl-dot--end" />
          </div>
        </div>

        <AboutDivider />

        {/* ═══ PHILOSOPHY (outside timeline) ═══ */}
        <RevealSection className="about-philosophy">
          {/* Abstract organic line art decoration */}
          <div className="abstract-lines" aria-hidden="true">
            <svg
              viewBox="0 0 800 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="abstract-lines-svg"
            >
              {/* Flowing curve 1 - large sweep */}
              <path
                d="M-50 180 C100 80, 250 220, 400 140 S650 60, 850 160"
                stroke="url(#line-grad-1)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Flowing curve 2 - parallel offset */}
              <path
                d="M-30 200 C120 100, 270 240, 420 160 S670 80, 870 180"
                stroke="url(#line-grad-2)"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.5"
              />
              {/* Flowing curve 3 - counter flow */}
              <path
                d="M-40 80 C80 180, 200 40, 380 120 S600 220, 850 100"
                stroke="url(#line-grad-3)"
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.35"
              />
              {/* Small accent circles */}
              <circle
                cx="200"
                cy="140"
                r="3"
                fill="url(#dot-grad)"
                opacity="0.4"
              />
              <circle
                cx="400"
                cy="145"
                r="2"
                fill="url(#dot-grad)"
                opacity="0.3"
              />
              <circle
                cx="580"
                cy="120"
                r="4"
                fill="url(#dot-grad)"
                opacity="0.25"
              />
              <circle
                cx="650"
                cy="155"
                r="2.5"
                fill="url(#dot-grad)"
                opacity="0.35"
              />
              <circle
                cx="150"
                cy="170"
                r="2"
                fill="url(#dot-grad)"
                opacity="0.3"
              />
              {/* Ring accents */}
              <circle
                cx="300"
                cy="110"
                r="8"
                stroke="url(#line-grad-1)"
                strokeWidth="0.8"
                fill="none"
                opacity="0.2"
              />
              <circle
                cx="550"
                cy="170"
                r="6"
                stroke="url(#line-grad-2)"
                strokeWidth="0.8"
                fill="none"
                opacity="0.15"
              />
              <defs>
                <linearGradient
                  id="line-grad-1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="var(--color-primary)"
                    stopOpacity="0"
                  />
                  <stop
                    offset="30%"
                    stopColor="var(--color-primary)"
                    stopOpacity="0.4"
                  />
                  <stop
                    offset="70%"
                    stopColor="var(--color-accent)"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-accent)"
                    stopOpacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="line-grad-2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="var(--color-accent)"
                    stopOpacity="0"
                  />
                  <stop
                    offset="40%"
                    stopColor="var(--color-accent)"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="60%"
                    stopColor="var(--color-primary)"
                    stopOpacity="0.25"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-primary)"
                    stopOpacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="line-grad-3"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="var(--color-primary)"
                    stopOpacity="0"
                  />
                  <stop
                    offset="50%"
                    stopColor="var(--color-primary)"
                    stopOpacity="0.2"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--color-accent)"
                    stopOpacity="0"
                  />
                </linearGradient>
                <radialGradient id="dot-grad">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="var(--color-accent)" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <h3 className="standalone-label">Philosophy</h3>
          <blockquote className="philosophy-quote">
            <span className="philosophy-ornament-top" aria-hidden="true" />
            <span className="philosophy-mark">&ldquo;</span>
            <p>
              I don&rsquo;t chase trends. I build things that work, feel right,
              and matter to the people using them.
            </p>
            <footer className="philosophy-attr">
              &mdash; Jayram G Sangawat
            </footer>
            <span className="philosophy-ornament-bottom" aria-hidden="true" />
          </blockquote>
        </RevealSection>

        <AboutDivider />

        {/* ═══ IMAGE GALLERY (outside timeline) ═══ */}
        <RevealSection className="about-gallery-section">
          <h3 className="standalone-label">Moments</h3>
          <div className="gallery-grid">
            <GalleryImage src="/profile.jpg" alt="That's me" index={0} />
            <GalleryImage
              src="/me.png"
              alt="Where the code happens"
              index={1}
            />
            <GalleryImage
              src="/me-2.png"
              alt="Team hackathon session"
              index={2}
            />
          </div>
        </RevealSection>
      </main>

      <motion.button
        type="button"
        className="fab"
        aria-label="Quick contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", damping: 15, stiffness: 400 }}
        onClick={() => window.open("mailto:sangawatjayram@gmail.com")}
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
