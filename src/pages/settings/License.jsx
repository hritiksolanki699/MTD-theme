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
  Image,
} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { licenseIcon, upgrade } from "../../assets/images";

const License = () => {
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="License Validity" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>License</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Row className="license-expiry">
        <Col lg={6} md={8} className="mb-2">
          <Image src={licenseIcon} alt="licenseIcon" /> Your license expiry on{" "}
          <span> 25-03-2023</span>
        </Col>
        <Col lg={4} md={4} className="mb-2">
          <Button className="cyan-button">Extend license</Button>
        </Col>
      </Row>
      <div className="mt-4 mb-2 upgrade-license">
        <Image src={upgrade} alt="upgrade" /> Upgrade License{" "}
      </div>
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col lg={6} className="mb-2">
                {" "}
                <Form.Label>No. of Licenses*</Form.Label>
                <Form.Control type="number" placeholder="" />
              </Col>
              <Col lg={6} className="mb-2">
                {" "}
                <Form.Label>Extend License To*</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Select Slab</option>
                  <option>...</option>
                </Form.Select>
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

export default License;
