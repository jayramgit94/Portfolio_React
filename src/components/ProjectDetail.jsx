import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();

  if (!projects || !Array.isArray(projects)) {
    return <div style={{ padding: "120px" }}>Projects data missing</div>;
  }

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div style={{ padding: "120px" }}>Project not found</div>;
  }

  return (
    <div style={{ padding: "120px 40px", maxWidth: "900px", margin: "auto" }}>
      <h1>{project.title}</h1>

      {project.description && (
        <p style={{ marginTop: "20px" }}>{project.description}</p>
      )}

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{
            marginTop: "40px",
            width: "100%",
            borderRadius: "12px",
          }}
        />
      )}

      {Array.isArray(project.sections) &&
        project.sections.map((section) => (
          <div key={section.id} style={{ marginTop: "60px" }}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
    </div>
  );
}

export default ProjectDetail;
