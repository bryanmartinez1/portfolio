import React from "react";
import "./Home.css";
import bryan from "../../Images/bryan.png";
import about from "../../AboutJSON.js";

export default function Home() {
  return (
    <div className="home">
      <img className="myPic" src={bryan} alt="Bryan" />
      <div className="about">
        <p>{about.info}</p>
      </div>
    </div>
  );
}
