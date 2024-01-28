import React from "react";
import "./Home.css";
import bryan from "../../Images/bryan.png";
import about from "../../AboutJSON.js";
import HomeLink from "./Component/HomeLink.js";

export default function Home() {
  return (
    <div className="home">
      <div className="info">
        <img className="myPic" src={bryan} alt="Bryan" />
        <div className="about">
          <p>{about.info}</p>
        </div>
      </div>
      <HomeLink title="Resume" href="/resume" />
      <HomeLink title="Projects" href="/projects" />
      <HomeLink title="Atlassian SWE New Grad" href="/projects/12" />
      <HomeLink title="Atlassian SWE Internship" href="/projects/4" />
      <HomeLink title="Google STEP Internship" href="/projects/5" />
      <HomeLink title="CCNY Courses" href="/projects/11" />
      <HomeLink title="Inclusify" href="/projects/0" />
    </div>
  );
}
