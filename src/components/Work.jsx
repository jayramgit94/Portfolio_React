import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const screenshotBackdrops = [
  "linear-gradient(140deg, #4361ee 0%, #3152c8 58%, #233a8b 100%)",
  "linear-gradient(140deg, #facc15 0%, #f59e0b 56%, #d97706 100%)",
  "linear-gradient(140deg, #4f46e5 0%, #3b82f6 52%, #1e3a8a 100%)",
  "linear-gradient(140deg, #8b5cf6 0%, #7c3aed 48%, #4c1d95 100%)",
  "linear-gradient(140deg, #84cc16 0%, #22c55e 52%, #15803d 100%)",
  "linear-gradient(140deg, #f59e0b 0%, #f97316 56%, #c2410c 100%)",
];

const screenshotLayouts = ["edge", "strip", "centered", "offset", "crop"];
const geometryVariants = [
  "golden",
  "figma-grid",
  "rings",
  "iso-lines",
  "dot-mesh",
  "arc-stack",
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isResumeAnalyzer = project.id === "resume-analyzer";
  const layout = isResumeAnalyzer
    ? "resume-focus"
    : screenshotLayouts[index % screenshotLayouts.length];
  const screenshotBg = isResumeAnalyzer
    ? "linear-gradient(140deg, #1d4ed8 0%, #2563eb 46%, #14b8a6 100%)"
    : screenshotBackdrops[index % screenshotBackdrops.length];
  const geometry = isResumeAnalyzer
    ? "resume-scan"
    : geometryVariants[index % geometryVariants.length];
  const secondaryImage = project.sections?.find(
    (section) => section.image && section.image !== project.image,
  )?.image;
  const hasDualPreview = Boolean(secondaryImage) && ["strip", "offset"].includes(layout);
  const outcomeLine = project.highlights?.[0] || project.description;

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
    >
      <Link
        to={`/work/${project.id}`}
        className={`work-card work-card--${layout}`}
        style={{ "--ss-bg": screenshotBg }}
      >
        <div
          className={`work-media-shell work-geo-${geometry} ${hasDualPreview ? "dual" : "single"}`}
        >
          <div className="work-geometry-art" aria-hidden="true" />
          <div className="work-shot work-shot-main">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
            />
          </div>
          {hasDualPreview && (
            <div className="work-shot work-shot-alt">
              <img
                src={secondaryImage}
                alt={`${project.title} alternate preview`}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>

        <div className="work-card-body">
          <div className="work-card-meta">
            <span className="work-role">
              {project.role?.split("·")[0]?.trim()}
            </span>
          </div>

          <h3 className="work-title">{project.title}</h3>
          <p className="work-outcome">{outcomeLine}</p>

          <div className="work-tags">
            {project.tools?.slice(0, 3).map((tool) => (
              <span key={tool} className="work-tag">
                {tool}
              </span>
            ))}
            {project.tools?.length > 3 && (
              <span className="work-tag">+{project.tools.length - 3}</span>
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
        <h2 className="section-title">
          Selected Work
        </h2>
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
