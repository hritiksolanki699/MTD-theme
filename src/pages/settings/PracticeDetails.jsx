import React from "react";
import "../../assets/scss/pages/settings.scss";
import { Container, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { MdEditCalendar } from "react-icons/md";
import { Link } from "react-router-dom";

const PracticeDetails = () => {
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Practice Details" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Practice Details</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <div className="parctice-card-header mb-4">
            <div>Details</div>
            <Link to="/edit-practice-details">
              <div className="icon">
                <MdEditCalendar />{" "}
              </div>
            </Link>
          </div>
          <Row className="details-rows border-bottom-row">
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Email</span> : info@xyzautonation.com
            </Col>
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Agent Practice Name</span> : xyzautonation
            </Col>
          </Row>
          <Row className="details-rows border-bottom-row">
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Agent ID with HMRC</span> : xyz_autonation
            </Col>
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Agent Password with HMRC</span> : 34$546
            </Col>
          </Row>
          <Row className="details-rows border-bottom-row">
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Practice/Business Type</span> : Marketing
            </Col>
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Contact Number</span> : +1-12345-6789
            </Col>
          </Row>
          <Row className="details-rows border-bottom-row">
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Business Address</span> : inside city, NY, 2001
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PracticeDetails;
