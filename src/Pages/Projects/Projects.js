import React, { useState } from "react";
import "./Projects.css";
import projectsJSON from "../../ProjectsJSON.js";
import Card from "./Components/Card/Card";
import Searchbar from "./Components/Searchbar/Searchbar";

export default function Projects() {
  const [searchResult, setSearchResult] = useState(null);

  // Callback function to receive the search result
  const handleSearch = (result) => {
    setSearchResult(result);
  };

  return (
    <div className="projectsPage">
      <Searchbar onSearch={handleSearch} />
      <div className="cardHolder">
        {projectsJSON
          .filter((project) =>
            searchResult
              ? project.name.toLowerCase().includes(searchResult)
              : true
          )
          .map((filteredProject, index) => (
            <Card key={index} cardJSON={filteredProject} />
          ))}
      </div>
    </div>
  );
}
