import React from "react";
import "../../assets/scss/pages/dashboard.scss";
import { Card } from "react-bootstrap";
import { HiUserGroup } from "react-icons/hi";
import ClientsListTable from "../../components/ClientsListTable";

const ClientList = () => {
  return (
    <Card className="clients-list">
      <Card.Body>
        <div className="list-title mb-2">
          <span className="icon">
            <HiUserGroup />
          </span>{" "}
          &nbsp;Latest Clients List
        </div>

        <ClientsListTable />
      </Card.Body>
    </Card>
  );
};

export default ClientList;
