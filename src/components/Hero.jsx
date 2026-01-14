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
          <div className="image-wrap">
            <img
              className="hero-image"
              src="/profile.jpg"
              alt="Jayram Sangawat"
            />

            <svg className="spin-badge" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="
            M 50, 50
            m -35, 0
            a 35,35 0 1,1 70,0
            a 35,35 0 1,1 -70,0
          "
                />
              </defs>

              <text fontSize="16" letterSpacing="2.2" fill="#5e2080">
                <textPath href="#circlePath">
                  MEET • ME • NICE • TO • YOU •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
