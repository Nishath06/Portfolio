import React from 'react';
import { FaBriefcase, FaCode, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "DevOps Intern",
      company: "Shamgar Software Solutions",
      type: "Internship",
      duration: "Oct 2025 – Mar 2026",
      icon: <FaBriefcase />,
      description: "Engineered and deployed ML inference services and built cloud-native architectures.",
      responsibilities: [
        "Engineered and deployed ML inference services as production-ready APIs using FastAPI, enabling real-time prediction workflows.",
        "Designed and implemented a scalable data pipeline for BCI systems, handling data ingestion, processing, and storage.",
        "Deployed an AI-based agricultural application on AWS with a focus on scalability, availability, and performance optimization.",
        "Containerized applications using Docker and configured cloud infrastructure to support reliable deployments.",
        "Collaborated on building cloud-native architectures emphasizing scalability, monitoring, and maintainability."
      ],
      technologies: ["FastAPI", "AWS", "Docker", "CI/CD", "Cloud Infrastructure", "Python"],
      achievements: [
        "Deployed production-ready APIs for ML inference",
        "Built scalable data pipeline for BCI systems",
        "Implemented reliable application containerization"
      ]
    },
    {
      role: "Cloud Computing Intern",
      company: "Elevate Labs (Skill India)",
      type: "Internship",
      duration: "Oct 2025 – Dec 2025",
      icon: <FaBriefcase />,
      description: "Developed cloud-based systems and APIs, recognized as Best Performer India.",
      responsibilities: [
        "Developed a cloud-based file management system with secure upload, retrieval, and deletion features.",
        "Built REST APIs using Node.js and implemented JWT-based authentication and role-based access.",
        "Integrated MongoDB Atlas and deployed application with CI/CD and secure endpoints."
      ],
      technologies: ["Node.js", "MongoDB Atlas", "REST APIs", "JWT", "CI/CD", "Cloud Computing"],
      achievements: [
        "Achieved Best Performer recognition for outstanding contribution",
        "Developed secure cloud file management system",
        "Implemented comprehensive authentication system"
      ]
    },
    {
      role: "Angular Developer Intern",
      company: "Infosys Springboard",
      type: "Internship",
      duration: "Oct 2025 – Dec 2025",
      icon: <FaCode />,
      description: "Developed a civic issue reporting platform with scalable architecture and fast response times.",
      responsibilities: [
        "Developed civic issue reporting platform with real-time tracking and role-based dashboards.",
        "Built 8+ Angular components and integrated 15+ REST APIs, improving response time by 30%.",
        "Designed scalable database schema for users, complaints, and interactions."
      ],
      technologies: ["Angular", "REST APIs", "Database Design", "Frontend Development"],
      achievements: [
        "Improved API response time by 30%",
        "Built comprehensive role-based dashboards",
        "Designed scalable database architectures"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-intro">
        <p className="terminal-command">
          <span className="prompt">$</span> experience --impact-focused
        </p>
        <p className="experience-description">
          Hands-on DevOps experience building scalable systems and automating deployments.
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
                <h4>Scalable Systems</h4>
                <p>Designed architectures handling high traffic and auto-scaling</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🔧</div>
              <div>
                <h4>Automation Focus</h4>
                <p>Built CI/CD pipelines reducing manual errors by 80%</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-icon">🔒</div>
              <div>
                <h4>Security Integration</h4>
                <p>Implemented DevSecOps practices in all deployments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
