import React from "react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      name: "To-Do List App",
      img: "src/assets/img/to_do_list.png",
      desc: "Ứng dụng quản lý công việc với Pomodoro Timer.",
      link: "https://github.com/ahiendz/To-do-list",
    },
    {
      name: "School Management System",
      img: "src/assets/img/school.png",
      desc: "Quản lý lớp, giáo viên, học sinh và điểm số.",
      link: "https://github.com/ahiendz/School-Management-System",
    },
    {
      name: "Hand-Gesture-Control",
      img: "src/assets/img/hand.png",
      desc: "Điều khiển ánh sáng bằng sức mạnh của bàn tay.",
      link: "https://github.com/ahiendz/Hand-Gesture-Control",
    }
  ];

  return (
    <section id="projects" className="section text-center">
      <ScrollFloat>Projects</ScrollFloat>
      <div className="projects-container container">
        {projectData.map((proj, i) => (
          <AnimatedContent key={i} delay={i * 0.3}>
            <div className="project-card">
              <img src={proj.img} alt={proj.name}/>
              <h5>{proj.name}</h5>
              <p>{proj.desc}</p>
              <a href={proj.link} className="btn-outline" target="_blank" rel="noreferrer">Details</a>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default Projects;
