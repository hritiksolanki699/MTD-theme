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

const AddClient = () => {
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Add Client" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Clients</Breadcrumb.Item>
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
                  label="Business Name*"
                  placeholder="Enter Your bussiness name"
                  type="text"
                />
              </Col>
              <Col lg={6} className="mb-4">
                <FromInput
                  label="Trading Name*"
                  placeholder="Enter your trading name"
                  type="text"
                />
              </Col>
              <Col lg={6} className="mb-4">
                <FromInput
                  label="Business Address*"
                  placeholder="address"
                  type="text"
                />
              </Col>
              <Col lg={6} className="mb-4">
                <Form.Label>VAT Scheme*</Form.Label>
                <Form.Select defaultValue="Cash Accounting">
                  <option>Cash Accounting</option>
                  <option>...</option>
                </Form.Select>
              </Col>
              <Col lg={6} className="mb-4">
                <FromInput
                  label="VAT Number*"
                  placeholder="Enter your VAT Number"
                  type="number"
                />
              </Col>
              <Col lg={6} className="mb-4">
                <FromInput
                  label="VAT Frequency*"
                  placeholder="VAT Frequency"
                  type="text"
                />
              </Col>
              <Col lg={6} className="mb-4">
                <FromInput label="VAT Quarter End*" type="date" />
              </Col>
            </Row>
            <Row className="cyan-white-button-div justify-content-center mb-2">
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
