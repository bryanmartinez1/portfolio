import React from "react";
import Accordion from "../../Components/Accordion";
import "./Resume.css";
import { resumeJSON } from "./resumeJSON";

export default function Resume({ nightMode }) {
  return (
    <div className="resumePage">
      <div className="navigation">
        <div
          className={`sectionLink ${nightMode && "sectionLinkNight"}`}
          href="#contact"
        >
          Contact
        </div>
        <div
          className={`sectionLink ${nightMode && "sectionLinkNight"}`}
          href="#education"
        >
          Education
        </div>
        <a
          className={`sectionLink ${nightMode && "sectionLinkNight"}`}
          href="#technicalSkills"
        >
          Techical Skills
        </a>
        <a
          className={`sectionLink ${nightMode && "sectionLinkNight"}`}
          href="#experience"
        >
          Experience
        </a>
        <a
          className={`sectionLink ${nightMode && "sectionLinkNight"}`}
          href="#technicalProjects"
        >
          Technical Projects
        </a>
        <button className="download">Download PDF Verison</button>
      </div>
      <Accordion
        id="contact"
        title="Contact"
        content={
          <ul>
            {resumeJSON.contact.map((item, index) => (
              <li index={index}>{item}</li>
            ))}
          </ul>
        }
      />
      <Accordion
        id="education"
        title="Education"
        content={
          <ul>
            {resumeJSON.education.map((item, index) => (
              <> {item}</>
            ))}
          </ul>
        }
      />
      <Accordion
        id="technicalSkills"
        title="Techical Skills"
        content={
          <ul>
            {resumeJSON.technicalSkills.map((item, index) => (
              <li index={index}>{item}</li>
            ))}
          </ul>
        }
      />
      <Accordion
        id="experience"
        title="Experience"
        content={
          <>
            {resumeJSON.experience.map((item, index) => (
              <>{item}</>
            ))}
          </>
        }
      />
      <Accordion
        id="technicalProjects"
        title="Techical Projects"
        content={
          <>
            {resumeJSON.technicalProjects.map((item) => (
              <>{item}</>
            ))}
          </>
        }
      />
    </div>
  );
}
