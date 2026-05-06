import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "jpnishath@gmail.com",
      link: "mailto:jpnishath@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/nishath-jp",
      link: "https://linkedin.com/in/nishath-jp"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/Nishath06",
      link: "https://github.com/Nishath06"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Tamil Nadu, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-intro">
        <p className="terminal-command">
          <span className="prompt">$</span> ./connect.sh --channels all
        </p>
        <p className="contact-description">
          Looking for a DevOps engineer who understands cloud architecture, automation, and 
          production-grade systems? Let's discuss how I can contribute to your team's infrastructure goals.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h3 className="contact-subtitle">
            <span className="prompt">$</span> contact-info.json
          </h3>
          
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="contact-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <div className="contact-label">{info.label}</div>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="contact-value"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="contact-value">{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="quick-links">
            <h4 className="quick-links-title">Quick Actions</h4>
            <div className="quick-links-buttons">
              <a 
                href="/resume.pdf" 
                className="quick-link-btn"
                download="Nishath_JP_Resume.pdf"
              >
                📄 Download Resume
              </a>
              <a 
                href="https://linkedin.com/in/nishath-jp" 
                className="quick-link-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 View LinkedIn
              </a>
              <a 
                href="https://github.com/Nishath06" 
                className="quick-link-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub Profile
              </a>
            </div>
          </div>

          <div className="availability-status">
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">Available for opportunities</span>
            </div>
            <p className="status-description">
              Open to Cloud Engineer, DevOps Engineer, and Site Reliability Engineer roles
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <div className="footer-text">
            <p className="footer-terminal">
              <span className="prompt">$</span> echo "Built with React, passion for DevOps, and lots of ☕"
            </p>
            <p className="footer-copyright">
              © 2026 Nishath J P. Designed & Developed with 💚 for the Cloud.
            </p>
          </div>
          
          <div className="footer-social">
            <a 
              href="https://github.com/Nishath06" 
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/nishath-jp" 
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:jpnishath@gmail.com" 
              className="footer-social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
