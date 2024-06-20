import React from "react";
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from react-icons
import eventImage from '../Components/images/eventvirtual.png'; // Import your image
import './VirtualEvent.css'; // Import the CSS file

const VirtualEvent = () => (
  <div className="virtual-event-container">
    <div className="event-text">
      <h3 className="text">Ensuring a seamless and captivating <br/> experience for all attendees.</h3>
      <p>In our virtual events, we seamlessly blend gorgeous <br/> design  with an elegant flow, creating immersive and <br/> engaging  experiences for participants from the comfort <br/>of their own homes</p>

      <p className="learn-more">
        Learn more 
        <a href="https://www.cvent.com/en/blog/events/virtual-events" target="_blank" rel="noopener noreferrer" className="circle-icon">
        <FaArrowRight />
        </a>
      </p>
    </div>
    <div className="event-image">
      <img src={eventImage} alt="Event" />
    </div>
  </div>
);

export default VirtualEvent;
