import React from "react";
import "../../assets/scss/pages/clients.scss";
import { Container, Breadcrumb, Card } from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import ClientsListTable from "../../components/ClientsListTable";
import { Link } from "react-router-dom";

const ClientsList = () => {
  return (
    <Container fluid >
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Clients" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Clients List</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <ClientsListTable />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ClientsList;
