import React from "react";
import "../assets/scss/layout/smallScreenSidebar.scss";
import { Offcanvas, Image } from "react-bootstrap";
import MenuItems from "./MenuItems";
import { logo } from "../assets/images";

const SmallScreenSidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas
      backdropClassName="small-sidebar"
      show={show}
      onHide={handleClose}
      closeButton
    >
      <div className="logo-main">
        <Image src={logo} width={160} />
      </div>
      <Offcanvas.Body>
        <MenuItems handleClose={handleClose} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SmallScreenSidebar;
