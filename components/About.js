import React from 'react';
import './About.css';

const About = ({ id }) => {
  return (
    <section id={id} className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/api/placeholder/500/500" 
              alt="Daycare Provider" 
              className="rounded-img"
            />
          </div>
          
          <div className="about-text">
            <h3>Jane Doe</h3>
            <h4>Certified Childcare Provider</h4>
            <p>
              Welcome to my home daycare! With over 10 years of experience in early childhood education, 
              I am passionate about creating a nurturing environment where children can learn, play, and grow.
            </p>
            <p>
              I hold a degree in Early Childhood Development and am certified in Pediatric First Aid and CPR. 
              My home daycare is licensed by the state and provides a safe, stimulating environment for children 
              ages 6 months to 5 years.
            </p>
            <div className="credentials">
              <div className="credential">
                <span className="credential-number">10+</span>
                <span className="credential-text">Years Experience</span>
              </div>
              <div className="credential">
                <span className="credential-number">50+</span>
                <span className="credential-text">Happy Families</span>
              </div>
              <div className="credential">
                <span className="credential-number">100%</span>
                <span className="credential-text">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="philosophy">
          <h3>My Philosophy</h3>
          <p>
            I believe that children learn best through play and exploration in a secure, loving environment. 
            My program focuses on the whole child, nurturing their social, emotional, physical, and cognitive development. 
            Each child is unique and deserves individual attention and care tailored to their needs and interests.
          </p>
          <p>
            I strive to create a "home away from home" atmosphere where children feel safe to express themselves, 
            make mistakes, and discover the world around them. My goal is to foster independence, creativity, and 
            a lifelong love of learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;