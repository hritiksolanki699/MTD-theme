import React, { Fragment, useRef, useState } from "react";
import "../assets/scss/components/clientsListTable.scss";
import { Form, ListGroup, Table } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { ImFilesEmpty } from "react-icons/im";
import { MdDelete, MdEditCalendar, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import TableBottomPagination from "./TableBottomPagination";
import { BsFiletypePdf, BsFiletypeCsv } from "react-icons/bs";

const ClientsListTable = () => {
  const searchIconRef = useRef(null);
  const [openExport, setOpenExport] = useState(false);
  const [selected, setSelected] = useState("");

  const handleClick = (value) => {
    setSelected(value);
  };

  const handleExport = () => setOpenExport(!openExport);

  const handleSearchIcon = () => {
    searchIconRef.current.focus();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // Handle the selected file(s) here
    console.log(selectedFile);
  };

  const alphabetList = [
    ...Array(10).keys(),
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <Fragment>
      <div className="middle-div mb-4">
        <div>
          <Form className="search-box">
            <Form.Control
              type="text"
              ref={searchIconRef}
              placeholder="Search by Numbers and Alphabets..."
              className="search-input"
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
            <th className="width-th-name">
              Business Name <span>↑↓</span>{" "}
            </th>
            <th className="width-th-date">
              VAT Number <span>↑↓</span>{" "}
            </th>
            <th className="text-center width-th-label">
              Status <span>↑↓</span>{" "}
            </th>
            <th className="text-center width-th-date">File Return</th>
            <th className="text-end width-th-date">
              last return Date <span>↑↓</span>{" "}
            </th>
            <th className="text-center width-th-date">Action</th>
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
                <ImFilesEmpty role="button" />
              </td>
              <td className="text-end width-th-date">12-03-2023</td>
              <td className="text-center">
                <div className="three-icons">
                  <MdRemoveRedEye role="button" />{" "}
                  <MdEditCalendar role="button" /> <MdDelete role="button" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TableBottomPagination />
      <div className="a-to-z-div">
        {alphabetList.map((value, index) => (
          <Fragment>
            <div
              key={value}
              role="button"
              className={`px-1 button-hover${
                selected === value ? " focused" : ""
              }`}
              onClick={() => handleClick(value)}
            >
              {value}
            </div>
            {index !== alphabetList.length - 1 && "|"}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default ClientsListTable;
