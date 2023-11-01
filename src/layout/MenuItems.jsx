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
        <Link to="/">
          <ListGroup.Item className={isCurrentPath("/")} onClick={handleClose}>
            <BsGrid1X2 />
            &nbsp; Dashboard
          </ListGroup.Item>
        </Link>
        <Link to="/open-return">
          <ListGroup.Item
            className={isCurrentPath("/open-return")}
            onClick={handleClose}
          >
            <BsFileBarGraph />
            &nbsp; Open Returns
          </ListGroup.Item>
        </Link>
        <Link to="/clients">
          <ListGroup.Item
            className={isCurrentPath("/clients")}
            onClick={handleClose}
          >
            <HiUserGroup />
            &nbsp; Clients
          </ListGroup.Item>
        </Link>
        <Link to="/sales">
          <ListGroup.Item
            className={isCurrentPath("/sales")}
            onClick={handleClose}
          >
            <ImFilesEmpty />
            &nbsp; Record Sales
          </ListGroup.Item>
        </Link>
        <Link to="/purchases">
          <ListGroup.Item
            className={isCurrentPath("/purchases")}
            onClick={handleClose}
          >
            <FaMoneyBillWave />
            &nbsp; Record Purchases
          </ListGroup.Item>
        </Link>
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
            <Link to="/licence">
              {" "}
              <ListGroup.Item
                className={isCurrentPathSettings("/licence")}
                onClick={handleClose}
              >
                Licence
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
            <Link to="/add-contact">
              <ListGroup.Item
                className={isCurrentPathSettings("/add-contact")}
                onClick={handleClose}
              >
                Add Contact
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Collapse>
        <Link to="/support">
          <ListGroup.Item
            className={isCurrentPath("/support")}
            onClick={handleClose}
          >
            <MdOutlineSupportAgent />
            &nbsp; Support
          </ListGroup.Item>
        </Link>
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
        <Link to="/terms-of-services">
          <ListGroup.Item
            className={isCurrentPath("/terms-of-services")}
            onClick={handleClose}
          >
            <RiFolderUserLine />
            &nbsp; Terms of Services
          </ListGroup.Item>
        </Link>
        <Link to="/business-detail">
          <ListGroup.Item
            className={isCurrentPath("/business-detail")}
            onClick={handleClose}
          >
            <RiFolderUserLine />
            &nbsp; Business Details
          </ListGroup.Item>
        </Link>
        <Link to="/HMRC-authenticate">
          <ListGroup.Item
            className={isCurrentPath("/HMRC-authenticate")}
            onClick={handleClose}
          >
            <div className="d-flex align-items-center">
              <div>
                <RiFolderUserLine />
                &nbsp;
              </div>
              <div> &nbsp;HMRC Authentication</div>
            </div>
          </ListGroup.Item>
        </Link>
        <Link to="/authentication-code">
          <ListGroup.Item
            className={isCurrentPath("/authentication-code")}
            onClick={handleClose}
          >
            <div className="d-flex align-items-center">
              <div>
                <RiFolderUserLine />
                &nbsp;
              </div>
              <div>&nbsp;Authentication Code</div>
            </div>
          </ListGroup.Item>
        </Link>
        <Link to="/vat-return">
          <ListGroup.Item
            className={isCurrentPath("/vat-return")}
            onClick={handleClose}
          >
            <RiFolderUserLine />
            &nbsp; VAT Return
          </ListGroup.Item>
        </Link>
      </ListGroup>
    </SimpleBar>
  );
};

export default MenuItems;
