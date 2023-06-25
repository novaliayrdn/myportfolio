import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

import "./css/Contact.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col md={6}>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/-H5HpYoe6Y4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
  </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate_animated animate_fadeIn" : ""
                  }
                >
                  <h2>Contact Me</h2>

                  <div className="contact-detail">
                    <IoMdCall className="icon" />
                    <a href="tel:+6282145238942">+62 821 4523 8942</a>
                  </div>
                  <div className="contact-detail">
                    <MdLocationPin className="icon" />{" "}
                    <a
                      href="https://goo.gl/maps/zXa9qAetGRxYy8aB7"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bali, Indonesia 80361
                    </a>
                  </div>

                  <div className="contact-detail">
                    <MdEmail className="icon" />
                    <a href="mailto: yordantheofani@gmail.com">
                      yordantheofani@gmail.com
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};