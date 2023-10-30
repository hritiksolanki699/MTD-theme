import React from "react";
import "../../assets/scss/pages/clients.scss";
import { Container, Breadcrumb, Card } from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import ClientsListTable from "../../components/ClientsListTable";

const ClientsList = () => {
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Clients" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
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
