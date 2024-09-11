import React from 'react';
import img from '../assets/placeholder.svg'

const CoverArt = ({ src, alt }) => {
  return (
    <div className="w-image-w h-image-h overflow-hidden">
      <img src={img} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default CoverArt;
