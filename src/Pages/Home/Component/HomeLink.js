import React from "react";
import "./HomeLink.css";
import { useNavigate } from "react-router-dom";

export default function HomeLink(props) {
  const navigate = useNavigate();
  return (
    <div
      className={`homeLink ${props.nightMode && "homeLinkNight"}`}
      onClick={() => navigate(props.href)}
    >
      {props.title}
    </div>
  );
}
