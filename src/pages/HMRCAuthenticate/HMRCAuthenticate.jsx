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
import { IoCopyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HMRCAuthenticate = () => {
  const copyRef = useRef(null);

  const handleCopy = () => {
    copyRef.current.focus();
  };

  return (
    <Container fluid >
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Authenticate with HMRC" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Authenticate with HMRC</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <div className="fw-bold mb-2">What is Lorem Ipsum?</div>
          <div className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <Row className="cyan-white-button-div  justify-content-center mb-2 mt-5">
            <Col lg={3} sm={6} className="mb-2">
              <Button className="button-width save-button">HMRC Website</Button>
            </Col>
            <Col lg={4} sm={6} className="mb-2 ">
              <Form className="relative-div">
                <Form.Control
                  type="text"
                  ref={copyRef}
                  placeholder="Copy and Paste Website URL here"
                />
                <div className="copy-icon" onClick={handleCopy}>
                  <IoCopyOutline role="button" />
                </div>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HMRCAuthenticate;
