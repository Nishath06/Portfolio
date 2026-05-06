import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="terminal-prompt">$</span> nishath<span className="cursor-blink">_</span>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="nav-number">0{index + 1}.</span>
              <span className="nav-text">{item.name}</span>
            </button>
          ))}
          <a
            href={process.env.PUBLIC_URL + "/resume.pdf"}
            className="nav-item resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ animationDelay: `${navItems.length * 0.1}s`, border: '1px solid #64ffda', borderRadius: '4px', padding: '0.2rem 0.5rem', marginLeft: '1rem', textDecoration: 'none' }}
          >
            <span className="nav-text" style={{color: '#64ffda'}}>Resume</span>
          </a>
        </div>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
