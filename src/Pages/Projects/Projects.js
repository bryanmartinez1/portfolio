import React, { useState } from "react";
import "./Projects.css";
import projectsJSON from "../../Data/ProjectsJSON.js";
import Card from "./Components/Card/Card";
import Searchbar from "./Components/Searchbar/Searchbar";
import SortDrop from "./Components/SortDrop/SortDrop";
import Multiselect from "multiselect-react-dropdown";

export default function Projects({ nightMode }) {
  const [searchResult, setSearchResult] = useState(null);
  const [sort, setSort] = useState("None");
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedTool, setSelectedTool] = useState([]);
  const [selectedProjectType, setSelectedProjectType] = useState([]);

  // Callback function to receive the search result
  const handleSearch = (result) => {
    setSearchResult(result);
  };

  const changeSort = (newSort) => {
    setSort(newSort);
  };

  const langaugeFilter = [
    "Assembly",
    "C",
    "C++",
    "Java",
    "JavaScript",
    "Mips",
    "Python",
    "Rust",
    "TypeScript",
    "VHDL",
  ];

  const toolFilter = [
    "Back4App",
    "Electric",
    "Firebase",
    "LTSpice",
    "MatLab",
    "ModelSim",
    "React",
    "Youtube",
    "TikTok",
  ];

  const projectTypeFilter = ["Internship", "Personal", "School", "Work"];

  return (
    <div className="projectsPage">
      <Searchbar onSearch={handleSearch} nightMode={nightMode} />
      <div className="sortAndFilter">
        <SortDrop onChange={changeSort} nightMode={nightMode} />
        <Multiselect
          placeholder="Select Language"
          isObject={false}
          onRemove={(event) => {
            setSelectedLanguage(event);
          }}
          onSelect={(event) => {
            setSelectedLanguage(event);
          }}
          options={langaugeFilter}
          selectedValues={selectedLanguage}
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

        <Multiselect
          placeholder="Select Tool"
          isObject={false}
          onRemove={(event) => {
            setSelectedTool(event);
          }}
          onSelect={(event) => {
            setSelectedTool(event);
          }}
          options={toolFilter}
          selectedValues={selectedTool}
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

        <Multiselect
          placeholder="Select Project Type"
          isObject={false}
          onRemove={(event) => {
            setSelectedProjectType(event);
          }}
          onSelect={(event) => {
            setSelectedProjectType(event);
          }}
          options={projectTypeFilter}
          selectedValues={selectedProjectType}
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
        {projectsJSON
          .filter(
            (project) =>
              (!selectedLanguage.length ||
                selectedLanguage.some((lang) =>
                  project.toolsList.includes(lang)
                )) &&
              (!selectedTool.length ||
                project.toolsList.some((tool) =>
                  selectedTool.includes(tool)
                )) &&
              (!selectedProjectType.length ||
                selectedProjectType.includes(project.type)) &&
              (!searchResult ||
                project.name.toLowerCase().includes(searchResult) ||
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
                ))
          )
          .sort((a, b) => {
            if (sort === "A-Z") {
              return a.name.localeCompare(b.name);
            } else if (sort === "Z-A") {
              return b.name.localeCompare(a.name);
            }
            return 0;
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
