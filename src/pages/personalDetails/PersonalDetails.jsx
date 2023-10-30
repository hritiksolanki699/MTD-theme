import React from "react";
import "../../assets/scss/pages/personalDetails.scss";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Card,
  Tabs,
  Tab,
} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";

import About from "./About";
import AssignClient from "./AssignClient";
import LeftProfile from "./LeftProfile";

const PersonalDetails = () => {
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Personal Details" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Personal Details</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Row>
            <Col lg={3}>
              <LeftProfile />
            </Col>
            <Col lg={9}>
              <Card className="card-shadow">
                <Card.Body>
                  <Tabs defaultActiveKey="About" className="mt-3" fill>
                    <Tab eventKey="About" title="About">
                      <About />
                    </Tab>
                    <Tab eventKey="Assign Client" title="Assign Client">
                      <AssignClient />
                    </Tab>
                    <Tab eventKey="Audit Trail" title="Audit Trail">
                      <h2 className="mt-2">Audit Trail</h2>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PersonalDetails;
