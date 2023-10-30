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
  Table,
} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { HiUserGroup } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import TableBottomPagination from "../../components/TableBottomPagination";
import FromInput from "../../components/Input";

const AddUser = () => {
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="User Access" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>User Access</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="user-access-label-div mb-2">
        <span style={{ fontSize: "36px", color: "#727CF5" }}>
          <HiUserGroup />
        </span>{" "}
        Maximum number of users allowed as per the license :{" "}
        <span style={{ color: "#39AFD1" }}>250</span>
      </div>
      <Card>
        <Card.Body>
          <Row>
            <Col lg={4}>
              <Form>
                <Row>
                  <Col md={12} className="mb-2">
                    <FromInput
                      label="User Name*"
                      type="text"
                      placeholder="Enter user name"
                    />
                  </Col>
                  <Col md={12} className="mb-2">
                    <FromInput
                      label="Email*"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </Col>
                  <Col md={12} className="mb-2">
                    <FromInput
                      label="Phone No.*"
                      type="number"
                      placeholder="Enter your phone no."
                    />
                  </Col>
                  <Col md={12} className="mb-2">
                    <FromInput
                      label="Password*"
                      type="password"
                      placeholder=""
                    />
                  </Col>
                  <Col md={12} className="mb-2">
                    <Form.Label>Assign Roles*</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Select Roles</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="cyan-white-button-div   mb-2 mt-2">
                  <Col lg={6} sm={6} className="mb-2">
                    <Button className="button-width cancel-button">
                      Cancel
                    </Button>
                  </Col>
                  <Col lg={6} sm={6} className="mb-2">
                    <Button className="button-width save-button">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg={8}>
              <Table responsive className="clients-list-table mb-2">
                <thead>
                  <tr>
                    <th>
                      <Form.Check type="checkbox" />
                    </th>
                    <th>S.No.</th>
                    <th> Client ID </th>
                    <th> Client Name </th>
                    <th>User Name</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <tr key={i}>
                      <td>
                        <Form.Check type="checkbox" />
                      </td>
                      <td>{i}</td>
                      <td>mark001</td>
                      <td>Kavin_321</td>
                      <td>Mark John</td>
                      <td className="text-center">
                        <div className="three-icons">
                          <MdDelete />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <TableBottomPagination />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddUser;
