import React from 'react';
import { SiAmazonaws, SiMicrosoftazure, SiRedhat } from 'react-icons/si';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      shortName: "AWS SAA-C03",
      provider: "Amazon Web Services",
      icon: <SiAmazonaws />,
      date: "2024",
      color: "#FF9900",
      skills: ["VPC Design", "Auto Scaling", "Load Balancers", "ECS/Fargate", "S3", "IAM", "CloudWatch"],
      verifyLink: "#",
      description: "Designing distributed systems and cloud architectures on AWS with focus on security, cost-optimization, and high availability"
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      shortName: "AZ-104",
      provider: "Microsoft",
      icon: <SiMicrosoftazure />,
      date: "2024",
      color: "#0078D4",
      skills: ["Azure VMs", "Virtual Networks", "Storage Accounts", "Azure AD", "Resource Manager", "Monitoring"],
      verifyLink: "#",
      description: "Managing Azure subscriptions, implementing storage solutions, configuring virtual networking, and managing identities"
    },
    {
      title: "Red Hat Certified System Administrator",
      shortName: "RHCSA",
      provider: "Red Hat",
      icon: <SiRedhat />,
      date: "2023",
      color: "#EE0000",
      skills: ["Linux Administration", "Shell Scripting", "File Systems", "User Management", "Networking", "Security"],
      verifyLink: "#",
      description: "Hands-on Linux system administration skills including managing local storage, configuring security, and performing essential system tasks"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="cert-intro">
        <p className="terminal-command">
          <span className="prompt">$</span> cat /credentials/certifications.json | jq .
        </p>
        <p className="cert-description">
          Multi-cloud certified with hands-on validation from AWS, Azure, and Red Hat. 
          These aren't just badges—they represent real infrastructure skills tested in production scenarios.
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

      <div className="cert-next-goals">
        <div className="next-cert-card">
          <h3 className="next-cert-title">
            <span className="prompt">$</span> next-certification.sh --target
          </h3>
          <div className="next-cert-content">
            <div className="next-cert-item">
              <SiMicrosoftazure className="next-cert-icon" />
              <div>
                <h4>AZ-400: DevOps Engineer Expert</h4>
                <p>Advanced CI/CD, Infrastructure as Code, and DevOps practices on Azure</p>
                <span className="status-badge in-progress">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
