import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import content from "../assets/img/project/content-desaigning.jpeg";
import content2 from "../assets/img/project/content2.png";
import photography from "../assets/img/project/fotography.jpeg";
import photography1 from "../assets/img/project/fotography2.jpeg";
import photography2 from "../assets/img/project/fotography3.jpeg";
import photography3 from "../assets/img/project/fotography4.jpeg";
import photography4 from "../assets/img/project/fotography5.jpg";
import photography5 from "../assets/img/project/fotography6.jpg";
import photography6 from "../assets/img/project/fotography7.jpg";
import photography7 from "../assets/img/project/fotography8.jpg";
import photography8 from "../assets/img/project/fotography9.jpg";
import lithan1 from "../assets/img/project/lithan1.png";
import lithan2 from "../assets/img/project/lithan2.png";
import lithan3 from "../assets/img/project/lithan3.png";
import lithan4 from "../assets/img/project/lithan4.png";
import lithan5 from "../assets/img/project/lithan5.png";
import azure1 from "../assets/img/project/azure1.png";
import lab1ss2 from "../assets/img/project/lab1-ss2.png";
import mod5iu3 from "../assets/img/project/mod5-iu3.png";
import mod5iu32 from "../assets/img/project/mod5-iu3(2).png";
import lab4ss2 from "../assets/img/project/iu4-ss2.png";
import lab4ss1 from "../assets/img/project/iu4-ss1.png";
import colorSharp2 from "../assets/img/sharp2.png";
import videography from "../assets/video/videography.mp4";
import ultahGereja from "../assets/video/ultah-gereja.mp4";
import april23 from "../assets/video/april23.mov";
import april23dua from "../assets/video/april23dua.mov";

import "animate.css";
import TrackVisibility from "react-on-screen";

import "./css/Projects.css";
import { ProjectVideo } from "./ProjectVideo";

export const Projects = () => {
  const photographys = [
    {
      link: "#",
      title: "Content Designing",
      year: "2019",
      description: "My design as Social Media Admin",
      imgUrl: content,
    },
    {
      link: "#",
      title: "Content Designing",
      year: "2019",
      description: "My design as Social Media Admin",
      imgUrl: content2,
    },
    {
      link: "#",
      title: "Model and Product Photos",
      year: "2022",
      description:
        "My photos when i was employed as a model-product photographer",
      imgUrl: photography,
    },
    {
      link: "#",
      title: "Model and Product Photos",
      year: "2022",
      description:
        "My photos when i was employed as a model-product photographer",
      imgUrl: photography1,
    },
    {
      link: "#",
      title: "Model Photoshoot",
      year: "2022",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography2,
    },
    {
      link: "#",
      title: "Model and Product Photos",
      year: "2022",
      description:
        "My photos when i was employed as a model-product photographer",
      imgUrl: photography3,
    },
    {
      link: "#",
      title: "Pre-Wedding Photoshoot",
      year: "2021",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography4,
    },
    {
      link: "#",
      title: "Pre-Wedding Photoshoot",
      year: "2021",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography5,
    },
    {
      link: "#",
      title: "Pre-Wedding Photoshoot",
      year: "2021",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography6,
    },
    {
      link: "#",
      title: "Pre-Wedding Photoshoot",
      year: "2021",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography7,
    },
    {
      link: "#",
      title: "Pre-Wedding Photoshoot",
      year: "2021",
      description: "My photos when i was hiring as freelance photographer",
      imgUrl: photography8,
    },
  ];

  const videographys = [
    {
      title: "Welcome to 'Kepulauan Seribu' or 'Thousand Island'",
      year: "2019-2020",
      description:
        "doesn't have 1000 island but its said so because it has a series of beautiful islands with their own charm",
      videoUrl: videography,
    },
    {
      title: "Opening Footage",
      year: "2023",
      description: "one of footage for my Church's 9th birthday last week",
      videoUrl: ultahGereja,
    },
    {
      title: "Footage 1",
      year: "2023",
      description: "one of footage for my Church's project",
      videoUrl: april23,
    },
    {
      title: "Footage 2",
      year: "2023",
      description: "one of footage for my Church's project",
      videoUrl: april23dua,
    },
  ];

  const lithans = [
    {
      link: "#",
      title: "Adding_Report",
      year: "Python project - 2023",
      description:
        "This project works like a sum calculator, where's the output will show all number 'integers' inputted, and show the total sum of all those numbers",
      imgUrl: lithan1,
    },
    {
      link: "#",
      title: "Adding_Report (2)",
      year: "Python project - 2023",
      description:
        "This project works like a sum calculator, where's the output will show all number 'integers' inputted, and show the total sum of all those numbers",
      imgUrl: lithan2,
    },
    {
      link: "#",
      title: "Atomic Quiz",
      year: "Python project - 2023",
      description:
        "Users have 5 chances to guess the name of the atomic element according to periodic table. And the output will show the user's score and show which user's answer is correct/incorrect",
      imgUrl: lithan3,
    },
    {
      link: "#",
      title: "Atomic Quiz (2)",
      year: "Python project - 2023",
      description:
        "Users have 5 chances to guess the name of the atomic element according to periodic table. And the output will show the user's score and show which user's answer is correct/incorrect",
      imgUrl: lithan4,
    },
    {
      link: "#",
      title: "Atomic Quiz (3)",
      year: "Python project - 2023",
      description:
        "Users have 5 chances to guess the name of the atomic element according to periodic table. And the output will show the user's score and show which user's answer is correct/incorrect",
      imgUrl: lithan5,
    },
    {
      link: "#",
      title: "Monitor and maintain a AVD infrastructure",
      year: "June 2023",
      description:
        "Prepare for scaling Azure Virtual Desktop session hosts, Create a scaling plan for Azure Virtual Desktop session hosts, Set up diagnostics to track Azure Virtual Desktop autoscaling and Verify autoscaling of Azure Virtual Desktop session hosts",
      imgUrl: azure1,
    },
    {
      link: "#",
      title: "Managing Windows Server (1)",
      year: "February 2023",
      description:
        "Implementing and using remote server administration - Configure Windows Admin Center extensions",
      imgUrl: mod5iu3,
    },
    {
      link: "#",
      title: "Managing Windows Server (2)",
      year: "February 2023",
      description:
        "Implementing and using remote server administration - Administer servers with Remote PowerShell",
      imgUrl: mod5iu32,
    },
    {
      link: "#",
      title: "Integrate an AD DS forest with an Azure AD tenant",
      year: "June 2023",
      description:
        "Create AD DS users and groups that will be synchronized to Azure AD, Configure AD DS UPN suffix,Create an Azure AD user that will be used to configure synchronization with Azure AD, Install Azure AD Connect, and Configure hybrid Azure AD join",
      imgUrl: lab1ss2,
    },
  ];

  const [numProjects, setNumProjects] = useState(3);
  const showMoreProjects = () => setNumProjects(photographys.length);
  const showLessProjects = () => setNumProjects(3);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Projects</h2>
                  <p>
                    Contain my project as Social Media Admin -
                    Photographer/Videographer - Lithan's student
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Photography</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Videography</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Lithan's Mini Projects
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {photographys.slice(0, numProjects).map((photographys, index) => {
                            return (
                              <ProjectCard key={index} {...photographys} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {videographys.slice(0, numProjects).map((videographys, index) => {
                            return (
                              <ProjectVideo key={index} {...videographys} />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {lithans.slice(0, numProjects).map((lithans, index) => {
                            return <ProjectCard key={index} {...lithans} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <div className="text-center">
                          {numProjects < photographys.length ? (
                            <Button variant="primary" onClick={showMoreProjects}>
                              View More
                            </Button>
                          ) : (
                            <Button variant="primary" onClick={showLessProjects}>
                              View Less
                            </Button>
                          )}
                        </div>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="pt-5 mb-5">Project Explanation</h2>
                  <Row>
                    <Col md={6}>
                      <div class="video-container">
                        <iframe
                          src="https://www.youtube.com/embed/3HPWMAQgRTQ"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                          className="video"
                        ></iframe>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div class="video-container">
                        <iframe
                          src="https://www.youtube.com/embed/8S-Aqm_Xag0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                          className="video"
                        ></iframe>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
