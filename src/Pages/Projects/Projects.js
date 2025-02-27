import React, { useState, useEffect } from "react";
import "./Projects.css";
import Card from "./Components/Card/Card";
import Searchbar from "./Components/Searchbar/Searchbar";
import SortDrop from "./Components/SortDrop/SortDrop";

export default function Projects({ nightMode }) {
  const [searchResult, setSearchResult] = useState(null);
  const [sort, setSort] = useState("None");
  const [projectsJSON, setProjectsJSON] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bryan-portfolio-storage.s3.us-east-2.amazonaws.com/projects.json"
        );
        const data = await response.json();
        setProjectsJSON(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching projects JSON:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (result) => {
    setSearchResult(result);
  };

  const changeSort = (newSort) => {
    setSort(newSort);
  };

  const filteredProjects = projectsJSON
    .filter((project) => {
      const matchesSearch =
        !searchResult || project.name.toLowerCase().includes(searchResult);

      return matchesSearch;
    })
    .sort((a, b) => {
      if (sort === "A-Z") return a.name.localeCompare(b.name);
      if (sort === "Z-A") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="projectsPage">
      <Searchbar onSearch={handleSearch} nightMode={nightMode} />

      <div className="sortAndFilter">
        <SortDrop onChange={changeSort} nightMode={nightMode} />
      </div>

      <div className="cardHolder">
        {filteredProjects.map((project, index) => (
          <Card key={index} cardJSON={project} nightMode={nightMode} />
        ))}
      </div>
    </div>
  );
}
