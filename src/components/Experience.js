import { Container, Row, Col } from "react-bootstrap"

const CalendarIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
)

const MapPinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
)

const experienceData = [
  {
    company: "Nespresso Nordic",
    role: "Front-End Developer",
    period: "Aug 2024 - Present",
    location: "Copenhagen, Denmark",
    tasks: [
      "Built custom web components for product launches and campaigns like Black Friday and Summer Editions",
      "Enhanced UI responsiveness and performance across Nordic eCommerce platforms",
      "Collaborated closely with marketing, IT, and design to ensure consistent branding",
      "Integrated GA4 tracking and supported performance analysis across digital campaigns",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Hybris", "GA4", "Jira", "Confluence"],
  },
  {
    company: "Nestlé Health Science",
    role: "Web Developer & Project Manager",
    period: "Jul 2021 - Jul 2024",
    location: "Lviv, Ukraine / Lodz, Poland",
    tasks: [
      "Supervised the redesign and development of 36 corporate websites across multiple regions",
      "Led content automation and CMS enhancements to streamline digital operations",
      "Coordinated deliverables between IT, marketing, and external agencies",
      "Collaborated directly with stakeholders across all markets to align technical execution with business goals",
      "Mentored new team members and improved onboarding processes",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Drupal", "Jira"],
  },
  {
    company: "SoftSprint",
    role: "Full-Stack Developer",
    period: "Oct 2020 - Jul 2021",
    location: "Lviv, Ukraine",
    tasks: [
      "Created and maintained custom WordPress themes and plugins for eCommerce clients",
      "Delivered full-stack enhancements that improved site speed, SEO, and user engagement",
      "Developed backend features and CMS tools to support client-specific requirements",
      "Worked directly with clients to translate business needs into scalable technical solutions",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "jQuery", "WordPress", "SCSS", "Git"],
  },
]

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Professional Experience</h2>
              <p>My journey in frontend development and project management</p>
              <div className="experience-timeline">
                {experienceData.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-content">
                      <div className="experience-header">
                        <h3 className="role-title">{exp.role}</h3>
                        <div className="experience-meta">
                          <span className="period">
                            <CalendarIcon size={16} />
                            {exp.period}
                          </span>
                          <span className="location">
                            <MapPinIcon size={16} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <h4 className="company-name">{exp.company}</h4>
                      <ul className="achievements">
                        {exp.tasks.map((task, idx) => (
                          <li key={idx}>{task}</li>
                        ))}
                      </ul>
                      <div className="tech-stack">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
