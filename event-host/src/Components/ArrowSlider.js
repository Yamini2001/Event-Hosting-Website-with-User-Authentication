import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ArrowSlider.css'; // Import your custom CSS for Slider

const ArrowSlider = () => {
  // Configuration options for the slider (you can adjust these as needed)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Custom Arrow components for previous and next
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-prev-arrow`} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-next-arrow`} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </div>
    );
  };

  return (
    <div className="arrow-slider-container">
      <Slider {...settings}>
        <div>
          <img src="path_to_your_image_1" alt="Slide 1" />
        </div>
        <div>
          <img src="path_to_your_image_2" alt="Slide 2" />
        </div>
        <div>
          <img src="path_to_your_image_3" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default ArrowSlider;
