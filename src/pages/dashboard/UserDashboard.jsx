import React from "react";
import "../../assets/scss/pages/dashboard.scss";
import { Button, Col, Container, Form, Row, Tabs, Tab } from "react-bootstrap";
import { FaMoneyBillWave } from "react-icons/fa";
import PageTitle from "../../components/PageTitle";
import StatsCard from "../../components/StatsCard";
import OpenReturns from "./OpenReturns";
import ReturnHistory from "./ReturnHistory";
import PaymentHistory from "./PaymentHistory";
import Liabilities from "./Liabilities";

const UserDashboard = () => {
  return (
    <Container fluid>
      <PageTitle title="Dashboard" />
      <Row className="mt-2">
        <Col lg={3} md={4} sm={6} className="mb-2">
          <StatsCard
            text="VAT Invoice"
            icon={<FaMoneyBillWave />}
            number="1500"
          />
        </Col>
        <Col lg={3} md={4} sm={6} className="mb-2">
          <Form>
            <Form.Control
              as="textarea"
              placeholder="Some text hare...."
              rows="6"
            />
          </Form>
        </Col>
        <Col lg={3} md={4} sm={6} className="mb-2">
          <Button className="cyan-button">Authenticate</Button>
        </Col>
      </Row>
      <Tabs defaultActiveKey="Open-Returns" className="mt-3" fill>
        <Tab eventKey="Open-Returns" title="Open Returns">
          <OpenReturns />
        </Tab>
        <Tab eventKey="Return-History" title="Return History">
          <ReturnHistory />
        </Tab>
        <Tab eventKey="Payment-History" title="Payment History">
          <PaymentHistory />
        </Tab>
        <Tab eventKey="Liabilities" title="Liabilities">
          <Liabilities />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default UserDashboard;
