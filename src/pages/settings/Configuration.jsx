import React from "react";
import "../../assets/scss/pages/settings.scss";
import "../../assets/scss/components/clientsListTable.scss";
import { Container, Breadcrumb, Card, Table } from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdEditCalendar } from "react-icons/md";

const Configuration = () => {
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Configuration" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Configuration</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="middle-div mb-4">
        <Link>
          <div className="add-client">
            <div>
              <span>
                <IoAddCircleSharp />
              </span>{" "}
              Add Configuration
            </div>
          </div>
        </Link>
      </div>
      <Card>
        <Card.Body>
          <Table responsive className="clients-list-table mb-2">
            <thead>
              <tr>
                <th className="text-center">VAT code</th>
                <th>Type</th>
                <th className="text-center">Tax Rate</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">S</td>
                <td>Standard rated</td>
                <td className="text-center">20%</td>
                <td className="text-center">
                  <div>
                    <MdEditCalendar />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center">L</td>
                <td>Reduced rated</td>
                <td className="text-center">5%</td>
                <td className="text-center">
                  <div>
                    <MdEditCalendar />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center">Z</td>
                <td>Zero rated</td>
                <td className="text-center">0%</td>
                <td className="text-center">
                  <div>
                    <MdEditCalendar />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center">SP</td>
                <td>Special Rate</td>
                <td className="text-center">Manual Entry</td>
                <td className="text-center">
                  <div>
                    <MdEditCalendar />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center">N</td>
                <td>No VAT</td>
                <td className="text-center">Gray Out VAT</td>
                <td className="text-center">
                  <div>
                    <MdEditCalendar />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-center">E</td>
                <td>Exempt</td>
                <td className="text-center">0%</td>
                <td className="text-center">
                  <div>
                    <MdEditCalendar />
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Configuration;
