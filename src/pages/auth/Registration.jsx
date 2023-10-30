import React from "react";
import "../../assets/scss/auth/login.scss";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { loginLogo } from "../../assets/images";
import FromInput from "../../components/Input";
import ReCAPTCHA from "react-google-recaptcha";

const Registration = () => {
  return (
    <Container className="registration-container">
      <div className="biger-cricle">
        <div className="small-cricle">
          <div className="heading">Registration</div>
          <Card className="login-card">
            <Card.Header className="login-header">
              <Image src={loginLogo} alt="MTD HIVE" />
            </Card.Header>
            <Card.Body>
              <Form>
                <div className="mb-3">
                  <Form.Label>I want to register as</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>An Accountant</option>
                    <option>As a Multi Business</option>
                  </Form.Select>
                </div>
                <div className="mb-3">
                  <FromInput label="Email*" type="text" />
                </div>
                <div className="mb-3">
                  <FromInput label="Password*" type="Password" />
                </div>
                <div className="mb-3">
                  <FromInput label="Confirm Password*" type="Password" />
                </div>
                <div className="mb-3">
                  <FromInput label="Contact Name*" type="text" />
                </div>
                <div className="mb-3">
                  <FromInput label="Contact Number*" type="number" />
                </div>
                <div className="mb-3">
                  <FromInput label="Contact Number*" type="number" />
                </div>
                <div className="mb-3">
                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I have read the Terms of Services"
                    />
                  </Form.Group>
                </div>
                <div className="mb-3">
                  <ReCAPTCHA sitekey="Your client site key" />
                </div>
                <Row>
                  <Col lg={6} className="mb-3">
                    <Button className="cancel-button">Cancel</Button>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <Button className="login-button">Register</Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Registration;
