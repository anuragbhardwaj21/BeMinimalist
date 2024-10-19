import React, { useState, useEffect } from 'react';
import './Loader.css';

export const Loader = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader">
      <div className="spinner"></div>
      <p className={`loader-message ${showMessage ? 'visible' : ''}`}>
        We are using free API hosting, so it might take a little longer on the first load. Thank you for your patience!
      </p>
    </div>
  );
};
