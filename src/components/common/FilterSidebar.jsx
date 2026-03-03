import { useState } from "react";

function FilterSidebar({ filters, setFilters }) {

  const handleCheckbox = (type, value) => {
    setFilters((prev) => {
      const updated = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];

      return { ...prev, [type]: updated };
    });
  };

  const clearFilter = (type) => {
    setFilters((prev) => ({ ...prev, [type]: [] }));
  };

  return (
    <aside className="filters">

      {/* Property Type */}
      <div className="filter-box">
        <div className="filter-header green">
          <h3>Property Type</h3>
          <button onClick={() => clearFilter("type")} className="clear-btn">
            Clear
          </button>
        </div>
        <div className="filter-content">
          {["1 BHK", "2 BHK", "3 BHK", "Villas", "Plots"].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={filters.type.includes(item)}
                onChange={() => handleCheckbox("type", item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Facings */}
      <div className="filter-box">
        <div className="filter-header purple">
          <h3>Facings</h3>
          <button onClick={() => clearFilter("facing")} className="clear-btn">
            Clear
          </button>
        </div>
        <div className="filter-content">
          {["North", "East", "West", "South", "North-East", "North-West"].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={filters.facing.includes(item)}
                onChange={() => handleCheckbox("facing", item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Cities */}
      <div className="filter-box">
        <div className="filter-header blue">
          <h3>Cities</h3>
          <button onClick={() => clearFilter("city")} className="clear-btn">
            Clear
          </button>
        </div>
        <div className="filter-content">
          {["Hyderabad", "Bangalore", "Visakhapatnam", "Vizianagaram"].map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={filters.city.includes(item)}
                onChange={() => handleCheckbox("city", item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

    </aside>
  );
}

export default FilterSidebar;