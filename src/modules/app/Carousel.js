import React, { useState } from 'react';
import '../../assets/css/carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index}`}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
      </div>
      <button className="carousel-control left" onClick={goToPreviousSlide}>
        <FaChevronLeft />
      </button>
      <button className="carousel-control right" onClick={goToNextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
