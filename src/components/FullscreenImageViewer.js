"use client"

import { useState, useEffect } from "react"

const ChevronLeftIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
)

const ChevronRightIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
)

const XIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
)

export const FullscreenImageViewer = ({ images, currentIndex, isOpen, onClose, onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex || 0)

  useEffect(() => {
    setCurrentImageIndex(currentIndex || 0)
  }, [currentIndex])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          handlePrevious()
          break
        case "ArrowRight":
          handleNext()
          break
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, currentImageIndex])

  const handlePrevious = () => {
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1
    setCurrentImageIndex(newIndex)
    onNavigate && onNavigate(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0
    setCurrentImageIndex(newIndex)
    onNavigate && onNavigate(newIndex)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen || !images || images.length === 0) return null

  return (
    <div className="fullscreen-viewer" onClick={handleBackdropClick}>
      <div className="fullscreen-viewer-content">
        <button className="fullscreen-close" onClick={onClose} aria-label="Close fullscreen viewer">
          <XIcon size={32} />
        </button>

        <div className="fullscreen-image-container">
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={`Fullscreen view ${currentImageIndex + 1}`}
            className="fullscreen-image"
          />
        </div>

        {images.length > 1 && (
          <>
            <button className="fullscreen-nav fullscreen-nav-prev" onClick={handlePrevious} aria-label="Previous image">
              <ChevronLeftIcon size={32} />
            </button>
            <button className="fullscreen-nav fullscreen-nav-next" onClick={handleNext} aria-label="Next image">
              <ChevronRightIcon size={32} />
            </button>
          </>
        )}

        <div className="fullscreen-counter">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}
