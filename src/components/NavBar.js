import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import cv from "../assets/doc/Novalia’s Curiculum Vitae.pdf";
import resume from "../assets/doc/Novalia's Resume.pdf";
import { BrowserRouter as Router } from "react-router-dom";

import "./css/NavBar.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#education"
                className={
                  activeLink === "education"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("education")}
              >
                Education
              </Nav.Link>
    
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#what-i-do"
                className={
                  activeLink === "what-i-do" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("what-i-do")}
              >
                What I do?
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Video Introduction
              </Nav.Link>
            </Nav>
              <span className="navbar-text">
              <a className="vvd" href={cv} target="_blank" rel="noreferrer">
                <span>My CV</span>
              </a>
            </span>
          </Navbar.Collapse>
          <NavbarCollapse>
          <span className="navbar-text">
              <a className="vvd" href={resume} target="_blank" rel="noreferrer">
                <span>My Resume</span>
              </a>
            </span>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
