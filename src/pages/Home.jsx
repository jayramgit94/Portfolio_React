import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MagneticButton from "../components/MagneticButton";
import Navbar from "../components/Navbar";
import SectionDivider from "../components/SectionDivider";
import Work from "../components/Work";
import "../styles/global.css";

const tools = [
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
    name: "JavaScript",
    icon: "JS",
    info: "Logic, interactivity, state",
    color: "js",
  },
  {
    name: "React",
    icon: "\u269B",
    info: "Component systems & UI logic",
    color: "react",
  },
  {
    name: "GitHub",
    icon: "\uD83D\uDCBB",
    info: "Collaboration & CI habits",
    color: "github",
  },
  {
    name: "Docker",
    icon: "\uD83D\uDC33",
    info: "Containerized dev & deploy",
    color: "docker",
  },
  {
    name: "Python",
    icon: "Py",
    info: "Automation & data tooling",
    color: "python",
  },
  { name: "C++", icon: "C++", info: "Core logic & performance", color: "cpp" },
  {
    name: "Bootstrap",
    icon: "B",
    info: "Rapid UI scaffolding",
    color: "bootstrap",
  },
  {
    name: "Figma",
    icon: "\u25C6",
    info: "Design, prototypes & handoff",
    color: "figma",
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
  { number: "10+", label: "Projects Delivered" },
  { number: "5+", label: "Tech Stacks" },
  { number: "2+", label: "Years of Learning" },
  { number: "100%", label: "Passion Driven" },
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
          Delivered Impact
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
              <span className="impact-number">{stat.number}</span>
              <span className="impact-desc">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
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
        <div className="cta-grid-overlay" />
        <div className="cta-content">
          <h2 className="cta-headline">
            GET IN <span className="cta-accent">TOUCH</span>
          </h2>
          <p className="cta-sub">
            Have a project in mind or want to collaborate? I&rsquo;m always open
            to new opportunities and interesting conversations.
          </p>
          <div className="cta-links">
            <MagneticButton
              href="mailto:jayram@email.com"
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
            <MagneticButton
              href="https://github.com/jayramgit94"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              GitHub
            </MagneticButton>
            <MagneticButton
              href="https://linkedin.com/in/jayram-sangawat"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              LinkedIn
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

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />

      <SectionDivider />

      <Work />

      <SectionDivider />

      {/* ===== TOOLKIT SECTION ===== */}
      <RevealSection>
        <section className="toolkit-section">
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

      {/* ===== MARQUEE STRIP ===== */}
      <RevealSection delay={0.1}>
        <div className="marquee-strip" aria-hidden="true">
          <div className="marquee-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="marquee-content">
                <span className="marquee-dot">✦</span> Clean Code
                <span className="marquee-dot">✦</span> Pixel Perfect
                <span className="marquee-dot">✦</span> User First
                <span className="marquee-dot">✦</span> Performance Obsessed
                <span className="marquee-dot">✦</span> Responsive Design
                <span className="marquee-dot">✦</span> Modern Stack
                <span className="marquee-dot">✦</span> Open Source
                <span className="marquee-dot">✦</span> Problem Solver
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
      <Contact />

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
