import React from 'react';
import './Services.css';

const Services = ({ id }) => {
  const services = [
    {
      title: "Full Day Care",
      description: "Comprehensive childcare from 7:30 AM to 5:30 PM, Monday through Friday, including meals, naps, and age-appropriate activities.",
      icon: "🏠"
    },
    {
      title: "Early Learning Program",
      description: "Structured activities designed to promote cognitive, social, and emotional development through play-based learning.",
      icon: "📚"
    },
    {
      title: "Nutritious Meals",
      description: "Healthy, homemade breakfast, lunch, and snacks prepared daily with fresh ingredients to support growing bodies and minds.",
      icon: "🍎"
    },
    {
      title: "Outdoor Play",
      description: "Daily outdoor activities in our secure backyard play area, weather permitting, to promote physical development and nature exploration.",
      icon: "🌳"
    },
    {
      title: "Arts & Crafts",
      description: "Creative projects that develop fine motor skills, self-expression, and imagination using a variety of materials and techniques.",
      icon: "🎨"
    },
    {
      title: "Naptime Routine",
      description: "Quiet rest period with individual cots/mats in a calm, supervised environment to ensure children get adequate rest.",
      icon: "😴"
    }
  ];

  return (
    <section id={id} className="services">
      <div className="container">
        <div className="section-title">
          <h2>My Services</h2>
        </div>
        
        <div className="services-intro">
          <p>
            At Little Hearts Daycare, I offer a range of services designed to meet the needs of children 
            and provide peace of mind for parents. Each aspect of my program is thoughtfully planned to 
            create a balanced day of learning, play, and rest.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="additional-info">
          <h3>Additional Information</h3>
          <ul>
            <li>
              <strong>Ages Accepted:</strong> 6 months to 5 years
            </li>
            <li>
              <strong>Hours:</strong> Monday-Friday, 7:30 AM to 5:30 PM
            </li>
            <li>
              <strong>Capacity:</strong> Maximum of 6 children at any time
            </li>
            <li>
              <strong>Payment Options:</strong> Weekly or monthly payments, childcare subsidies accepted
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;