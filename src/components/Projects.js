"use client"

import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import { ProjectModal } from "./ProjectModal"

import nespressoImg from "../assets/img/CoverProjectNespresso.jpg"
import nespresso1 from "../assets/img/Nespresso-example1.jpg"
import nespresso2 from "../assets/img/Nespresso-example2.jpg"
import nespresso3 from "../assets/img/Nespresso-example3.jpg"
import nespresso4 from "../assets/img/Nespresso-example4.jpg"

import nhsImg from "../assets/img/CoverProjectNHS.jpg"
import nhs1 from "../assets/img/NHS-example1.jpg"
import nhs2 from "../assets/img/NHS-example2.jpg"
import nhs3 from "../assets/img/NHS-example3.jpg"
import nhs4 from "../assets/img/NHS-example4.jpg"
import nhs5 from "../assets/img/NHS-example5.jpg"

import customHubImg from "../assets/img/Custom-Hub-cover.jpg"
import ch1 from "../assets/img/CH-example1.jpg"
import ch2 from "../assets/img/CH-example2.jpg"
import ch3 from "../assets/img/CH-example3.jpg"

import flowersImg from "../assets/img/Flowers-Cover.jpg"
import flowers1 from "../assets/img/Flowers-example1.jpg"
import flowers2 from "../assets/img/Flowers-example2.jpg"

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform – Nespresso",
    description:
      "💻 I contributed to the development and continuous improvement of Nespresso's e-commerce experience for the Nordic market.",
    fullDescription:
      "I contributed to the development and continuous improvement of Nespresso's e-commerce experience for the Nordic market. My work focused on seasonal campaigns like Black Friday and Limited Editions, as well as platform-wide enhancements including a new homepage, coffee PLP, and a responsive header in collaboration with global HQ.\n\nKey contributions:\n\n• Building reusable front-end components for high-conversion campaigns\n\n• Optimizing mobile-first UX and cross-browser performance\n\n• Aligning closely with designers, marketers, and HQ to localize and scale efficiently\n\nThis project also required handling last-minute adjustments, multi-market rollout, and translating design systems into fast-loading, modular interfaces.",
    imgUrl: nespressoImg,
    technologies: ["JavaScript", "React", "Hybris", "GA4", "Jira", "Responsive UI"],
    liveUrl: "https://www.nespresso.com/se/en",
    liveUrlLabel: "Nespresso.se",
    screenshots: [nespressoImg, nespresso1, nespresso2, nespresso3, nespresso4],
  },
  {
    id: 2,
    title: "Global Web Redesign – Nestlé Health Science",
    description:
      "🏥 I worked as both a front-end developer and project coordinator on a large-scale redesign of 36 Nestlé Health Science websites worldwide.",
    fullDescription:
      'I worked as both a front-end developer and project coordinator on a large-scale redesign of 36 Nestlé Health Science websites worldwide. The goal was to modernize UX, improve SEO, and give editors more flexibility through a scalable CMS structure.\n\nKey responsibilities:\n\n• Building modular layouts in Drupal\n\n• Leading responsive refactoring and SEO structure improvements\n\n• Collaborating across Europe, Asia, MENA, and North America\n\n• Mentoring junior developers on HTML, CSS, and JS best practices\n\nTo support this role, I earned an internal Scrum Master accreditation, helping me lead agile sprints and cross-team coordination.\n\nI also introduced global CMS features like a "Hide in Listing" toggle, drag-and-drop ordering of content blocks, and custom filters — all later adopted across multiple markets to enhance editorial workflows.',
    imgUrl: nhsImg,
    technologies: [
      "Drupal",
      "JavaScript",
      "HTML/CSS",
      "SEO",
      "Agile Collaboration",
      "Scrum Master Accreditation",
      "CMS Tooling",
      "Multi-language UX",
      "Mentoring",
    ],
    liveUrl: "https://www.nestlehealthscience.com/",
    liveUrlLabel: "NestleHealthScience.com",
    screenshots: [nhsImg, nhs1, nhs2, nhs3, nhs4, nhs5],
  },
  {
    id: 3,
    title: "Custom Content Hubs – Nestlé Health Science",
    description:
      "🌐 I developed a series of fully custom websites from scratch for Nestlé Health Science — designed independently from the global design system.",
    fullDescription:
      "I developed a series of fully custom websites from scratch for Nestlé Health Science — designed independently from the global design system to serve local market needs.\n\nProjects included:\n\n• A recruitment portal for the Japanese market\n\n• A medical nutrition guide for the Polish market\n\n• A pediatric microsite (Resource Junior) also for the Polish market\n\nEach site was tailored to its audience, with responsive UX, custom layouts, and localized content structure. I collaborated closely with stakeholders throughout each build and also delivered similar content hubs for Germany, Singapore, and other countries.",
    imgUrl: customHubImg,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Localization",
      "UX Design",
      "Multi-Market Delivery",
      "Stakeholder Collaboration",
    ],
    liveUrl: "https://www.nestlehealthscience.jp/recruit",
    liveUrlLabel: "NHS Japan Recruitment",
    additionalLinks: [
      {
        url: "https://www.nestlehealthscience.pl/resource-junior/przepisy/zupa-z-dyni",
        label: "Resource Junior Poland",
      },
      {
        url: "https://www.nestlehealthscience.pl/poradnik-zywienia-medycznego",
        label: "Medical Nutrition Guide",
      },
    ],
    screenshots: [customHubImg, ch1, ch2, ch3],
  },
  {
    id: 4,
    title: "Boutique E-Commerce Site – No Reason Flowers",
    description: "💐 I was fully responsible for front-end development on this elegant, boutique e-commerce site.",
    fullDescription:
      "I was fully responsible for front-end development on this elegant, boutique e-commerce site. Every element — from product cards to animations — was hand-coded for a soft, modern shopping experience.\n\nBuilt from scratch in collaboration with a back-end developer, I translated Figma designs into a responsive, performant interface without using any pre-made themes or plugins. This project combined creative freedom with technical precision and gave me full ownership of the UI build.",
    imgUrl: flowersImg,
    technologies: ["WordPress", "HTML", "CSS", "JavaScript", "UI Animation", "End-to-End Front-End Ownership"],
    liveUrl: "https://noreasonflowers.com/",
    liveUrlLabel: "NoReasonFlowers.com",
    screenshots: [flowersImg, flowers1, flowers2],
  },
]

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedProject(null)
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Featured Projects</h2>
              <p>
                A showcase of my recent work and personal projects that demonstrate my skills in frontend development
                and problem-solving.
              </p>
              <Row className="projects-grid">
                {projectsData.map((project) => (
                  <ProjectCard key={project.id} project={project} onClick={() => handleProjectClick(project)} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <ProjectModal project={selectedProject} show={showModal} onHide={handleCloseModal} />
    </section>
  )
}
