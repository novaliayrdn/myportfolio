import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/aku.jpeg";
import "animate.css";
import TrackVisibility from "react-on-screen";

import "./css/Banner.css";

export const Banner = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Cloud Engineer", "Editor"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">
                    Hi! I'm Novalia Yordan
                  </span>
                  <h1>
                    {`I'm`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Cloud Engineer", "Editor" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <h3>About Me</h3>
                  <p style={{ marginBottom:"2rem" }}>
                  Hi, I'm Ni Made Novalia Yordan Theofani or usually called Nova.
                  I am 21 years old, and i am an ambitious person, perfectionist, and learn new things quickly.
                  I am a Cloud Engineer & Web Developer, and already have some experience in the world of Programming, Cloud Computing, and also Editing because my hobbies are Photography and Videography. 
                  With all of my skills, i'm just looking for the companies to hire me as an internship. 

                  </p>
                  <p style={{ marginTop:"2rem" }}>Apart from that, I also offer services as an Editor, Content Creator and Content Designing with interesting and very good project results. With that I can make the company or product known to the wider community.</p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" className="rounded" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
