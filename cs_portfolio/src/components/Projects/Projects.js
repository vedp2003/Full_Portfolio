import React, { useState, useEffect } from "react";
import sanityClient from "../../Sanity";
import { motion } from "framer-motion";
import Modal from "react-modal";
import "./Projects.scss";

Modal.setAppElement("#root");

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] | order(_createdAt asc) {
          title,
          description,
          links,
          tags,
          "imageUrl": image.asset->url
        }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <motion.section
      className="projects"
      id="projects"
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      variants={containerVariants}
      viewport={{ once: false, amount: 0.05 }}
    >
      <motion.h1 className="projects-title" variants={cardVariants}>
        Projects
      </motion.h1>
      <motion.div className="projects-container" variants={containerVariants}>
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="project-image"
              onClick={() => openModal(project.imageUrl)}
            >
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-description">
                {project.description.split('\n').map((line, index) => (
                  <p key={index} style={{ marginBottom: '1rem' }}>
                    {line.trim() || <br />} {}
                  </p>
                ))}
              </div>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="links">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <img src={selectedImage} alt="Enlarged Project" className="modal-image" />
      </Modal>
    </motion.section>
  );
};

export default Projects;
