import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import resumePdf from "../assets/JAY_Resume_2026.pdf";
import { site } from "../data/site";
import MagneticButton from "./MagneticButton";
import { mediaQuery } from "../utils/breakpoints";

const fadeUp = (delay = 0, isMobile = false) => ({
  initial: { opacity: 0, y: isMobile ? 20 : 32, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: {
    type: "spring",
    damping: isMobile ? 25 : 30,
    stiffness: isMobile ? 180 : 200,
    mass: 0.8,
    delay,
  },
});

const springConfig = { damping: 50, stiffness: 100, mass: 0.5 };

function Hero() {
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMq = window.matchMedia(mediaQuery.mobileMax);
    const syncMobile = () => setIsMobile(mobileMq.matches);

    syncMobile();
    mobileMq.addEventListener("change", syncMobile);
    return () => mobileMq.removeEventListener("change", syncMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const parallaxScale = isMobile || prefersReducedMotion ? 0.15 : 1;
  const blob1YRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80 * parallaxScale],
  );
  const imageYRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 50 * parallaxScale],
  );
  const textYRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 30 * parallaxScale],
  );

  const blob1Y = useSpring(blob1YRaw, springConfig);
  const imageY = useSpring(imageYRaw, springConfig);
  const textY = useSpring(textYRaw, springConfig);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.1,
        delayChildren: 0.08,
      },
    },
  };

  return (
    <section className="hero-section" ref={heroRef}>
      <motion.div
        className="hero-grid-overlay"
        aria-hidden="true"
        style={{ opacity: gridOpacity }}
      />

      <motion.div
        className="hero-blob blob-1"
        aria-hidden="true"
        style={{ y: blob1Y }}
      />

      <motion.div
        className="hero-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" style={{ y: textY }}>
          <motion.div className="hero-badge" {...fadeUp(0.05, isMobile)}>
            <span className="status-dot" />
            Open to opportunities
          </motion.div>

          <motion.h1 className="hero-headline hero-headline--identity" {...fadeUp(0.12, isMobile)}>
            <span className="hero-name heading-display">{site.name}</span>
            <span className="hero-role">{site.role}</span>
          </motion.h1>

          <motion.p className="hero-sub" {...fadeUp(0.22, isMobile)}>
            {site.tagline}
          </motion.p>

          <motion.div className="hero-cta-group" {...fadeUp(0.32, isMobile)}>
            <MagneticButton href="#work" className="btn btn-primary">
              View work
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
            <MagneticButton
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              Resume
            </MagneticButton>
          </motion.div>

          <motion.div className="hero-profiles" {...fadeUp(0.42, isMobile)}>
            <a
              href="https://leetcode.com/u/jayramleet94/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
            <span className="profile-sep">&middot;</span>
            <a
              href="https://www.geeksforgeeks.org/profile/sangawatp3o5"
              target="_blank"
              rel="noopener noreferrer"
            >
              GeeksforGeeks
            </a>
            <span className="profile-sep">&middot;</span>
            <a
              href="https://github.com/jayramgit94"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 28,
            stiffness: 160,
            mass: 0.9,
            delay: isMobile ? 0.12 : 0.2,
          }}
          style={{ y: imageY }}
        >
          <div className="hero-image-ring" />
          <img
            src="/profile.jpg"
            alt={site.name}
            className="hero-image"
            width="500"
            height="500"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
