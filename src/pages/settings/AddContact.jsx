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
import { tooltip } from "../../assets/images";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <Container fluid >
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Add Contact" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            {/* <Breadcrumb.Item>
              <Link to="">Contact</Link>
            </Breadcrumb.Item> */}
            <Breadcrumb.Item active>Add Contact</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col md={6} className="mb-2">
                <FromInput
                  label="Name"
                  tooltip={tooltip}
                  type="text"
                  placeholder="Enter your name"
                />
              </Col>
              <Col md={6} className="mb-2">
                <FromInput
                  label="Email"
                  tooltip={tooltip}
                  type="email"
                  placeholder="Enter your email"
                />
              </Col>
              <Col md={6} className="mb-2">
                <FromInput
                  label="Contact"
                  tooltip={tooltip}
                  type="number"
                  placeholder="Enter your contact"
                />
              </Col>
              <Col md={6} className="mb-2">
                <FromInput
                  label="Address"
                  tooltip={tooltip}
                  type="text"
                  placeholder="Address"
                />
              </Col>
            </Row>
            <Row className="cyan-white-button-div  justify-content-center flex-md-row flex-column-reverse mb-2 mt-2">
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

export default AddContact;
