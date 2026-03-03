import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <header className="header">
      <div className="container navbar">

        {/* LOGO */}
        <div className="logo">
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none" }}
            onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}
          >
            HeavenOne
          </Link>
        </div>

        {/* HAMBURGER */}
        <div
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(prev => !prev);
          }}
        >
          ☰
        </div>

        {/* NAVIGATION */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>

          <Link
            to="/"
            onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}
          >
            Home
          </Link>

          <Link
            to="/"
            state={{ scrollTo: "about" }}
            onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}
          >
            About
          </Link>

          {/* PROJECTS DROPDOWN */}
          <div className="dropdown">
            <span
              className="dropdown-btn"
              onClick={() => {
                setProjectOpen(prev => !prev);
              }}
            >
              Projects ▾
            </span>

            <div className={`dropdown-menu ${projectOpen ? "show" : ""}`}>
              <Link
                to="/ongoing"
                onClick={() => {
                  setMenuOpen(false);
                  setProjectOpen(false);
                }}
              >
                Ongoing
              </Link>

              <Link
                to="/upcoming"
                onClick={() => {
                  setMenuOpen(false);
                  setProjectOpen(false);
                }}
              >
                Upcoming
              </Link>

              <Link
                to="/completed"
                onClick={() => {
                  setMenuOpen(false);
                  setProjectOpen(false);
                }}
              >
                Completed
              </Link>
            </div>
          </div>

          <Link
            to="/gallery"
            onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            onClick={() => {
              setMenuOpen(false);
              setProjectOpen(false);
            }}
          >
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Header;