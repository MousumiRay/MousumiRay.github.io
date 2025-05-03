import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <h1>Little Hearts Daycare</h1>
        </div>
        
        <div className={`mobile-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li>
              <a 
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => handleClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => handleClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services"
                className={activeSection === 'services' ? 'active' : ''}
                onClick={() => handleClick('services')}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#schedule"
                className={activeSection === 'schedule' ? 'active' : ''}
                onClick={() => handleClick('schedule')}
              >
                Schedule
              </a>
            </li>
            <li>
              <a 
                href="#gallery"
                className={activeSection === 'gallery' ? 'active' : ''}
                onClick={() => handleClick('gallery')}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#testimonials"
                className={activeSection === 'testimonials' ? 'active' : ''}
                onClick={() => handleClick('testimonials')}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => handleClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;