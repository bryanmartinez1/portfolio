import React, { useState } from "react";
import "./Projects.css";
import projectsJSON from "../../Data/ProjectsJSON.js";
import Card from "./Components/Card/Card";
import Searchbar from "./Components/Searchbar/Searchbar";
import SortDrop from "./Components/SortDrop/SortDrop";

export default function Projects({ nightMode }) {
  const [searchResult, setSearchResult] = useState(null);
  const [sort, setSort] = useState("None");

  // Callback function to receive the search result
  const handleSearch = (result) => {
    setSearchResult(result);
  };

  const changeSort = (newSort) => {
    setSort(newSort);
  };

  return (
    <div className="projectsPage">
      <Searchbar onSearch={handleSearch} nightMode={nightMode} />
      <div className="sortAndFilter">
        <SortDrop onChange={changeSort} nightMode={nightMode} />
      </div>
      <div className="cardHolder">
        {projectsJSON
          .filter((project) =>
            searchResult
              ? project.name.toLowerCase().includes(searchResult) ||
                project.type.toLowerCase().includes(searchResult) ||
                project.toolsList.some(
                  (tool) =>
                    typeof tool === "string" &&
                    tool.toLowerCase().includes(searchResult)
                ) ||
                project.description.some(
                  (desc) =>
                    typeof desc === "string" &&
                    desc.toLowerCase().includes(searchResult)
                )
              : true
          )
          .sort((a, b) => {
            if (sort === "A-Z") {
              return a.name.localeCompare(b.name);
            } else if (sort === "Z-A") {
              return b.name.localeCompare(a.name);
            }
            return 0; // No sorting needed
          })
          .map((filteredProject, index) => (
            <Card
              key={index}
              index={index}
              cardJSON={filteredProject}
              nightMode={nightMode}
            />
          ))}
      </div>
    </div>
  );
}
