import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {images.slice(0, 6).map((image, index) => (
          <div 
            key={index}
            className="aspect-square cursor-pointer overflow-hidden"
            onClick={() => {
              setCurrentIndex(index);
              setIsModalOpen(true);
            }}
          >
            <img
              src={image.url}
              alt={image.alt || `Gallery image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
             onClick={() => setIsModalOpen(false)}>
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes size={24} />
            </button>
            
            <button
              className="absolute left-4 text-white hover:text-gray-300"
              onClick={handlePrev}
            >
              <FaArrowLeft size={24} />
            </button>

            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />

            <button
              className="absolute right-4 text-white hover:text-gray-300"
              onClick={handleNext}
            >
              <FaArrowRight size={24} />
            </button>

            <div className="absolute bottom-4 text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
