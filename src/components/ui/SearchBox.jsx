"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  return (
    <div className="group">
      <div className="search-box">
        <FaSearch className="search-icon" size={18} />
        <input
          type="search"
          placeholder="Search courses, students..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
