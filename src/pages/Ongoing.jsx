import { useState } from "react";
import { useLocation } from "react-router-dom";
import projects from "../data/projectsData";
import ProjectCard from "../components/common/ProjectCard";
import FilterSidebar from "../components/common/FilterSidebar";
import projectsHeroBg from "../assets/images/hero/projects-hero-bg.jpg";
import "../styles/project.css";

function Ongoing() {

  // 🔥 Receive data from Home search
  const location = useLocation();
  const searchData = location.state || {};

  // 🔥 Initialize filters using search data
  const [filters, setFilters] = useState({
    type: searchData.type ? [searchData.type] : [],
    facing: [],
    city: searchData.city ? [searchData.city] : []
  });

  // 🔥 Filtering logic
  const ongoingProjects = projects
    .filter((p) => p.status === "ongoing")
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
      <h1>Ongoing Projects</h1>
      <p>
        Discover our ongoing developments progressing steadily towards completion.
      </p>
    </div>

    {/* CONTENT WRAPPER */}
    <div className="projects-page">
      <div className="projects-layout">

        <FilterSidebar filters={filters} setFilters={setFilters} />

        <div className="projects-list">
          {ongoingProjects.length > 0 ? (
            ongoingProjects.map((project) => (
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

export default Ongoing;