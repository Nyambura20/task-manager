import React from "react";

function Filter({ currentFilter, onFilterChange }) {
  return (
    <div className="filter">
      <button
        className={`filter-btn ${currentFilter === "all" ? "active" : ""}`}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className={`filter-btn ${
          currentFilter === "completed" ? "active" : ""
        }`}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
      <button
        className={`filter-btn ${
          currentFilter === "incomplete" ? "active" : ""
        }`}
        onClick={() => onFilterChange("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
}

export default Filter;
