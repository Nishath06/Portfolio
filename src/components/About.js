import React from 'react';
import { FaCloud, FaServer, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaCloud />,
      title: "Cloud Architecture Expert",
      description: "Designed and deployed scalable AWS/Azure systems with auto-scaling and multi-AZ redundancy"
    },
    {
      icon: <FaServer />,
      title: "CI/CD Pipeline Builder",
      description: "Automated deployments using Jenkins, GitHub Actions, and AWS CodePipeline for faster, reliable releases"
    },
    {
      icon: <FaShieldAlt />,
      title: "DevSecOps Practitioner",
      description: "Integrated security scanning (Trivy, SonarQube) into pipelines, ensuring compliant and secure production environments"
    }
  ];

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-button red"></span>
              <span className="terminal-button yellow"></span>
              <span className="terminal-button green"></span>
              <span className="terminal-title">whoami.sh</span>
            </div>
            <div className="terminal-body">
              <p className="terminal-line">
                <span className="prompt">nishath@cloud:</span>
                <span className="command">$ cat about.txt</span>
              </p>
              <p className="output">
                I'm a DevOps Engineer who transforms complex infrastructure challenges into automated, scalable solutions. Starting with Linux system administration (RHCSA), I progressed to cloud architecture (AWS SAA) and DevOps mastery (AZ-400), building production systems that handle real-world scale.
              </p>
              <p className="output">
                My journey includes architecting multi-cloud CI/CD pipelines, securing APIs with encryption, and deploying containerized applications on Kubernetes. I focus on what matters: designing systems that scale, automating deployments, and implementing security from the ground up.
              </p>
              <p className="output">
                Currently, I'm deepening my expertise in Kubernetes orchestration and advanced DevSecOps practices to deliver enterprise-grade infrastructure.
              </p>
              <p className="terminal-line">
                <span className="prompt">nishath@cloud:</span>
                <span className="command">$ ./what_drives_me.sh</span>
              </p>
              <p className="output">
                → Building systems that scale<br/>
                → Automating the repeatable<br/>
                → Security by design, not afterthought<br/>
                → Cloud-native thinking with edge awareness<br/>
                → Continuous learning in distributed systems
              </p>
              <p className="cursor-line">
                <span className="prompt">nishath@cloud:</span>
                <span className="cursor-blink">█</span>
              </p>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="highlight-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="education-section">
        <h3 className="subsection-title">
          <span className="prompt">$</span> education --list
        </h3>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-degree">B.E. Computer Science Engineering</div>
            <div className="education-institution">KPR Institute of Engineering and Technology</div>
            <div className="education-details">
              <span className="cgpa">CGPA: 8.16</span>
              <span className="badge">Engineering</span>
            </div>
          </div>
          <div className="education-card">
            <div className="education-degree">Diploma in Computer Engineering</div>
            <div className="education-institution">Sri Ramakrishna Polytechnic College</div>
            <div className="education-details">
              <span className="cgpa">87%</span>
              <span className="badge">Diploma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
