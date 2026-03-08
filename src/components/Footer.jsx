import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            JS
          </Link>
          <p>Built with consistency, curiosity, and hard work.</p>
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
            <a href="mailto:sangawatjayram@gmail.com">Email</a>
            <a
              href="https://github.com/jayramgit94"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jayram-s-6b1865293/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/jayrams_.23/"
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
        &copy; {new Date().getFullYear()} Jayram G Sangawat &mdash; Made with{" "}
        <span className="heart">&hearts;</span> in Maharashtra, India
      </p>
    </footer>
  );
}

export default Footer;
