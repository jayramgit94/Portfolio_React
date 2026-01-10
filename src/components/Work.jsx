import projects  from "../data/projects";  

function Work() {
  return (
    <section id="work" className="work-section">
      <p className="work-label">01 Work / Case Study</p>

      {projects.map((project, index) => (
        <a
          key={project.id}
          href={`/work/${project.id}`}
          className="work-card"
          style={{ background: project.gradient }}
        >
          <div className="work-content">
            <span className="work-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h2 className="work-title">{project.title}</h2>
            <p className="work-description">{project.description}</p>

            <button className="work-button">Read Case Study</button>
          </div>

          <div className="work-visual">
            <img src={project.image} alt={project.title} />
          </div>
        </a>
      ))}
    </section>
  );
}

export default Work;
