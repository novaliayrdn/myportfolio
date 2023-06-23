import { Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/sharp.png";
import sublimeText from "../assets/img/sublime-text.svg";
import filmora from "../assets/img/filmora.svg";
import ligthroom from "../assets/img/lightroom.svg";
import inshot from "../assets/img/inshot.svg";
import davinci from "../assets/img/davinci.svg";
import azure from "../assets/img/azure.png";
import ppt from "../assets/img/powerpoint.png";
import excel from "../assets/img/excel.png";
import word from "../assets/img/word.png";
import sway from "../assets/img/sway.png";
import audition from "../assets/img/audition.png";
import canva from "../assets/img/canva.png";
import capcut from "../assets/img/capcut.png";
import nodejs from "../assets/img/nodejs.png";
import notepad from "../assets/img/notepad.png";
import { motion } from "framer-motion";

import "./css/Skills.css";

export const Skills = () => {
  const icons = {
    fontSize: "60px",
    padding: "5px",
  };

  const coloumn = {
    padding: "10px",
  };

  const imgicon = {
    width: "65px",
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p style={{ marginBottom:"2rem" }}>Cloud Computing & Microsoft</p>
              <Row className="text-center">
              <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  >
                     <img src={azure} alt="Logo" style={imgicon} /> <br />
                    Microsoft Azure
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                     <img src={ppt} alt="Logo" style={imgicon} /> <br />
                    PowerPoint
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                     <img src={excel} alt="Logo" style={imgicon} /> <br />
                    Excel
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                     <img src={word} alt="Logo" style={imgicon} /> <br />
                    Word
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                     <img src={sway} alt="Logo" style={imgicon} /> <br />
                    Sway
                  </motion.div>
                </Col>
              </Row>
              <Row>
              <p style={{ marginTop: "3rem",marginBottom:"2rem" }}>Programming Language</p>
              <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-html5-plain" style={icons}></i> <br />
                    HTML
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-css3-plain" style={icons}></i> <br />
                    CSS
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-javascript-plain" style={icons}></i>{" "}
                    <br />
                    JavaScript
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-cplusplus-plain" style={icons}></i>{" "}
                    <br />
                    C++
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-php-plain" style={icons}></i> <br />
                    PHP
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i className="devicon-python-plain" style={icons}></i>{" "}
                    <br />
                    Python
                  </motion.div>
                </Col>
              </Row>
              <p style={{ marginTop: "3rem",marginBottom:"2rem" }}>Programming Platform</p>
              <Row>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-atom-original" style={icons}></i> <br />
                    Atom
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={sublimeText} alt="Logo" style={imgicon} /> <br />
                    Sublime Text
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-jupyter-plain" style={icons}></i> <br />
                    Jupyter Notebook
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-vscode-plain" style={icons}></i>
                    <br />
                    Visual Studio Code
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                     <img src={nodejs} alt="Logo" style={imgicon} /> <br />
                    Node.js
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={notepad} alt="Logo" style={imgicon} /> <br />
                    Notepad++
                  </motion.div>
              </Col>
              </Row>
              <p style={{ marginTop: "3rem", marginBottom : "2rem"}}>Editing</p>
              <Row>
            
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={davinci} alt="Logo" style={imgicon} /> <br />
                    Davinci
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-photoshop-plain" style={icons}></i> <br />
                    Adobe Photoshop
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <i class="devicon-premierepro-plain" style={icons}></i>{" "}
                    <br />
                    Adobe Premiere Pro
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={audition} alt="Logo" style={imgicon} /> <br />
                    Adobe Audition
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={ligthroom} alt="Logo" style={imgicon} /> <br />
                    Ligthroom
                  </motion.div>
                </Col>
                
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={filmora} alt="Logo" style={imgicon} /> <br />
                    Filmora
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={inshot} alt="Logo" style={imgicon} /> <br />
                    Inshot
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={capcut} alt="Logo" style={imgicon} /> <br />
                    Capcut
                  </motion.div>
                </Col>
                <Col style={coloumn}>
                  <motion.div
                    className="pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={canva} alt="Logo" style={imgicon} /> <br />
                    Canva
                  </motion.div>
                </Col>

                
              </Row>
            </div>
          </div>
        </div>
      </div>
      <img src={colorSharp} alt="" className="background-image" />
    </section>
  );
};
