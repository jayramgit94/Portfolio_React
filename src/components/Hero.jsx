function Hero() {
  return (
    <section className="hero-elly">
      <div className="hero-elly-grid">
        {/* TEXT */}
        <div className="hero-elly-text">
          <h1>
            Frontend Developer
            <br />
            crafting clean,
            <br />
            thoughtful interfaces
          </h1>

          <p className="hero-elly-desc">
            I build user-focused web experiences with clarity, usability, and
            real-world impact.
          </p>

          <p className="hero-elly-desc muted">
            Focused on React, UI engineering, and portfolio-grade products.
          </p>
        </div>

        {/* IMAGE */}
        <div className="hero-elly-image">
          <img src="/profile.jpg" alt="Jayram Sangawat" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
