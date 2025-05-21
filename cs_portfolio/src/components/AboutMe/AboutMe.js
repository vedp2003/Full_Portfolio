import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.scss";

const aboutHighlights = [
  {
    title: "Software Engineer",
    description:
      "Love programming and building solutions to real-world problems using different techniques.",
    image: require("../Skills/swe.jpg"),
  },
  {
    title: "Tech Enthusiast",
    description:
      "Love exploring new technologies such as Machine Learning, AI, and Image Processing.",
    image: require("../Skills/techlover.png"),
  },
  {
    title: "Problem Solver",
    description:
      "Equipped with analytical and problem-solving skills. Creative thinker ready to tackle challenges.",
    image: require("../Skills/probsolver.jpg"),
  },
  {
    title: "Visionary",
    description:
      "Leadership qualities with a goal to reach new heights. Quickly recovers from setbacks.",
    image: require("../Skills/vision.jpg"),
  },
];

const AboutMe = () => {
  return (
    <motion.section
      className="about-me-section"
      id="about-me" 
      initial="hidden"
      animate="visible"
    >
      <motion.div className="about-me-container">
        <div className="about-me-left">
          {aboutHighlights.slice(0, 2).map((highlight, index) => (
            <div key={index} className="highlight-card">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="highlight-image"
              />
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
        <div className="about-me-center">
          <h1 className="about-me-title">About Me</h1>
          <p className="about-me-description">
            Hi! This is <strong>Ved Patel</strong>. I am a recent graduate from Rutgers University, with a B.S. in Computer Science and Data Science, along with having completed a minor in Business Administration. I'm a passionate and
            dedicated developer with a strong interest in web development, mobile development, data analysis, and machine learning. I have honed my skills through various hands-on projects and am constantly eager to learn new
            technologies.
          </p>
          <p className="about-me-description">
            I love working collaboratively towards building new solutions to real-life and practical issues, such as being able to create a robust machine learning model to assist with predicting healthcare/business/sports trends. I'm currently pursuing certifications in both AWS Cloud Practitioner and Microsoft Azure Fundamentals.
          </p>
        </div>
        <div className="about-me-right">
          {aboutHighlights.slice(2).map((highlight, index) => (
            <div key={index} className="highlight-card">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="highlight-image"
              />
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
