import React, { useRef, useState } from "react";
import { Card, Form, ListGroup, Table } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdDelete, MdEditCalendar, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import TableBottomPagination from "../../components/TableBottomPagination";
import { BsFiletypePdf, BsFiletypeCsv } from "react-icons/bs";

const SalesTable = () => {
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
    <Card>
      <Card.Body>
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
          <Link to="/add-sales-transaction">
            <div className="add-client">
              <div>
                <span>
                  <IoAddCircleSharp />
                </span>{" "}
                New Transaction
              </div>
            </div>
          </Link>
        </div>
        <Table responsive className="clients-list-table mb-2">
          <thead>
            <tr>
              <th className="text-center">
                <Form.Check />
              </th>
              <th>
                Document Type <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                Date <span>↑↓</span>{" "}
              </th>
              <th>
                Customer <span>↑↓</span>{" "}
              </th>
              <th>
                Reference <span>↑↓</span>{" "}
              </th>
              <th>
                Details <span>↑↓</span>{" "}
              </th>
              <th>
                Transaction Type <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                Net <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                Net CAL <span>↑↓</span>{" "}
              </th>

              <th>
                VAT Code <span>↑↓</span>{" "}
              </th>
              <th className="text-center">
                VAT Rate <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                VAT <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                VAT CAL <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                Total <span>↑↓</span>{" "}
              </th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <tr key={i}>
                <td className="text-center">
                  {" "}
                  <Form.Check />
                </td>
                <td>SC - Credit Note</td>
                <td className="text-end">14/02/2023 </td>
                <td>wwwwww</td>
                <td>rrrrrr</td>
                <td>wwwwww</td>
                <td>Regular Transaction</td>
                <td className="text-end">1,000.00</td>
                <td style={{ color: "#FF1D1D" }} className="text-end">
                  -1,000.00
                </td>
                <td>SR - 20% Standard rated</td>
                <td className="text-center">20%</td>
                <td className="text-end">200.00</td>
                <td className="text-end" style={{ color: "#FF1D1D" }}>
                  -200.00
                </td>
                <td className="text-end" style={{ color: "#FF1D1D" }}>
                  -1200.00
                </td>
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
      </Card.Body>
    </Card>
  );
};

export default SalesTable;
