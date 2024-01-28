import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import search_icon from "../../../../Images/search.png";

export default function Searchbar({ onSearch }) {
  const [search, setSearch] = useState("");
  function newSearch(event) {
    setSearch(document.getElementById("searchInput").value.toLowerCase());
  }

  useEffect(() => {
    onSearch(search);
    console.log(search);
  }, [search, onSearch]);

  return (
    <div className="searchbar">
      <img className="searchIcon" src={search_icon} alt="Search" />
      <input
        className="searchInput"
        placeholder="Search Here"
        id="searchInput"
        onChange={(key) => newSearch(key)}
      />
    </div>
  );
}
