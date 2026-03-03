import { useState } from "react";
import { useLocation } from "react-router-dom";
import projects from "../data/projectsData";
import ProjectCard from "../components/common/ProjectCard";
import FilterSidebar from "../components/common/FilterSidebar";
import projectsHeroBg from "../assets/images/hero/projects-hero-bg.jpg";
import "../styles/project.css";

function Upcoming() {

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
  const upcomingProjects = projects
    .filter((p) => p.status === "upcoming")
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
      <h1>Upcoming Projects</h1>
      <p>
        Be the first to explore our future landmarks, where innovation meets visionary design.
      </p>
    </div>

    {/* CONTENT SECTION */}
    <div className="projects-page">
      <div className="projects-layout">

        {/* Sidebar Filters */}
        <FilterSidebar filters={filters} setFilters={setFilters} />

        {/* Projects Grid */}
        <div className="projects-list">
          {upcomingProjects.length > 0 ? (
            upcomingProjects.map((project) => (
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

export default Upcoming;