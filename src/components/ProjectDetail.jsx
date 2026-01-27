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
