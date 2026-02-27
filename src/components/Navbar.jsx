import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import resumePdf from "../assets/resume_1_jay.pdf";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback(
    (sectionId) => {
      const doScroll = () => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      if (location.pathname === "/") {
        doScroll();
      } else {
        navigate(`/#${sectionId}`);
        setTimeout(doScroll, 100);
      }
      setOpen(false);
    },
    [location.pathname, navigate],
  );

  const handleProjectsClick = (e) => {
    e.preventDefault();
    scrollToSection("work");
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToSection("contact");
  };

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);
      setHidden(currentY > 300 && currentY > lastScrollY.current);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navClasses = [
    "navbar-glass",
    scrolled ? "scrolled" : "",
    hidden ? "hidden-nav" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.header
      className={navClasses}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`navbar-pill ${open ? "expanded" : ""}`}>
        {/* TOP ROW */}
        <div className="nav-top">
          <Link to="/" className="nav-logo" aria-label="Home">
            JS
          </Link>

          <div className="nav-actions">
            <button
              className={`menu-toggle ${open ? "open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
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
          <a href="#contact" onClick={handleContactClick}>
            Contact
          </a>
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="nav-resume-btn"
          >
            Resume
          </a>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-menu show"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/#work" onClick={handleProjectsClick}>
                Projects
              </Link>
              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
              <a href="#contact" onClick={handleContactClick}>
                Contact
              </a>
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Navbar;
