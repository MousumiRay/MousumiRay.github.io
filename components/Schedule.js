import React from 'react';
import './Schedule.css';

const Schedule = ({ id }) => {
  const schedule = [
    {
      time: "7:30 AM - 8:30 AM",
      activity: "Arrival & Free Play",
      description: "Children arrive and engage in quiet free play activities while waiting for everyone to arrive."
    },
    {
      time: "8:30 AM - 9:00 AM",
      activity: "Breakfast",
      description: "Nutritious breakfast is served family-style, promoting social interaction and self-help skills."
    },
    {
      time: "9:00 AM - 9:30 AM",
      activity: "Circle Time",
      description: "Group gathering for songs, stories, calendar activities, and introduction to the day's theme."
    },
    {
      time: "9:30 AM - 10:30 AM",
      activity: "Learning Activities",
      description: "Age-appropriate educational activities focusing on different developmental areas."
    },
    {
      time: "10:30 AM - 11:30 AM",
      activity: "Outdoor Play",
      description: "Weather permitting, children enjoy outdoor play in our fenced backyard with various play equipment."
    },
    {
      time: "11:30 AM - 12:00 PM",
      activity: "Lunch Preparation",
      description: "Hand washing and helping to set up for lunch, promoting hygiene and responsibility."
    },
    {
      time: "12:00 PM - 12:45 PM",
      activity: "Lunch",
      description: "Healthy lunch served family-style, encouraging conversation and table manners."
    },
    {
      time: "12:45 PM - 2:30 PM",
      activity: "Naptime / Quiet Time",
      description: "Children rest on individual cots/mats. Non-sleepers engage in quiet activities."
    },
    {
      time: "2:30 PM - 3:00 PM",
      activity: "Afternoon Snack",
      description: "Nutritious snack provided to replenish energy after rest time."
    },
    {
      time: "3:00 PM - 4:00 PM",
      activity: "Art & Creative Play",
      description: "Various art projects, sensory experiences, and creative activities."
    },
    {
      time: "4:00 PM - 5:00 PM",
      activity: "Free Play / Outdoor Time",
      description: "Child-directed play indoors or outdoors, depending on weather."
    },
    {
      time: "5:00 PM - 5:30 PM",
      activity: "Clean Up & Departure",
      description: "Children help with cleanup, prepare for departure, and engage in quiet activities while waiting for pickup."
    }
  ];

  return (
    <section id={id} className="schedule">
      <div className="container">
        <div className="section-title">
          <h2>Daily Schedule</h2>
        </div>
        
        <div className="schedule-intro">
          <p>
            Children thrive on routine! Our daily schedule provides structure while allowing flexibility 
            to follow children's interests and needs. This schedule serves as a general framework, 
            recognizing that each day may vary slightly.
          </p>
        </div>
        
        <div className="timeline">
          {schedule.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h3>{item.activity}</h3>
                <div className="timeline-time">{item.time}</div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="schedule-note">
          <p>
            <strong>Note:</strong> This schedule is flexible and adjusts to accommodate special activities, 
            children's interests, and seasonal changes. Infants follow their own feeding and napping schedules.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;