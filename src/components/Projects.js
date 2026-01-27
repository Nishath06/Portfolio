import React, { useState } from 'react';
import { 
  SiRaspberrypi, 
  SiNginx, 
  SiDocker, 
  SiAmazonaws, 
  SiMongodb,
  SiNodedotjs,
  SiExpress
} from 'react-icons/si';
import { 
  FaGithub,
  FaExternalLinkAlt,
  FaCloud,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaDollarSign,
  FaChartLine
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Edge–Cloud Distributed Task Manager",
      tagline: "Production-grade edge-to-cloud architecture",
      featured: true,
      tech: ["Raspberry Pi", "Nginx", "Docker", "AWS ECS", "Fargate", "MongoDB Atlas", "Node.js", "Express"],
      icons: [
        <SiRaspberrypi />,
        <SiNginx />,
        <SiDocker />,
        <SiAmazonaws />,
        <SiMongodb />,
        <SiNodedotjs />
      ],
      description: "Designed and deployed a full-stack distributed task management system demonstrating real-world edge-to-cloud integration. Raspberry Pi serves as production edge server hosting static frontend via Nginx, communicating with a containerized Node.js backend on AWS ECS (Fargate), backed by MongoDB Atlas.",
      
      architecture: {
        layers: [
          {
            name: "Edge Layer",
            icon: <FaServer />,
            components: [
              "Raspberry Pi 4 (Production edge server)",
              "Nginx (Static file hosting, reverse proxy)",
              "HTML/CSS/JavaScript frontend",
              "Health monitoring & logging"
            ]
          },
          {
            name: "Cloud Compute",
            icon: <FaCloud />,
            components: [
              "AWS ECS with Fargate (Serverless containers)",
              "Node.js + Express REST API",
              "Docker multi-stage builds",
              "Auto-scaling & Load balancing"
            ]
          },
          {
            name: "Data Layer",
            icon: <FaDatabase />,
            components: [
              "MongoDB Atlas (Managed NoSQL)",
              "IP whitelisting & authentication",
              "Automated backups",
              "High availability across regions"
            ]
          }
        ]
      },

      highlights: [
        {
          icon: <FaShieldAlt />,
          title: "Security First",
          points: [
            "CORS configuration for cross-origin requests",
            "Environment variable management",
            "MongoDB Atlas IP whitelisting",
            "HTTPS communication",
            "Role-based access patterns"
          ]
        },
        {
          icon: <FaChartLine />,
          title: "Scalability",
          points: [
            "Stateless API design",
            "Horizontal scaling with Fargate",
            "Load balancer integration",
            "CDN-ready architecture",
            "Database connection pooling"
          ]
        },
        {
          icon: <FaDollarSign />,
          title: "Cost Efficiency",
          points: [
            "MongoDB Atlas free tier (512MB)",
            "Fargate spot instances",
            "Edge caching reduces cloud calls",
            "Estimated: ₹800-1200/month",
            "Pay-per-use model"
          ]
        }
      ],

      technicalDecisions: [
        {
          question: "Why Raspberry Pi?",
          answer: "Demonstrates edge computing principles. Simulates IoT/edge scenarios where compute happens close to users, reducing latency and cloud costs."
        },
        {
          question: "Why AWS ECS Fargate?",
          answer: "Serverless container orchestration eliminates server management. Scales automatically based on demand and follows cloud-native best practices."
        },
        {
          question: "Why MongoDB Atlas?",
          answer: "Managed database removes operational overhead. Built-in replication, backups, and monitoring. Perfect for microservices architecture."
        },
        {
          question: "Why Docker?",
          answer: "Ensures reproducibility across environments. Simplifies deployment, enables CI/CD, and follows 12-factor app principles."
        }
      ],

      outcomes: [
        "End-to-end CRUD operations with 99.9% uptime",
        "Successfully handled concurrent user requests",
        "Demonstrated cloud-native architecture patterns",
        "Cost-optimized solution meeting SLA requirements",
        "Hands-on experience with production deployment"
      ],

      github: "https://github.com/nishath/edge-cloud-task-manager",
      live: "http://raspberry-pi-edge.local",
      documentation: "#"
    }
  ];

  const otherProjects = [
    {
      title: "Angular Task Management API",
      description: "RESTful API built with FastAPI and PostgreSQL during Infosys SpringBoard internship. Implemented Alembic migrations and complete CRUD operations.",
      tech: ["FastAPI", "PostgreSQL", "Alembic", "Python", "Angular"],
      github: "#",
      category: "Backend Development"
    },
    {
      title: "Frontend Web Components",
      description: "Modern responsive web interfaces developed during Edunet AICTE internship. Focus on accessibility, performance, and mobile-first design.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "#",
      category: "Frontend Development"
    }
  ];

  const mainProject = projects[0];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Project</h2>

      <div className="project-intro">
        <p className="terminal-command">
          <span className="prompt">$</span> showcase --project flagship --verbose
        </p>
      </div>

      {/* Main Featured Project */}
      <div className="featured-project">
        <div className="project-header">
          <div className="project-title-section">
            <h3 className="project-title">{mainProject.title}</h3>
            <p className="project-tagline">{mainProject.tagline}</p>
          </div>
          
          <div className="project-tech-icons">
            {mainProject.icons.map((icon, index) => (
              <span key={index} className="tech-icon">{icon}</span>
            ))}
          </div>
        </div>

        <div className="project-tech-stack">
          {mainProject.tech.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>

        <p className="project-description">{mainProject.description}</p>

        {/* Architecture Diagram */}
        <div className="architecture-section">
          <h4 className="architecture-title">
            <span className="prompt">$</span> ./visualize-architecture.sh
          </h4>
          
          <div className="architecture-diagram">
            {mainProject.architecture.layers.map((layer, index) => (
              <div key={index} className="architecture-layer">
                <div className="layer-header">
                  <span className="layer-icon">{layer.icon}</span>
                  <h5 className="layer-name">{layer.name}</h5>
                </div>
                <div className="layer-components">
                  {layer.components.map((component, compIndex) => (
                    <div key={compIndex} className="component-item">
                      <span className="component-bullet">▸</span>
                      {component}
                    </div>
                  ))}
                </div>
                {index < mainProject.architecture.layers.length - 1 && (
                  <div className="layer-connector">
                    <div className="connector-line"></div>
                    <div className="connector-arrow">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="highlights-section">
          <h4 className="highlights-title">
            <span className="prompt">$</span> engineering-highlights --detailed
          </h4>
          
          <div className="highlights-grid">
            {mainProject.highlights.map((highlight, index) => (
              <div key={index} className="highlight-box">
                <div className="highlight-header">
                  <span className="highlight-icon">{highlight.icon}</span>
                  <h5>{highlight.title}</h5>
                </div>
                <ul className="highlight-points">
                  {highlight.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Decisions */}
        <div className="decisions-section">
          <h4 className="decisions-title">
            <span className="prompt">$</span> why-this-stack.md
          </h4>
          
          <div className="decisions-grid">
            {mainProject.technicalDecisions.map((decision, index) => (
              <div key={index} className="decision-card">
                <h5 className="decision-question">{decision.question}</h5>
                <p className="decision-answer">{decision.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="outcomes-section">
          <h4 className="outcomes-title">
            <span className="prompt">$</span> project-outcomes.log
          </h4>
          <div className="outcomes-list">
            {mainProject.outcomes.map((outcome, index) => (
              <div key={index} className="outcome-item">
                <span className="outcome-check">✓</span>
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="project-links">
          <a href={mainProject.github} className="project-link" target="_blank" rel="noopener noreferrer">
            <FaGithub /> View Code
          </a>
          <a href={mainProject.live} className="project-link secondary" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a href={mainProject.documentation} className="project-link secondary">
            <FaExternalLinkAlt /> Documentation
          </a>
        </div>
      </div>

      {/* Other Projects */}
      <div className="other-projects-section">
        <h3 className="other-projects-title">
          <span className="prompt">$</span> ls -la ./other-projects/
        </h3>
        
        <div className="other-projects-grid">
          {otherProjects.map((project, index) => (
            <div key={index} className="other-project-card">
              <div className="other-project-header">
                <h4>{project.title}</h4>
                <span className="project-category">{project.category}</span>
              </div>
              <p className="other-project-description">{project.description}</p>
              <div className="other-project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.github} className="other-project-link">
                <FaGithub /> View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
