import React, { useState } from 'react';
import './QuoteBox.css'; // Import your CSS for QuoteBox
import personImage1 from '../Components/images/Gray.png';
import personImage2 from '../Components/images/steve jobs.png'; // Import images for different persons
import personImage3 from '../Components/images/Jeff Bezos.png';
import personImage4 from '../Components/images/Bill Gates.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import RelaxBox from './RelaxBox';
import Footer from './Footer';

const QuoteBox = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0); // State to track current quote index

  const quotes = [
    {
      personImage: personImage1,
      quote:
        "Hosting our virtual event with Event Pro was a game-changer. Their team's support ensured a seamless experience, with a stunning virtual environment and intuitive flow that captivated the audience.",
      name: '- Gray Beasley',
      title: 'CEO & Co-Founder Of Logoipsum'
    },
    {
      personImage: personImage2,
      quote:
        "Get closer than ever to your customers. So close, in fact, that you will tell them what they need well before they realize it themselves.",
      name: '- Steve Jobs',
      title: 'CEO & Co-Founder Of Apple'
    },
    {
      personImage: personImage3,
      quote:
        "If you do build a great expereince, customers tell each other about that.Word of mouth is very powerful",
      name: '- Jeff Bezos',
      title: 'CEO & Co-Founder Of Amazon'
    },
    {
      personImage: personImage4,
      quote:
        "Your most unhappy customers are your greatest source of learning.",
      name: '- Bill Gates',
      title: 'CEO & Co-Founder Of Microsoft'
    }
  ];

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex === quotes.length - 1 ? 0 : prevIndex + 1));
  };

  const previousQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex === 0 ? quotes.length - 1 : prevIndex - 1));
  };

  return (
    <div className="quote-box">
      <div className="quote-content">
        <div className="image-container4">
          <img src={quotes[currentQuoteIndex].personImage} alt="Person" />
        </div>
        <div className="quote-text">
          <p>{quotes[currentQuoteIndex].quote}</p>
          <p className='name'>{quotes[currentQuoteIndex].name}</p>
          <p>{quotes[currentQuoteIndex].title}</p>
        </div>
      </div>
      <div className="arrows">
        <div className="arrow left" onClick={previousQuote}>
          <FaArrowLeft className="arrow-icon" />
        </div>
        <div className="arrow right" onClick={nextQuote}>
          <FaArrowRight className="arrow-icon" />
        </div>
      </div>
      <RelaxBox/>
      <Footer/>
    </div>
  );
};

export default QuoteBox;
