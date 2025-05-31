import { useState } from "react";
import "./Accordion.css";

export default function Accordion(props) {
  const [openAccordion, setAccordion] = useState(props.isOpen);

  const toggleAccordion = () => {
    setAccordion(!openAccordion);
  };

  return (
    <div className="accordion" id={props.id}>
      <div className="title" onClick={toggleAccordion}>
        <div className="openClose">{`${!openAccordion ? "+" : "-"}`}</div>
        {props.innerheading ? <h3>{props.title}</h3> : <h2>{props.title}</h2>}
      </div>
      {openAccordion && <div className="content"> {props.content} </div>}
      <br />
    </div>
  );
}
