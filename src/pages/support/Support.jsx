import React from "react";
import PageTitle from "../../components/PageTitle";
import {
  Accordion,
  Breadcrumb,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { RiUploadLine } from "react-icons/ri";

const Support = () => {
  const handleFileUpload = (event) => {
    // Handle file upload logic
    const uploadedFile = event.target.files[0];
    console.log(uploadedFile);
  };
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Support" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            {/* <Breadcrumb.Item>
          <Link to="">Contact</Link>
        </Breadcrumb.Item> */}
            <Breadcrumb.Item active>Support</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <h2>FAQs</h2>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    How do I reset my password?
                  </Accordion.Header>
                  <Accordion.Body>
                    To reset your password, please follow the steps mentioned in
                    the password reset email sent to your registered email
                    address.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    What are the supported payment methods?
                  </Accordion.Header>
                  <Accordion.Body>
                    We support various payment methods, including credit cards
                    (Visa, Mastercard, American Express), PayPal, and bank
                    transfers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {" "}
                    What is your refund policy?
                  </Accordion.Header>
                  <Accordion.Body>
                    We have a 30-day refund policy. If you are not satisfied
                    with our product, please contact our support team within 30
                    days of purchase to initiate a refund.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <h2>Upload Knowledge Documents</h2>
              <Form>
                <Form>
                  <Form.Control
                    id="fileInput"
                    type="file"
                    onChange={handleFileUpload}
                  />
                  <Form.Label
                    data-browse="Browse"
                    htmlFor="fileInput"
                    role="button"
                  >
                    <RiUploadLine /> Upload PDF
                  </Form.Label>
                </Form>
              </Form>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <Card.Header>Contact Details</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <MdEmail /> <strong>Email:</strong> johndoe@example.com
                </ListGroup.Item>
                <ListGroup.Item>
                  <MdPhone /> <strong>Phone:</strong> +1 123-456-7890
                </ListGroup.Item>
                <ListGroup.Item>
                  <MdLocationOn /> <strong>Address:</strong> 123 Main Street,
                  City, State, Country
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Support;
