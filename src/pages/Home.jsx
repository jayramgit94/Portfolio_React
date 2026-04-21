import { AnimatePresence, motion as Motion, useInView } from "framer-motion";
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import Cursor from "../components/Cursor";
import Hero from "../components/Hero";
import MagneticButton from "../components/MagneticButton";
import {
  ConfettiBurst,
  CountUp,
  MorphingBlob,
  SpotlightFollow,
  TextScramble,
} from "../components/MicroInteractions";
import {
  SiCplusplus,
  SiCoursera,
  SiCss,
  SiGeeksforgeeks,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";
import Navbar from "../components/Navbar";
import SectionDivider from "../components/SectionDivider";
import certifications from "../data/certifications";
import "../styles/global.css";

const Footer = lazy(() => import("../components/Footer"));
const Work = lazy(() => import("../components/Work"));

const tools = [
  {
    name: "C++",
    Icon: SiCplusplus,
    info: "Core logic & problem solving",
    color: "cpp",
  },
  {
    name: "Python",
    Icon: SiPython,
    info: "AI, ML & automation",
    color: "python",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    info: "Logic, interactivity, state",
    color: "js",
  },
  {
    name: "HTML",
    Icon: SiHtml5,
    info: "Semantic structure & accessibility",
    color: "html",
  },
  {
    name: "CSS",
    Icon: SiCss,
    info: "Layouts, motion, visual polish",
    color: "css",
  },
  {
    name: "React",
    Icon: SiReact,
    info: "Component systems & UI logic",
    color: "react",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    info: "Backend APIs & server logic",
    color: "node",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    info: "NoSQL database & data modeling",
    color: "mongodb",
  },
  {
    name: "Git",
    Icon: SiGit,
    info: "Version control & collaboration",
    color: "git",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    info: "Code hosting & CI/CD",
    color: "github",
  },
];

function ToolkitCard({ tool, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const IconComponent = tool.Icon;

  return (
    <Motion.div
      ref={ref}
      className={`toolkit-ref-card ${tool.color}`}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="toolkit-ref-icon-wrap" aria-hidden="true">
        <IconComponent className="toolkit-ref-icon" />
      </div>
      <span className="toolkit-ref-name">{tool.name}</span>
      <span className="toolkit-ref-info">{tool.info}</span>
    </Motion.div>
  );
}

const stats = [
  { number: "5+", label: "Live Deployed Projects" },
  { number: "8.39", label: "CGPA" },
  { number: "150+", label: "DSA Problems Solved" },
  { number: "2+", label: "Years Building" },
];

function StatsRow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="impact-section" ref={ref}>
      <div className="impact-inner">
        <Motion.span
          className="section-label impact-label"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <TextScramble text="By the Numbers" />
        </Motion.span>
        <div className="impact-grid">
          {stats.map((stat, i) => (
            <Motion.div
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
            </Motion.div>
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
      <Motion.div
        className="cta-box"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="cta-layout">
          <div className="cta-content">
            <h2 className="cta-headline">
              Let&apos;s Build Something Impactful
            </h2>
            <p className="cta-sub cta-sub-primary">
              From idea to deployment, I deliver outcome-focused full-stack and
              AI products that are fast, reliable, and production-ready.
            </p>

            <div className="cta-action-row">
              <div ref={ctaBtnRef} className="cta-action-wrap">
                <MagneticButton
                  href="mailto:sangawatjayram@gmail.com"
                  className="cta-connect-btn"
                >
                  Start a Project
                  <span aria-hidden="true" className="cta-arrow">
                    -&gt;
                  </span>
                </MagneticButton>
              </div>
            </div>

            <p className="cta-trust">Usually replies within 24 hours</p>

            <div className="cta-quick-links">
              <a
                href="https://github.com/jayramgit94"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jayram-s-6b1865293/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/jayramleet94/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode
              </a>
              <a href="mailto:sangawatjayram@gmail.com">Email</a>
            </div>
          </div>

          <div className="cta-media">
            <img
              src="/contact_sec_img.avif"
              alt="Contact section visual"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Motion.div>
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
    <Motion.div
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
    </Motion.div>
  );
}

function DeferredMount({ children, minHeight = 320, margin = "320px" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });

  return (
    <div ref={ref} style={inView ? undefined : { minHeight }}>
      {inView ? children : null}
    </div>
  );
}

function Home() {
  const [easterEgg, setEasterEgg] = useState(false);
  const [enableFancyEffects, setEnableFancyEffects] = useState(false);
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
    window.addEventListener("keydown", handleKonami, { passive: true });
    return () => window.removeEventListener("keydown", handleKonami);
  }, [handleKonami]);

  useEffect(() => {
    const pointerMq = window.matchMedia("(pointer: fine)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setEnableFancyEffects(pointerMq.matches && !motionMq.matches);
    };

    sync();
    pointerMq.addEventListener("change", sync);
    motionMq.addEventListener("change", sync);

    return () => {
      pointerMq.removeEventListener("change", sync);
      motionMq.removeEventListener("change", sync);
    };
  }, []);

  const ctaBtnRef = useRef(null);
  const certPlatformIcons = {
    gfg: SiGeeksforgeeks,
    coursera: SiCoursera,
    nptel: SiPython,
  };

  return (
    <>
      {enableFancyEffects && <Cursor />}
      {enableFancyEffects && <SpotlightFollow />}
      {enableFancyEffects && <ConfettiBurst triggerRef={ctaBtnRef} />}
      <Navbar />
      <main id="main-content">
        <Hero />
        {enableFancyEffects && <MorphingBlob className="home-blob" />}

        <DeferredMount minHeight={780} margin="260px">
          <SectionDivider className="section-divider--landing-project" />
          <Suspense fallback={null}>
            <Work />
          </Suspense>
          <SectionDivider />
        </DeferredMount>

        {/* ===== TOOLKIT SECTION ===== */}
        <DeferredMount minHeight={640} margin="220px">
          <RevealSection>
            <section className="toolkit-ref-section" aria-labelledby="toolkit-title">
              <div className="toolkit-ref-header">
                <h2 className="toolkit-ref-title" id="toolkit-title">
                  TOOLKIT
                </h2>
              </div>

              <div className="toolkit-ref-grid">
                {tools.map((tool, i) => (
                  <ToolkitCard key={tool.name} tool={tool} index={i} />
                ))}
              </div>
            </section>
          </RevealSection>

          <SectionDivider />
        </DeferredMount>

        {/* ===== CERTIFICATIONS ===== */}
        <DeferredMount minHeight={560} margin="220px">
          <RevealSection>
            <section className="cert-section">
              <div className="toolkit-header">
                <h2 className="section-title">Certifications</h2>
              </div>
              <div className="cert-grid">
                {certifications.map((cert, i) => {
                  const IconComponent =
                    certPlatformIcons[cert.platformClass] ?? SiPython;

                  return (
                    <Motion.div
                      key={`${cert.name}-${cert.platform}`}
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
                      <div className="cert-platform-row">
                        <span
                          className={`cert-platform-icon ${cert.platformClass}`}
                          aria-hidden="true"
                        >
                          <IconComponent />
                        </span>
                        <span className="cert-platform">{cert.platform}</span>
                      </div>
                      <span className="cert-name">{cert.name}</span>
                    </Motion.div>
                  );
                })}
              </div>
            </section>
          </RevealSection>

          <SectionDivider />
        </DeferredMount>

        <DeferredMount minHeight={420} margin="220px">
          {/* ===== STATS ROW ===== */}
          <StatsRow />

          <SectionDivider />
        </DeferredMount>

        <DeferredMount minHeight={640} margin="180px">
          {/* ===== CONTACT SECTION ===== */}
          <Contact ctaBtnRef={ctaBtnRef} />

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </DeferredMount>

        {/* ===== EASTER EGG ===== */}
        <AnimatePresence>
          {easterEgg && (
            <Motion.div
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
            </Motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

export default Home;
