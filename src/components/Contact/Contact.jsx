import React from "react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section text-center">
      <ScrollFloat>Contact Me</ScrollFloat>
      <AnimatedContent distance={100} delay={0.3}>
        <div className="contact-container container">
          <form className="contact-form">
            <input type="text" placeholder="Tên của bạn" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Nội dung..." required></textarea>
            <button className="btn-cyber w-100 mt-3">Gửi tin nhắn</button>
          </form>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default Contact;
