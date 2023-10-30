import React from "react";
import "../../assets/scss/pages/settings.scss";
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

const EditPracticeDetails = () => {
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Practice Details" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Practice</Breadcrumb.Item>
            <Breadcrumb.Item active>Edit Details</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <div className="parctice-card-header mb-4">
            <div>Details</div>
          </div>
          <Form>
            <Row>
              <Col md={6} className="mb-2">
                <FromInput label="Email*" type="email" />
              </Col>
              <Col md={6} className="mb-2">
                <FromInput
                  label="Agent ID Password with HMRC*"
                  type="password"
                />
              </Col>
              <Col md={6} className="mb-2">
                <FromInput label="Password*" type="password" />
              </Col>
              <Col md={6} className="mb-2">
                <FromInput label="Confirm Password*" type="password" />
              </Col>
              <Col md={6} className="mb-2">
                <FromInput label="Contact Number*" type="number" />
              </Col>
              <Col md={6} className="mb-2">
                <FromInput label="Practice/Business Type*" type="text" />
              </Col>
            </Row>
            <Row className="cyan-white-button-div  justify-content-center mb-2 mt-2">
              <Col lg={2} sm={6} className="mb-2">
                <Button className="button-width cancel-button">Cancel</Button>
              </Col>
              <Col lg={2} sm={6} className="mb-2">
                <Button className="button-width save-button">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditPracticeDetails;
