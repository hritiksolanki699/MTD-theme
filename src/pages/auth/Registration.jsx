import React, { useState } from "react";
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
import { loginLogo, tooltip } from "../../assets/images";
import FromInput from "../../components/Input";
import ReCAPTCHA from "react-google-recaptcha";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
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
                  <Form.Label>
                    I want to register as
                    <span style={{ verticalAlign: "super" }}>{tooltip}</span>
                  </Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>An Accountant</option>
                    <option>As a Multi Business</option>
                  </Form.Select>
                </div>
                <div className="mb-3">
                  <FromInput
                    label={
                      <div>
                        Email
                        <span style={{ verticalAlign: "super" }}>
                          {tooltip}
                        </span>
                      </div>
                    }
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <Form.Label className="display-inline-block">
                    Password<span>{tooltip}</span>
                  </Form.Label>
                  <div className="relative-div">
                    <Form.Control type={showPassword ? "text" : "password"} />
                    <div
                      className="copy-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <AiOutlineEye role="button" />
                      ) : (
                        <AiOutlineEyeInvisible role="button" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <Form.Label className="display-inline-block">
                    Confirm Password<span>{tooltip}</span>
                  </Form.Label>
                  <div className="relative-div">
                    <Form.Control
                      type={showConPassword ? "text" : "password"}
                    />
                    <div
                      className="copy-icon"
                      onClick={() => setShowConPassword(!showConPassword)}
                    >
                      {showConPassword ? (
                        <AiOutlineEye role="button" />
                      ) : (
                        <AiOutlineEyeInvisible role="button" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <FromInput
                    label={
                      <div>
                        Contact Name
                        <span style={{ verticalAlign: "super" }}>
                          {tooltip}
                        </span>
                      </div>
                    }
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <FromInput
                    label={
                      <div>
                        Contact Number
                        <span style={{ verticalAlign: "super" }}>
                          {tooltip}
                        </span>
                      </div>
                    }
                    type="number"
                  />
                </div>
             
                <div className="mb-3">
                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label={
                        <div style={{ marginTop: "-4px" }}>
                          I have read the Terms of Services
                          <span style={{ verticalAlign: "super" }}>
                            {tooltip}
                          </span>
                        </div>
                      }
                    />
                  </Form.Group>
                </div>
                <div className="mb-3">
                  <ReCAPTCHA sitekey="Your client site key" />
                </div>
                <Row className="flex-md-row flex-column-reverse">
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
