import React from "react";
import "../../assets/scss/pages/clients.scss";
import {
  Container,
  Breadcrumb,
  Card,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import FromInput from "../../components/Input";
import { tooltip } from "../../assets/images";
import { Link } from "react-router-dom";

const AddClient = () => {
  return (
    <Container fluid >
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Add Client" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/clients">Clients</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Add Client</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col lg={6} className="mb-4">
                <FromInput
                  label="Business Name"
                  tooltip={tooltip}
                  placeholder="Enter Your business name"
                  type="text"
                />
              </Col>
              <Col lg={6} className="mb-4">
                <FromInput
                  label="Trading Name"
                  tooltip={tooltip}
                  placeholder="Enter your trading name"
                  type="text"
                />
              </Col>
              <Col lg={6} className="mb-4">
                <FromInput
                  label="Business Address"
                  tooltip={tooltip}
                  placeholder="address"
                  type="text"
                />
              </Col>
              <Col lg={6} className="mb-4">
                <Form.Label className="display-inline-block">
                  VAT Scheme<span>{tooltip}</span>
                </Form.Label>
                <Form.Select defaultValue="Cash Accounting">
                  <option>Cash Accounting</option>
                  <option>...</option>
                </Form.Select>
              </Col>
              <Col lg={6} className="mb-4">
                <FromInput
                  label="VAT Number"
                  tooltip={tooltip}
                  placeholder="Enter your VAT Number"
                  type="number"
                />
              </Col>
              <Col lg={6} className="mb-4">
                <FromInput
                  label="VAT Frequency"
                  tooltip={tooltip}
                  placeholder="VAT Frequency"
                  type="text"
                />
              </Col>
              <Col lg={6} className="mb-4">
                <FromInput
                  label="VAT Quarter End"
                  tooltip={tooltip}
                  type="date"
                />
              </Col>
            </Row>
            <Row className="cyan-white-button-div justify-content-center flex-md-row flex-column-reverse mb-2">
              <Col lg={2} sm={6} className="mb-2">
                <Button className="button-width cancel-button">Cancel</Button>
              </Col>
              <Col lg={2} sm={6} className="mb-2">
                <Button className="button-width save-button">Save</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddClient;
