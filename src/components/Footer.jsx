import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            JS
          </Link>
          <p>Crafting digital experiences with care.</p>
        </div>

        <nav className="footer-nav">
          <div className="footer-nav-group">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="#work">Projects</a>
          </div>

          <div className="footer-nav-group">
            <h4>Connect</h4>
            <a href="mailto:jayram@email.com">Email</a>
            <a
              href="https://github.com/jayramgit94"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jayram-s-6b1865293/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://linkedin.com/in/jayram-s-6b1865293/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </nav>
      </div>

      <div className="footer-divider" />

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Jayram Sangawat — Made with{" "}
        <span className="heart">&hearts;</span> in India
      </p>
    </footer>
  );
}

export default Footer;
