import React from "react";
import "../../assets/scss/pages/personalDetails.scss";
import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";

import LeftProfile from "./LeftProfile";
import FromInput from "../../components/Input";
import { tooltip } from "../../assets/images";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <Container fluid >
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Edit Profile" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/personal-details">Profile</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Edit Personal Details</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Row>
            <Col lg={3}>
              <LeftProfile />
            </Col>
            <Col lg={9}>
              <Card className="card-shadow">
                <Card.Body>
                  <Form>
                    <Row>
                      <Col md={6} className="mb-2">
                        <FromInput
                          label="Full Name"
                          tooltip={tooltip}
                          placeholder="Enter full name"
                          type="email"
                        />
                      </Col>
                      <Col md={6} className="mb-2">
                        <FromInput
                          label="Email"
                          tooltip={tooltip}
                          placeholder="Enter your Email"
                          type="email"
                        />
                      </Col>
                      <Col md={6} className="mb-2">
                        <FromInput
                          label="Mobile No."
                          tooltip={tooltip}
                          placeholder="Enter full phone No."
                          type="number"
                        />
                      </Col>
                      <Col md={6} className="mb-2">
                        <FromInput
                          label="Photo"
                          tooltip={tooltip}
                          placeholder=""
                          type="file"
                        />
                      </Col>
                    </Row>
                    <Row className="cyan-white-button-div  justify-content-center flex-md-row flex-column-reverse mb-2 mt-2">
                      <Col lg={3} sm={6} className="mb-2">
                        <Button className="button-width cancel-button">
                          Cancel
                        </Button>
                      </Col>
                      <Col lg={3} sm={6} className="mb-2">
                        <Button className="button-width save-button">
                          Update
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditProfile;
