import React from "react";
import "../../assets/scss/pages/dashboard.scss";
import { Card, Table } from "react-bootstrap";
import TableBottomPagination from "../../components/TableBottomPagination";

const Liabilities = () => {
  return (
    <Card className="mt-2">
      <Card.Body>
        <Table responsive className="dashboard-table mb-2" size="sm">
          <thead>
            <tr>
              <th className="width-th-sr">S.No</th>
              <th className="text-end width-th-date">
                Start Date <span>↑↓</span>{" "}
              </th>
              <th className="text-end width-th-date">
                End Date <span>↑↓</span>{" "}
              </th>
              <th className="width-th-label px-4">
                Details <span>↑↓</span>{" "}
              </th>
              <th className="text-end width-th-date">
                {" "}
                Due Date <span>↑↓</span>{" "}
              </th>
              <th className="text-end width-th-date"> Original Amount</th>
              <th className="text-end width-th-date">Outstanding Amount</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <tr key={i}>
                <td>{i}.</td>
                <td className="text-end">12-01-2023</td>
                <td className="text-end">18-01-2023</td>
                <td className="px-4">Lorem Ipsum...</td>
                <td className="text-end">12-01-2023</td>
                <td className="text-end">15,200/-</td>
                <td className="text-end">16,200/-</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <TableBottomPagination />
      </Card.Body>
    </Card>
  );
};

export default Liabilities;
