import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../src/Picture/Logo stem png.png";
import { FaTimes, FaBars } from "react-icons/fa";
function Navbar() {
  const [hide, setHide] = useState(false);
  const ToggleClasslist = () => {
    setHide(!hide);
  };
  const classname = hide ? "show_navbar" : "";
  return (
    <div className="Navbar">
      <header>
        <nav>
          <img src={logo} alt="" />
          <ul>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to={"/course"} style={{ textDecoration: "none" }}>
              <li>Course</li>
            </Link>
            <Link to={"/staff"} style={{ textDecoration: "none" }}>
              <li> Staff </li>
            </Link>
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              <li> About </li>
            </Link>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              <li>Contact</li>
            </Link>
          </ul>
          <span>
            <FaBars onClick={ToggleClasslist} />
          </span>
        </nav>
      </header>
      <nav className={`hide_navbar ${classname}`}>
        <span>
          <FaTimes onClick={ToggleClasslist} />
        </span>
        <ul>
          <Link
            to={"/"}
            style={{ textDecoration: "none" }}
            onClick={ToggleClasslist}
          >
            <li>Home</li>
          </Link>
          <Link
            to={"/course"}
            style={{ textDecoration: "none" }}
            onClick={ToggleClasslist}
          >
            <li>Course</li>
          </Link>
          <Link
            to={"/staff"}
            style={{ textDecoration: "none" }}
            onClick={ToggleClasslist}
          >
            <li> Staff </li>
          </Link>
          <Link
            to={"/about"}
            style={{ textDecoration: "none" }}
            onClick={ToggleClasslist}
          >
            <li> About </li>
          </Link>
          <Link
            to={"/contact"}
            style={{ textDecoration: "none" }}
            onClick={ToggleClasslist}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
