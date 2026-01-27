import React from 'react';
import { FaBriefcase, FaCode, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Angular Developer Intern",
      company: "Infosys SpringBoard",
      type: "Internship",
      duration: "2024",
      icon: <FaCode />,
      description: "Developed RESTful APIs and backend systems using modern Python frameworks and database technologies.",
      responsibilities: [
        "Built RESTful APIs using FastAPI with PostgreSQL integration",
        "Implemented database migrations using Alembic for version control",
        "Designed and optimized database schemas for efficient data operations",
        "Developed complete CRUD operations with proper error handling",
        "Collaborated with frontend team for API integration",
        "Wrote API documentation and maintained code standards"
      ],
      technologies: ["FastAPI", "PostgreSQL", "Alembic", "Python", "Angular", "REST APIs"],
      achievements: [
        "Successfully delivered multiple API endpoints on schedule",
        "Improved query performance through database optimization",
        "Implemented secure authentication patterns"
      ]
    },
    {
      role: "Frontend Web Development Intern",
      company: "Edunet AICTE",
      type: "Internship",
      duration: "2023",
      icon: <FaGraduationCap />,
      description: "Focused on building responsive and accessible web interfaces following modern frontend development practices.",
      responsibilities: [
        "Developed responsive web interfaces using HTML5, CSS3, and JavaScript",
        "Implemented mobile-first design principles",
        "Ensured cross-browser compatibility and accessibility standards",
        "Optimized frontend performance and loading times",
        "Collaborated in agile development environment",
        "Maintained clean, maintainable code following best practices"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Accessibility"],
      achievements: [
        "Built multiple responsive web components",
        "Achieved 95+ Lighthouse performance scores",
        "Implemented WCAG 2.1 accessibility guidelines"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-intro">
        <p className="terminal-command">
          <span className="prompt">$</span> work-history --format detailed
        </p>
        <p className="experience-description">
          Hands-on internship experience in full-stack development, from backend API design 
          to frontend implementation. Focus on production-quality code and real-world problem solving.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="timeline-item"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-marker">
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-line"></div>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-meta">
                    <span className="experience-company">
                      <FaBriefcase /> {exp.company}
                    </span>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-section">
                <h4 className="experience-section-title">
                  <span className="prompt">$</span> responsibilities.log
                </h4>
                <ul className="experience-list">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-section">
                <h4 className="experience-section-title">
                  <span className="prompt">$</span> key-achievements.txt
                </h4>
                <div className="achievements-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="achievement-item">
                      <span className="achievement-check">✓</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="experience-technologies">
                <h4 className="tech-label">Technologies:</h4>
                <div className="tech-tags">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="experience-summary">
        <div className="summary-card">
          <h3 className="summary-title">
            <span className="prompt">$</span> professional-summary --key-takeaways
          </h3>
          <div className="summary-content">
            <div className="summary-item">
              <div className="summary-icon">💡</div>
              <div>
                <h4>Full-Stack Exposure</h4>
                <p>Experience across backend APIs, database design, and frontend interfaces</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🔧</div>
              <div>
                <h4>Production Mindset</h4>
                <p>Focus on code quality, performance optimization, and best practices</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🚀</div>
              <div>
                <h4>DevOps Ready</h4>
                <p>Understanding of the full development lifecycle from code to deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
