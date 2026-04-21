import React from "react";
import projects from "../projectList";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div
      style={{
        background: "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
        minHeight: "100vh",
        padding: "40px"
      }}
    >
      <h1 className="text-center mb-5 text-black fw-bold">
         My Projects
      </h1>

      <div className="container">
        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-4" key={i}>
              
              <div
                className="card h-100 shadow-lg border-0"
                style={{
                  borderRadius: "15px",
                  transition: "0.3s",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="card-body text-center">
                  
                  <h5 className="card-title fw-bold">
                    {p.title}
                  </h5>

                  <h6 className="card-subtitle mb-3 text-muted">
                    {p.year}
                  </h6>

                  <Link
                    to={`/projects/${p.id}`}
                    className="btn btn-primary px-4"
                  >
                    View Details
                  </Link>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;