import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "./MagneticButton";

const fadeUp = (delay = 0, isMobile = false) => ({
  initial: { opacity: 0, y: isMobile ? 16 : 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: isMobile ? 0.5 : 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1],
  },
});

const rotatingWords = ["DIGITAL", "CREATIVE", "MODERN", "SCALABLE"];

function Hero() {
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms — reduced on mobile for performance
  const parallaxScale = isMobile || prefersReducedMotion ? 0.3 : 1;
  const blob1Y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120 * parallaxScale],
  );
  const blob2Y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80 * parallaxScale],
  );
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60 * parallaxScale]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40 * parallaxScale]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Rotating word state
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Grid overlay */}
      <motion.div
        className="hero-grid-overlay"
        aria-hidden="true"
        style={{ opacity: gridOpacity }}
      />

      {/* Decorative gradient blobs — parallax */}
      <motion.div
        className="hero-blob blob-1"
        aria-hidden="true"
        style={{ y: blob1Y }}
      />
      <motion.div
        className="hero-blob blob-2"
        aria-hidden="true"
        style={{ y: blob2Y }}
      />

      <div className="hero-inner">
        {/* TEXT COLUMN */}
        <motion.div className="hero-text" style={{ y: textY }}>
          <motion.div className="hero-badge" {...fadeUp(0.1, isMobile)}>
            <span className="status-dot" />
            Open to opportunities
          </motion.div>

          <motion.h1 className="hero-headline" {...fadeUp(0.2, isMobile)}>
            <span className="hero-headline-top">BUILDING</span>
            <span className="hero-headline-accent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  className="rotating-word"
                  initial={{
                    y: isMobile ? 16 : 30,
                    opacity: 0,
                    rotateX: isMobile ? 0 : -40,
                  }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{
                    y: isMobile ? -16 : -30,
                    opacity: 0,
                    rotateX: isMobile ? 0 : 40,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="hero-headline-top">EXPERIENCES</span>
          </motion.h1>

          <motion.p className="hero-sub" {...fadeUp(0.35, isMobile)}>
            Frontend developer crafting clean, thoughtful interfaces with React,
            UI engineering, and portfolio-grade products — focused on clarity,
            usability, and real-world impact.
          </motion.p>

          <motion.div className="hero-cta-group" {...fadeUp(0.45, isMobile)}>
            <MagneticButton href="#work" className="btn btn-primary">
              View Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
              </svg>
            </MagneticButton>
            <MagneticButton href="#contact" className="btn btn-outline-light">
              Get in Touch
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* IMAGE COLUMN — parallax offset */}
        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: imageY }}
        >
          <div className="hero-image-ring" />
          <img
            src="/profile.jpg"
            alt="Jayram Sangawat"
            className="hero-image"
            width="500"
            height="500"
            loading="eager"
          />
          <div className="hero-float-card">
            <span className="hero-float-emoji">🚀</span>
            <span>Building cool stuff</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}

export default Hero;
