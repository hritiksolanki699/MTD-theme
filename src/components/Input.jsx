import React from "react";
import { Form } from "react-bootstrap";
const FromInput = ({ label, type, placeholder }) => {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </>
  );
};

export default FromInput;
