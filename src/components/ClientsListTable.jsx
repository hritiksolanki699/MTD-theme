import React, { Fragment } from "react";
import "../assets/scss/components/clientsListTable.scss";
import { Form, Table } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { ImFilesEmpty } from "react-icons/im";
import { MdDelete, MdEditCalendar, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import TableBottomPagination from "./TableBottomPagination";

const ClientsListTable = () => {
  return (
    <Fragment>
      {" "}
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
        <Link to="/client-add">
          <div className="add-client">
            <div>
              <span>
                <IoAddCircleSharp />
              </span>{" "}
              Add Client
            </div>
          </div>
        </Link>
      </div>
      <Table responsive className="clients-list-table mb-2">
        <thead>
          <tr>
            <th>
              Business Name <span>↑↓</span>{" "}
            </th>
            <th>
              VAT Number <span>↑↓</span>{" "}
            </th>
            <th className="text-center">
              Status <span>↑↓</span>{" "}
            </th>
            <th className="text-center">File Return</th>
            <th className="text-end">
              last return Date <span>↑↓</span>{" "}
            </th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <tr key={i}>
              <td>Sales & Marketing</td>
              <td>101010-102</td>
              <td>
                <div className="active-label text-center">Active</div>
              </td>
              <td
                style={{
                  color: "#727CF5",
                  fill: "#727CF5",
                  textAlign: "center",
                }}
              >
                <ImFilesEmpty />
              </td>
              <td className="text-end">12-03-2023</td>
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
      <div className="a-to-z-div">
        0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |A | B | C | D | E | F | G | H | I
        | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z{" "}
      </div>
    </Fragment>
  );
};

export default ClientsListTable;
