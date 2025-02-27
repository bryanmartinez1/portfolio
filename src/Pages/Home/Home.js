import React from "react";
import "./Home.css";
import bryan from "../../Images/bryan.png";
import about from "../../Data/AboutJSON.js";
import HomeLink from "./Component/HomeLink.js";

export default function Home({ nightMode }) {
  return (
    <div className="home">
      <div className="info">
        <img className="myPic" src={bryan} alt="Bryan" />
        <div className="about">{about.info}</div>
      </div>
      <div className="linksDiv">
        <HomeLink title="Resume" href="/resume" nightMode={nightMode} />
        <HomeLink title="Projects" href="/projects" nightMode={nightMode} />
        <HomeLink
          title="Atlassian SWE New Grad"
          href="/projects/atlassian_software_engineer"
          nightMode={nightMode}
        />
        <HomeLink
          title="Atlassian SWE Internship"
          href="/projects/atlassian-swe-intern"
          nightMode={nightMode}
        />
        <HomeLink
          title="Google STEP Internship"
          href="/projects/google-step-intern"
          nightMode={nightMode}
        />
        <HomeLink
          title="Inclusify"
          href="/projects/inclusify"
          nightMode={nightMode}
        />
      </div>
    </div>
  );
}
