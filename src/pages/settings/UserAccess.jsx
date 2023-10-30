import React from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/pages/settings.scss";
import "../../assets/scss/components/clientsListTable.scss";
import { Container, Breadcrumb, Card, Form, Table } from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { HiUserGroup } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdDelete, MdEditCalendar, MdRemoveRedEye } from "react-icons/md";
import TableBottomPagination from "../../components/TableBottomPagination";

const UserAccess = () => {
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
          <div className="middle-div mb-4">
            <div>
              <Form className="search-box">
                <Form.Control
                  type="text"
                  placeholder="Search by Numbers and Alphabets..."
                  className="search-input"
                />
                <div className="search-icon">
                  <BiSearch />
                </div>
              </Form>
            </div>
            <div className="gray-button">
              <div>
                <span>
                  {" "}
                  <AiOutlineFileAdd />
                </span>{" "}
                Import
              </div>
            </div>
            <div className="gray-button">
              <div>
                Export <span>▼</span>
              </div>
            </div>
            <Link to="/add-user">
              <div className="add-client">
                <div>
                  <span>
                    <IoAddCircleSharp />
                  </span>{" "}
                  Add User
                </div>
              </div>
            </Link>
          </div>
          <Table responsive className="clients-list-table mb-2">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>User Name</th>
                <th>Email</th>

                <th className="text-end">
                  Contact <span>↑↓</span>{" "}
                </th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <tr key={i}>
                  <td>{i}</td>
                  <td>Mark John</td>
                  <td>markjohna@gmail.com</td>
                  <td className="text-end">+1-12345-6789</td>
                  <td className="text-center">
                    <div className="three-icons">
                      <MdRemoveRedEye /> <MdEditCalendar /> <MdDelete />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <TableBottomPagination />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserAccess;
