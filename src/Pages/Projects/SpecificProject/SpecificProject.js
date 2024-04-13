import React from "react";
import { useParams } from "react-router-dom";
import "./SpecificProject.css";
import projectsJSON from "../../../Data/ProjectsJSON";
import empty_folder from "../../../Images/empty_folder.png";

export default function SpecificProject({ nightMode }) {
  const { projectID } = useParams();

  return (
    <>
      {projectsJSON[projectID] ? (
        <div className="specificProject">
          <h1>{projectsJSON[projectID].name}</h1>
          <img
            className={`projectImage ${
              nightMode &&
              projectsJSON[projectID].grayBackground &&
              "projectImageNight"
            }`}
            src={projectsJSON[projectID].image}
            alt="Project"
          />
          <p>{projectsJSON[projectID].date}</p>
          <p className="type">{projectsJSON[projectID].type}</p>
          <h2 className="secondHeading">Description</h2>
          <ul className="unorderedList">
            {projectsJSON[projectID].description.map((info, key) => (
              <li>{info}</li>
            ))}
          </ul>
          <br />
          {projectsJSON[projectID].link.length ? (
            <>
              <h2 className="secondHeading">Links</h2>
              <ul className="unorderedList">
                {projectsJSON[projectID].link.map((specificLink) => (
                  <li>
                    <a
                      href={specificLink.href}
                      target="_blank"
                      className="anchor"
                      rel="noreferrer"
                    >
                      {specificLink.name} <br />
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <></>
          )}
          <br />
          <h2 className="secondHeading">Tools</h2>
          <ul className="unorderedList">
            {projectsJSON[projectID].toolsList.map((tool) => (
              <li>{tool}</li>
            ))}
          </ul>
          <br />
        </div>
      ) : (
        <div className="page404">
          <div className="title404">404</div>
          <img className="folder_img" src={empty_folder} alt="Empty Folder" />
          <div className="text404">Project Not Found</div>
        </div>
      )}
    </>
  );
}
