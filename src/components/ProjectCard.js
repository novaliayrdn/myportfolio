import { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";
import "./css/ProjectCard.css";

export const ProjectCard = ({
  title,
  year,
  description,
  imgUrl,
  link,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleModalOpen}>
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h6>{year}</h6> <br />
          <span>{description}</span>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-black">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imgUrl} alt="" />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
