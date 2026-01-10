import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link to={`/work/${project.id}`}>View Study →</Link>
    </div>
  );
}

export default ProjectCard;
