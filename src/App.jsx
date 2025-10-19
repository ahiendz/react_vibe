import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
// components
import Galaxy from "./components/Galaxy/Galaxy.jsx";
import TextType from './components/TextType/TextType.jsx';
import ResponsiveNavbar from "./components/ResponsiveNavbar/ResponsiveNavbar.jsx";

// update with your own items
const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

function App() {
  return (
    <>
      {/* ===== Navbar ===== */}
      <ResponsiveNavbar />

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="hero position-relative"
        style={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Galaxy background */}
        <div
          className="galaxy-bg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none", // Cho phép chuột đi xuyên qua Hero text mà Galaxy vẫn nhận
          }}
        >
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1}
            glowIntensity={0.3}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={1.5}
            autoCenterRepulsion={0}
            starSpeed={0}
          />
        </div>

        {/* Hero content */}
        <div
          className="container position-relative"
          style={{
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="row align-items-center w-100">
            {/* Text bên trái */}
            <div className="col-lg-6 hero-text">
              <h1>
                Xin chào, mình là <br />
                <span>Lý Anh Hiển</span>
              </h1>
              <p className="subtitle">Junior Developer | STEM Enthusiast</p>
              {/* <p className="typewriter">
                <span id="motto"></span>
                <span className="cursor">|</span>
              </p> */}
              <TextType
                text={[`"Don't just code. Own it."`,
                  `"Build smart. Learn fast."`,
                  `"Sleep, debug, repeat."`,
                  `"Ideas are cheap. Execution is gold."`]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#00bfff"]}
                className="typewriter"
              />

              <div className="skills mb-4">
                <span className="badge">Python</span>
                <span className="badge">JavaScript</span>
                <span className="badge">HTML</span>
                <span className="badge">Bootstrap</span>
              </div>

              <div className="d-flex gap-3">
                <a href="#contact" className="btn-cyber">
                  Liên hệ
                </a>
                <a href="#about" className="btn-outline">
                  Xem CV
                </a>
              </div>

              <div className="social-links mt-4">
                <a href="https://github.com/ahiendz">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://t.me/ahiendz">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="https://discord.gg/H7YuVXXh">
                  <i className="fab fa-discord"></i>
                </a>
              </div>
            </div>

            {/* Ảnh bên phải */}
            <div className="col-lg-6 text-center">
              <img
                src="/src/assets/img/avata.jpg"
                alt="Anh Hiển"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ===== ABOUT ===== */}
      <section id="about" className="section about-section">
        <div className="container text-center">
          <h2 className="section-title">ABOUT ME</h2>
          <p className="section-desc">
            Learn more about me – my background, personal insights, passions,
            and the drive that keeps me from giving up.
          </p>

          <div className="cyber-box mx-auto mt-4">
            <div className="cyber-box-inner">
              <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="about-block">
                    <div className="about-header">
                      <i className="fas fa-user about-icon"></i>
                      <h3>Personal Info</h3>
                    </div>
                    <ul className="about-list">
                      <li>
                        <i className="fas fa-id-card"></i>{" "}
                        <span>Name:</span> Lý Anh Hiển
                      </li>
                      <li>
                        <i className="fas fa-phone"></i>{" "}
                        <span>Phone:</span> +84 937 591 227
                      </li>
                      <li>
                        <i className="fab fa-telegram"></i>{" "}
                        <span>Telegram:</span> @ahiendz
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-block">
                    <div className="about-header">
                      <i className="fas fa-briefcase about-icon"></i>
                      <h3>Professional Info</h3>
                    </div>
                    <ul className="about-list">
                      <li>
                        <i className="fab fa-github"></i>{" "}
                        <span>GitHub:</span> ahiendz
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        <span>Location:</span> HCMC, Vietnam
                      </li>
                      <li>
                        <i className="fas fa-language"></i>{" "}
                        <span>Languages:</span> Vietnamese, English
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <a
                  href="assets/docs/EBOOK 50 BÀI TOÁN TRỌNG TÂM CHƯƠNG 1 - TOÁN 9.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cv"
                >
                  <i className="fas fa-download"></i> DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="section bg-dark-alt">
        <div className="container text-center">
          <h2 className="section-title">Tech Stack</h2>
          <div className="row g-4 justify-content-center">
            {[
              { name: "HTML", src: "src/assets/logo/html.svg" },
              { name: "CSS", src: "src/assets/logo/css.svg" },
              { name: "JavaScript", src: "src/assets/logo/javascript.svg" },
              { name: "Python", src: "src/assets/logo/Python.svg" },
            ].map((skill) => (
              <div className="col-6 col-md-3" key={skill.name}>
                <div className="card skill-card">
                  <img src={skill.src} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section">
        <div className="container text-center">
          <h2 className="section-title">Projects</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card project-card">
                <img
                  src="src\assets\img\to_do_list.png"
                  className="card-img-top"
                  alt="To-Do App"
                />
                <div className="card-body">
                  <h5 className="card-title">To-Do List App</h5>
                  <p className="card-text">
                    Ứng dụng quản lý công việc với Pomodoro Timer.
                  </p>
                  <a
                    href="https://github.com/ahiendz/To-do-list"
                    className="btn btn-outline-light btn-sm"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card project-card">
                <img
                  src="src/assets/img/school.png"
                  className="card-img-top"
                  alt="School Manager"
                />
                <div className="card-body">
                  <h5 className="card-title">School Management System</h5>
                  <p className="card-text">
                    Quản lý lớp, giáo viên, học sinh và điểm số.
                  </p>
                  <a
                    href="https://github.com/ahiendz/School-Management-System"
                    className="btn btn-outline-light btn-sm"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATES ===== */}
      <section id="certificates" className="section bg-dark-alt">
        <div className="container text-center">
          <h2 className="section-title">Certificates</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card cert-card">
                <i className="fas fa-trophy"></i>
                <h5>Giải Nhất VioEdu Toán</h5>
                <p>Thành tích nổi bật trong học tập.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card cert-card">
                <i className="fas fa-laptop-code"></i>
                <h5>Đại diện thi HSG máy tính cầm tay</h5>
                <p>Được chọn làm gương mặt đại diện của trường.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section">
        <div className="container text-center">
          <h2 className="section-title">Contact Me</h2>
          <div className="row justify-content-center mt-4">
            <div className="col-md-8">
              <div className="contact-box">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên của bạn"
                    required
                  />
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    className="form-control"
                    placeholder="Nội dung..."
                    required
                  ></textarea>
                  <button className="btn-cyber mt-3 w-100">
                    Gửi tin nhắn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <p>© 2025 Lý Anh Hiển | All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
