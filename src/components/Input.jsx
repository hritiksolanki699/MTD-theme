import React from "react";
import { Form } from "react-bootstrap";

const FromInput = ({ label, type, placeholder, tooltip }) => {
  return (
    <>
      <Form.Label className="display-inline-block">
        {label}
        <span style={{ verticalAlign: "super" }}>{tooltip && tooltip}</span>
      </Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </>
  );
};

export default FromInput;
