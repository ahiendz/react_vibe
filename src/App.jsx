import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
// components
import Galaxy from "./components/Galaxy/Galaxy.jsx";
import TextType from './components/TextType/TextType.jsx';
import ResponsiveNavbar from "./components/ResponsiveNavbar/ResponsiveNavbar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";
import Contact from "./components/Contact/Contact.jsx";


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
                <span className="badge">React</span>
              </div>

              <div className="d-flex gap-3">
                <a href="#contact" className="btn-contact">
                  Liên hệ
                </a>
                <a href="#about" className="btn-outline">
                  Xem Hồ Sơ Học Tập
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
                src="public/assets/img/avata.jpg"
                alt="Anh Hiển"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />

      {/* ===== FOOTER ===== */}
      <footer>
        <p>© 2025 Lý Anh Hiển | All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
