import React from "react";
import "../../assets/scss/pages/personalDetails.scss";
import { Container, Form, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { BsPersonCheckFill } from "react-icons/bs";

import TableBottomPagination from "../../components/TableBottomPagination";

const AssignClient = () => {
  return (
    <Container fluid className="mt-2">
      <Table responsive className="clients-list-table mb-2">
        <thead>
          <tr>
            <th></th>
            <th>
              {" "}
              Client ID <span>↑↓</span>
            </th>
            <th>
              {" "}
              Client Name <span>↑↓</span>
            </th>
            <th>
              User Name <span>↑↓</span>
            </th>
            <th className="text-center">Assigned</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((i) => (
            <tr key={i}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>mark001</td>
              <td>Mark John</td>
              <td>markjohna</td>
              <td className="text-center">
                <div className="three-icons">
                  <BsPersonCheckFill />
                </div>
              </td>
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
    </Container>
  );
};

export default AssignClient;