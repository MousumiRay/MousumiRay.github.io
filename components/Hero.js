import React from 'react';
import './Hero.css';

const Hero = ({ id, setActiveSection }) => {
  const handleClick = () => {
    setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="hero">
      <div className="hero-content">
        <h1>Welcome to Little Hearts Daycare</h1>
        <p>Where every child feels at home, learns through play, and grows with love</p>
        <div className="hero-buttons">
          <button onClick={handleClick} className="btn">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;