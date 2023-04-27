import './Slideshow.css';
import { useEffect, useState } from 'react';

const rightArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const leftArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

export default function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   let id = setInterval(() => {
  //     setCurrentIndex((prev) =>
  //       currentIndex === slides.length - 1 ? (prev = 0) : prev + 1
  //     );
  //   }, 1000);

  //   return function cleanup() {
  //     clearInterval(id);
  //   };
  // }, []);

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  const containerStyle = {
    width: '50%',
    height: '100%',
    margin: 0,
    position: 'relative',
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="slideshow">
      <div
        style={{ height: '100%', display: 'flex' }}
        className="container-width-85"
      >
        <div style={containerStyle} className="slide-container">
          <div>
            <div onClick={goToPrevious} style={leftArrowStyles}>
              ❰
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
              ❱
            </div>
          </div>
          <div style={slideStyles}></div>
        </div>
        <h1 style={{ color: 'white', textAlign: 'center', margin: 'auto' }}>
          Check out our newest products
        </h1>
      </div>
    </div>
  );
}
