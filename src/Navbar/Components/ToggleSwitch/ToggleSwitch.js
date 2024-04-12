import React from "react";
import "./ToggleSwitch.css";
import lightModeIMG from "../../../Images/lightMode.png";
import nightModeIMG from "../../../Images/nightMode.png";

export default function ToggleSwitch({ nightMode, toggleNightMode }) {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onClick={toggleNightMode}
      />
      <label
        className={`react-switch-label ${
          nightMode && "react-switch-label-night"
        }`}
        htmlFor={`react-switch-new`}
      >
        <div
          className={`react-switch-button ${
            nightMode && "react-switch-button-night"
          }`}
        >
          <img
            src={nightMode ? nightModeIMG : lightModeIMG}
            className="modeButtonImage"
            alt="Night Mode Toggle Switch"
          />
        </div>
      </label>
    </>
  );
}

// Credit to James Dietrich
// https://upmostly.com/tutorials/build-a-react-switch-toggle-component
