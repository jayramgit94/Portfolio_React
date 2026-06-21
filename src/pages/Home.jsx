import { motion as Motion, useInView } from "framer-motion";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cursor from "../components/Cursor";
import Hero from "../components/Hero";
import MagneticButton from "../components/MagneticButton";
import ProofBento from "../components/ProofBento";
import { ConfettiBurst, MorphingBlob, SpotlightFollow } from "../components/MicroInteractions";
import { SiCoursera, SiGeeksforgeeks, SiPython } from "react-icons/si";
import Navbar from "../components/Navbar";
import certifications from "../data/certifications";
import { site } from "../data/site";
import "../styles/global.css";
import { mediaQuery } from "../utils/breakpoints";

const Footer = lazy(() => import("../components/Footer"));
const Work = lazy(() => import("../components/Work"));

function Contact({ ctaBtnRef }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="cta-section" ref={ref}>
      <Motion.div
        className="cta-box ui-card"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="cta-layout">
          <div className="cta-content">
            <span className="section-label editorial-kicker">Contact</span>
            <h2 className="cta-headline editorial-title heading-section">
              Let&apos;s build something that ships
            </h2>
            <p className="cta-sub cta-sub-primary">
              Full-stack and AI products — fast, reliable, production-ready.
            </p>

            <div className="cta-action-row">
              <div ref={ctaBtnRef} className="cta-action-wrap">
                <MagneticButton
                  href={`mailto:${site.email}`}
                  className="cta-connect-btn btn-primary"
                >
                  Email me
                  <span aria-hidden="true" className="cta-arrow">
                    →
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
              <Link to="/about">About</Link>
            </div>
          </div>

          <div className="cta-media">
            <img
              src="/contact_sec_img.avif"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Motion.div>
    </section>
  );
}

function RevealSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
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
  const [enableFancyEffects, setEnableFancyEffects] = useState(false);

  useEffect(() => {
    const pointerMq = window.matchMedia("(pointer: fine)");
    const wideMq = window.matchMedia(mediaQuery.desktopMin);
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setEnableFancyEffects(
        pointerMq.matches && wideMq.matches && !motionMq.matches,
      );
    };

    sync();
    pointerMq.addEventListener("change", sync);
    wideMq.addEventListener("change", sync);
    motionMq.addEventListener("change", sync);

    return () => {
      pointerMq.removeEventListener("change", sync);
      wideMq.removeEventListener("change", sync);
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
          <Suspense fallback={null}>
            <Work />
          </Suspense>
        </DeferredMount>

        <DeferredMount minHeight={480} margin="220px">
          <ProofBento />
        </DeferredMount>

        <DeferredMount minHeight={480} margin="220px">
          <RevealSection>
            <section className="cert-section" aria-labelledby="cert-title">
              <div className="toolkit-header">
                <span className="section-label editorial-kicker">Credentials</span>
                <h2 className="section-title editorial-title heading-section" id="cert-title">
                  Certifications
                </h2>
              </div>
              <div className="cert-grid">
                {certifications.map((cert, i) => {
                  const IconComponent =
                    certPlatformIcons[cert.platformClass] ?? SiPython;

                  return (
                    <Motion.div
                      key={`${cert.name}-${cert.platform}`}
                      className="cert-card ui-card"
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
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
        </DeferredMount>

        <DeferredMount minHeight={560} margin="180px">
          <Contact ctaBtnRef={ctaBtnRef} />

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </DeferredMount>
      </main>
    </>
  );
}

export default Home;
