import React from 'react';
import { FaCloud, FaServer, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaCloud />,
      title: "Multi-Cloud Certified",
      description: "AWS Solutions Architect & Azure Administrator with hands-on experience designing scalable cloud architectures"
    },
    {
      icon: <FaServer />,
      title: "Production-Ready Mindset",
      description: "Focus on security, scalability, and cost-optimization. Building systems that work in the real world"
    },
    {
      icon: <FaShieldAlt />,
      title: "Infrastructure as Code",
      description: "Linux systems administration (RHCSA), containerization with Docker, and automation-first approach"
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
                I'm a Cloud & DevOps Engineer who thinks in infrastructure. With certifications from 
                <span className="highlight"> AWS</span>, <span className="highlight">Azure</span>, and 
                <span className="highlight"> Red Hat</span>, I bring a production-first approach to building 
                distributed systems.
              </p>
              <p className="output">
                My work focuses on the intersection of <span className="highlight">edge computing</span> and 
                <span className="highlight"> cloud orchestration</span>—designing systems that are secure, 
                scalable, and cost-efficient. Whether it's containerizing applications with Docker, deploying 
                on ECS Fargate, or configuring VPCs with proper security groups, I focus on making systems 
                that actually work in production.
              </p>
              <p className="output">
                Currently exploring advanced DevOps practices and preparing for the 
                <span className="highlight"> AZ-400 DevOps Engineer Expert</span> certification to deepen 
                my CI/CD and automation expertise.
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
