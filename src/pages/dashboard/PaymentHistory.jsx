import React from "react";
import "../../assets/scss/pages/dashboard.scss";
import { Card, Table } from "react-bootstrap";
import { MdRemoveRedEye } from "react-icons/md";
import TableBottomPagination from "../../components/TableBottomPagination";

const PaymentHistory = () => {
  return (
    <Card className="mt-2">
      <Card.Body>
        <Table responsive className="dashboard-table mb-2" size="sm">
          <thead>
            <tr>
              <th>S.No</th>
              <th className="text-end">
                Payment Date <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                Amount <span>↑↓</span>{" "}
              </th>

              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i}>
                <td>{i}.</td>
                <td className="text-end">12-01-2023</td>
                <td className="text-end">15,200/-</td>
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

export default PaymentHistory;
