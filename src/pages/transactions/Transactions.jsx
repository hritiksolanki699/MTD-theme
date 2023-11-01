/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "../../assets/scss/pages/transactions.scss";
import { Container, Breadcrumb, Tabs, Tab } from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import MonthlyTransactionList from "./MonthlyTransactionList";
import SalesTable from "./SalesTable";
import Purchases from "./PurchasesTable";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Transactions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleTabSelect = (eventKey) => {
    if (eventKey === "Sales") {
      navigate("/sales");
    } else if (eventKey === "Purchases") {
      navigate("/purchases");
    }
  };
  const TabComp = () => (
    <Tabs
      defaultActiveKey={location.pathname === "/sales" ? "Sales" : "Purchases"}
      className="mt-4 width-40per"
      fill
      onSelect={handleTabSelect}
    >
      <Tab eventKey="Sales" title="Sales">
        <SalesTable />
      </Tab>
      <Tab eventKey="Purchases" title="Purchases">
        <Purchases />
      </Tab>
    </Tabs>
  );
  useEffect(() => {
    TabComp();
  }, [location]);

  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle
          title={
            location.pathname === "/sales" ? "Record Sales" : "Record Purchases"
          }
        />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              {location.pathname === "/sales"
                ? "Record Sales"
                : "Record Purchases"}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <MonthlyTransactionList />
      <TabComp />
    </Container>
  );
};

export default Transactions;
