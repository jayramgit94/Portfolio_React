import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MagneticButton from "../components/MagneticButton";
import {
  AuroraStrips,
  ConfettiBurst,
  CountUp,
  FloatingIcons,
  MorphingBlob,
  SpotlightFollow,
  TextScramble,
} from "../components/MicroInteractions";
import Navbar from "../components/Navbar";
import SectionDivider from "../components/SectionDivider";
import Work from "../components/Work";
import "../styles/global.css";

const tools = [
  {
    name: "C++",
    icon: "C++",
    info: "Core logic & problem solving",
    color: "cpp",
  },
  {
    name: "Python",
    icon: "Py",
    info: "AI, ML & automation",
    color: "python",
  },
  {
    name: "JavaScript",
    icon: "JS",
    info: "Logic, interactivity, state",
    color: "js",
  },
  {
    name: "HTML",
    icon: "\u2318",
    info: "Semantic structure & accessibility",
    color: "html",
  },
  {
    name: "CSS",
    icon: "\u2726",
    info: "Layouts, motion, visual polish",
    color: "css",
  },
  {
    name: "React",
    icon: "\u269B",
    info: "Component systems & UI logic",
    color: "react",
  },
  {
    name: "Node.js",
    icon: "N",
    info: "Backend APIs & server logic",
    color: "github",
  },
  {
    name: "MongoDB",
    icon: "\uD83C\uDF43",
    info: "NoSQL database & data modeling",
    color: "python",
  },
  {
    name: "Git",
    icon: "\u23C7",
    info: "Version control & collaboration",
    color: "git",
  },
  {
    name: "GitHub",
    icon: "\uD83D\uDCBB",
    info: "Code hosting & CI/CD",
    color: "github",
  },
];

function ToolkitCard({ tool, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={`toolkit-card ${tool.color}`}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ scaleX: 1.03, scaleY: 0.97 }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="toolkit-icon">{tool.icon}</div>
      <span className="toolkit-name">{tool.name}</span>
      <span className="toolkit-info">{tool.info}</span>
    </motion.div>
  );
}

const stats = [
  { number: "5", label: "Live Deployed Projects" },
  { number: "8.20", label: "CGPA" },
  { number: "150+", label: "DSA Problems Solved" },
  { number: "3+", label: "Years Building" },
];

const certifications = [
  { name: "React.js", platform: "GeeksforGeeks" },
  { name: "JavaScript", platform: "GeeksforGeeks" },
  { name: "C++ Programming", platform: "GeeksforGeeks" },
  { name: "Soft Skills Development", platform: "GeeksforGeeks" },
  { name: "Python Programming", platform: "Coursera" },
];

function StatsRow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="impact-section" ref={ref}>
      <div className="impact-inner">
        <motion.span
          className="section-label impact-label"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <TextScramble text="By the Numbers" />
        </motion.span>
        <div className="impact-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="impact-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <CountUp value={stat.number} className="impact-number" />
              <span className="impact-desc">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ ctaBtnRef }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="cta-section" ref={ref}>
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <AuroraStrips />
        <div className="cta-grid-overlay" />
        <div className="cta-content">
          <h2 className="cta-headline">
            GET IN <TextScramble text="TOUCH" className="cta-accent" />
          </h2>
          <p className="cta-sub">
            Looking for a developer who ships real projects? Let&rsquo;s talk
            about internships, freelance work, or open-source collaboration.
          </p>
          <div className="cta-contact-info">
            <a href="tel:+919421438043">+91 9421438043</a>
            <span className="cta-info-sep">&middot;</span>
            <a href="mailto:sangawatjayram@gmail.com">
              sangawatjayram@gmail.com
            </a>
          </div>
          <div className="cta-links">
            <div ref={ctaBtnRef} style={{ display: "inline-flex" }}>
              <MagneticButton
                href="mailto:sangawatjayram@gmail.com"
                className="btn btn-primary"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Say Hello
              </MagneticButton>
            </div>
            <MagneticButton
              href="https://github.com/jayramgit94"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              GitHub
            </MagneticButton>
            <MagneticButton
              href="https://www.linkedin.com/in/jayram-s-6b1865293/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href="https://leetcode.com/u/jayramleet94/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              LeetCode
            </MagneticButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Konami code sequence
const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

// Reusable scroll-reveal wrapper
function RevealSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const [easterEgg, setEasterEgg] = useState(false);
  const konamiIndex = useRef(0);

  const handleKonami = useCallback((e) => {
    if (e.key === KONAMI[konamiIndex.current]) {
      konamiIndex.current++;
      if (konamiIndex.current === KONAMI.length) {
        setEasterEgg(true);
        konamiIndex.current = 0;
        setTimeout(() => setEasterEgg(false), 3500);
      }
    } else {
      konamiIndex.current = 0;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKonami);
    return () => window.removeEventListener("keydown", handleKonami);
  }, [handleKonami]);

  const ctaBtnRef = useRef(null);

  return (
    <>
      <Cursor />
      <SpotlightFollow />
      <ConfettiBurst triggerRef={ctaBtnRef} />
      <Navbar />
      <Hero />
      <MorphingBlob className="home-blob" />

      <SectionDivider />

      <Work />

      <SectionDivider />

      {/* ===== TOOLKIT SECTION ===== */}
      <RevealSection>
        <section className="toolkit-section">
          <FloatingIcons />
          <div className="toolkit-header">
            <span className="section-label">Toolkit</span>
            <h2 className="section-title">
              Technologies I <span className="text-gradient">work with</span>
            </h2>
          </div>

          <div className="toolkit-grid">
            {tools.map((tool, i) => (
              <ToolkitCard key={tool.name} tool={tool} index={i} />
            ))}
          </div>
        </section>
      </RevealSection>

      <SectionDivider />

      {/* ===== CURRENTLY LEARNING ===== */}
      <RevealSection>
        <section className="learning-section">
          <span className="section-label">What I&rsquo;m into right now</span>
          <p className="learning-text">
            Digging deeper into <strong>advanced React patterns</strong>,
            building more <strong>AI/ML side projects</strong>, getting better
            at <strong>REST &amp; API design</strong>, and grinding{" "}
            <strong>DSA</strong> daily.
          </p>
        </section>
      </RevealSection>

      <SectionDivider />

      {/* ===== CERTIFICATIONS ===== */}
      <RevealSection>
        <section className="cert-section">
          <div className="toolkit-header">
            <span className="section-label">Credentials</span>
            <h2 className="section-title">
              Certifications &amp;{" "}
              <span className="text-gradient">courses</span>
            </h2>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="cert-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="cert-platform">{cert.platform}</span>
                <span className="cert-name">{cert.name}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* ===== MARQUEE STRIP ===== */}
      <RevealSection delay={0.1}>
        <div className="marquee-strip" aria-hidden="true">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="marquee-content">
                <span className="marquee-dot">✦</span> AI &amp; ML
                <span className="marquee-dot">✦</span> Full-Stack
                <span className="marquee-dot">✦</span> React
                <span className="marquee-dot">✦</span> Python
                <span className="marquee-dot">✦</span> FastAPI
                <span className="marquee-dot">✦</span> TensorFlow
                <span className="marquee-dot">✦</span> Node.js
                <span className="marquee-dot">✦</span> MongoDB
              </span>
            ))}
          </div>
        </div>
      </RevealSection>

      <SectionDivider />

      {/* ===== STATS ROW ===== */}
      <StatsRow />

      <SectionDivider />

      {/* ===== CONTACT SECTION ===== */}
      <Contact ctaBtnRef={ctaBtnRef} />

      <Footer />

      {/* ===== EASTER EGG ===== */}
      <AnimatePresence>
        {easterEgg && (
          <motion.div
            className="easter-egg-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setEasterEgg(false)}
          >
            <div className="easter-egg-content">
              <span className="easter-egg-emoji">🎮</span>
              <p className="easter-egg-text">You found the secret!</p>
              <p className="easter-egg-sub">
                You&rsquo;re clearly a person of culture. Let&rsquo;s build
                something awesome together.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
