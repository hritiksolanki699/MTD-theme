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
              <th className="width-th-sr">S.No</th>
              <th className="text-end width-th-date">
                Payment Date <span>↑↓</span>{" "}
              </th>
              <th className="text-end width-th-date">
                Amount <span>↑↓</span>{" "}
              </th>

              <th className="text-center width-th-date">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="width-th-sr">
                <td>{i}.</td>
                <td className="text-end ">12-01-2023</td>
                <td className="text-end ">15,200/-</td>
                <td className="text-center ">
                  <MdRemoveRedEye role="button" />
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
