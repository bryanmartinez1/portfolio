import "./Card.css";
import { useNavigate } from "react-router-dom";

export default function Card({ cardJSON, nightMode }) {
  const navigate = useNavigate();

  return (
    <div
      class={`card ${nightMode && "card-night"}`}
      onClick={() => navigate(`${cardJSON.alias}`)}
    >
      <img className="cardIMG" src={cardJSON.image} alt="Avatar" />
      <div class="cardContainer">{cardJSON.name}</div>
    </div>
  );
}
