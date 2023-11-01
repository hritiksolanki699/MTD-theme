import React from "react";
import "../assets/scss/layout/leftSidebar.scss";
import { Image } from "react-bootstrap";
import { logo } from "../assets/images";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <Link to="/">
        <div className="logo">
          <Image src={logo} width={160} />
        </div>
      </Link>
      <MenuItems />
    </div>
  );
};

export default LeftSidebar;
