import React, { useState, useEffect } from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongId, setCurrentSongId] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist'
      );
      const data: Song[] = await response.json();
      setPlaylist(data);
      setCurrentSongId(data[0].id);
    };

    fetchPlaylist();
  }, []);

  const currentSongIndex = playlist.findIndex(song => song.id === currentSongId);

  const handleSongSelect = (id: number) => {
    setCurrentSongId(id);
  };

  const handlePrevSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongId(playlist[currentSongIndex - 1].id);
    }
  };

  const handleNextSong = () => {
    if (isShuffling) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentSongId(playlist[randomIndex].id);
    } else if (currentSongIndex < playlist.length - 1) {
      setCurrentSongId(playlist[currentSongIndex + 1].id);
    }
  };

  const handleShuffleToggle = () => {
    setIsShuffling(prevIsShuffling => !prevIsShuffling);
  };

  const currentSong = playlist.find(song => song.id === currentSongId);

  return (
    <div className="flex bg-secondary self-center mt-12 flex-col md:flex-row shadow-2xl">
      <div className="p-3 flex-1">
        {/* Pass the currently playing song to the CurrentlyPlaying component */}
        {currentSong && (
          <CurrentlyPlaying
            song={currentSong}
            currentSongIndex={currentSongIndex}
            totalSongs={playlist.length}
            onPrevSong={handlePrevSong}
            onNextSong={handleNextSong}
            onShuffleToggle={handleShuffleToggle}
            isShuffling={isShuffling}
          />
        )}
      </div>
      <div className="p-3 flex-1 relative">
        {/* Pass the playlist, currentSongId, and onSongSelect to the Playlist component */}
        <Playlist
          playlist={playlist}
          currentSongId={currentSongId}
          onSongSelect={handleSongSelect}
        />
        <div className="absolute inset-0 flex md:flex-col">
          <div className="flex-1 border-slate-300 md:border-l border-t md:border-t-0"></div>
        </div>
      </div>
    </div>
  );
}
