import React, { useState } from "react";
import "./NavbarDropdown.css";
import navbardropdown from "../../../Images/navbar_dropdown.png";
import navbardropdownwhite from "../../../Images/navbar_dropdown_white.png";
import { useNavigate } from "react-router-dom";

export default function NavbarDropdown({ nightMode }) {
  const [isNavbarDropdownOpen, setNavbarDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleNavbarDropdown = () => {
    setNavbarDropdown(!isNavbarDropdownOpen);
  };

  return (
    <div className="navbar-dropdown-container">
      <img
        className="three-lines"
        src={!nightMode ? navbardropdown : navbardropdownwhite}
        alt="Dropdown"
        onClick={toggleNavbarDropdown}
      />
      {isNavbarDropdownOpen && (
        <div
          className={`dropdown-content ${
            nightMode && "dropdown-content-night"
          }`}
        >
          <p onClick={() => navigate("/")}>About</p>
          <p onClick={() => navigate("/projects")}>Projects</p>
          <p onClick={() => navigate("/resume")}>Resume</p>
          <p
            onClick={() =>
              window.open("https://github.com/bryanmartinez1", "_blank")
            }
          >
            Github
          </p>
          <p
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/bryan-martinez-10a377221/",
                "_blank"
              )
            }
          >
            Linkedin
          </p>
        </div>
      )}
    </div>
  );
}
