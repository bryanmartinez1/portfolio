import React from "react";
import { useParams } from "react-router-dom";
import "./SpecificProject.css";
import projectsJSON from "../../../ProjectsJSON";
import empty_folder from "../../../Images/empty_folder.png";

export default function SpecificProject() {
  const { projectID } = useParams();

  return (
    <>
      {projectsJSON[projectID] ? (
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
            {projectsJSON[projectID].description.map((info, key) => (
              <>
                <l>{info}</l>
                {info instanceof String && <br />}
              </>
            ))}
          </ul>
          <br />
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
          <h2 className="secondHeading">Tools</h2>
          <ul className="unorderedList">
            {projectsJSON[projectID].toolsList.map((tool) => (
              <l>{tool}</l>
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
