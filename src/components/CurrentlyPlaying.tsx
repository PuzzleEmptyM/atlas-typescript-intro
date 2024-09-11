import React from 'react';
import CoverArt from './CoverArt';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';
import SongTitle from './SongTitle';

const CurrentlyPlaying = () => {
  return (
    <div className="flex  flex-col justify-center p-4">
      <CoverArt />
      <div className="mt-4">
        <SongTitle title="Painted in Blue" artist="Soul Canvas" />
      </div>
      <div className="mt-6">
        <PlayControls />
      </div>
      <div className="mt-4 w-full flex justify-center">
        <VolumeControl />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
