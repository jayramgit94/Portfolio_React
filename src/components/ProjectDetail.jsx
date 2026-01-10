import { useParams } from "react-router-dom";
import projects from "../data/projects.js";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2 style={{ padding: "100px" }}>Project not found</h2>;
  }

  return (
    <div style={{ padding: "120px 40px", maxWidth: "900px", margin: "auto" }}>
      <h1>{project.title}</h1>
      <p style={{ marginTop: "20px" }}>{project.description}</p>

      <h3 style={{ marginTop: "40px" }}>Problem</h3>
      <p>{project.problem}</p>

      <h3 style={{ marginTop: "20px" }}>Solution</h3>
      <p>{project.solution}</p>
    </div>
  );
}

export default ProjectDetail;
