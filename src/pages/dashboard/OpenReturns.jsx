import React from "react";
import "../../assets/scss/pages/dashboard.scss";
import { Card, Form, Table } from "react-bootstrap";
import { VscNewFile } from "react-icons/vsc";
import TableBottomPagination from "../../components/TableBottomPagination";

const OpenReturns = () => {
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
              <th className="text-center">Already Filed</th>
              <th className="text-center">File Return</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i}>
                <td>{i}.</td>
                <td className="text-end">12-01-2023</td>
                <td className="text-end">18-01-2023</td>
                <td className="text-end">15-01-2023</td>
                <td className="text-end">12-01-2023</td>
                <td>
                  {" "}
                  <div className="active-label text-center">Active</div>
                </td>
                <td className="text-center">
                  {" "}
                  <Form.Check type="checkbox" />
                </td>
                <td className="text-center icon-soft-blue">
                  <VscNewFile />
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

export default OpenReturns;
