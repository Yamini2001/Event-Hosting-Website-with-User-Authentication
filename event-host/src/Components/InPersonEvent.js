import React from "react";
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from react-icons
import inPersonImage from '../Components/images/InPerson.png'; // Import your image
import './InPersonEvent.css'; // Import the CSS file

const InPersonEvent = () => (
  <div className="in-person-container">
    <div className="event-text5">
      <h2>Connecting in real life, face-to-face.</h2>
      <p>In-person events offer unparalleled opportunities for networking, collaboration, and engagement. They bring together like-minded individuals in a physical setting, fostering meaningful connections and memorable experiences.</p>

      <p className="learn-more">
        Learn more 
        <a href="https://www.vfairs.com/guides/in-person-events/" target="_blank" rel="noopener noreferrer" className="circle-icon">
          <FaArrowRight />
        </a>
      </p>
    </div>
    <div className="event-image">
      <img src={inPersonImage} alt="In-Person Event" />
    </div>
  </div>
);

export default InPersonEvent;
