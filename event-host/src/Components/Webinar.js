import React from "react";
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from react-icons
import eventImage from '../Components/images/web1.png'; // Import your image
import './Webinar.css'; // Import the CSS file if needed

const Webinar = () => (
  <div className="webinar-container">
    <div className="event-text">
      <h3 className="text">The more that you read, the more things you will know.</h3>
      <p>Webinars are online events that allow you to share presentations, videos, web pages, or other multimedia content with audiences all over the world. They can be live or recorded, making them an excellent tool for sharing information and interacting with your audience.</p>
      <p className="learn-more">
        Learn more 
        <a href="https://www.hubilo.com/blog/webinar-description" target="_blank" rel="noopener noreferrer" className="circle-icon">
          <FaArrowRight />
        </a>
      </p>
    </div>
    <div className="event-image">
      <img src={eventImage} alt="Event" />
    </div>
  </div>
);

export default Webinar;
