import "./Card.css";
import { useNavigate } from "react-router-dom";

/*
    Props
        JSON INFO: name, tools, github, date, info, type, image
        ID
*/
export default function Card({ cardJSON, nightMode }) {
  const navigate = useNavigate();

  return (
    <div
      class={`card ${nightMode && "card-night"}`}
      onClick={() => navigate(`${cardJSON.index}`)}
    >
      <img className="cardIMG" src={cardJSON.image} alt="Avatar" />
      <div class="cardContainer">{cardJSON.name}</div>
    </div>
  );
}
