import React, { useState, useEffect } from 'react';

const RotatingTagline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const services = [
    "Construction Services",
    "Architects & Designers",
    "Contractors & Builders",
    "Fabricators & Welders",
    "Plumbing Experts",
    "Renovation Services",
    "Engineering Solutions",
    "Civil Work Professionals"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 500); // Half of transition time
      
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, [services.length]); // Added services.length to dependencies

  return (
    <h1 className="text-5xl font-bold mb-6 text-center">
      Find Trusted{" "}
      <span 
        className={`inline-block transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {services[currentIndex]}
      </span>
    </h1>
  );
};

export default RotatingTagline;
