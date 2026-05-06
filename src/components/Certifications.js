import React from 'react';
import { SiAmazonaws, SiMicrosoftazure, SiRedhat } from 'react-icons/si';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Red Hat Certified System Administrator",
      shortName: "RHCSA",
      provider: "Red Hat",
      icon: <SiRedhat />,
      date: "2025",
      color: "#EE0000",
      skills: ["Linux Administration", "Shell Scripting", "File Systems", "User Management", "Networking", "Security"],
      verifyLink: "#",
      description: "Linux system administration foundation."
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      shortName: "AWS SAA-C03",
      provider: "Amazon Web Services",
      icon: <SiAmazonaws />,
      date: "2025",
      color: "#FF9900",
      skills: ["VPC Design", "Auto Scaling", "Load Balancers", "ECS/Fargate", "S3", "IAM", "CloudWatch"],
      verifyLink: "#",
      description: "Cloud architecture design, scalability, and security."
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      shortName: "AZ-104",
      provider: "Microsoft",
      icon: <SiMicrosoftazure />,
      date: "2026",
      color: "#0078D4",
      skills: ["Azure VMs", "Virtual Networks", "Storage Accounts", "Azure AD", "Resource Manager", "Monitoring"],
      verifyLink: "#",
      description: "Azure infrastructure management and automation."
    },
    {
      title: "Microsoft Certified: Azure DevOps Engineer Expert",
      shortName: "AZ-400",
      provider: "Microsoft",
      icon: <SiMicrosoftazure />,
      date: "2026",
      color: "#0078D4",
      skills: ["CI/CD Pipelines", "Infrastructure as Code", "Azure DevOps", "Monitoring", "Security", "GitOps"],
      verifyLink: "#",
      description: "Advanced CI/CD, IaC, and DevOps practices."
    },
    {
      title: "AWS Certified Cloud Operations Associate",
      shortName: "AWS CloudOps",
      provider: "Amazon Web Services",
      icon: <SiAmazonaws />,
      date: "2026",
      color: "#FF9900",
      skills: ["Cloud Operations", "Monitoring", "Automation", "Incident Response", "Cost Optimization", "Compliance"],
      verifyLink: "#",
      description: "Cloud operations, monitoring, and automation at scale."
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="cert-intro">
        <p className="terminal-command">
          <span className="prompt">$</span> certs --show-progression
        </p>
        <p className="cert-description">
          Certification roadmap demonstrating progression from cloud fundamentals to DevOps expertise. Recent achievements validate production-ready skills in AWS and Azure.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="cert-card"
            style={{ 
              animationDelay: `${index * 0.2}s`,
              '--cert-color': cert.color
            }}
          >
            <div className="cert-header">
              <div className="cert-icon-wrapper" style={{ background: `${cert.color}15` }}>
                <span className="cert-main-icon" style={{ color: cert.color }}>
                  {cert.icon}
                </span>
              </div>
              <div className="cert-badge-corner">
                <FaAward style={{ color: cert.color }} />
              </div>
            </div>

            <div className="cert-body">
              <div className="cert-provider">{cert.provider}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-code">{cert.shortName}</div>
              
              <p className="cert-description-text">{cert.description}</p>

              <div className="cert-skills">
                {cert.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="cert-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="cert-footer">
              <span className="cert-date">
                <span className="cert-date-label">Issued:</span> {cert.date}
              </span>
              <a 
                href={cert.verifyLink} 
                className="cert-verify-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify <FaExternalLinkAlt />
              </a>
            </div>

            <div className="cert-shine"></div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Certifications;
