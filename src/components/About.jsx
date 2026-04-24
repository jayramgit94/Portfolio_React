import {
  motion as Motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
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

const dotBurstOffsets = [
  { x: "8%", y: "18%", delay: "0ms" },
  { x: "16%", y: "66%", delay: "35ms" },
  { x: "24%", y: "38%", delay: "70ms" },
  { x: "38%", y: "14%", delay: "105ms" },
  { x: "46%", y: "72%", delay: "140ms" },
  { x: "58%", y: "28%", delay: "175ms" },
  { x: "68%", y: "60%", delay: "210ms" },
  { x: "78%", y: "22%", delay: "245ms" },
  { x: "86%", y: "52%", delay: "280ms" },
  { x: "92%", y: "34%", delay: "315ms" },
];

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
    <Motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...variants[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ ...springTransition, delay }}
      {...rest}
    >
      {children}
    </Motion.section>
  );
}

/* ── Signal-pulse divider between about sections ── */
function AboutDivider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div className="about-divider" ref={ref}>
      {/* left accent dots (outermost → innermost) */}
      <Motion.span
        className="divider-dot"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.4 } : {}}
        transition={{ delay: 0.65, duration: 0.35, ease: "easeOut" }}
      />
      <Motion.span
        className="divider-dot divider-dot--mid"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.55 } : {}}
        transition={{ delay: 0.5, duration: 0.35, ease: "easeOut" }}
      />

      {/* left line: grows from center outward */}
      <Motion.div
        className="about-divider-line"
        style={{ transformOrigin: "right center" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* center diamond ornament */}
      <Motion.div
        className="divider-ornament"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />

      {/* right line: grows from center outward */}
      <Motion.div
        className="about-divider-line"
        style={{ transformOrigin: "left center" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* right accent dots (innermost → outermost) */}
      <Motion.span
        className="divider-dot divider-dot--mid"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 0.55 } : {}}
        transition={{ delay: 0.5, duration: 0.35, ease: "easeOut" }}
      />
      <Motion.span
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

/* ── Scroll-linked intro section ── */
/* (removed — replaced by unified timeline) */

/* ── Scroll-linked paragraph reveal for intro ── */
function ScrollRevealP({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <Motion.p
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...springTransition, delay: 0.05 }}
    >
      {children}
    </Motion.p>
  );
}

/* ── Animated timeline dot — activates when scrolled into view ── */
function TimelineNode() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="tl-node" ref={ref}>
      <Motion.span
        className={`tl-dot ${inView ? "tl-dot--active" : ""}`}
        initial={{ scale: 0.6, opacity: 0.4 }}
        animate={
          inView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0.4 }
        }
        transition={{ type: "spring", damping: 12, stiffness: 200 }}
      />
      {/* Expanding ring on activation */}
      {inView && (
        <Motion.span
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
    <Motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...springTransition, delay: index * 0.08 }}
    >
      {children}
    </Motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef(null);
  const photoWrapRef = useRef(null);
  const photoMoveRafRef = useRef(0);
  const photoMoveTargetRef = useRef({ x: 0, y: 0 });
  const photoActivateTimerRef = useRef(null);
  const secretTimerRef = useRef(null);
  const philosophyLoopRef = useRef(null);
  const helperTimerRef = useRef(null);
  const quoteTimerRef = useRef(null);
  const signatureTimerRef = useRef(null);
  const unlockHintShownRef = useRef(false);
  const showTopRef = useRef(false);
  const [isMobileAbout, setIsMobileAbout] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [hasFinePointerDesktop, setHasFinePointerDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isSecretUnlocked, setIsSecretUnlocked] = useState(false);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [isPhotoInteractive, setIsPhotoInteractive] = useState(false);
  const [geoLayoutIndex, setGeoLayoutIndex] = useState(0);
  const [showDesignHelper, setShowDesignHelper] = useState(false);
  const [showSecretQuote, setShowSecretQuote] = useState(false);
  const [showSignatureStamp, setShowSignatureStamp] = useState(false);
  const [dotBurstKey, setDotBurstKey] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [philosophyHeadlineIndex, setPhilosophyHeadlineIndex] = useState(0);

  /* ── Timeline (single continuous line from About Me → Certifications) ── */
  const timelineRef = useRef(null);
  const { scrollYProgress: tlProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const smoothTl = useSpring(tlProgress, { damping: 30, stiffness: 100 });

  const philosophyHeadlines = [
    "be an artist, not just an artisan",
    "kalakaar bano, mistri nahi",
  ];

  /* Hero parallax */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
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

  useEffect(() => {
    const mobileMq = window.matchMedia("(max-width: 767px)");
    const pointerAnyMq = window.matchMedia("(pointer: fine)");
    const pointerMq = window.matchMedia("(min-width: 1025px) and (pointer: fine)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMediaState = () => {
      setIsMobileAbout(mobileMq.matches);
      setHasFinePointer(pointerAnyMq.matches);
      setHasFinePointerDesktop(pointerMq.matches);
      setPrefersReducedMotion(motionMq.matches);
    };

    syncMediaState();
    mobileMq.addEventListener("change", syncMediaState);
    pointerAnyMq.addEventListener("change", syncMediaState);
    pointerMq.addEventListener("change", syncMediaState);
    motionMq.addEventListener("change", syncMediaState);

    return () => {
      mobileMq.removeEventListener("change", syncMediaState);
      pointerAnyMq.removeEventListener("change", syncMediaState);
      pointerMq.removeEventListener("change", syncMediaState);
      motionMq.removeEventListener("change", syncMediaState);
    };
  }, []);

  useEffect(() => {
    philosophyLoopRef.current = window.setInterval(() => {
      setPhilosophyHeadlineIndex((current) =>
        current === philosophyHeadlines.length - 1 ? 0 : current + 1,
      );
    }, 4200);

    return () => window.clearInterval(philosophyLoopRef.current);
  }, [philosophyHeadlines.length]);

  const clearSecretTimer = () => {
    window.clearTimeout(secretTimerRef.current);
  };

  const clearPhotoActivateTimer = () => {
    window.clearTimeout(photoActivateTimerRef.current);
  };

  const handleSecretStart = () => {
    if (!hasFinePointerDesktop) return;
    clearSecretTimer();
    setShowSecretMessage(false);
    secretTimerRef.current = window.setTimeout(() => {
      setShowSecretMessage(true);
      setIsSecretUnlocked(true);
    }, 2000);
  };

  const handleSecretEnd = () => {
    clearSecretTimer();
    setShowSecretMessage(false);
  };

  const launchPhotoInteraction = () => {
    if (!isSecretUnlocked) return;

    setIsPhotoInteractive(true);
    setGeoLayoutIndex((current) => {
      const next = Math.floor(Math.random() * 3);
      return next === current ? (next + 1) % 3 : next;
    });
    setShowSecretQuote(true);
    setShowSignatureStamp(true);
    setDotBurstKey((current) => current + 1);

    if (!unlockHintShownRef.current) {
      unlockHintShownRef.current = true;
      setShowDesignHelper(true);
      window.clearTimeout(helperTimerRef.current);
      helperTimerRef.current = window.setTimeout(() => {
        setShowDesignHelper(false);
      }, 2600);
    }

    window.clearTimeout(quoteTimerRef.current);
    quoteTimerRef.current = window.setTimeout(() => {
      setShowSecretQuote(false);
    }, 2000);

    window.clearTimeout(signatureTimerRef.current);
    signatureTimerRef.current = window.setTimeout(() => {
      setShowSignatureStamp(false);
    }, 1800);
  };

  const endPhotoInteraction = () => {
    clearPhotoActivateTimer();
    setIsPhotoInteractive(false);

    if (photoWrapRef.current) {
      photoWrapRef.current.style.setProperty("--geo-shift-x", "0px");
      photoWrapRef.current.style.setProperty("--geo-shift-y", "0px");
    }
  };

  const handlePhotoMove = (event) => {
    if (!isPhotoInteractive) return;

    const bounds = photoWrapRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

    photoMoveTargetRef.current = {
      x: Number((offsetX * 18).toFixed(2)),
      y: Number((offsetY * 14).toFixed(2)),
    };

    if (photoMoveRafRef.current) return;

    photoMoveRafRef.current = window.requestAnimationFrame(() => {
      const node = photoWrapRef.current;
      if (node) {
        node.style.setProperty(
          "--geo-shift-x",
          `${photoMoveTargetRef.current.x}px`,
        );
        node.style.setProperty(
          "--geo-shift-y",
          `${photoMoveTargetRef.current.y}px`,
        );
      }
      photoMoveRafRef.current = 0;
    });
  };

  const handlePhotoInteractionStart = () => {
    launchPhotoInteraction();
  };

  const handlePhotoInteractionEnd = () => {
    clearPhotoActivateTimer();
    endPhotoInteraction();
  };

  /* Scroll-to-top visibility */
  useEffect(() => {
    const onScroll = () => {
      const nextShowTop = window.scrollY > 400;
      if (nextShowTop !== showTopRef.current) {
        showTopRef.current = nextShowTop;
        setShowTop(nextShowTop);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      clearSecretTimer();
      clearPhotoActivateTimer();
      window.clearTimeout(helperTimerRef.current);
      window.clearTimeout(quoteTimerRef.current);
      window.clearTimeout(signatureTimerRef.current);
      window.cancelAnimationFrame(photoMoveRafRef.current);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {hasFinePointer && <Cursor />}
      {hasFinePointer && !prefersReducedMotion && <SpotlightFollow />}
      <Navbar />

      <main
        id="main-content"
        className={`about ${isSecretUnlocked ? "easter-enabled" : ""}`}
      >
        {!prefersReducedMotion && <BreathingOrbs count={3} />}
        {/* Noise texture overlay */}
        <div className="about-noise" aria-hidden="true" />

        {/* ═══ HERO ═══ */}
        <section className="about-hero about-hero-editorial" ref={heroRef}>
          <Motion.div
            className="about-editorial-copy-block"
            style={{ y: heroTextY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.1 }}
          >
            <h1 className="about-editorial-title">ABOUT</h1>
            <span className="about-editorial-kicker">01 / THE DRIVE</span>
            <span className="about-editorial-rule" aria-hidden="true" />

            <p className="about-editorial-lead">
              I&apos;ve spent 2+ years learning that craft isn&apos;t a shortcut
              it&apos;s the path.
            </p>

            <p className="about-editorial-body">
              I build for people who crave clarity without losing energy,
              transforming complex ideas into clean, immersive product
              experiences where every detail is intentional.
            </p>
          </Motion.div>

          <Motion.div
            className="about-editorial-media"
            style={{ y: heroImageY }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...springTransition, delay: 0.2 }}
          >
            <div
              ref={photoWrapRef}
              className={`about-editorial-photo-wrap ${isSecretUnlocked ? "is-unlocked" : ""} ${isPhotoInteractive ? "is-live" : ""} geo-layout-${geoLayoutIndex}`}
              onMouseEnter={handlePhotoInteractionStart}
              onMouseLeave={handlePhotoInteractionEnd}
              onMouseMove={handlePhotoMove}
              onFocus={handlePhotoInteractionStart}
              onBlur={handlePhotoInteractionEnd}
            >
              <span className="about-photo-aura" aria-hidden="true" />
              <img
                src="/profile.jpg"
                alt="Jayram G Sangawat"
                width="680"
                height="860"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="about-editorial-photo"
              />
              <span className="about-geo about-geo--ring" aria-hidden="true" />
              <span className="about-geo about-geo--grid" aria-hidden="true" />
              <span className="about-geo about-geo--triangle" aria-hidden="true" />
              <span className="about-geo about-geo--line" aria-hidden="true" />
              <svg
                className="about-golden-arc"
                viewBox="0 0 140 140"
                aria-hidden="true"
              >
                <path d="M130 130 A60 60 0 1 1 70 10" />
                <path d="M70 10 A36 36 0 1 0 106 46" />
              </svg>
              <span className="about-neon-trace" aria-hidden="true" />

              <div className="about-geo-points" aria-hidden="true">
                <span className="geo-point geo-point--1" />
                <span className="geo-point geo-point--2" />
                <span className="geo-point geo-point--3" />
                <span className="geo-point geo-point--4" />
              </div>

              <div className="about-figma-tags" aria-hidden="true">
                <span className="figma-tag">Frame 01</span>
                <span className="figma-tag">Grid</span>
                <span className="figma-tag">Vector</span>
              </div>

              <span className="about-design-chip" aria-hidden="true">
                Design mode: ON
              </span>

              <div className="about-figma-handles" aria-hidden="true">
                <span className="figma-handle figma-handle--tl" />
                <span className="figma-handle figma-handle--tr" />
                <span className="figma-handle figma-handle--bl" />
                <span className="figma-handle figma-handle--br" />
              </div>
              <span className="about-selection-size" aria-hidden="true">
                680 × 860
              </span>
              <div className="about-ruler-y" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="about-anchor-nodes" aria-hidden="true">
                <span className="anchor-node" />
                <span className="anchor-node" />
                <span className="anchor-node" />
              </div>
              <span className="about-layer-label" aria-hidden="true">
                Layer: Profile / Hero
              </span>
              <div className="about-figma-toolbar" aria-hidden="true">
                <span>Auto Layout</span>
                <span>Constraints: Scale</span>
              </div>
              <div className="about-measure-guides" aria-hidden="true">
                <span className="measure-guide measure-guide--x">x: 324</span>
                <span className="measure-guide measure-guide--y">y: 188</span>
              </div>
              <span className="about-grid-badge" aria-hidden="true">
                12 Col Grid
              </span>

              <span className={`about-design-helper ${showDesignHelper ? "show" : ""}`}>
                Try moving cursor around the photo.
              </span>
              <span className={`about-secret-quote ${showSecretQuote ? "show" : ""}`}>
                <a
                  href="https://www.instagram.com/jayrams_.23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-secret-quote-link"
                >
                  @jayrams_.23
                </a>
              </span>
              <span className={`about-signature-stamp ${showSignatureStamp ? "show" : ""}`}>
                #CraftedBy Jay
              </span>

              <div key={dotBurstKey} className="about-dot-burst" aria-hidden="true">
                {dotBurstOffsets.map((dot, index) => (
                  <span
                    key={`${dot.x}-${dot.y}`}
                    className="burst-dot"
                    style={{
                      "--dot-x": dot.x,
                      "--dot-y": dot.y,
                      "--dot-delay": dot.delay,
                      "--dot-seed": `${(index % 3) + 1}`,
                    }}
                  />
                ))}
              </div>

              <span className="about-editorial-rail" aria-hidden="true">
                PROFILE
              </span>
            </div>
          </Motion.div>
        </section>

        <AboutDivider />

        {/* ═══ UNIFIED TIMELINE: About Me → Certifications ═══ */}
        <div className="about-timeline" ref={timelineRef}>
          {/* Single continuous progress line */}
          <Motion.div className="tl-line" style={{ scaleY: smoothTl }} />

          {/* ── About Me ── */}
          <div className="tl-section">
            <TimelineNode />
            <h2 className="tl-head">About me</h2>
            <div className="tl-content tl-content--intro">
              <ScrollRevealP className="intro-lead">
                I&rsquo;m a{" "}
                <span className="text-highlight">
                  Computer Science student with an 8.39 CGPA
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
                <button
                  type="button"
                  className="about-secret-trigger"
                  aria-label="Reveal photo card hint"
                  onMouseEnter={handleSecretStart}
                  onMouseLeave={handleSecretEnd}
                  onFocus={handleSecretStart}
                  onBlur={handleSecretEnd}
                >
                  Hover or focus for 2 seconds&hellip;
                </button>
                <span className={`about-secret-message ${showSecretMessage ? "show" : ""}`}>
                  Go up and hover on the profile photo &#128064;
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

          {/* ── Hobbies ── */}
          <div className="tl-section">
            <TimelineNode />
            <h2 className="tl-head">Hobbies</h2>
            <div className="tl-content">
              <ScrollRevealCard index={0}>
                <div className="item-header">
                  <strong>Personal Hobbies</strong>
                  <span className="item-badge">Interests</span>
                </div>
                <p>
                  Photography, book reading, hiking, and travel keep me curious,
                  creative, and energized outside of coding.
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
                  <strong>10th Standard</strong>
                  <span className="item-badge">Sardar G G High School</span>
                </div>
                <p>
                  Sardar G G High School and Jr College, Raver, Jalgaon.
                </p>
              </ScrollRevealCard>
              <ScrollRevealCard index={1}>
                <div className="item-header">
                  <strong>12th Standard</strong>
                  <span className="item-badge">Sardar G G Jr College</span>
                </div>
                <p>
                  Sardar G G High School and Jr College, Raver, Jalgaon.
                </p>
              </ScrollRevealCard>
              <ScrollRevealCard index={2}>
                <div className="item-header">
                  <strong>B.Tech &mdash; Computer Science Engineering</strong>
                  <span className="item-badge">2023 &mdash; 2027</span>
                </div>
                <p>
                  JD College of Engineering and Management, Nagpur. Currently in
                  6th semester with an <strong>8.39 CGPA</strong>. Studying core
                  computer science subjects while actively building projects in
                  web development, backend systems, AI, and machine learning.
                </p>
              </ScrollRevealCard>
            </div>
          </div>

          {/* Terminal dot */}
          <div className="tl-terminal">
            <span className="tl-dot tl-dot--end" />
          </div>
        </div>

        <AboutDivider />

        {/* ═══ PHILOSOPHY (Reference-inspired) ═══ */}
        <RevealSection className="about-philosophy about-philosophy-paper">
          <div className="about-paper-inner">
            <h3 className="about-paper-title" aria-live="polite">
              <span key={philosophyHeadlineIndex} className="about-paper-title-swap">
                &ldquo;
                {philosophyHeadlines[philosophyHeadlineIndex]}
                &rdquo;
              </span>
            </h3>

            <div className="about-paper-content">
              <div className="about-paper-col about-paper-col--left">
                <p>
                  I stay curious- roz thoda aur samajhne ka, then I carry that
                  into whatever I build.
                </p>
                <p>
                  I design and build with clarity and intent. First-principles
                  first, no extra noise.
                </p>
              </div>
              <div className="about-paper-col">
                <p>
                  Started with DSA and core CS- algorithms, patterns,
                  optimization. Solid, but incomplete.
                </p>
                <p>
                  At some point it clicked: solving problems ≠ building
                  something useful.
                </p>
                <p>
                  So I moved toward full-stack, AI/ML, and product thinking-
                  jahan logic meets real users, and decisions actually matter.
                </p>
              </div>
            </div>

            <span className="about-paper-sticker" aria-hidden="true">
              🐾
            </span>
          </div>
        </RevealSection>

        <AboutDivider />

        {/* ═══ MOMENTS (Reference-inspired strip) ═══ */}
        <RevealSection className="about-gallery-section about-moments-strip-wrap">
          <h3 className="standalone-label">Moments</h3>
          <div className="about-moments-strip" role="list" aria-label="Moments gallery">
            {[
              "/1776693758594.webp",
              "/1776693865068.webp",
              "/1776693963360.webp",
              "/1776694103030.webp",
              "/1776694210562.webp",
              "/1776694474046.webp",
            ].map((src, index) => (
              <Motion.figure
                key={src}
                className="moment-card"
                role="listitem"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <img src={src} alt={`Moment ${index + 1}`} loading="lazy" />
              </Motion.figure>
            ))}
          </div>
        </RevealSection>
      </main>

      <Motion.button
        type="button"
        className={`to-top ${showTop ? "show" : ""}`}
        onClick={handleScrollToTop}
        aria-label="Return to top"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        &uarr;
      </Motion.button>

      <Footer className="footer-about" showNote={false} />
    </>
  );
}
