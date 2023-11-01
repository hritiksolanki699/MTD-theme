import React from "react";
import "../../assets/scss/pages/settings.scss";
import "../../assets/scss/components/clientsListTable.scss";
import {
  Container,
  Breadcrumb,
  Card,
  Row,
  Col,
  Button,
  Table,
  Form,
} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { Link } from "react-router-dom";

const EmailPreferences = () => {
  return (
    <Container fluid >
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Email Preferences" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Email Preferences</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Table responsive className="clients-list-table mb-2">
            <thead>
              <tr>
                <th>I want to receive emails about</th>
                <th className="text-center">Opt-in</th>
                <th className="text-center">Email Frequency/Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="fw-bold">
                <td>Software Update Notifications</td>
                <td className="text-center">
                  <Form.Check type="checkbox" />
                </td>
                <td className="text-center">3</td>
              </tr>
              <tr className="fw-bold">
                <td>HMRC MTD Downtime</td>
                <td className="text-center">
                  <Form.Check type="checkbox" />
                </td>
                <td className="text-center">12</td>
              </tr>
              <tr className="fw-bold">
                <td>HiveMTD Downtime for planned updates</td>
                <td className="text-center">
                  <Form.Check type="checkbox" />
                </td>
                <td className="text-center">3</td>
              </tr>
              <tr className="fw-bold">
                <td>MTD useful information that HMRC do not publicise</td>
                <td className="text-center">
                  <Form.Check type="checkbox" />
                </td>
                <td className="text-center">9</td>
              </tr>
              <tr className="fw-bold">
                <td>Annual Licence fee notice information</td>
                <td className="text-center">
                  <Form.Check type="checkbox" />
                </td>
                <td className="text-center">2</td>
              </tr>
              <tr className="fw-bold">
                <td>Special offers/Marketing Material</td>
                <td className="text-center">
                  <Form.Check type="checkbox" />
                </td>
                <td className="text-center">3</td>
              </tr>
            </tbody>
          </Table>
          <Row className="cyan-white-button-div justify-content-end   mb-2 mt-2">
            <Col lg={2} sm={6} className="mb-2">
              <Button className="button-width cancel-button">Cancel</Button>
            </Col>
            <Col lg={2} sm={6} className="mb-2">
              <Button className="button-width save-button">Submit</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmailPreferences;
