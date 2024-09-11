import React from 'react';
import back from '../assets/rewind.png'
import Play from '../assets/play.png'
import Forward from '../assets/fast-forward.png'
import Shuffle from '../assets/loop.png'

const PlayControls = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button className="p-2 bg-primary rounded">
        1x
      </button>
      <button className="p-2 bg-primary rounded">
        <img src={back} alt="Rewind" className="w-4 h-4" />
      </button>
      <button className="p-2 bg-primary rounded border-2 border-gray-500">
        <img src={Play} alt="Play" className="w-4 h-4" />
      </button>
      <button className="p-2 bg-primary rounded">
        <img src={Forward} alt="Forward" className="w-4 h-4" />
      </button>
      <button className="p-2 bg-primary rounded">
        <img src={Shuffle} alt="Shuffle" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PlayControls;
