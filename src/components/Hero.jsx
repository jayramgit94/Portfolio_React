import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "./MagneticButton";

// Smooth spring-based fade-up with stagger
const fadeUp = (delay = 0, isMobile = false) => ({
  initial: { opacity: 0, y: isMobile ? 20 : 40, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: {
    type: "spring",
    damping: isMobile ? 25 : 30,
    stiffness: isMobile ? 180 : 200,
    mass: 0.8,
    delay,
  },
});

const rotatingWords = ["DIGITAL", "CREATIVE", "MODERN", "SCALABLE"];

// Spring config for smooth parallax
const springConfig = { damping: 50, stiffness: 100, mass: 0.5 };

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

  // Parallax transforms — reduced on mobile, spring-smoothed for buttery feel
  const parallaxScale = isMobile || prefersReducedMotion ? 0.15 : 1;
  const blob1YRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120 * parallaxScale],
  );
  const blob2YRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80 * parallaxScale],
  );
  const imageYRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 60 * parallaxScale],
  );
  const textYRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 40 * parallaxScale],
  );

  // Apply springs for silky-smooth parallax
  const blob1Y = useSpring(blob1YRaw, springConfig);
  const blob2Y = useSpring(blob2YRaw, springConfig);
  const imageY = useSpring(imageYRaw, springConfig);
  const textY = useSpring(textYRaw, springConfig);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Rotating word state
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Container stagger for coordinated entrance
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Grid overlay */}
      <motion.div
        className="hero-grid-overlay"
        aria-hidden="true"
        style={{ opacity: gridOpacity }}
      />

      {/* Decorative gradient blobs — spring parallax */}
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

      <motion.div
        className="hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* TEXT COLUMN */}
        <motion.div className="hero-text" style={{ y: textY }}>
          <motion.div className="hero-badge" {...fadeUp(0.05, isMobile)}>
            <span className="status-dot" />
            Open to opportunities
          </motion.div>

          <motion.h1 className="hero-headline" {...fadeUp(0.15, isMobile)}>
            <span className="hero-headline-top">BUILDING</span>
            <span className="hero-headline-accent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  className="rotating-word"
                  initial={{
                    y: isMobile ? 12 : 24,
                    opacity: 0,
                    rotateX: isMobile ? 0 : -40,
                    filter: "blur(3px)",
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    y: isMobile ? -12 : -24,
                    opacity: 0,
                    rotateX: isMobile ? 0 : 40,
                    filter: "blur(3px)",
                  }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 200,
                    mass: 0.6,
                  }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="hero-headline-top">EXPERIENCES</span>
          </motion.h1>

          <motion.p className="hero-sub" {...fadeUp(0.25, isMobile)}>
            Computer Science student building AI-powered and full-stack
            applications through consistency, curiosity, and hard work.
          </motion.p>

          <motion.div className="hero-cta-group" {...fadeUp(0.35, isMobile)}>
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

        {/* IMAGE COLUMN — spring parallax */}
        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 28,
            stiffness: 160,
            mass: 0.9,
            delay: isMobile ? 0.15 : 0.25,
          }}
          style={{ y: imageY }}
        >
          <div className="hero-image-ring" />
          <img
            src="/profile.jpg"
            alt="Jayram G Sangawat"
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: 1,
        }}
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}

export default Hero;
