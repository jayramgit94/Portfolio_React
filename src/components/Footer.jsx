import { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer({ className = "", showNote = true }) {
  const [liveTime, setLiveTime] = useState("");

  useEffect(() => {
    const formatIndiaTime = () => {
      const raw = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
        timeZoneName: "short",
      }).format(new Date());

      return raw.replace("GMT+5:30", "IST");
    };

    setLiveTime(formatIndiaTime());

    const tick = () => setLiveTime(formatIndiaTime());
    const now = Date.now();
    const msUntilNextMinute = 60000 - (now % 60000);

    let timer;
    const alignTimer = setTimeout(() => {
      tick();
      timer = setInterval(tick, 60000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(alignTimer);
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <footer className={`footer footer-minimal ${className}`.trim()}>
      <div className="footer-minimal-inner">
        <p className="footer-minimal-copy">
          Jayram Sangawat &copy; {new Date().getFullYear()} &middot; Building
          AI-first products.
        </p>

        <p className="footer-minimal-time" aria-live="polite">
          Maharashtra, IN &mdash; {liveTime}
        </p>

        {showNote && (
          <p className="footer-minimal-note">
            If you use light mode in VS Code, We&apos;re not friends 🫵🏻 👀
          </p>
        )}

        <nav className="footer-minimal-socials" aria-label="Footer social links">
          <a
            href="mailto:sangawatjayram@gmail.com"
            aria-label="Send Email"
            className="footer-minimal-icon"
          >
            <FiMail />
          </a>
          <a
            href="https://www.linkedin.com/in/jayram-s-6b1865293/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-minimal-icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/jayramgit94"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-minimal-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/jayrams_.23/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-minimal-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://leetcode.com/u/jayramleet94/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="footer-minimal-icon"
          >
            <SiLeetcode />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
