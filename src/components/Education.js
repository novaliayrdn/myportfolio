import { Container } from "react-bootstrap";

import "./css/Education.css";

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <div className="text-center">
          <h2>Education</h2>
          <p></p>
          <div className="time">
            <div className="timeline">
              <ul>
                
                <li style={{ textAlign: "left" }}>
                  <h2 className="heading">
                    <u>ITB Stikom Bali University</u>
                  </h2>
                  <p>
                    has postponed my studies for two years because of the
                    pandemic, and for two years i studied the world of
                    technology myself and deepened my coding and editing skills.
                    And now continue majoring in Information System{" "}
                  </p>
                  <span className="date">2022 - Present</span>
                  <span className="circle"></span>
                </li>
                <li style={{ textAlign: "left" }}>
                  <h2 className="heading">
                    <u>Lithan EduClaaS Singapore</u>
                  </h2>
                  <p>
                    I majored in Digital System Administration at Lithan EduclaaS because i am very interested in learning new things, and i see a good opportunity to work in an international company{" "}
                  </p>
                  <span className="date">2022 - Present</span>
                  <span className="circle"></span>
                </li>
                <li>
                  <h2 className="heading">
                    <u>SMK TI Bali Global Jimbaran</u>
                  </h2>
                  <p>
                    majored in software engineering because i started to be
                    interested in the world of coding, and tried to take part in
                    several competitions to represent the school{" "}
                  </p>
                  <span className="date">2017 - 2020</span>
                  <span className="circle"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
