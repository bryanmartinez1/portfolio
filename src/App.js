import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import SpecificProject from "./Pages/Projects/SpecificProject/SpecificProject";

function App() {
  return (
    <div className="MyApp">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectID" element={<SpecificProject />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
