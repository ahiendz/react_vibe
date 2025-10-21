import React from "react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section about-section text-center">
      <ScrollFloat>ABOUT ME</ScrollFloat>
      <p className="section-desc">
        Learn more about me – my background, personal insights, passions,
        and the drive that keeps me from giving up.
      </p>

      <div className="about-container container">
        <AnimatedContent direction="horizontal" distance={200} duration={1}>
          <div className="about-card">
            <h3><i className="fas fa-user"></i> Personal Info</h3>
            <ul>
              <li><b>Name:</b> Lý Anh Hiển</li>
              <li><b>Phone:</b> +84 937 591 227</li>
              <li><b>Telegram:</b> @ahiendz</li>
            </ul>
          </div>
        </AnimatedContent>

        <AnimatedContent direction="horizontal" distance={200} duration={1} reverse>
          <div className="about-card">
            <h3><i className="fas fa-briefcase"></i> Professional Info</h3>
            <ul>
              <li><b>GitHub:</b> ahiendz</li>
              <li><b>Location:</b> HCMC, Vietnam</li>
              <li><b>Languages:</b> Vietnamese, English</li>
            </ul>
          </div>
        </AnimatedContent>
      </div>
      
      <a
        href="/docs\HỒ SƠ HỌC TẬP.pdf"
        className="btn-cv mt-4"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fas fa-download"></i> Xem hồ sơ học tập
      </a>
    </section>
  );
};

export default About;
