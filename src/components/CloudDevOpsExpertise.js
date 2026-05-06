import React from 'react';
import { FaCloud, FaCogs, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import './CloudDevOpsExpertise.css';

const CloudDevOpsExpertise = () => {
  const expertiseAreas = [
    {
      title: "Cloud Architecture",
      icon: <FaCloud />,
      points: [
        "Scalability: Designed auto-scaling groups and load balancers (ALB/NLB) for 10x traffic spikes",
        "High Availability: Implemented multi-AZ deployments with failover strategies, achieving 99.9% uptime",
        "Cost Optimization: Used reserved instances and spot fleets, reducing cloud costs by 30%"
      ]
    },
    {
      title: "CI/CD Pipelines",
      icon: <FaCogs />,
      points: [
        "Automation: Built end-to-end pipelines with Jenkins/GitHub Actions, automating build, test, and deploy phases",
        "Multi-Cloud: Integrated Azure DevOps with AWS CodePipeline for seamless cross-cloud deployments",
        "Version Control: Mastered GitOps workflows with branching strategies and automated rollbacks"
      ]
    },
    {
      title: "Monitoring & Security",
      icon: <FaShieldAlt />,
      points: [
        "Observability: Deployed Prometheus/Grafana stacks for real-time monitoring and alerting",
        "DevSecOps: Integrated Trivy and SonarQube for vulnerability scanning and code quality gates",
        "Compliance: Ensured HIPAA/GDPR compliance with encryption (RSA/ECC) and access controls"
      ]
    }
  ];

  return (
    <section id="expertise" className="expertise">
      <h2 className="section-title">Cloud & DevOps Expertise</h2>

      <div className="expertise-intro">
        <p className="terminal-command">
          <span className="prompt">$</span> expertise --architecture-level
        </p>
        <p className="expertise-description">
          Deep technical knowledge in cloud architecture and DevOps practices, proven through certifications and projects.
        </p>
      </div>

      <div className="expertise-grid">
        {expertiseAreas.map((area, index) => (
          <div 
            key={index} 
            className="expertise-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="expertise-header">
              <span className="expertise-icon">{area.icon}</span>
              <h3>{area.title}</h3>
            </div>
            <ul className="expertise-points">
              {area.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudDevOpsExpertise;