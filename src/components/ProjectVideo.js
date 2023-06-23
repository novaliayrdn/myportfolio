import React from "react";
import { Col } from "react-bootstrap";
import ReactPlayer from "react-player";

export const ProjectVideo = ({ videoUrl, title, year, description }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <ReactPlayer url={videoUrl} controls width={"100%"} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h6>{year}</h6> <br />
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
