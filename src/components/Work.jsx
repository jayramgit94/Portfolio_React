import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import ScreenshotFrame from "./ScreenshotFrame";

function ProjectCard({ project, index, featured = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const outcomeLine = project.highlights?.[0] || project.description;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        to={`/work/${project.id}`}
        className={`work-card ui-card${featured ? " work-card--featured" : ""}`}
      >
        <div className="work-card-preview">
          <ScreenshotFrame
            src={project.image}
            alt={project.title}
            layoutId={`project-cover-${project.id}`}
            eager={featured}
            label={project.title.split(" ").slice(0, 2).join(" ")}
            className="screenshot-frame--compact"
          />
        </div>

        <div className="work-card-body">
          <div className="work-card-meta">
            <span className="work-role">
              {project.role?.split("·")[0]?.trim()}
            </span>
          </div>

          <h3 className="work-title heading-card">{project.title}</h3>
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
            View case study
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
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="work-section">
      <div className="work-header">
        <span className="section-label editorial-kicker">01 — Work</span>
        <h2 className="section-title editorial-title heading-section">
          Selected work
        </h2>
        <p className="section-desc work-section-desc">
          Production apps with live demos, case studies, and measurable outcomes.
        </p>
      </div>

      <div className="work-grid">
        <ProjectCard project={featured} index={0} featured />
        {rest.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index + 1} />
        ))}
      </div>
    </section>
  );
}

export default Work;
