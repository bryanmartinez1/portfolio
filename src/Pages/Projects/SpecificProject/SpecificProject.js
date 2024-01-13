import React from "react";
import { useParams } from "react-router-dom";
import "./SpecificProject.css";
import projectsJSON from "../../../ProjectsJSON";

export default function SpecificProject() {
  const { projectID } = useParams();
  //    projectsJSON[projectID]

  return (
    <div className="specificProject">
      <h1>{projectsJSON[projectID].name}</h1>
      <img
        className="projectImage"
        src={projectsJSON[projectID].image}
        alt="Project"
      />
      <p>{projectsJSON[projectID].date}</p>
      <p className="type">{projectsJSON[projectID].type}</p>
      <h2 className="secondHeading">Description</h2>
      <ul className="unorderedList">
        {projectsJSON[projectID].other.map((info) => (
          <l>{info}</l>
        ))}
      </ul>
      <h2 className="secondHeading">Tools</h2>
      <ul className="unorderedList">
        {projectsJSON[projectID].toolsList.map((tool) => (
          <l>{tool}</l>
        ))}
      </ul>
      {projectsJSON[projectID].link.length ? (
        <>
          <h2 className="secondHeading">Links</h2>
          <ul className="unorderedList">
            {projectsJSON[projectID].link.map((specificLink) => (
              <a
                href={specificLink.href}
                target="_blank"
                className="anchor"
                rel="noreferrer"
              >
                {specificLink.name} <br />
              </a>
            ))}
          </ul>
        </>
      ) : (
        <></>
      )}
      <br />
    </div>
  );
}
