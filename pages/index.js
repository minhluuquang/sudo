import { useState } from 'react';
import Layout from '../components/Layout';
import Controller from '../components/Controller';
import Player from '../components/Player';
import { moods } from '../constant/moods';

const Index = () => {
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [songIndex, setSongIndex] = useState(0);
  const [moodIndex, setMoodIndex] = useState(0);

  const mood = moods[moodIndex];
  const playlist = mood?.playlists?.[playlistIndex];
  const song = playlist?.songs?.[songIndex];

  return (
    <Layout>
      <div className="flex items-center">
        <Controller
          moods={moods}
          mood={mood}
          playlist={playlist}
          song={song}
          playlistIndex={playlistIndex}
          setPlaylistIndex={setPlaylistIndex}
          songIndex={songIndex}
          setSongIndex={setSongIndex}
          moodIndex={moodIndex}
          setMoodIndex={setMoodIndex}
        />
        <Player
          id={song?.id}
          setSongIndex={setSongIndex}
          songIndex={songIndex}
        />
      </div>
    </Layout>
  );
};

export default Index;
