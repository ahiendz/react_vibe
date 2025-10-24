import React from "react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import "./Skills.css";

const skills = [
  { name: "HTML", src: "src/assets/logo/html.svg" },
  { name: "CSS", src: "src/assets/logo/css.svg" },
  { name: "JavaScript", src: "src/assets/logo/javascript.svg" },
  { name: "Python", src: "src/assets/logo/Python.svg" },
  { name: "React", src: "src/assets/logo/react.svg" },
  { name: "Bootstrap", src: "src/assets/logo/bootstrap.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section text-center">
      <ScrollFloat duration={1}>Tech Stack</ScrollFloat>
      <div className="skills-grid container">
        {skills.map((skill, i) => (
          <AnimatedContent key={i} delay={i * 0.2}>
            <div className="skill-card">
              <img src={skill.src} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default Skills;
