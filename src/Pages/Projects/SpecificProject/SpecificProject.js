import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SpecificProject.css";
import empty_folder from "../../../Images/empty_folder.png";

export default function SpecificProject({ nightMode }) {
  const { alias } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://bryan-portfolio-storage.s3.us-east-2.amazonaws.com/project/${alias}.json`
        );

        const data = await response.json();
        setProject(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects JSON:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [alias]);

  if (isLoading) {
    return <></>;
  }

  if (!project) {
    return (
      <div className="page404">
        <div className="title404">404</div>
        <img className="folder_img" src={empty_folder} alt="Empty Folder" />
        <div className="text404">Project Not Found</div>
      </div>
    );
  }

  return (
    <section className="specificProject">
      <h1>{project.name}</h1>
      <img
        className={`projectImage ${
          nightMode && project.grayBackground ? "projectImageNight" : ""
        }`}
        src={project.image}
        alt="Project"
      />
      <p>{project.date}</p>
      <p className="type">{project.type}</p>

      {project.description.length > 0 && (
        <>
          <h2 className="secondHeading">Description</h2>
          <ul className="unorderedList">
            {project.description.map((info, key) => (
              <li key={key}>{info}</li>
            ))}
          </ul>
        </>
      )}

      {project.link.length > 0 && (
        <>
          <h2 className="secondHeading">Links</h2>
          <ul className="unorderedList">
            {project.link.map((specificLink, index) => (
              <li key={index}>
                <a
                  href={specificLink.href}
                  target="_blank"
                  className="anchor"
                  rel="noreferrer"
                >
                  {specificLink.name}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {project.toolsList.length > 0 && (
        <>
          <h2 className="secondHeading">Tools</h2>
          <ul className="unorderedList">
            {project.toolsList.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
