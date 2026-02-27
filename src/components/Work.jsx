import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isMobile) return;
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 4;
      const rotateX = ((centerY - y) / centerY) * 4;
      setTilt({ rotateX, rotateY });
    },
    [isMobile],
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: isMobile ? "none" : 800 }}
    >
      <Link
        ref={cardRef}
        to={`/work/${project.id}`}
        className="work-card"
        style={{
          "--card-gradient": project.gradient,
          transform: isMobile
            ? "none"
            : `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Grid texture inside card */}
        <div className="work-card-grid" aria-hidden="true" />

        {/* Image preview */}
        <div className="work-card-image">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>

        {/* Info */}
        <div className="work-card-body">
          <div className="work-card-meta">
            <span className="work-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="work-role">
              {project.role?.split("·")[0]?.trim()}
            </span>
          </div>

          <h3 className="work-title">{project.title}</h3>
          <p className="work-description">{project.description}</p>

          <div className="work-tags">
            {project.tools?.slice(0, 4).map((tool) => (
              <span key={tool} className="work-tag">
                {tool}
              </span>
            ))}
            {project.tools?.length > 4 && (
              <span className="work-tag">+{project.tools.length - 4}</span>
            )}
          </div>

          <span className="work-link">
            View Case Study
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
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function Work() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section id="work" className="work-section">
      <div className="work-header">
        <span className="section-label">Selected Work</span>
        <h2 className="section-title">
          Projects I&rsquo;ve <span className="text-gradient">crafted</span>
        </h2>
        <p className="section-desc">
          A curated collection of projects that showcase my skills in frontend
          development, UI design, and full-stack engineering.
        </p>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Work;
