import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import "../assets/scss/layout/layout.scss";
import SmallScreenSidebar from "./SmallScreenSidebar";
import TopNavbar from "./TopNavbar";

const Layout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <div className="wrapper">
        <div className="left-sidebar-menu">
          <LeftSidebar />
          <SmallScreenSidebar show={show} handleClose={handleClose} />
        </div>
        <div className="content-page">
          <TopNavbar handleShow={handleShow} />
          <div className="margin-top-70px padding-20px">
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
