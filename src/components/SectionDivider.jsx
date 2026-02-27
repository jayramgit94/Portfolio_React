import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SectionDivider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div className="section-divider" ref={ref}>
      <motion.div
        className="divider-line"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="divider-diamond"
        initial={{ scale: 0, rotate: 0 }}
        animate={inView ? { scale: 1, rotate: 45 } : {}}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="divider-line"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export default SectionDivider;
