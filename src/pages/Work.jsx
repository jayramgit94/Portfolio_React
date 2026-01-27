import { useEffect } from "react";
import projects from "../../data/projects";
import ProjectCard from "../components/ProjectCard";

function Work() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

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
