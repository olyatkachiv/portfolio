"use client"

import { useState } from "react"
import { Modal, Button, Carousel } from "react-bootstrap"
import { FullscreenImageViewer } from "./FullscreenImageViewer"

const ExternalLinkIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
)

const XIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
)

export const ProjectModal = ({ project, show, onHide }) => {
  const [fullscreenOpen, setFullscreenOpen] = useState(false)
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0)

  if (!project) return null

  const handleImageClick = (index) => {
    setFullscreenImageIndex(index)
    setFullscreenOpen(true)
  }

  const handleFullscreenClose = () => {
    setFullscreenOpen(false)
  }

  const handleFullscreenNavigate = (index) => {
    setFullscreenImageIndex(index)
  }

  const renderContent = (text) => {
    const paragraphs = text.split("\n\n")
    const elements = []
    let currentBullets = []

    paragraphs.forEach((paragraph, index) => {
      if (paragraph.startsWith("•")) {
        currentBullets.push(
          <li key={`bullet-${index}`} style={{ marginBottom: "8px", color: "#b8c5c9", lineHeight: "1.6" }}>
            {paragraph.substring(1).trim()}
          </li>,
        )
      } else {
        if (currentBullets.length > 0) {
          elements.push(
            <ul key={`list-${index}`} style={{ marginBottom: "20px", paddingLeft: "20px" }}>
              {currentBullets}
            </ul>,
          )
          currentBullets = []
        }

        elements.push(
          <p key={`para-${index}`} style={{ marginBottom: "15px" }}>
            {paragraph}
          </p>,
        )
      }
    })

    if (currentBullets.length > 0) {
      elements.push(
        <ul key="final-list" style={{ marginBottom: "20px", paddingLeft: "20px" }}>
          {currentBullets}
        </ul>,
      )
    }

    return elements
  }

  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" centered className="project-modal">
        <Modal.Header className="border-0">
          <Modal.Title>{project.title}</Modal.Title>
          <Button variant="link" onClick={onHide} className="close-btn">
            <XIcon size={24} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="project-modal-content">
            {project.screenshots && project.screenshots.length > 0 ? (
              <Carousel className="project-carousel">
                {project.screenshots.map((screenshot, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 clickable-image"
                      src={screenshot || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      onClick={() => handleImageClick(index)}
                      style={{ cursor: "pointer" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <img
                src={project.imgUrl || "/placeholder.svg"}
                alt={project.title}
                className="project-main-image clickable-image"
                onClick={() => handleImageClick(0)}
                style={{ cursor: "pointer" }}
              />
            )}

            <div className="project-details">
              <h5>About This Project</h5>
              <div>{renderContent(project.fullDescription)}</div>

              <h6>Technologies Used</h6>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.liveUrl && (
                  <Button variant="outline-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon size={18} className="me-2" />
                    {project.liveUrlLabel || "Live Demo"}
                  </Button>
                )}
                {project.additionalLinks &&
                  project.additionalLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline-primary"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon size={18} className="me-2" />
                      {link.label}
                    </Button>
                  ))}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <FullscreenImageViewer
        images={project.screenshots || [project.imgUrl]}
        currentIndex={fullscreenImageIndex}
        isOpen={fullscreenOpen}
        onClose={handleFullscreenClose}
        onNavigate={handleFullscreenNavigate}
      />
    </>
  )
}
