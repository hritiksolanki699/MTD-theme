import React from "react";
import "../../assets/scss/pages/settings.scss";
import { Container, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { MdEditCalendar } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleBusinessDetail = () => {
  return (
    <Container fluid >
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Business Details" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Business Details</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <div className="parctice-card-header mb-4">
            <div>Details</div>
            <Link to="/edit-business-details">
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
              <span>Business Name</span> : xyzautonation
            </Col>
          </Row>
          <Row className="details-rows border-bottom-row">
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Contact Name</span> : xyz_autonation
            </Col>
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Contact No.</span> : +1-1253-4561
            </Col>
          </Row>
          <Row className="details-rows border-bottom-row">
            <Col md={6} className="mb-2 border-bottom-col">
              <span>VAT Scheme</span> : Cash Accounting
            </Col>
            <Col md={6} className="mb-2 border-bottom-col">
              <span>VAT No.</span> : 1253603364
            </Col>
          </Row>
          <Row className="details-rows border-bottom-row">
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Business Type</span> : single
            </Col>
            <Col md={6} className="mb-2 border-bottom-col">
              <span>Business Address</span> : inside city, NY, 2001
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleBusinessDetail;
