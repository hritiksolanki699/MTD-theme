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
import { licenseIcon } from "../../assets/images";
import { tooltip } from "../../assets/images";
import { Link } from "react-router-dom";
import { GiArmorUpgrade } from "react-icons/gi";

const License = () => {
  return (
    <Container fluid >
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Licence Validity" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Licence</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <Row className="license-expiry">
        <Col lg={6} md={8} className="mb-2">
          <div className="d-flex">
            <div>
              {" "}
              <Image src={licenseIcon} alt="licenseIcon" />
            </div>
            <div className="d-flex flex-wrap">
              <div>Your Licence expires on&nbsp;</div>
              <div>
                {" "}
                <span>25-03-2023</span>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={4} className="mb-2">
          <Button className="cyan-button">Extend license</Button>
        </Col>
      </Row>
      <div className="mt-4 mb-2 upgrade-license">
        {/* <Image src={upgrade} alt="upgrade" />  */}
        <GiArmorUpgrade style={{ color: "#727cf5" }} /> Upgrade Licence{" "}
      </div>
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col lg={6} className="mb-2">
                {" "}
                <Form.Label className="display-inline-block">
                  No. of Licences<span>{tooltip}</span>
                </Form.Label>
                <Form.Control type="number" placeholder="" />
              </Col>
              <Col lg={6} className="mb-2">
                {" "}
                <Form.Label className="display-inline-block">
                  Extend Licence To<span>{tooltip}</span>
                </Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Select Slab</option>
                  <option>...</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="cyan-white-button-div  justify-content-center  flex-md-row flex-column-reverse mb-2 mt-2">
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
