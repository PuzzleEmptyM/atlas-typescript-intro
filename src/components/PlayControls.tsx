import React, { useState } from 'react';
import back from '../assets/rewind.png';
import playIcon from '../assets/play.png';
import pauseIcon from '../assets/pause.png';
import forward from '../assets/fast-forward.png';
import shuffle from '../assets/loop.png';

interface PlayControlsProps {
  currentSongIndex: number;
  totalSongs: number;
  onPrevSong: () => void;
  onNextSong: () => void;
}

const PlayControls: React.FC<PlayControlsProps> = ({ currentSongIndex, totalSongs, onPrevSong, onNextSong }) => {
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  // Toggle between 1x, 2x, 3x speed
  const handleSpeedChange = () => {
    setSpeed(prevSpeed => (prevSpeed === 3 ? 1 : prevSpeed + 1));
  };

  // Toggle play and pause
  const handlePlayPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  // Toggle shuffle mode
  const handleShuffleToggle = () => {
    setIsShuffling(prevIsShuffling => !prevIsShuffling);
    console.log("Shuffle Toggled:", !isShuffling); // Check if it toggles
  };
  

  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Speed Button */}
      <button className="p-2 bg-primary rounded" onClick={handleSpeedChange}>
        {speed}x
      </button>

      {/* Back Button */}
      <button 
        className="p-2 bg-primary rounded" 
        onClick={onPrevSong} 
        disabled={currentSongIndex === 0}
      >
        <img src={back} alt="Rewind" className="w-4 h-4" />
      </button>

      {/* Play Button */}
      <button className="p-2 bg-primary rounded border-2 border-gray-500" onClick={handlePlayPause}>
        <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? "Pause" : "Play"} className="w-4 h-4" />
      </button>

      {/* Forward Button */}
      <button 
        className="p-2 bg-primary rounded" 
        onClick={onNextSong} 
        disabled={currentSongIndex === totalSongs - 1}
      >
        <img src={forward} alt="Forward" className="w-4 h-4" />
      </button>

      {/* Shuffle Button */}
      <button 
        className={`p-2 rounded ${isShuffling ? 'bg-green-200' : 'bg-primary'}`} 
        onClick={handleShuffleToggle}>
        <img src={shuffle} alt="Shuffle" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PlayControls;
