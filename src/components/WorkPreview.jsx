import "./workpreview.css";

function WorkPreview() {
  return (
    <section id="work" className="section work-section">
      <h2>Selected Work</h2>
      <p>Here’s some recent projects I’ve worked on.</p>

      <div className="work-grid">
        <div className="work-card">
          <h3>Project Title</h3>
          <p>Short project description</p>
          <a href="/work/project-id">Case Study →</a>
        </div>
        {/* Repeat cards later dynamically */}
      </div>
    </section>
  );
}

export default WorkPreview;
