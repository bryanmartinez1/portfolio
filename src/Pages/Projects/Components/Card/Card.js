import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

/*
    Props
        JSON INFO: name, tools, github, date, info, type, image
        ID
*/
export default function Card(props) {
  const navigate = useNavigate();

  return (
    <div
      class={`card ${props.nightMode && "card-night"}`}
      onClick={() => navigate(`${props.index}`)}
    >
      <img className="cardIMG" src={props.cardJSON.image} alt="Avatar" />
      <div class="cardContainer">{props.cardJSON.name}</div>
    </div>
  );
}
