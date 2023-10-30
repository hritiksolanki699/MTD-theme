import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TbUserExclamation } from "react-icons/tb";
import { MdOutlineWifiCalling3, MdOutlineMail } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

const About = () => {
  return (
    <Container fluid className="about">
      <div className="profile-desc mb-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, waahen an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </div>
      <Row className="mt-2">
        <Col lg={4} md={6} className="icon-w-details mb-2">
          <span>
            <TbUserExclamation />
          </span>{" "}
          Michael A. Franklin
        </Col>
        <Col lg={4} md={6} className="icon-w-details mb-2">
          <span>
            <MdOutlineWifiCalling3 />
          </span>{" "}
          (+12) 123 1234 567
        </Col>
        <Col lg={4} md={6} className="icon-w-details mb-2">
          <span>
            <MdOutlineMail />
          </span>{" "}
          coderthemes@gmail.com
        </Col>
        <Col lg={4} md={6} className="icon-w-details mb-2">
          <span>
            <BsFillPersonCheckFill />
          </span>{" "}
          Admin
        </Col>
        <Col lg={4} md={6} className="icon-w-details mb-2">
          <span>
            <RiLockPasswordLine />
          </span>{" "}
          #342z*
        </Col>
      </Row>
    </Container>
  );
};

export default About;
