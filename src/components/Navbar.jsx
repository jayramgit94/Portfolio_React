import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import resumePdf from "../assets/resume_1_jay.pdf";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleProjectsClick = (event) => {
    event.preventDefault();
    const scrollToWork = () => {
      const section = document.getElementById("work");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname === "/") {
      scrollToWork();
    } else {
      navigate("/#work");
      setTimeout(scrollToWork, 0);
    }

    setOpen(false);
  };

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
          <Link to="/#work" onClick={handleProjectsClick}>
            Projects
          </Link>
          <Link to="/about">About</Link>

          <span className="nav-center">
            Favourite show this year was Peaky Blinders
          </span>

          <a href={resumePdf} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${open ? "show" : ""}`}>
          <Link to="/#work" onClick={handleProjectsClick}>
            Projects
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <a href={resumePdf} onClick={() => setOpen(false)}>
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
