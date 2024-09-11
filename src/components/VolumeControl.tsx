import React, { useState } from 'react';
import volume from '../assets/medium-volume.png';

const VolumeControl = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
    e.target.style.background = `linear-gradient(to right, gray ${e.target.value}%, white ${e.target.value}%)`;
  };

  return (
    <div className="flex items-center space-x-2 mt-6">
      <img src={volume} alt="Volume" className="w-5 h-5" />
      <input
        id="small-range"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-48 p-1 h-2 rounded-lg appearance-none cursor-pointer bg-gray-20 range-sm"
        style={{
          background: `linear-gradient(to right, gray ${value}%, white ${value}%)`,
          border: `1px solid black`
        }}
      />
    </div>
  );
};

export default VolumeControl;
