import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "./MicroInteractions";
import StackPanel from "./StackPanel";
import { site } from "../data/site";

function ProofBento() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="proof-section" ref={ref} aria-labelledby="proof-title">
      <div className="proof-inner">
        <motion.div
          className="proof-header"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label editorial-kicker">Proof</span>
          <h2 className="section-title editorial-title heading-section" id="proof-title">
            By the numbers
          </h2>
        </motion.div>

        <div className="proof-bento">
          {site.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="proof-cell proof-cell--stat"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <CountUp value={stat.value} className="proof-stat-value" />
              <span className="proof-stat-label">{stat.label}</span>
            </motion.div>
          ))}

          <motion.blockquote
            className="proof-cell proof-cell--quote"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>&ldquo;{site.quote}&rdquo;</p>
          </motion.blockquote>

          <motion.div
            className="proof-cell proof-cell--stack"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <StackPanel inView={inView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProofBento;
