import React, { useState, useEffect } from "react";
import sanityClient from "../../Sanity";
import { motion, AnimatePresence } from "framer-motion";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skill"]{
          name,
          category,
          "iconUrl": icon.asset->url
        }`
      )
      .then((data) => {
        const groupedSkills = data.reduce((acc, skill) => {
          acc[skill.category] = acc[skill.category] || [];
          acc[skill.category].push(skill);
          return acc;
        }, {});
        setSkills(groupedSkills);
        setCategories(Object.keys(groupedSkills));
        setActiveCategory(Object.keys(groupedSkills)[0]);
      })
      .catch(console.error);
  }, []);

  const formatCategoryTitle = (category) => {
    const titles = {
      "programming-languages": "Programming Languages",
      "web-development": "Web Development",
      "database-cms": "Database Management",
      "mobile-development": "Mobile Development",
      "version-control": "Version Control",
      "cloud-computing": "Cloud Computing",
      "machine-learning-ai": "Machine Learning/AI",
      "productivity-tools": "Productivity Tools",
      "design-tools": "Design Tools"
    };
    return titles[category] || category;
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="skills-section"
      id="skills"
      initial="hidden"
      animate="visible"
    >
      <motion.div className="my-skills-container">
        <h1 className="my-skills-title">MY SKILLS</h1>

        {/* Tab Bar */}
        <motion.div className="skills-tab-bar">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`tab-button ${
                activeCategory === category ? "active" : ""
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              {formatCategoryTitle(category)}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills-display"
            variants={skillVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {skills[activeCategory]?.map((skill, index) => (
              <motion.div key={index} className="skill-card">
                {skill.iconUrl && (
                  <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    className="skill-icon"
                  />
                )}
                <h3 className="skill-name">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
