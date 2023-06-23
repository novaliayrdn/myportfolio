import { Container, Row, Col } from "react-bootstrap";
import { FaCode} from "react-icons/fa";
import { TbCloudComputing, } from "react-icons/tb"; 
import { MdAddAPhoto } from "react-icons/md"; 
import capcut from "../assets/img/capcut.png";

import "./css/WhatIDo.css";
import { TextCenter } from "react-bootstrap-icons";

export const WhatIDo = () => {
  return (
    <section className="what-i-do-bg" id="what-i-do-bg">
    <section className="what-i-do" id="what-i-do">
      <Container>
        <h2 className="mb-5 text-center">What I Do</h2>
        <Row>
          <Col md={4}>
            <div className="what-i-do-col d-flex flex-column justify-content-center align-items-center">
              <div className="what-i-do-icon">
                <FaCode />
              </div>
              <h3 className="text-center">Web Development | Programming</h3>
              <p className="text-center">
                I create websites using several programming languages ​​that I learned in high school.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="what-i-do-col d-flex flex-column justify-content-center align-items-center">
              <div className="what-i-do-icon">
                <TbCloudComputing />
              </div>
              <h3 className="text-center">Cloud Engineering <br></br></h3>
              <p className="text-center">
              designing, planning, and supporting cloud computing systems, using the knowledge i got while studying at Lithan EduclaaS
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="what-i-do-col d-flex flex-column justify-content-center align-items-center">
              <div className="what-i-do-icon">
                <MdAddAPhoto/>
              </div>
              <h3>Editing</h3>
              <p className="text-center">
              creating photo-video concepts and realizing them, color-grading photos or videos, creating social media content, and becoming a photographer-videographer
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </section>
  );
};
