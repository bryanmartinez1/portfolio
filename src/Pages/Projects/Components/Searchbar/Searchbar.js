import { useEffect, useState } from "react";
import "./Searchbar.css";
import search_icon from "../../../../Images/search.png";
import search_icon_white from "../../../../Images/search_night.png";

export default function Searchbar({ onSearch, nightMode }) {
  const [search, setSearch] = useState("");
  function newSearch(event) {
    setSearch(document.getElementById("searchInput").value.toLowerCase());
  }

  useEffect(() => {
    onSearch(search);
  }, [search, onSearch]);

  return (
    <div className={`searchbar ${nightMode && "searchbar-night"}`}>
      <img
        className="searchIcon"
        src={!nightMode ? search_icon : search_icon_white}
        alt="Search"
      />
      <input
        className={`searchInput ${nightMode && "searchInput-night"}`}
        placeholder="Search Here"
        id="searchInput"
        onChange={(key) => newSearch(key)}
      />
    </div>
  );
}
