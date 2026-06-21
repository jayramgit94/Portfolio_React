import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/projects";
import "../styles/project-detail.css";
import CaseStudyDecor from "./CaseStudyDecor";
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import ScreenshotFrame from "./ScreenshotFrame";

const sectionDecor = ["squiggle", "arrow", "sparkle", "grid"];

function CaseSection({ children, id, className = "", index = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const decor = sectionDecor[index % sectionDecor.length];

  return (
    <motion.article
      ref={ref}
      id={id}
      className={`case-block ${className}`.trim()}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <CaseStudyDecor variant={decor} className="case-block__doodle" />
      {children}
    </motion.article>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

  const project = projects?.find((p) => p.id === id);

  const sections = useMemo(
    () => (Array.isArray(project?.sections) ? project.sections : []),
    [project],
  );

  const tocItems = useMemo(
    () => [
      { id: "overview", title: "Overview" },
      ...sections.map((section) => ({
        id: section.id,
        title: section.label || section.title,
      })),
    ],
    [sections],
  );

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/#work");
  };

  useEffect(() => {
    setActiveSection("overview");
  }, [id]);

  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll(".case-block"));
    if (!sectionElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.15, 0.35, 0.55], rootMargin: "-18% 0px -52% 0px" },
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sections.length, id]);

  if (!project) {
    return (
      <div className="case-empty">
        <Navbar />
        <p>Project not found.</p>
        <button type="button" onClick={() => navigate("/")}>
          Back home
        </button>
      </div>
    );
  }

  return (
    <>
      <Cursor />
      <Navbar />

      <div className="case-study">
        <header className="case-hero">
          <div className="case-hero__mesh" aria-hidden="true" />
          <CaseStudyDecor variant="grid" className="case-hero__doodle case-hero__doodle--grid" />
          <CaseStudyDecor variant="squiggle" className="case-hero__doodle case-hero__doodle--squiggle" />

          <div className="case-hero__inner">
            <button type="button" className="case-back" onClick={handleBack}>
              ← Back to work
            </button>

            <p className="case-kicker editorial-kicker">Case study</p>
            <h1 className="case-title heading-display">{project.title}</h1>
            {project.description && (
              <p className="case-lead">{project.description}</p>
            )}

            <div className="case-meta-row">
              {project.role && (
                <span className="case-chip">{project.role.split("·")[0]?.trim()}</span>
              )}
              {project.timeline && (
                <span className="case-chip case-chip--muted">{project.timeline}</span>
              )}
              {project.tools?.slice(0, 4).map((tool) => (
                <span key={tool} className="case-chip case-chip--tool">
                  {tool}
                </span>
              ))}
            </div>

            {(project.liveLink || project.githubLink) && (
              <div className="case-actions">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn case-btn--primary"
                  >
                    Live demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn case-btn--ghost"
                  >
                    View code
                  </a>
                )}
              </div>
            )}

            {project.highlights?.length ? (
              <ul className="case-metrics">
                {project.highlights.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            {project.image && (
              <div className="case-hero-media">
                <ScreenshotFrame
                  src={project.image}
                  alt={project.title}
                  layoutId={`project-cover-${project.id}`}
                  eager
                  label={project.title}
                />
              </div>
            )}
          </div>
        </header>

        <div className="case-layout">
          <aside className="case-toc" aria-label="On this page">
            <nav className="case-toc__nav">
              <p className="case-toc__title">On this page</p>
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`case-toc__link${activeSection === item.id ? " is-active" : ""}`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="case-content">
            <CaseSection id="overview" index={0}>
              <header className="case-block__head">
                <span className="case-block__index">01</span>
                <div>
                  <p className="editorial-kicker">Summary</p>
                  <h2 className="case-block__title heading-section">Overview</h2>
                </div>
              </header>

              <div className="notion-block notion-block--text">
                <p>{project.longDescription || project.description}</p>
              </div>

              {project.objectives?.length ? (
                <div className="notion-block notion-block--cards">
                  {project.objectives.map((objective, i) => (
                    <div key={objective.title} className="notion-card">
                      <span className="notion-card__num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3>{objective.title}</h3>
                      <p>{objective.description}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </CaseSection>

            {sections.map((section, sectionIndex) => (
              <CaseSection
                key={section.id}
                id={section.id}
                index={sectionIndex + 1}
              >
                <header className="case-block__head">
                  <span className="case-block__index">
                    {String(sectionIndex + 2).padStart(2, "0")}
                  </span>
                  <div>
                    {section.label && (
                      <p className="editorial-kicker">{section.label}</p>
                    )}
                    <h2 className="case-block__title heading-section">
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <p className="case-block__subtitle">{section.subtitle}</p>
                    )}
                  </div>
                </header>

                {Array.isArray(section.content) ? (
                  section.content.map((paragraph, index) => (
                    <div
                      key={`${section.id}-p-${index}`}
                      className="notion-block notion-block--text"
                    >
                      <p>{paragraph}</p>
                    </div>
                  ))
                ) : section.content ? (
                  <div className="notion-block notion-block--text">
                    <p>{section.content}</p>
                  </div>
                ) : null}

                {section.points?.length ? (
                  <ul className="notion-block notion-block--list">
                    {section.points.map((point) => (
                      <li key={point}>
                        <span className="notion-list__marker" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.callout && (
                  <blockquote className="notion-block notion-block--quote">
                    <CaseStudyDecor variant="sparkle" className="notion-quote__doodle" />
                    <p>{section.callout}</p>
                  </blockquote>
                )}

                {section.image && (
                  <div className="notion-block notion-block--media">
                    <ScreenshotFrame
                      src={section.image}
                      alt={section.title}
                      caption={section.caption}
                      label={section.label || "Screen"}
                    />
                  </div>
                )}
              </CaseSection>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
