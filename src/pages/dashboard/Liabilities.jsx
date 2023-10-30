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
              <th>S.No</th>
              <th className="text-end"> 
                Start Date <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                End Date <span>↑↓</span>{" "}
              </th>
              <th>
                Details <span>↑↓</span>{" "}
              </th>
              <th className="text-end">
                {" "}
                Due Date <span>↑↓</span>{" "}
              </th>
              <th className="text-end"> Original Amount</th>
              <th className="text-end">Outstanding Amount</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <tr key={i}>
                <td>{i}.</td>
                <td className="text-end">12-01-2023</td>
                <td className="text-end">18-01-2023</td>
                <td>Lorem Ipsum...</td>
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
