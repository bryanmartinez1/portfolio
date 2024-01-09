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
      <h2 className="secondHeading">Tools</h2>
      <div className="descriptions">{projectsJSON[projectID].tools}</div>
      {projectsJSON[projectID].link.length ? (
        <>
          <h2 className="secondHeading">Links</h2>
          <ul>
            {projectsJSON[projectID].link.map((specificLink, index) => (
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
      <h2 className="secondHeading">Description</h2>
      {projectsJSON[projectID].info}
      {projectsJSON[projectID].preview && (
        <>
          <h2 className="secondHeading">Preview</h2>
          <img
            src={projectsJSON[projectID].preview}
            alt="preview"
            className="preview"
          />
        </>
      )}
    </div>
  );
}
