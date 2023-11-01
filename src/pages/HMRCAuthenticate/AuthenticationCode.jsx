import React, { useRef } from "react";
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
import { Link } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";

const AuthenticationCode = () => {
  const copyRef = useRef(null);

  const handleCopy = () => {
    copyRef.current.focus();
  };
  return (
    <Container fluid >
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Authentication code" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Authentication code</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Row className="cyan-white-button-div  justify-content-center mb-2 mt-2">
            <Col lg={4} sm={6} className="my-3">
              <Form className="relative-div">
                <Form.Control
                  type="text"
                  ref={copyRef}
                  placeholder="Enter authentication code"
                />
                <div className="copy-icon" onClick={handleCopy}>
                  <IoCopyOutline role="button" />
                </div>
              </Form>
            </Col>
            <Col lg={2} sm={6} className="my-3">
              <Button className="button-width save-button">Submit</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AuthenticationCode;
