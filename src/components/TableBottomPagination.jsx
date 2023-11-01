import React, { useState } from "react";
import "../assets/scss/components/clientsListTable.scss";
import { Pagination, Row, Col, Form } from "react-bootstrap";
import { AiOutlineDownSquare } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const TableBottomPagination = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Row className="bottom-div mt-2">
      <Col lg={3} md={4} sm={4} className="mb-2">
        <div>
          {" "}
          {/* <div className="add-client">
            <div>
              Max Record{" "}
              <span>
                <AiOutlineDownSquare />
              </span>{" "}
            </div>     
          </div> */}
          <Form.Select className="add-client">
            <option>Max Record</option>
            <option>..</option>
          </Form.Select>
        </div>
      </Col>
      <Col lg={9} md={8} sm={8} className="pagination-div mb-2">
        <Pagination className="pagination-container" size="sm">
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item>{14}</Pagination.Item>
          <Pagination.Item onClick={() => setShowSearch(!showSearch)}>
            {<BiSearch />}
          </Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </Col>
      <Col lg={12} className="d-flex justify-content-end">
        {showSearch && (
          <Form.Control className="width-250px mb-2" type="search" />
        )}
      </Col>
    </Row>
  );
};

export default TableBottomPagination;
