import { useState, useEffect } from "react";
import "./Projects.css";
import Card from "./Components/Card/Card";
import Searchbar from "./Components/Searchbar/Searchbar";
import SortDrop from "./Components/SortDrop/SortDrop";
import Multiselect from "multiselect-react-dropdown";

export default function Projects({ nightMode }) {
  const [searchResult, setSearchResult] = useState(null);
  const [sort, setSort] = useState("None");
  const [projectsJSON, setProjectsJSON] = useState([]);
  const [techStackOptions, setTechStackOptions] = useState([]);
  const [selectedTechStack, setSelectedTechStack] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bryan-portfolio-storage.s3.us-east-2.amazonaws.com/projects.json"
        );
        const data = await response.json();
        setProjectsJSON(data);

        setTechStackOptions(getTechStackOptions(data));
      } catch (error) {
        console.error("Error fetching projects JSON:", error);
      }
    };

    fetchData();
  }, []);

  const getTechStackOptions = (projects) => {
    const set = new Set();

    projects.forEach((p) => {
      if (Array.isArray(p.tech_stack)) {
        p.tech_stack.forEach((tech) => set.add(tech));
      }
    });

    return Array.from(set);
  };

  const handleSearch = (result) => {
    setSearchResult(result);
  };

  const changeSort = (newSort) => {
    setSort(newSort);
  };

  const filteredProjects = projectsJSON
    .filter((project) => {
      const matchesSearch =
        !searchResult ||
        project.name.toLowerCase().includes(searchResult.toLowerCase());

      const matchesTech =
        selectedTechStack.length === 0 ||
        (Array.isArray(project.tech_stack) &&
          selectedTechStack.some((tech) => project.tech_stack.includes(tech)));

      return matchesSearch && matchesTech;
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
        <Multiselect
          placeholder="Language"
          isObject={false}
          onRemove={(event) => {
            setSelectedTechStack(event);
          }}
          onSelect={(event) => {
            setSelectedTechStack(event);
          }}
          options={techStackOptions}
          selectedValues={selectedTechStack}
          showCheckbox
          hideSelectedList
          style={{
            multiselectContainer: {
              width: "200px",
              height: "50px",
              backgroundColor: `${nightMode ? "#141414" : "whitesmoke"}`,
            },
            searchBox: {
              width: "200px",
              height: "50px",
            },
            optionContainer: {
              backgroundColor: `${nightMode ? "#141414" : "whitesmoke"}`,
            },
            inputField: {
              width: "190px",
              height: "35px",
              color: `${nightMode ? "whitesmoke" : "#141414"}`,
              fontSize: "20px",
              overflow: "hidden",
            },
          }}
        />
      </div>

      <div className="cardHolder">
        {filteredProjects
          .filter((project) => !project.is_hidden)
          .map((project, index) => (
            <Card key={index} cardJSON={project} nightMode={nightMode} />
          ))}
      </div>
    </div>
  );
}
