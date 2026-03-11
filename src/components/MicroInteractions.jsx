import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════
   #2 — TEXT SCRAMBLE REVEAL
   Letters scramble through random chars,
   then resolve to real text on scroll-in
   ═══════════════════════════════════════════ */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

export function TextScramble({ text, className = "", as: Tag = "span" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const chars = text.split("");
    const totalFrames = 20;
    let frame = 0;

    const tick = () => {
      frame++;
      const progress = frame / totalFrames;
      const resolved = Math.floor(progress * chars.length);

      const output = chars
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < resolved) return chars[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(output);

      if (frame < totalFrames) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, text]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}

/* ═══════════════════════════════════════════
   #3 — SMOOTH NUMBER COUNTER
   Counts up from 0 to target when in view
   ═══════════════════════════════════════════ */
export function CountUp({ value, duration = 2000, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    // Parse numeric part and suffix (e.g. "150+" → 150, "+")
    const match = String(value).match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2] || "";
    const isFloat = match[1].includes(".");
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setDisplay(
        (isFloat ? current.toFixed(2) : Math.floor(current)) + suffix
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/* ═══════════════════════════════════════════
   #4 — BREATHING GRADIENT ORBS
   Soft blurred circles that pulse opacity/size
   ═══════════════════════════════════════════ */
export function BreathingOrbs({ count = 3, className = "" }) {
  const orbs = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 180 + i * 80,
    x: `${20 + i * 30}%`,
    y: `${15 + ((i * 25) % 60)}%`,
    delay: i * 1.5,
    duration: 6 + i * 2,
  }));

  return (
    <div className={`breathing-orbs ${className}`} aria-hidden="true">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="breathing-orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   #5 — AURORA BOREALIS STRIPS
   Animated horizontal gradient bands that drift
   ═══════════════════════════════════════════ */
export function AuroraStrips({ className = "" }) {
  return (
    <div className={`aurora-container ${className}`} aria-hidden="true">
      <div className="aurora-strip aurora-strip--1" />
      <div className="aurora-strip aurora-strip--2" />
      <div className="aurora-strip aurora-strip--3" />
    </div>
  );
}

/* ═══════════════════════════════════════════
   #6 — STAGGERED LETTER REVEAL
   Each letter springs in individually
   ═══════════════════════════════════════════ */
export function StaggeredText({
  text,
  className = "",
  as: Tag = "span",
  delay = 0,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <Tag ref={ref} className={`staggered-text ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="stagger-char"
          initial={{ opacity: 0, y: 20, rotateX: -60 }}
          animate={
            inView ? { opacity: 1, y: 0, rotateX: 0 } : {}
          }
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
            delay: delay + i * 0.03,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}

/* ═══════════════════════════════════════════
   #7 — RIPPLE CLICK EFFECT
   Material-design expanding circle on click
   ═══════════════════════════════════════════ */
export function RippleButton({ children, className = "", ...props }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);

    if (props.onClick) props.onClick(e);
  };

  return (
    <button {...props} className={`ripple-btn ${className}`} onClick={handleClick}>
      {children}
      <span className="ripple-container">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="ripple-circle"
            style={{
              left: r.x - r.size / 2,
              top: r.y - r.size / 2,
              width: r.size,
              height: r.size,
            }}
          />
        ))}
      </span>
    </button>
  );
}

/* ═══════════════════════════════════════════
   #9 — FLOATING TECH ICONS
   Semi-transparent icons drifting in background
   ═══════════════════════════════════════════ */
const FLOAT_ICONS = ["⚛", "🐍", "⟐", "{ }", "< />", "λ", "∴", "⬡", "☁", "⚡"];

export function FloatingIcons({ className = "" }) {
  const icons = FLOAT_ICONS.map((icon, i) => ({
    icon,
    id: i,
    x: `${5 + ((i * 17) % 90)}%`,
    y: `${5 + ((i * 23) % 85)}%`,
    size: 14 + (i % 3) * 6,
    duration: 12 + (i % 5) * 4,
    delay: i * 0.8,
  }));

  return (
    <div className={`floating-icons ${className}`} aria-hidden="true">
      {icons.map((item) => (
        <motion.span
          key={item.id}
          className="floating-icon"
          style={{
            left: item.x,
            top: item.y,
            fontSize: item.size,
          }}
          animate={{
            y: [0, -15, 5, -10, 0],
            x: [0, 8, -5, 3, 0],
            rotate: [0, 5, -3, 2, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.span>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   #10 — SPOTLIGHT CURSOR FOLLOW
   Soft radial light that follows cursor
   ═══════════════════════════════════════════ */
export function SpotlightFollow({ className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { damping: 30, stiffness: 150 });
  const smoothY = useSpring(y, { damping: 30, stiffness: 150 });

  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      className={`spotlight ${className}`}
      aria-hidden="true"
      style={{
        left: smoothX,
        top: smoothY,
      }}
    />
  );
}

/* ═══════════════════════════════════════════
   #11 — CONFETTI BURST
   Particles explode on trigger
   ═══════════════════════════════════════════ */
const CONFETTI_COLORS = [
  "var(--color-primary)",
  "var(--color-accent)",
  "#fbbf24",
  "#34d399",
  "#f472b6",
  "#60a5fa",
];

function ConfettiPiece({ x, y, color, angle, velocity, id }) {
  return (
    <motion.span
      className="confetti-piece"
      style={{
        left: x,
        top: y,
        backgroundColor: color,
      }}
      initial={{ opacity: 1, scale: 1 }}
      animate={{
        x: Math.cos(angle) * velocity,
        y: Math.sin(angle) * velocity + 80,
        opacity: 0,
        scale: 0,
        rotate: Math.random() * 720 - 360,
      }}
      transition={{ duration: 0.8 + Math.random() * 0.4, ease: "easeOut" }}
    />
  );
}

export function ConfettiBurst({ triggerRef }) {
  const [pieces, setPieces] = useState([]);

  const burst = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const newPieces = Array.from({ length: 24 }, (_, i) => ({
      id: Date.now() + i,
      x: cx,
      y: cy,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      angle: (Math.PI * 2 * i) / 24 + (Math.random() - 0.5) * 0.5,
      velocity: 80 + Math.random() * 100,
    }));

    setPieces(newPieces);
    setTimeout(() => setPieces([]), 1500);
  }, []);

  useEffect(() => {
    const el = triggerRef?.current;
    if (!el) return;
    el.addEventListener("click", burst);
    return () => el.removeEventListener("click", burst);
  }, [triggerRef, burst]);

  return (
    <AnimatePresence>
      {pieces.length > 0 && (
        <div className="confetti-container" aria-hidden="true">
          {pieces.map((p) => (
            <ConfettiPiece key={p.id} {...p} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════
   #12 — MORPHING SVG BLOB
   Organic blob that slowly morphs shape
   ═══════════════════════════════════════════ */
const BLOB_PATHS = [
  "M44.4,-76.1C57.7,-69.3,69.1,-57.6,77.1,-43.8C85.1,-30,89.7,-14.2,88.5,0.7C87.3,15.6,80.3,29.6,71.3,42.1C62.3,54.6,51.3,65.6,38.2,72.5C25.1,79.4,9.8,82.2,-4.6,79.5C-19,76.8,-32.5,68.6,-44.8,59.1C-57.1,49.6,-68.2,38.8,-74.5,25.6C-80.8,12.4,-82.3,-3.2,-78.2,-17.2C-74.1,-31.2,-64.4,-43.6,-52.4,-51.2C-40.4,-58.8,-26.1,-61.6,-12.1,-66.4C1.9,-71.2,31.1,-82.9,44.4,-76.1Z",
  "M39.3,-67.5C52.9,-60.2,67.2,-53.4,74.8,-42.1C82.4,-30.8,83.3,-15.4,81.5,-1C79.7,13.4,75.2,26.8,68,38.7C60.8,50.6,50.9,61,39,67.7C27.1,74.4,13.5,77.4,-0.9,78.9C-15.3,80.4,-30.6,80.4,-43.1,74.1C-55.6,67.8,-65.3,55.2,-71.3,41.4C-77.3,27.6,-79.6,12.6,-78.4,-1.7C-77.2,-16,-72.5,-29.4,-64.5,-40.7C-56.5,-52,-45.2,-61.2,-32.7,-69C-20.2,-76.8,-6.5,-83.2,3.8,-84C14.1,-84.8,25.7,-74.8,39.3,-67.5Z",
  "M42.8,-73.6C55.6,-66.9,65.9,-55.1,73.1,-41.8C80.3,-28.5,84.4,-13.7,83.2,0.7C82,15.1,75.5,29,66.8,41.3C58.1,53.6,47.2,64.3,34.5,71.1C21.8,77.9,7.3,80.8,-6.5,79.2C-20.3,77.6,-33.4,71.5,-44.9,63.3C-56.4,55.1,-66.3,44.8,-72.6,32.5C-78.9,20.2,-81.6,5.9,-79.5,-7.2C-77.4,-20.3,-70.5,-32.2,-61.2,-42.7C-51.9,-53.2,-40.2,-62.3,-27.6,-69.1C-15,-75.9,-1.5,-80.4,7.1,-80.8C15.7,-81.2,30,-80.3,42.8,-73.6Z",
];

export function MorphingBlob({ className = "" }) {
  const [pathIndex, setPathIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPathIndex((prev) => (prev + 1) % BLOB_PATHS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`morphing-blob-wrap ${className}`} aria-hidden="true">
      <svg viewBox="-100 -100 200 200" className="morphing-blob-svg">
        <defs>
          <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#blob-gradient)"
          animate={{ d: BLOB_PATHS[pathIndex] }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
