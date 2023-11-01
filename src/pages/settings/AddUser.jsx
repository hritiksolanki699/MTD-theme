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
  Table,
} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { HiUserGroup } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import TableBottomPagination from "../../components/TableBottomPagination";
import FromInput from "../../components/Input";
import { tooltip } from "../../assets/images";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const AddUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb mb-2">
        <PageTitle title="Add User" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/user-access">User Access</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Add User</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="user-access-label-div mb-2">
        <span style={{ fontSize: "36px", color: "#727CF5" }}>
          <HiUserGroup />
        </span>{" "}
        Maximum number of users allowed as per the license :{" "}
        <span style={{ color: "#39AFD1" }}>250</span>
        <span style={{ verticalAlign: "super" }}>{tooltip}</span>
      </div>
      <Card>
        <Card.Body>
          <Row>
            <Col lg={4} className="mb-2">
              <Form>
                <Row>
                  <Col md={12} className="mb-2">
                    <FromInput
                      label="User Name"
                      tooltip={tooltip}
                      type="text"
                      placeholder="Enter user name"
                    />
                  </Col>
                  <Col md={12} className="mb-2">
                    <FromInput
                      label="Email"
                      tooltip={tooltip}
                      type="email"
                      placeholder="Enter your email"
                    />
                  </Col>
                  <Col md={12} className="mb-2">
                    <FromInput
                      label="Phone No."
                      tooltip={tooltip}
                      type="number"
                      placeholder="Enter your phone no."
                    />
                  </Col>
                  <Col md={12} className="mb-2">
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
                  <Col md={12} className="mb-2">
                    <Form.Label className="display-inline-block">
                      Assign Roles<span>{tooltip}</span>
                    </Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Select Roles</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg={8}>
              <h5>Assign clients to User</h5>
              <Table responsive className="clients-list-table mb-2">
                <thead>
                  <tr>
                    <th>
                      <Form.Check type="checkbox" />
                    </th>
                    <th>S.No.</th>
                    <th>
                      {" "}
                      Client ID <span>↑↓</span>{" "}
                    </th>
                    <th>
                      {" "}
                      Client Name <span>↑↓</span>{" "}
                    </th>
                    <th>
                      User Name <span>↑↓</span>{" "}
                    </th>
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
                          <MdDelete role="button" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <TableBottomPagination />
            </Col>
            <Col lg={4}>
              <Row className="cyan-white-button-div flex-md-row flex-column-reverse   mb-2 mt-2">
                <Col lg={6} sm={6} className="mb-2">
                  <Button className="button-width cancel-button">Cancel</Button>
                </Col>
                <Col lg={6} sm={6} className="mb-2">
                  <Button className="button-width save-button">Submit</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddUser;
