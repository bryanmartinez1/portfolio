import React from "react";
import "./SortDrop.css";

const SortDrop = ({ onChange, nightMode }) => {
  const handleSortChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select
      className={`sortDropContainer ${nightMode && "sortDropContainerNight"}`}
      onChange={handleSortChange}
    >
      <option disabled selected value="">
        Sort By
      </option>
      <option value="None">Default</option>
      <option value="A-Z">A - Z</option>
      <option value="Z-A">Z - A</option>
    </select>
  );
};

export default SortDrop;
