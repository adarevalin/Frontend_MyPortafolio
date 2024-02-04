import React, { useState } from 'react';
import "./styles/carrusel.css"
const TruncateText = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const handleToggle = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedText = isTruncated ? text.slice(0, maxLength) : text;

  return (
    <>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button className="ButtonMas" onClick={handleToggle}>
          {isTruncated ? 'Ver más' : 'Ver menos'}
        </button>
      )}
    </>
  );
};

export default TruncateText;
