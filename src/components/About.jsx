function About() {
  return (
    <section id="about" className="about-wrapper">
      <div className="about-card">
        <h2>About Me</h2>

        <p className="about-intro">
          I design and build user interfaces with a strong focus on clarity,
          usability, and real-world problem solving.
        </p>

        <p>
          With a background in computer science and hands-on project experience,
          I enjoy translating complex ideas into simple, intuitive digital
          experiences.
        </p>

        <div className="about-highlights">
          <span>Frontend Development</span>
          <span>UI Engineering</span>
          <span>Problem Solving</span>
          <span>Accessibility</span>
          <a href="/about">
            {""}
            <span>More Learn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
