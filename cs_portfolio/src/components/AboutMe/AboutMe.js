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
            Hi! This is <strong>Ved Patel</strong>. I graduated from Rutgers University in May 2026 with a B.S. in Computer Science and Data Science, along with a minor in Business Administration. I'm a passionate and
            dedicated developer with a strong interest in web development, AI, mobile development, data analysis, and machine learning. I have honed my skills through professional experience as well as various hands-on projects. I am constantly eager to learn new
            technologies.
          </p>
          <p className="about-me-description">
            I currently work at KPMG as a full-time Software Engineer, where I focus on integrating software and AI solutions into business workflows. My work includes full-stack engineering, developing agentic workflows, implementing Retrieval-Augmented Generation (RAG) pipelines, and building practical AI-driven applications that address real-world challenges. I'm excited about leveraging emerging technologies to create innovative and impactful solutions, while continuing to expand my expertise in cloud computing, AI, and scalable systems.
          </p>
          <p className="about-me-description">
            I also have certifications in Microsoft Azure Fundamentals, Microsoft Azure AI Fundamentals, and Microsoft Azure Data Fundamentals, and I am actively pursuing more advanced associate-level certifications (AWS, Azure) to continue deepening my expertise in cloud and AI technologies.
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
