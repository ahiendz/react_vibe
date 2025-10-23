import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GooeyNav from "../GooeyNav/GooeyNav.jsx";
import "./ResponsiveNavbar.css";

const items = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CERTIFICATES", href: "#certificates" },
  { label: "CONTACT", href: "#contact" },
];

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Đóng menu khi click bên ngoài
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const nav = document.getElementById("navbarNav");
      const toggler = document.querySelector(".navbar-toggler");
      if (isOpen && nav && !nav.contains(e.target) && !toggler.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container-fluid px-3">
        {/* === Logo === */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="src\assets\img\logo.jpg"
            className="logo-hover me-2"
            width="55"
            alt="Logo"
          />
          <span className="brand-text">Anh Hiển</span>
        </a>

        {/* === Toggle button === */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* === Collapse area === */}
        <div
          className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""
            }`}
          id="navbarNav"
        >
          {/* Desktop */}
          <div className="d-none d-lg-block position-relative">
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Mobile */}
          <ul className="navbar-nav d-lg-none text-center w-100 mobile-menu">
            {items.map((item, i) => (
              <li className="nav-item" key={i}>
                <a
                  className="nav-link"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
