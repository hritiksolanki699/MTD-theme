import React from "react";
import "../../assets/scss/pages/vatReturn.scss";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Form,
  Card,
  Button,
  Table,
} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { BiCalculator } from "react-icons/bi";
import { Link } from "react-router-dom";
import { tooltip } from "../../assets/images";

const VatReturn = () => {
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="VAT Return" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>VAT Return</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Row>
            <Col lg={4} md={6} className="mb-2">
              <Row>
                <Col lg={6} className="fw-bold">
                  Business Name
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </Col>
                <Col lg={6}>
                  <Form.Control type="text" />
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={6} className="mb-2">
              <Row>
                <Col lg={6} className="fw-bold">
                  For the Period
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </Col>
                <Col lg={6}>
                  <Form.Control type="date" />
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={6} className="mb-2">
              <Row>
                <Col lg={3} className="fw-bold">
                  To<span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </Col>
                <Col lg={6}>
                  <Form.Control type="date" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-2">
              <Row>
                <Col lg={6} className="fw-bold">
                  VAT Number
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </Col>
                <Col lg={6}>
                  <Form.Control type="number" />
                </Col>
              </Row>
            </Col>
            <Col lg={2} md={6} className="mb-2">
              <Button className="calculate">
                <BiCalculator /> Calculate
              </Button>
            </Col>
            <Col lg={3} md={6} className="mb-2">
              <Form.Select defaultValue="Choose...">
                <option>Download Return</option>
                <option>...</option>
              </Form.Select>
            </Col>
            <Col lg={3} md={6} className="mb-2">
              <Form.Select defaultValue="Choose...">
                <option>Detailed Report</option>
                <option>...</option>
              </Form.Select>
            </Col>
          </Row>
          <Table responsive bordered className="vat-return-table mt-2 mb-3">
            <thead className="table-header">
              <tr>
                <th className="text-center">Box</th>
                <th className="text-center">Details</th>
                <th className="text-end">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td>
                  VAT due in this period on sales and other outputs
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </td>
                <td className="text-end">0.00</td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td>
                  VAT due in the period on acquisitions of goods made in
                  Northern Ireland from EU Member States
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>{" "}
                </td>
                <td className="text-end">0.00</td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td>
                  Total VAT due (the sum of boxes 1 and 2)
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </td>
                <td className="text-end">0.00</td>
              </tr>
              <tr>
                <td className="text-center">4</td>
                <td>
                  VAT reclaimed in the period on purchases and other inputs
                  (including acquisitions in Northern Ireland from EU Member
                  States)
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>{" "}
                </td>
                <td className="text-end">0.00</td>
              </tr>
              <tr>
                <td className="text-center">5</td>
                <td>
                  Net VAT to be paid to HMRC or reclaimed by you. (Difference
                  between boxes 3 and 4)
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </td>
                <td className="text-end">0.00</td>
              </tr>
              <tr>
                <td className="text-center">6</td>
                <td>
                  Total value of sales and all other outputs excluding any VAT.
                  Include your box 8 figure
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </td>
                <td className="text-end">0</td>
              </tr>
              <tr>
                <td className="text-center">7</td>
                <td>
                  Total value of purchases and all other inputs excluding any
                  VAT. Include your box 9 figure
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </td>
                <td className="text-end">0</td>
              </tr>
              <tr>
                <td className="text-center">8</td>
                <td>
                  Total value of dispatches of goods and related costs
                  (excluding VAT) from Northern Ireland to EU Member States
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </td>
                <td className="text-end">0</td>
              </tr>
              <tr>
                <td className="text-center">9</td>
                <td>
                  Total value of acquisitions of goods and related costs
                  (excluding VAT) made in Northern Ireland from EU Member States
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </td>
                <td className="text-end">0</td>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Col md={10} sm={9} className=" mt-2 mb-3">
              Declaration: I confirm the data shown above is correct and wish to
              submit my electronic VAT declaration to HMRC.
            </Col>
            <Col md={2} sm={3} className="text-center mt-2 mb-3">
              <Form.Select defaultValue="Choose...">
                <option>10</option>
                <option>20</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={6} className="mb-2">
              <Form.Check
                type="radio"
                label={
                  <div style={{ marginTop: "-4px" }}>
                    Submit to HMRC
                    <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                  </div>
                }
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                className="mb-3 fw-bold"
                role="button"
              />
              <Form.Check
                type="radio"
                label={
                  <div style={{ marginTop: "-4px" }}>
                    Save and Submit Later
                    <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                  </div>
                }
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                className="mb-3 fw-bold"  
                role="button"
              />
              <Form.Check
                type="radio"
                label={
                  <div style={{ marginTop: "-4px" }}>
                    Submitted using other methods
                    <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                  </div>
                }
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                className="mb-3 fw-bold"
                role="button"
              />
            </Col>
            <Col lg={6} className="mb-2">
              <div className="vat-buttons">
                <Button className="vat-button">Save as Draft</Button>
                <Button className="vat-button">Submit</Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VatReturn;
