import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import "./Contact.css";
import { FaFacebook, FaGithub, FaTiktok, FaTelegram, FaDiscord } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("timeField").value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_u1e6lio", // Service ID
        "template_jxbgf5l", // Template ID
        form.current,
        "1ZiXYtPFSypbfWcHD" // Public key
      )
      .then(
        () => {
          alert("✅ Tin nhắn đã được gửi thành công!");
          form.current.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          alert("❌ Gửi thất bại, vui lòng thử lại!");
        }
      );
  };

  return (
    <section id="contact" className="section text-center">
      <ScrollFloat>Contact Me</ScrollFloat>
      <AnimatedContent distance={100} delay={0.3}>
        <div className="contact-wrapper container">
          {/* BOX 1 - SOCIAL LIÊN HỆ */}
          <div className="contact-box social-box">
            <h3 className="contact-title">Kết nối với tôi</h3>
            <div className="social-grid">
              <a href="https://zalo.me/0937591227" target="_blank" rel="noreferrer" className="social-item">
                <SiZalo className="icon" /> Zalo
              </a>
              <a href="https://www.facebook.com/hien.ly.28710/" target="_blank" rel="noreferrer" className="social-item">
                <FaFacebook className="icon" /> Facebook
              </a>
              <a href="https://github.com/ahiendz" target="_blank" rel="noreferrer" className="social-item">
                <FaGithub className="icon" /> GitHub
              </a>
              <a href="https://www.tiktok.com/@hin.li22" target="_blank" rel="noreferrer" className="social-item">
                <FaTiktok className="icon" /> TikTok
              </a>
              <a href="https://t.me/ahiendz" target="_blank" rel="noreferrer" className="social-item">
                <FaTelegram className="icon" /> Telegram
              </a>
              <a href="https://discord.com/invite/H7YuVXXh" target="_blank" rel="noreferrer" className="social-item">
                <FaDiscord className="icon" /> Discord
              </a>
            </div>
          </div>
          {/* BOX 2 - FORM LIÊN HỆ */}
          <div className="contact-box form-box">
            <h3 className="contact-title">Gửi tin nhắn</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input type="text" name="name" placeholder="Tên của bạn" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Nội dung..." required></textarea>
              <input type="hidden" name="time" id="timeField" />
              <button type="submit" className="btn-cyber w-100 mt-3">
                GỬI TIN NHẮN
              </button>
            </form>
          </div>

        </div>
      </AnimatedContent>
    </section>
  );
};

export default Contact;
