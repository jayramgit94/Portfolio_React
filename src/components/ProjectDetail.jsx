import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../data/projects";
import "../styles/project-detail.css";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");

  if (!projects || !Array.isArray(projects)) {
    return <div style={{ padding: "120px" }}>Projects data missing</div>;
  }

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div style={{ padding: "120px" }}>Project not found</div>;
  }

  const sections = Array.isArray(project.sections) ? project.sections : [];

  const tocItems = useMemo(
    () => [
      { id: "overview", title: "Overview" },
      ...sections.map((section) => ({
        id: section.id,
        title: section.title,
      })),
    ],
    [sections],
  );

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  useEffect(() => {
    setActiveSection("overview");
  }, [id]);

  useEffect(() => {
    const sectionElements = Array.from(
      document.querySelectorAll(".project-section"),
    );

    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-20% 0px -55% 0px",
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections.length]);

  return (
    <div className="project-detail">
      <header
        className="project-hero"
        style={{ background: project.gradient || "#f7f6ff" }}
      >
        <div className="project-hero-inner">
          <button type="button" className="project-back" onClick={handleBack}>
            ← Back to work
          </button>

          <p className="project-eyebrow">Case Study</p>
          <h1 className="project-title">{project.title}</h1>
          {project.description && (
            <p className="project-subtitle">{project.description}</p>
          )}

          <div className="project-hero-grid">
            <div className="project-hero-card">
              <div className="project-meta">
                {project.role && (
                  <div>
                    <p className="meta-label">Role</p>
                    <p className="meta-value">{project.role}</p>
                  </div>
                )}
                {project.timeline && (
                  <div>
                    <p className="meta-label">Timeline</p>
                    <p className="meta-value">{project.timeline}</p>
                  </div>
                )}
                {project.tools?.length ? (
                  <div>
                    <p className="meta-label">Tools</p>
                    <p className="meta-value">{project.tools.join(" · ")}</p>
                  </div>
                ) : null}
              </div>

              {project.highlights?.length ? (
                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {(project.liveLink || project.githubLink) && (
                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>

            {project.image && (
              <div className="project-hero-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="project-body">
        <aside className="project-toc">
          <div className="toc-card">
            <p className="toc-title">On this page</p>
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`toc-link ${
                  activeSection === item.id ? "is-active" : ""
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </aside>

        <main className="project-content">
          <section id="overview" className="project-section">
            <div className="section-header">
              <p className="section-label">Summary</p>
              <h2>Overview</h2>
            </div>
            {project.longDescription ? (
              <p className="section-text">{project.longDescription}</p>
            ) : (
              <p className="section-text">{project.description}</p>
            )}

            {project.objectives?.length ? (
              <div className="section-grid">
                {project.objectives.map((objective) => (
                  <div key={objective.title} className="info-card">
                    <h3>{objective.title}</h3>
                    <p>{objective.description}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </section>

          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="project-section"
            >
              <div className="section-header">
                {section.label && (
                  <p className="section-label">{section.label}</p>
                )}
                <h2>{section.title}</h2>
                {section.subtitle && (
                  <p className="section-subtitle">{section.subtitle}</p>
                )}
              </div>

              {Array.isArray(section.content) ? (
                section.content.map((paragraph, index) => (
                  <p key={`${section.id}-${index}`} className="section-text">
                    {paragraph}
                  </p>
                ))
              ) : section.content ? (
                <p className="section-text">{section.content}</p>
              ) : null}

              {section.points?.length ? (
                <ul className="section-list">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}

              {section.callout && (
                <div className="section-callout">
                  <p>{section.callout}</p>
                </div>
              )}

              {section.image && (
                <figure className="section-media">
                  <img src={section.image} alt={section.title} />
                  {section.caption && (
                    <figcaption>{section.caption}</figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default ProjectDetail;
