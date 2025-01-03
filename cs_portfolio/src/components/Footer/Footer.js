import React from "react";
import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-section">
          <a
            href="https://github.com/vedp2003"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub className="icon" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/vedp2003"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </div>
        <p className="copyright">© 2025 Ved Patel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
