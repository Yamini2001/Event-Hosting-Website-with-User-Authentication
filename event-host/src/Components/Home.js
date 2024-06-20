import React,{useState} from "react";
import "./Home.css"; // Import the CSS file for styling
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon
import { SiAdobe, SiGoogle, SiAmazon, SiCocacola, SiUnilever, SiMicrosoft, SiSlack } from 'react-icons/si';


import image1 from "../Components/images/image1.jpg";
import image2 from "../Components/images/image2.png";
import image3 from "../Components/images/image3.png";
import image4 from "../Components/images/image4.jpg";

const Home = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to handle button click and set selected event
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const eventTexts = {
    Webinar: "Text for Webinar event goes here.",
    'Virtual Event': "Text for Virtual Event goes here.",
    'Hybrid Event': "Text for Hybrid Event goes here.",
    'InPerson Event': "Text for InPerson Event goes here."
  };
  return (
    <div className="home-container">
      <h1>
        Redesigned Events For <br/>
        <span className="highlight1">The</span> <span className="highlight2">Digi<span className="tal">tal</span></span> <span className="highlight3">Era</span>
      </h1>
      <p className="para">
        Elevate your event to unprecedented heights with our cutting-edge
        Virtual Event Hosting Services
      </p>
      <div className="buttons">
        <button className="book-demo-button">Book Demo</button>
        <button className="explore-event-pro-button">Explore Event Pro</button>
      </div>
      <div className="image-container">
        <img src={image1} alt="Image 1" className="image1" />
        <img src={image2} alt="Image 2" className="image2" />
        <img src={image3} alt="Image 3" className="image3" />
        <img src={image4} alt="Image 4" className="image4" />
      </div>
      <div className="logos-container">
        <div className="logo-item">
          <FaGithub size={30} color="white" />
          <p className="text">github</p>
        </div>
        <div className="logo-item">
          <SiAdobe size={30} color="white" />
          <p className="text">adobe</p>
        </div>
        <div className="logo-item">
          <SiGoogle size={30} color="white" />
          <p className="text">google</p>
        </div>
        <div className="logo-item">
          <SiAmazon size={30} color="white" />
          <p className="text">amazon</p>
        </div>
        <div className="logo-item">
          <SiCocacola size={30} color="white" />
          <p className="text">cocacola</p>
        </div>
        <div className="logo-item">
          <SiUnilever size={30} color="white" />
          <p className="text">unilever</p>
        </div>
        <div className="logo-item">
          <SiMicrosoft size={30} color="white" />
          <p className="text">microsoft</p>
        </div>
        <div className="logo-item">
          <SiSlack size={30} color="white" />
          <p className="text">slack</p>
        </div>
      </div>
      <h2 className="use-case-heading">Customized to Your Use Case</h2>
      <div className="button-box">
        <button className={`event-button ${selectedEvent === 'Webinar' ? 'active' : ''}`} onClick={() => handleEventClick('Webinar')}>Webinar</button>
        <button className={`event-button ${selectedEvent === 'Virtual Event' ? 'active' : ''}`} onClick={() => handleEventClick('Virtual Event')}>Virtual Event</button>
        <button className={`event-button ${selectedEvent === 'Hybrid Event' ? 'active' : ''}`} onClick={() => handleEventClick('Hybrid Event')}>Hybrid Event</button>
        <button className={`event-button ${selectedEvent === 'InPerson Event' ? 'active' : ''}`} onClick={() => handleEventClick('InPerson Event')}>InPerson Event</button>
      </div>

      {selectedEvent && (
        <div className="event-text">
          <p>{eventTexts[selectedEvent]}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
