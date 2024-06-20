import React from "react";
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from react-icons
import hybridImage from '../Components/images/hybrid.jpeg'; // Import your image
import './Hybrid.css'; // Import the CSS file

const Hybrid = () => (
  <div className="hybrid-container">
    <div className="event-text">
      <h2>Combining the best of both worlds.</h2>
      <p>Hybrid events offer a seamless blend of in-person and virtual experiences. They cater to a diverse audience, allowing participants to join either physically or virtually, ensuring maximum engagement and interaction.</p>

      <p className="learn-more">
        Learn more 
        <a href="https://en.wikipedia.org/wiki/Hybrid_event" target="_blank" rel="noopener noreferrer" className="circle-icon">
          <FaArrowRight />
        </a>
      </p>
    </div>
    <div className="event-image">
      <img src={hybridImage} alt="Hybrid Event" />
    </div>
  </div>
);

export default Hybrid;
