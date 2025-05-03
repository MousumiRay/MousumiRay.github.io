import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Jane has been caring for our daughter for two years now, and we couldn't be happier. Her home is always clean, organized, and filled with educational toys. Our daughter has developed so much under her care and looks forward to going to 'school' every day.",
      name: "Sarah Johnson",
      relation: "Mother of Emily, 4 years old"
    },
    {
      text: "Finding Little Hearts Daycare was the best thing that happened to our family. The structured daily activities combined with plenty of play time creates the perfect balance. Our son has thrived in this environment, and we appreciate the detailed daily reports that keep us connected to his experiences.",
      name: "Michael Rodriguez",
      relation: "Father of Lucas, 3 years old"
    },
    {
      text: "As a first-time mom, leaving my baby was incredibly difficult. Jane made the transition so much easier with her warm, caring nature and her obvious expertise with infants. The small group setting means my daughter gets plenty of individual attention while still learning important social skills.",
      name: "Lisa Chen",
      relation: "Mother of Sophia, 18 months old"
    },
    {
      text: "We've tried several daycare options, but nothing compared to the personalized care at Little Hearts. The homemade meals, thoughtful activities, and genuine affection have made this a second home for our twins. We especially appreciate how Jane adapts her approach to each child's personality.",
      name: "David and Taylor Wilson",
      relation: "Parents of Emma and Noah, 2 years old"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id={id} className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Parent Testimonials</h2>
        </div>
        
        <div className="testimonials-intro">
          <p>
            Don't just take my word for it! Here's what families have to say about their 
            experience with Little Hearts Daycare.
          </p>
        </div>
        
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-item ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.relation}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;