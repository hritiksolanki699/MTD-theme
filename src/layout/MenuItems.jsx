import React, { useState } from "react";
import "../assets/scss/layout/leftSidebar.scss";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Collapse, ListGroup } from "react-bootstrap";
import { BsGrid1X2, BsFileBarGraph } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { ImFilesEmpty } from "react-icons/im";
import { FaMoneyBillWave } from "react-icons/fa";
import { AiFillSetting, AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiFolderUserLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const MenuItems = ({ handleClose }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isCurrentPath = (path) => {
    return location.pathname === path ? "menu-active" : "menu-item";
  };
  const isCurrentPathSettings = (path) => {
    return location.pathname === path
      ? "menu-item-inner-active"
      : "menu-item-inner";
  };

  return (
    <SimpleBar style={{ height: "92vh" }}>
      <ListGroup className="menu">
        <Link to="/dashboard">
          <ListGroup.Item
            className={isCurrentPath("/dashboard")}
            onClick={handleClose}
          >
            <BsGrid1X2 />
            &nbsp; Dashboard
          </ListGroup.Item>
        </Link>
        <ListGroup.Item className="menu-item">
          <BsFileBarGraph />
          &nbsp; Open Returns
        </ListGroup.Item>
        <Link to="/clients">
          <ListGroup.Item
            className={isCurrentPath("/clients")}
            onClick={handleClose}
          >
            <HiUserGroup />
            &nbsp; Clients
          </ListGroup.Item>
        </Link>
        <ListGroup.Item className="menu-item">
          <ImFilesEmpty />
          &nbsp; Record Sales
        </ListGroup.Item>
        <ListGroup.Item className="menu-item">
          <FaMoneyBillWave />
          &nbsp; Record Purchases
        </ListGroup.Item>
        <ListGroup.Item
          className="menu-item display-flex"
          onClick={() => setOpen(!open)}
        >
          <div>
            <AiFillSetting />
            &nbsp; Settings{" "}
          </div>
          <div>{open ? <AiOutlineDown /> : <AiOutlineRight />}</div>
        </ListGroup.Item>
        <Collapse in={open}>
          <ListGroup className="menu-setting">
            <Link to="/license">
              {" "}
              <ListGroup.Item
                className={isCurrentPathSettings("/license")}
                onClick={handleClose}
              >
                License
              </ListGroup.Item>
            </Link>
            <Link to="/practice">
              <ListGroup.Item
                className={isCurrentPathSettings("/practice")}
                onClick={handleClose}
              >
                Practice
              </ListGroup.Item>
            </Link>
            <Link to="/user-access">
              <ListGroup.Item
                className={isCurrentPathSettings("/user-access")}
                onClick={handleClose}
              >
                User Access
              </ListGroup.Item>
            </Link>
            <Link to="/email-preferences">
              <ListGroup.Item
                className={isCurrentPathSettings("/email-preferences")}
                onClick={handleClose}
              >
                Email Preferences
              </ListGroup.Item>
            </Link>
            <Link to="/configuration">
              <ListGroup.Item
                className={isCurrentPathSettings("/configuration")}
                onClick={handleClose}
              >
                Configuration
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Collapse>
        <ListGroup.Item className="menu-item">
          <MdOutlineSupportAgent />
          &nbsp; Support
        </ListGroup.Item>
        <Link to="/personal-details">
          <ListGroup.Item
            className={isCurrentPath("/personal-details")}
            onClick={handleClose}
          >
            <RiFolderUserLine />
            &nbsp; Profile
          </ListGroup.Item>
        </Link>
        <Link to="/login">
          <ListGroup.Item className="menu-item" onClick={handleClose}>
            <RiFolderUserLine />
            &nbsp; Login
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </SimpleBar>
  );
};

export default MenuItems;
