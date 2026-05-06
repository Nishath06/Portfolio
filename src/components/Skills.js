import React from 'react';
import { 
  SiAmazonaws, 
  SiMicrosoftazure, 
  SiDocker, 
  SiLinux, 
  SiUbuntu,
  SiRedhat,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiNginx,
  SiRaspberrypi,
  SiShell,
  SiVmware
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Primary Cloud (AWS)",
      icon: "☁️",
      skills: [
        { name: "AWS", icon: <SiAmazonaws />, level: 95, description: "VPC, ECS/Fargate, EKS, Lambda, Auto Scaling, ALB, CloudWatch" },
        { name: "AWS DevOps Tools", icon: <SiAmazonaws />, level: 90, description: "CodePipeline, CodeBuild, CloudFormation, IAM" }
      ]
    },
    {
      title: "Secondary Cloud (Azure)",
      icon: "🔵",
      skills: [
        { name: "Azure", icon: <SiMicrosoftazure />, level: 85, description: "VMs, Virtual Networks, AKS, Azure DevOps, Resource Manager" },
        { name: "Azure DevOps", icon: <SiMicrosoftazure />, level: 90, description: "Pipelines, Artifacts, Test Plans" }
      ]
    },
    {
      title: "Containerization & Orchestration",
      icon: "🐳",
      skills: [
        { name: "Kubernetes", icon: <SiAmazonaws />, level: 85, description: "Deployments, Services, ConfigMaps, Helm" },
        { name: "Docker", icon: <SiDocker />, level: 90, description: "Multi-stage builds, Compose, Swarm" }
      ]
    },
    {
      title: "CI/CD & Automation",
      icon: "🔧",
      skills: [
        { name: "Jenkins", icon: <SiAmazonaws />, level: 85, description: "Pipelines, Plugins, Master-Agent setups" },
        { name: "GitHub Actions", icon: <SiGithub />, level: 80, description: "Workflows, Self-hosted runners" },
        { name: "Git", icon: <SiGit />, level: 95, description: "Branching, Rebasing, GitOps workflows" }
      ]
    },
    {
      title: "Security & Monitoring",
      icon: "🔒",
      skills: [
        { name: "DevSecOps Tools", icon: <SiAmazonaws />, level: 85, description: "Trivy, SonarQube, OWASP ZAP" },
        { name: "Monitoring", icon: <SiAmazonaws />, level: 80, description: "Prometheus, Grafana, ELK Stack" }
      ]
    },
    {
      title: "Backend & Databases",
      icon: "⚙️",
      skills: [
        { name: "FastAPI", icon: <SiNodedotjs />, level: 80, description: "REST APIs, Async endpoints, Security" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 75, description: "Queries, Indexing, Encryption" },
        { name: "MongoDB", icon: <SiMongodb />, level: 75, description: "Atlas, Aggregation, Security" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-intro">
        <p className="terminal-command">
          <span className="prompt">$</span> skills --devops --cloud
        </p>
        <p className="skills-description">
          Production-tested stack for cloud engineering and DevOps automation. AWS is my primary cloud platform, with deep expertise in containerization, CI/CD, and security.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex} 
            className="skill-category"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
              <span className="category-count">[{category.skills.length}]</span>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="skill-item"
                  style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                >
                  <div className="skill-header">
                    <div className="skill-name-wrapper">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3}s`
                      }}
                    ></div>
                  </div>
                  
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-footer">
        <div className="learning-section">
          <h3 className="learning-title">
            <span className="prompt">$</span> currently-learning.sh
          </h3>
          <div className="learning-items">
            <span className="learning-badge">Advanced Kubernetes (CKA prep)</span>
            <span className="learning-badge">Terraform for IaC</span>
            <span className="learning-badge">AWS Advanced Architecting</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
