import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import SpecificProject from "./Pages/Projects/SpecificProject/SpecificProject";

function App() {
  const [nightMode, setNightMode] = useState(false);
  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };
  return (
    <div className={`MyApp ${nightMode && "MyAppNight"}`}>
      <Navbar nightMode={nightMode} toggleNightMode={toggleNightMode} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home nightMode={nightMode} />} />
          <Route path="/resume" element={<Resume nightMode={nightMode} />} />
          <Route
            path="/projects"
            element={<Projects nightMode={nightMode} />}
          />
          <Route
            path="/projects/:projectID"
            element={<SpecificProject nightMode={nightMode} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
