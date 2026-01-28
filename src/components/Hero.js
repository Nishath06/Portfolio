import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiAmazonaws, SiMicrosoftazure, SiRedhat } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Cloud & DevOps Engineer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="grid-lines"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="hero-content">
        <div className="hero-greeting">
          <span className="terminal-prompt">$</span> cat /home/nishath/intro.txt
        </div>

        <h1 className="hero-name">
          Nishath J P
        </h1>

        <h2 className="hero-title">
          <span className="typing-text">{displayedText}</span>
          <span className="cursor">|</span>
        </h2>

        <div className="hero-certifications">
          <div className="cert-badge" title="AWS Certified Solutions Architect - Associate">
            <SiAmazonaws className="cert-icon" />
            <span>AWS SAA</span>
          </div>
          <div className="cert-badge" title="Microsoft Certified: Azure Administrator Associate">
            <SiMicrosoftazure className="cert-icon" />
            <span>AZ-104</span>
          </div>
          <div className="cert-badge" title="Red Hat Certified System Administrator">
            <SiRedhat className="cert-icon" />
            <span>RHCSA</span>
          </div>
        </div>

        <p className="hero-description">
          Multi-cloud certified engineer specializing in cloud architecture, container orchestration,
          and production-grade distributed systems. Building scalable edge-to-cloud solutions with
          <span className="highlight"> AWS</span>, <span className="highlight">Azure</span>, and
          <span className="highlight"> modern DevOps practices</span>.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary" onClick={scrollToContact}>
            Get In Touch
          </button>
          <a 
            href="/resume.pdf" 
            className="btn btn-secondary" 
            download="Nishath_JP_Resume.pdf"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-social">
          <a 
            href="https://github.com/Nishath06" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/nishath-jp" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:jpnishath@gmail.com"
            aria-label="Email"
            className="social-link"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
