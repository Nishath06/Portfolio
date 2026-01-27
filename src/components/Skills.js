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
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        { name: "AWS", icon: <SiAmazonaws />, level: 85, description: "VPC, ECS, Fargate, Auto Scaling, Load Balancer" },
        { name: "Azure", icon: <SiMicrosoftazure />, level: 80, description: "VM, Storage, Networking, Azure AD" }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      icon: "🔧",
      skills: [
        { name: "Docker", icon: <SiDocker />, level: 85, description: "Containerization, Multi-stage builds" },
        { name: "Nginx", icon: <SiNginx />, level: 75, description: "Reverse proxy, Load balancing" },
        { name: "Git", icon: <SiGit />, level: 90, description: "Version control, Branching strategies" },
        { name: "GitHub", icon: <SiGithub />, level: 85, description: "CI/CD, Actions, Collaboration" }
      ]
    },
    {
      title: "Operating Systems",
      icon: "🐧",
      skills: [
        { name: "Red Hat", icon: <SiRedhat />, level: 85, description: "RHCSA certified, System administration" },
        { name: "Ubuntu", icon: <SiUbuntu />, level: 80, description: "Server setup, Package management" },
        { name: "Linux", icon: <SiLinux />, level: 85, description: "Shell scripting, Bash automation" },
        { name: "VMware", icon: <SiVmware />, level: 70, description: "Virtualization, VM management" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, level: 80, description: "REST APIs, Async programming" },
        { name: "Express", icon: <SiExpress />, level: 80, description: "API development, Middleware" },
        { name: "FastAPI", icon: <SiFastapi />, level: 75, description: "Python APIs, Async endpoints" },
        { name: "Python", icon: <SiPython />, level: 75, description: "Scripting, Automation" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 80, description: "Atlas, Aggregation, Indexing" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 75, description: "Relational design, Queries" }
      ]
    },
    {
      title: "Edge Computing",
      icon: "🔌",
      skills: [
        { name: "Raspberry Pi", icon: <SiRaspberrypi />, level: 85, description: "Edge servers, Production deployment" },
        { name: "Shell/Bash", icon: <SiShell />, level: 80, description: "Automation scripts, System tasks" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-intro">
        <p className="terminal-command">
          <span className="prompt">$</span> skills --list --verbose
        </p>
        <p className="skills-description">
          Production-tested stack spanning multi-cloud environments, container orchestration, 
          and full-stack development. Focus on scalability, security, and automation.
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
            <span className="learning-badge">Kubernetes (K8s)</span>
            <span className="learning-badge">Terraform</span>
            <span className="learning-badge">AZ-400 DevOps Expert</span>
            <span className="learning-badge">CI/CD Pipelines</span>
            <span className="learning-badge">GitHub Actions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
