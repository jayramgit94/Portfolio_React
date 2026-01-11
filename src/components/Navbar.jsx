import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-glass ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-pill">
        {/* LEFT */}
        <div className="nav-left">
          <span className="nav-logo">JS</span>
          <a href="#work">Projects</a>
          <a href="#about">About</a>
        </div>

        {/* CENTER */}
        <div className="nav-center">
          Favourite show this year was Peaky Blinders
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <a href="/resume.pdf" target="_blank">
            Resume
          </a>
          <a href="https://linkedin.com" target="_blank" className="linkedin">
            in
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
