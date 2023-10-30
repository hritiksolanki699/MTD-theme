import React from "react";
import "../../assets/scss/pages/dashboard.scss";
import { Col, Container, Row } from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { HiUserGroup } from "react-icons/hi";
import { FaMoneyBillWave } from "react-icons/fa";
import BarChart from "../../components/BarChart";
import StatsCard from "../../components/StatsCard";
import ClientList from "./ClientList";

const Dashboard = () => {
  return (
    <Container fluid>
      <PageTitle title="Dashboard" />
      <Row className="mt-2">
        <Col lg={3} md={4} sm={6} className="mb-2">
          <StatsCard
            text="Total Clients"
            icon={<HiUserGroup />}
            number="5,450"
          />
        </Col>
        <Col lg={3} md={4} sm={6} className="mb-2">
          <StatsCard
            text="VAT Invoice"
            icon={<FaMoneyBillWave />}
            number="1500"
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg={12}>
          <BarChart />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col lg={12}>
          <ClientList />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
