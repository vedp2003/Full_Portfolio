import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Introduction.scss";

const Introduction = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <section className="introduction" id="introduction">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-container">
          <div className="introduction-text">
            <TypeAnimation
              cursor={false}
              sequence={[
                "Hello, I'm Ved Patel!",
                () => setShowSubtitle(true),
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 100 }}
              wrapper="h1"
              repeat={0}
            />
            {showSubtitle && (
              <TypeAnimation
                cursor
                sequence={[
                  500,
                  "Software Engineer.",
                  1000,
                  "Creative Problem Solver.",
                  1000,
                  "Tech Enthusiast.",
                  1000,
                  "Innovative Thinker.",
                ]}
                speed={60}
                wrapper="h5"
                repeat={Infinity}
              />
            )}
          </div>
          <motion.div
            className="scroll-prompt"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a href="#projects" className="btn PrimaryBtn">
              View My Work
            </a>
          </motion.div>
        </div>

        <div className="visual-container">
          <div className="photo-frame">
            <img
              src={require("./photo.png")}
              alt="Ved Animated Portrait"
              className="profile-photo"
            />
          </div>
          <div className="floating-icons">
            <motion.img
              src={require("./coding.png")}
              alt="Coding Symbol"
              className="icon"
              whileHover={{ scale: 1.2, rotate: 10 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.img
              src={require("./curious.jpg")}
              alt="Curiosity Illustrator"
              className="icon"
              whileHover={{ scale: 1.2, rotate: 10 }}
              animate={{ y: [-10, 0, -10] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.img
              src={require("./techs.jpg")}
              alt="Technology Lover"
              className="icon"
              whileHover={{ scale: 1.2, rotate: 10 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Introduction;