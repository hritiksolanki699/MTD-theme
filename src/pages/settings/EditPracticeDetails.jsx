import React, { useState } from "react";
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
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const EditPracticeDetails = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  return (
    <Container fluid >
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Edit Practice Details" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/practice">Practice</Link>
            </Breadcrumb.Item>
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
                <FromInput label="Email" tooltip={tooltip} type="email" />
              </Col>
              <Col md={6} className="mb-2">
                <FromInput
                  label="Agent ID Password with HMRC"
                  tooltip={tooltip}
                  type="password"
                />
              </Col>
              <Col md={6} className="mb-2">
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
              </Col>
              <Col md={6} className="mb-2">
                <Form.Label className="display-inline-block">
                  Confirm Password<span>{tooltip}</span>
                </Form.Label>
                <div className="relative-div">
                  <Form.Control type={showConPassword ? "text" : "password"} />
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
              </Col>
              <Col md={6} className="mb-2">
                <FromInput
                  label="Contact Number"
                  tooltip={tooltip}
                  type="number"
                />
              </Col>
              <Col md={6} className="mb-2">
                <FromInput
                  label="Practice/Business Type"
                  tooltip={tooltip}
                  type="text"
                />
              </Col>
            </Row>
            <Row className="cyan-white-button-div  justify-content-center flex-md-row flex-column-reverse mb-2 mt-2">
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
