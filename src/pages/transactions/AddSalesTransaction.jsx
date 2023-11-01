import React from "react";
import "../../assets/scss/pages/transactions.scss";
import {
  Container,
  Breadcrumb,
  Card,
  Table,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { MdDelete } from "react-icons/md";
import { tooltip } from "../../assets/images";
import { Link } from "react-router-dom";

const AddSalesTransaction = () => {
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Sales Transaction" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/sales">Sales</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active> New Entry</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Form>
            <Row className="align-items-baseline mb-3">
              <Col lg={2} md={4} sm={6}>
                <Form.Label className="fw-bold display-inline-block">
                  Customer<span>{tooltip}</span>
                </Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Anand Food</option>
                  <option>...</option>
                </Form.Select>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <Form.Label className="fw-bold display-inline-block">
                  Payment Method<span>{tooltip}</span>
                </Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Bank</option>
                  <option>...</option>
                </Form.Select>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <Form.Label className="fw-bold display-inline-block">
                  Document Type<span>{tooltip}</span>
                </Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Digital</option>
                  <option>...</option>
                </Form.Select>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <Form.Label className="fw-bold display-inline-block">
                  Date<span>{tooltip}</span>
                </Form.Label>
                <Form.Control type="date" />
              </Col>
              <Col lg={2} md={4} sm={6}>
                <Form.Label className="fw-bold display-inline-block">
                  Reference<span>{tooltip}</span>
                </Form.Label>
                <Form.Control type="text" />
              </Col>
              <Col lg={2} md={4} sm={6}>
                <Form.Label className="fw-bold display-inline-block">
                  Total Amount<span>{tooltip}</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0.00"
                  className="text-end"
                />
              </Col>
            </Row>
          </Form>
          <Table responsive className="add-transaction-table mb-3">
            <thead className="table-header">
              <tr>
                <th className="text-center border-right"></th>
                <th className="border-right">
                  Transaction Type
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </th>
                <th className="border-right">
                  Details
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </th>
                <th className="text-end border-right">
                  Net<span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </th>
                <th className="border-right">
                  VAT Rate
                  <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </th>
                <th className="text-end border-right">
                  VAT<span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </th>
                <th className="text-end border-right">
                  Total<span style={{ verticalAlign: "super" }}>{tooltip}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  <MdDelete role="button" />
                </td>
                <td>
                  <Form.Select defaultValue="Choose...">
                    <option></option>
                    <option>...</option>
                  </Form.Select>
                </td>
                <td>
                  {" "}
                  <Form.Control
                    type="text"
                    placeholder="lorem ipsum lorem ipsum"
                  />
                </td>
                <td className="text-end">
                  {" "}
                  <Form.Control
                    className="text-end"
                    type="number"
                    placeholder="1,000"
                  />
                </td>
                <td>
                  {" "}
                  <Form.Select>
                    <option>Standard 20.00%</option>
                    <option>...</option>
                  </Form.Select>
                </td>
                <td className="text-end">
                  {" "}
                  <Form.Control
                    className="text-end"
                    type="number"
                    placeholder="200"
                  />
                </td>
                <td className="text-end">
                  {" "}
                  <Form.Control
                    className="text-end"
                    type="number"
                    placeholder="1,200.00"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <Row className="justify-content-end mb-2">
            <Col lg={2} md={3} sm={6} className="fw-bold display-inline-block">
              Total Net<span>{tooltip}</span>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <Form.Control
                className="text-end"
                type="number"
                placeholder="1,000"
              />
            </Col>
          </Row>
          <Row className="justify-content-end mb-2">
            <Col lg={2} md={3} sm={6} className="fw-bold display-inline-block">
              Total VAT<span>{tooltip}</span>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <Form.Control
                className="text-end"
                type="number"
                placeholder="200.00"
              />
            </Col>
          </Row>
          <Row className="justify-content-end mb-2">
            <Col lg={2} md={3} sm={6} className="fw-bold display-inline-block">
              Total<span>{tooltip}</span>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <Form.Control
                className="text-end"
                type="number"
                placeholder="1,200.00"
              />
            </Col>
          </Row>
          <Row className="justify-content-end mb-2">
            <Col lg={2} md={3} sm={6} className="fw-bold display-inline-block">
              Left to record<span>{tooltip}</span>
            </Col>
            <Col lg={2} md={3} sm={6}>
              <Form.Control
                className="text-end"
                type="number"
                placeholder="-1,200.00"
              />
            </Col>
          </Row>
          <Row className="cyan-white-button-div  justify-content-end flex-md-row flex-column-reverse mb-2 mt-2">
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

export default AddSalesTransaction;
