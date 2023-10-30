import React from "react";
import "../../assets/scss/pages/dashboard.scss";
import { Card, Table } from "react-bootstrap";
import { MdRemoveRedEye } from "react-icons/md";
import TableBottomPagination from "../../components/TableBottomPagination";

const ReturnHistory = () => {
  return (
    <Card className="mt-2">
      <Card.Body>
        <Table responsive className="dashboard-table mb-2" size="sm">
          <thead>
            <tr>
              <th>S.No</th>
              <th className="text-end">
                Start Date <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                End Date <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                {" "}
                Due Date <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                Received Date <span>↑↓</span>{" "}
              </th>
              <th className="text-center">
                {" "}
                Status <span>↑↓</span>{" "}
              </th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <tr key={i}>
                <td>{i}.</td>
                <td className="text-end">12-01-2023</td>
                <td className="text-end">18-01-2023</td>
                <td className="text-end">15-01-2023</td>
                <td className="text-end">12-01-2023</td>
                <td>
                  <div className="active-label text-center">Active</div>
                </td>
                <td className="text-center">
                  <MdRemoveRedEye />
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

export default ReturnHistory;
