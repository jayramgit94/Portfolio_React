function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>Let’s build something meaningful together.</h2>

      <p className="footer-text">
        Feel free to reach out if you want to collaborate or just say hello.
      </p>

      <div className="footer-links">
        <a href="mailto:jayram@email.com">Email</a>
        <a href="https://github.com/your-github" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank">
          LinkedIn
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Jayram Sangawat
      </p>
    </footer>
  );
}

export default Footer;
