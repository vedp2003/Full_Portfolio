import React, { useEffect, useState } from "react";
import "./ProgressBar.scss";

const sections = [
  { id: "introduction", dotIndex: 0 },
  { id: "about-me", dotIndex: 1 },
  { id: "skills", dotIndex: 2 },
  { id: "projects", dotIndex: 3 },
  { id: "contact", dotIndex: 4 },
];

const ProgressBar = () => {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentActiveDot = 0;
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentActiveDot = section.dotIndex;
          }
        }
      });

      setActiveDot(currentActiveDot);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="progress-bar">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`progress-dot ${activeDot === index ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
