import projects from "../../data/projects";
import ProjectCard from "../components/ProjectCard";

function Work() {
  return (
    <section>
      <h2>Selected Work</h2>

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default Work;
