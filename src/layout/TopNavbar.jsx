import React, { useState, useRef, useEffect, useContext } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import "../assets/scss/layout/topNavbar.scss";
import { BiSearch } from "react-icons/bi";
import { user } from "../assets/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import { MdNightlight, MdOutlineLightMode } from "react-icons/md";

const TopNavbar = ({ handleShow }) => {
  const { handleThemeChange } = useContext(ThemeContext);
  const [showUser, setShowUser] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const setFalseUserRef = useRef(null);
  const setFalseUserBoxRef = useRef(null);
  const setFalseSearchBarRef = useRef(null);
  const setFalseSearchBarBoxRef = useRef(null);
  const searchIconRef = useRef(null);

  const handleSearchIcon = () => {
    searchIconRef.current.focus();
  };

  const handleUserShow = () => setShowUser(!showUser);
  const handleShowSearchBar = () => setShowSearchBar(!showSearchBar);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        setFalseUserRef.current &&
        !setFalseUserRef.current.contains(event.target) &&
        setFalseUserBoxRef.current &&
        !setFalseUserBoxRef.current.contains(event.target)
      ) {
        setShowUser(false);
      }
      if (
        setFalseSearchBarRef.current &&
        !setFalseSearchBarRef.current.contains(event.target) &&
        setFalseSearchBarBoxRef.current &&
        !setFalseSearchBarBoxRef.current.contains(event.target)
      ) {
        setShowSearchBar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setFalseUserRef, setFalseSearchBarRef]);

  return (
    <Container fluid className="top-navbar">
      <div className="left">
        <div className="hamburger-icon" onClick={handleShow}>
          <GiHamburgerMenu />
        </div>
        <div
          className="search-icon-small-screen"
          ref={setFalseSearchBarRef}
          onClick={handleShowSearchBar}
        >
          <BiSearch />
        </div>
        <Form className="search-box">
          <Form.Control
            type="text"
            ref={searchIconRef}
            placeholder="Search..."
            className="search-input"
          />
          <div className="search-icon" onClick={handleSearchIcon}>
            <BiSearch />
          </div>
        </Form>
        {showSearchBar && (
          <Form className="search-box-sm" ref={setFalseSearchBarBoxRef}>
            <Form.Control
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </Form>
        )}
      </div>
      <div className="right">
        <div className="px-2" onClick={() => handleThemeChange("light")}>
          <MdOutlineLightMode role="button" />
        </div>
        <div className="px-2" onClick={() => handleThemeChange("dark")}>
          <MdNightlight role="button" />
        </div>{" "}
        <div className="top-nav-desc">
          Current Licence is for <span>100</span> clients and <span>250</span>{" "}
          users
        </div>
        <Link to="/licence">
          <Button className="upgrade-button">Upgrade Licence</Button>
        </Link>
        <Image
          className="userImage"
          src={user}
          alt="user"
          onClick={handleUserShow}
          ref={setFalseUserRef}
        />
        <div className="name-email">
          <div className="name">Mark John</div>
          <div className="email">markjohna@gmail.com</div>
        </div>
        {showUser && (
          <div className="dropdown-name-email" ref={setFalseUserBoxRef}>
            <div className="name">Mark John</div>
            <div className="email">markjohna@gmail.com</div>
            <div className="top-nav-desc-small">
              Current Licence is for <span>100</span> clients and{" "}
              <span>250</span> users
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default TopNavbar;
