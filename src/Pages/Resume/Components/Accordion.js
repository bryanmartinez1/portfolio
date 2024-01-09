import React, { useState } from "react";
import "./Accordion.css";
import more from "../../../Images/more.png";
import less from "../../../Images/less.png";

export default function Accordion(props) {
  const [openAccordion, setAccordion] = useState(false);

  const toggleAccordion = () => {
    setAccordion(!openAccordion);
  };

  return (
    <div className="accordion" id={props.id}>
      <div className="title" onClick={toggleAccordion}>
        <img
          className={openAccordion ? "openAccordionImg" : "closeAccordionImg"}
          src={openAccordion ? less : more}
          alt="Open Close Accordion"
        />
        {props.innerheading ? <h4>{props.title}</h4> : <h2>{props.title}</h2>}
      </div>
      {openAccordion && <div className="content"> {props.content} </div>}
    </div>
  );
}
