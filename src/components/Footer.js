import { Container, Row, Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/navicon4.png";
import yt from "../assets/img/yt.png";

import "./css/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer pt-3">
      <hr />
      <Container className="pt-5">
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <h1>Novalia Yordan</h1>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://github.com/novaliayrdn"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.instagram.com/novaliayordan/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/novalia-yordan/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon4} alt="Icon" />
              </a>
              <a
                href="https://youtube.com/@novaliayordan"
                target="_blank"
                rel="noreferrer"
              >
                <img src={yt} alt="Icon" />
              </a>
            </div>
  
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
