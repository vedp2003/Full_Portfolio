import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  useEffect(() => {
    const adjustIntroductionMargin = () => {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const introduction = document.querySelector(".introduction");
      introduction.style.marginTop = `${navbarHeight}px`;
    };

    adjustIntroductionMargin();

    window.addEventListener("resize", adjustIntroductionMargin);
    return () => {
      window.removeEventListener("resize", adjustIntroductionMargin);
    };
  }, []);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="container">
        <div className="logo">
          <ScrollLink to="introduction" smooth={true} duration={500}>
            <motion.span
              whileHover={{ scale: 1.2, color: "#4A90E2" }}
              style={{ fontSize: "1.8rem", fontWeight: "bold" }}
            >
              Ved<span style={{ color: "#4A90E2" }}>Portfolio</span>
            </motion.span>
          </ScrollLink>
        </div>
        <ul className="nav-links">
          <li>
            <ScrollLink to="about-me" smooth={true} duration={500} offset={-80}>
              <motion.span whileHover={{ scale: 1.2, color: "#4A90E2" }}>
                About-Me
              </motion.span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth={true} duration={500} offset={-80}>
              <motion.span whileHover={{ scale: 1.2, color: "#4A90E2" }}>
                Skills
              </motion.span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              <motion.span whileHover={{ scale: 1.2, color: "#4A90E2" }}>
                Projects
              </motion.span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <motion.span whileHover={{ scale: 1.2, color: "#4A90E2" }}>
                Contact
              </motion.span>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
