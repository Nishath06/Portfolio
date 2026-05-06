import React from 'react';
import { 
  SiAmazonaws, 
  SiDocker
} from 'react-icons/si';
import { 
  FaGithub,
  FaExternalLinkAlt,
  FaCloud,
  FaShieldAlt,
  FaDollarSign,
  FaChartLine,
  FaCogs
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "End-to-End DevSecOps Pipeline on AWS",
      tagline: "DevSecOps pipeline with security scanning and container orchestration",
      featured: true,
      tech: ["Jenkins", "EKS", "Docker", "Trivy", "SonarQube"],
      icons: [
        <SiAmazonaws />,
        <SiDocker />,
        <SiAmazonaws />,
        <SiAmazonaws />,
        <SiAmazonaws />
      ],
      description: "Designed and implemented a CI/CD pipeline automating build, test, security scanning, and deployment workflows with Trivy and SonarQube quality gates.",
      
      caseStudy: {
        problem: "Need for automated deployment workflows and reliable security scanning.",
        solution: "Implemented automated DevSecOps pipeline with security scanning and container orchestration.",
        tools: "Jenkins, EKS, Docker, Trivy, SonarQube",
        impact: "Integrated vulnerability detection, enforced quality gates, and scalable Kubernetes-based deployments."
      },

      architecture: {
        layers: [
          {
            name: "CI/CD Pipeline",
            icon: <FaCogs />,
            components: [
              "Jenkins: Orchestration and automation",
              "GitHub Actions: Additional CI workflows",
              "AWS CodePipeline: Cloud-native CI/CD"
            ]
          },
          {
            name: "Security Layer",
            icon: <FaShieldAlt />,
            components: [
              "Trivy: Container vulnerability scanning",
              "SonarQube: Code quality and security analysis",
              "OWASP ZAP: Dynamic security testing"
            ]
          },
          {
            name: "Deployment",
            icon: <FaCloud />,
            components: [
              "EKS: Kubernetes orchestration",
              "Docker: Containerization",
              "Helm: Package management"
            ]
          }
        ]
      },

      highlights: [
        {
          icon: <FaShieldAlt />,
          title: "Security Integration",
          points: [
            "Automated vulnerability scanning in CI/CD",
            "Code quality gates with SonarQube",
            "Container security with Trivy",
            "Compliance checks and reporting"
          ]
        },
        {
          icon: <FaChartLine />,
          title: "Scalability & Performance",
          points: [
            "Horizontal pod autoscaling on EKS",
            "Load balancing with ALB",
            "Monitoring with CloudWatch",
            "Performance optimization"
          ]
        },
        {
          icon: <FaDollarSign />,
          title: "Cost & Efficiency",
          points: [
            "Spot instances for cost reduction",
            "Automated scaling based on demand",
            "Resource optimization",
            "Faster time-to-market"
          ]
        }
      ],

      outcomes: [
        "Automated build, test, and security scanning workflows",
        "Enforced quality gates for secure deployments",
        "Containerized applications using Docker",
        "Deployed to Amazon EKS for scalable deployment"
      ],

      github: "https://github.com/Nishath06/DevSecOps-demo-project-code",
      live: "#",
      documentation: "#"
    }
  ];

  const otherProjects = [
    {
      title: "Multi-Cloud DevSecOps CI/CD Pipeline",
      description: "Built an end-to-end CI/CD pipeline using Azure DevOps with Kubernetes deployment. Configured AWS EC2 self-hosted agents and automated builds using Maven. Enabled multi-cloud deployment across AWS and Azure with Docker-based containerization.",
      tech: ["Azure DevOps", "AWS EC2", "Docker", "Kubernetes", "Maven"],
      github: "https://github.com/Nishath06/devsecops-cicd-pipeline-azure-aws-BoardGame-",
      category: "CI/CD & DevOps"
    },
    {
      title: "Secure File Transfer & Encryption API",
      description: "Developed a secure API using hybrid encryption (RSA + ECC) for encrypted file transfer and key management. Built REST endpoints and designed backend architecture ensuring end-to-end encryption and data integrity.",
      tech: ["FastAPI", "PostgreSQL", "RSA", "ECC"],
      github: "#",
      category: "Security & Backend"
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
            {mainProject.tech.map((tech, index) => (
              <span key={index} className="tech-icon">{mainProject.tech[index] === 'Jenkins' ? <SiAmazonaws /> : mainProject.tech[index] === 'EKS' ? <SiAmazonaws /> : mainProject.tech[index] === 'Docker' ? <SiDocker /> : mainProject.tech[index] === 'Trivy' ? <SiAmazonaws /> : mainProject.tech[index] === 'SonarQube' ? <SiAmazonaws /> : <SiAmazonaws />}</span>
            ))}
          </div>
        </div>

        <div className="project-tech-stack">
          {mainProject.tech.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>

        <p className="project-description">{mainProject.description}</p>

        {/* Case Study */}
        <div className="case-study-section">
          <h4 className="case-study-title">
            <span className="prompt">$</span> case-study --detailed
          </h4>
          
          <div className="case-study-content">
            <div className="case-study-item">
              <h5>Problem:</h5>
              <p>{mainProject.caseStudy.problem}</p>
            </div>
            <div className="case-study-item">
              <h5>Solution:</h5>
              <p>{mainProject.caseStudy.solution}</p>
            </div>
            <div className="case-study-item">
              <h5>Tools:</h5>
              <p>{mainProject.caseStudy.tools}</p>
            </div>
            <div className="case-study-item">
              <h5>Impact:</h5>
              <p>{mainProject.caseStudy.impact}</p>
            </div>
          </div>
        </div>

        {/* Case Study */}
        <div className="case-study-section">
          <h4 className="case-study-title">
            <span className="prompt">$</span> case-study --detailed
          </h4>
          
          <div className="case-study-content">
            <div className="case-study-item">
              <h5>Problem:</h5>
              <p>{mainProject.caseStudy.problem}</p>
            </div>
            <div className="case-study-item">
              <h5>Solution:</h5>
              <p>{mainProject.caseStudy.solution}</p>
            </div>
            <div className="case-study-item">
              <h5>Tools:</h5>
              <p>{mainProject.caseStudy.tools}</p>
            </div>
            <div className="case-study-item">
              <h5>Impact:</h5>
              <p>{mainProject.caseStudy.impact}</p>
            </div>
          </div>
        </div>

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
