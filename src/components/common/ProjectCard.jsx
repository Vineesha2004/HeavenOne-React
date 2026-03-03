import {
  FaMapMarkerAlt,
  FaBuilding,
  FaLayerGroup,
  FaCheckCircle
} from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      {/* IMAGE SECTION */}
      <div className="card-image">
        <img src={project.image} alt={project.title} />

        <div className="price-badge">
          FROM ₹ {project.price} / Sq.Ft
        </div>
      </div>

      {/* BODY */}
      <div className="card-body">

        <h2 className="project-title">{project.title}</h2>

        <p className="project-location">
          <FaMapMarkerAlt />
          {project.city}, Telangana
        </p>

        {/* META BOX */}
        <div className="meta-box">
          <div className="meta-item">
            <FaLayerGroup />
            <div>
              <strong>Floors: {project.floors}+</strong>
              <span>Total</span>
            </div>
          </div>

          <div className="divider"></div>

          <div className="meta-item">
            <FaBuilding />
            <div>
              <strong>Units: {project.units}+</strong>
              <span>Residential</span>
            </div>
          </div>
        </div>

        {/* AVAILABILITY */}
        <div className="availability-section">
          <p className="availability-title">CURRENT AVAILABILITY</p>

          <div className="availability-items">
            <span><FaCheckCircle /> 2 BHK Available</span>
            <span><FaCheckCircle /> 3 BHK Available</span>
          </div>
        </div>

        <button className="btn-premium">Know More</button>

      </div>
    </div>
  );
}

export default ProjectCard;