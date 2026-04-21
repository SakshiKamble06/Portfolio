import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Left Section */}
        <div>
          <h2>Sakshi Kamble</h2>
          <p style={{ opacity: 0.8 }}>
            Building modern web applications 🚀
          </p>
        </div>

        {/* Center Links */}
        <div style={styles.links}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/projects" style={styles.link}>Projects</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>

        {/* Right Social Icons */}
        <div style={styles.social}>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        © 2026 Sakshi Kamble | All Rights Reserved
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "linear-gradient(135deg, #1f1f1f, #2c2c54)",
    color: "#fff",
    paddingTop: "30px",
    marginTop: "50px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "0 40px",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  social: {
    display: "flex",
    gap: "15px",
    fontSize: "22px",
  },
  bottom: {
    textAlign: "center",
    marginTop: "20px",
    padding: "15px",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    fontSize: "14px",
    opacity: 0.7,
  },
};

export default Footer;