import { useState } from "react";
import { useLocation } from "react-router-dom";
import projects from "../data/projectsData";
import ProjectCard from "../components/common/ProjectCard";
import FilterSidebar from "../components/common/FilterSidebar";
import projectsHeroBg from "../assets/images/hero/projects-hero-bg.jpg";

import "../styles/project.css";

function Completed() {

  // 🔥 Receive search data from Home
  const location = useLocation();
  const searchData = location.state || {};

  // 🔥 Initialize filters using search data
  const [filters, setFilters] = useState({
    type: searchData.type ? [searchData.type] : [],
    facing: [],
    city: searchData.city ? [searchData.city] : []
  });

  // 🔥 Filtering logic
  const completedProjects = projects
    .filter((p) => p.status === "completed")
    .filter((p) =>
      (filters.type.length === 0 ||
        filters.type.some(type => p.type?.includes(type))
      ) &&
      (filters.facing.length === 0 || filters.facing.includes(p.facing)) &&
      (filters.city.length === 0 || filters.city.includes(p.city))
    );
return (
  <>
    {/* FULL WIDTH HERO */}
    <div
      className="projects-hero"
      style={{ backgroundImage: `url(${projectsHeroBg})` }}
    >
      <h1>Completed Projects</h1>
      <p>
        A showcase of our successfully delivered projects that stand as a testament to our quality and trust.
      </p>
    </div>

    {/* CONTENT SECTION */}
    <div className="projects-page">
      <div className="projects-layout">

        {/* Sidebar Filters */}
        <FilterSidebar filters={filters} setFilters={setFilters} />

        {/* Projects Grid */}
        <div className="projects-list">
          {completedProjects.length > 0 ? (
            completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="no-results">No projects found.</p>
          )}
        </div>

      </div>
    </div>
  </>
);
}

export default Completed;