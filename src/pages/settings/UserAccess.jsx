import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/scss/pages/settings.scss";
import "../../assets/scss/components/clientsListTable.scss";
import {
  Container,
  Breadcrumb,
  Card,
  Form,
  Table,
  ListGroup,
} from "react-bootstrap";
import PageTitle from "../../components/PageTitle";
import { HiUserGroup } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdDelete, MdEditCalendar, MdRemoveRedEye } from "react-icons/md";
import TableBottomPagination from "../../components/TableBottomPagination";
import { BsFiletypePdf, BsFiletypeCsv } from "react-icons/bs";
import { tooltip } from "../../assets/images";

const UserAccess = () => {
  const searchIconRef = useRef(null);
  const [openExport, setOpenExport] = useState(false);

  const handleExport = () => setOpenExport(!openExport);
  const handleSearchIcon = () => {
    searchIconRef.current.focus();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Handle the selected file(s) here
    console.log(selectedFile);
  };
  return (
    <Container fluid>
      <div className="header-wi-breadcrumb">
        <PageTitle title="User Access" />
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>User Access</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <div className="user-access-label-div d-flex align-items-center mb-2">
        <div>
          <span style={{ fontSize: "36px", color: "#727CF5" }}>
            <HiUserGroup />
            &nbsp;
          </span>{" "}
        </div>
        <div>
          Maximum number of users allowed as per the license :{" "}
          <span style={{ color: "#39AFD1" }}>250</span>
          <span style={{ verticalAlign: "super" }}>{tooltip}</span>{" "}
        </div>
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
                  ref={searchIconRef}
                />
                <div className="search-icon" onClick={handleSearchIcon}>
                  <BiSearch />
                </div>
              </Form>
            </div>
            <label htmlFor="file-upload" className="gray-button">
              <div>
                <span>
                  {" "}
                  <AiOutlineFileAdd />
                </span>{" "}
                Import
              </div>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </label>
            <div className="gray-button" onClick={handleExport}>
              <div>
                Export <span>▼</span>
              </div>
              {openExport && (
                <ListGroup className="position-absolute  padding-top-40px">
                  <ListGroup.Item className="hover-item">
                    <BsFiletypeCsv style={{ color: "#727cf5" }} /> CSV
                  </ListGroup.Item>
                  <ListGroup.Item className="hover-item">
                    <BsFiletypePdf style={{ color: "#727cf5" }} /> PDF
                  </ListGroup.Item>
                </ListGroup>
              )}
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
                <th className="width-th-sr">S.No.</th>
                <th className="width-th-name">User Name</th>
                <th className="width-th-name">Email</th>

                <th className="text-end width-th-date">
                  Contact <span>↑↓</span>{" "}
                </th>
                <th className="text-center width-th-label">Action</th>
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
                      <MdRemoveRedEye role="button" />{" "}
                      <MdEditCalendar role="button" />{" "}
                      <MdDelete role="button" />
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
