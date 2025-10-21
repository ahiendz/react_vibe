import React from "react";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import "./Certificates.css";

const Certificates = () => {
    const certs = [
        {
            icon: "fas fa-trophy",
            title: "Giải Nhất VioEdu Toán",
            desc: "Thành tích nổi bật trong học tập môn Toán, rèn luyện tư duy logic và khả năng giải quyết vấn đề.",
        },,
        {
            icon: "fas fa-robot",
            title: "Đạt giải Hội thi STEM cấp trường",
            desc: "Dự án 'Gesture-Controlled Smart Switch' đạt giải trong hội thi STEM – ứng dụng công nghệ và cảm biến chuyển động.",
        },
        {
            icon: "fas fa-code",
            title: "Hoàn thành khóa học Python (MindX)",
            desc: "Nắm vững ngôn ngữ Python, cấu trúc dữ liệu và lập trình ứng dụng cơ bản.",
        }
    ];


    return (
        <section id="certificates" className="section bg-dark-alt text-center">
            <ScrollFloat>Certificates</ScrollFloat>
            <div className="cert-grid container">
                {certs.map((cert, i) => (
                    <AnimatedContent key={i} delay={i * 0.25}>
                        <div className="cert-card">
                            <i className={cert.icon}></i>
                            <h5>{cert.title}</h5>
                            <p>{cert.desc}</p>
                        </div>
                    </AnimatedContent>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
