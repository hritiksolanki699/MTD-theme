import React from "react";
import "../assets/scss/layout/leftSidebar.scss";
import { Image } from "react-bootstrap";
import { logo } from "../assets/images";
import MenuItems from "./MenuItems";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="logo">
        <Image src={logo} width={160} />
      </div>
      <MenuItems />
    </div>
  );
};

export default LeftSidebar;
