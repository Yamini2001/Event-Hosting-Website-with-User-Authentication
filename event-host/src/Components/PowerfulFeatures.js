import React, { useState } from 'react';
import featureImage1 from '../Components/images/Event Marketing .png'; // Import your images
import featureImage2 from '../Components/images/BookingRegister.jpg';
import featureImage3 from '../Components/images/AudeniceEngage.png';
import featureImage4 from '../Components/images/EventProduction.jpg';
import featureImage5 from '../Components/images/CRM.png';

import './PowerfulFeatures.css';

const PowerfulFeatures = () => {
  const [highlightedFeature, setHighlightedFeature] = useState(null);

  const handleImageClick = (index) => {
    setHighlightedFeature(index);
  };

  return (
    <div className="powerful-features-container">
      <h2>Powerful Features for Seamless Virtual Hosting</h2>
      <div className="features-images">
        {[featureImage1, featureImage2, featureImage3, featureImage4, featureImage5].map((image, index) => (
          <div
            key={index}
            className={`feature ${highlightedFeature === index ? 'highlighted' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`Feature ${index + 1}`} />
            <p className="feature-name">{['Event Marketing', 'Booking and Registration', 'Audience Engagement', 'Event Production', 'CRM Management'][index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerfulFeatures;
