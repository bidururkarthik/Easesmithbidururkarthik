import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import your CSS stylesheet

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'show' : ''}`}
      type="button"
      onClick={scrollToTop}
    >
      {/* You can put your arrow icon here */}
    </button>
  );
}

export default ScrollToTopButton;