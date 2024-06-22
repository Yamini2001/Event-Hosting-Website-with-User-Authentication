import React from 'react';
import './RelaxBox.css'; // Import your CSS for RelaxBox
import additionalImage from '../Components/images/video meet.png';
import { TbArrowRoundaboutLeft } from "react-icons/tb";

const RelaxBox = () => {
  return (
    <div className="relax-box">
      <div className="relax-content">
        <h2 className="relax-heading">
          Sit back and relax while Event Host <br/> handles your event.
        </h2>
        <p className="relax-description">
          We simplify the process for you.
        </p>
        <button className="book-demo-button3">
          Book a Free Demo
        </button>
        <div className="icon-container">
          <TbArrowRoundaboutLeft className="roundabout-icon" />
        </div>
        <div className="image-container3">
          <img src={additionalImage} alt="Event" />
        </div>
      </div>
    </div>
  );
};

export default RelaxBox;
