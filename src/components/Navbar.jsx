import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-glass ${scrolled ? "scrolled" : ""}`}>
      <div className={`navbar-pill ${open ? "expanded" : ""}`}>
        {/* TOP ROW */}
        <div className="nav-top">
          {/* LOGO → HOME */}
          <Link to="/" className="nav-logo">
            JS
          </Link>

          <div className="nav-actions">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              in
            </a>

            <button
              className={`menu-toggle ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="nav-desktop">
          <Link to="/">Projects</Link>
          <Link to="/about">About</Link>

          <span className="nav-center">
            Favourite show this year was Peaky Blinders
          </span>

          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${open ? "show" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>
            Projects
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <a href="/resume.pdf" onClick={() => setOpen(false)}>
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
