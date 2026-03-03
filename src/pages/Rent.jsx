import { useState } from "react";
import rentProperties from "../data/rentData";
import RentCard from "../components/common/RentCard";
import "../styles/rent.css";

function Rent() {

  const [filters, setFilters] = useState({
    type: [],
    facing: [],
    city: []
  });

  const handleCheckbox = (category, value) => {
    setFilters(prev => {
      const updated = prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value];

      return { ...prev, [category]: updated };
    });
  };

  const clearCategory = (category) => {
    setFilters(prev => ({ ...prev, [category]: [] }));
  };

  const filteredProperties = rentProperties.filter(property =>
    (filters.type.length === 0 || filters.type.includes(property.type)) &&
    (filters.facing.length === 0 || filters.facing.includes(property.facing)) &&
    (filters.city.length === 0 || filters.city.includes(property.city))
  );

  return (
    <>
      {/* HERO */}
      <section className="rent-hero">
        <div className="rent-overlay">
          <h1>Find Your Perfect Rental Home</h1>
          <p>Fully furnished, semi-furnished & premium rental properties</p>
        </div>
      </section>

      {/* RENT SECTION */}
      <section className="rent-section">
        <div className="container rent-layout">

          {/* FILTERS */}
          <aside className="rent-filters">

            {/* Property Type */}
            <div className="filter-card type-card">
              <div className="filter-header">
                <h3>Property Type</h3>
                <button onClick={() => clearCategory("type")} className="clear-btn">
                  Clear
                </button>
              </div>
              <div className="filter-body">
                {[ "1BHK","2BHK", "3BHK", "Villa" , "Independent House"].map(item => (
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

            {/* Facing */}
            <div className="filter-card facing-card">
              <div className="filter-header">
                <h3>Facings</h3>
                <button onClick={() => clearCategory("facing")} className="clear-btn">
                  Clear
                </button>
              </div>
              <div className="filter-body">
                {["North", "East", "West" , "South", "North-East"].map(item => (
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

            {/* City */}
            <div className="filter-card city-card">
              <div className="filter-header">
                <h3>Cities</h3>
                <button onClick={() => clearCategory("city")} className="clear-btn">
                  Clear
                </button>
              </div>
              <div className="filter-body">
                {["Hyderabad", "Visakhapatnam", "Bangalore" , "Vizianagaram"].map(item => (
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

          {/* PROPERTIES */}
          <div className="rent-properties">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <RentCard key={property.id} property={property} />
              ))
            ) : (
              <p className="no-result">No properties found.</p>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

export default Rent;