import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import githubImg from "../Images/github.png";
import linkedinImg from "../Images/linkedin.png";
import NavbarDropdown from "./Components/NavbarDropdown/NavbarDropdown";
import about from "../AboutJSON.js";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="name" onClick={() => navigate("/")}>
        {about.name}
      </div>
      {windowWidth >= 750 ? (
        <div className="links">
          <div className="wordLinks" onClick={() => navigate("/")}>
            About
          </div>
          <div className="wordLinks" onClick={() => navigate("/projects")}>
            Projects
          </div>
          <div className="wordLinks" onClick={() => navigate("/resume")}>
            Resume
          </div>
          <img
            className="imgLinks"
            src={githubImg}
            alt="Github"
            onClick={() =>
              window.open("https://github.com/bryanmartinez1", "_blank")
            }
          />
          <img
            className="imgLinks"
            src={linkedinImg}
            alt="Linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/bryan-martinez-10a377221/",
                "_blank"
              )
            }
          />
        </div>
      ) : (
        <NavbarDropdown />
      )}
    </div>
  );
}
