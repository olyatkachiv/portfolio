"use client"

import { Col } from "react-bootstrap"

const ExternalLinkIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
)

export const ProjectCard = ({ project, onClick }) => {
  return (
    <Col xs={12} md={6} className="project-card-col">
      <div className="proj-imgbx" onClick={onClick}>
        <img src={project.imgUrl || "/placeholder.svg"} alt={project.title} />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
          <div className="project-tech">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && <span className="tech-tag">+{project.technologies.length - 3}</span>}
          </div>
          <div className="project-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="View Live Demo"
              >
                <ExternalLinkIcon size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  )
}
