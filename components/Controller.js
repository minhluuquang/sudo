import { useState } from 'react';
import MoodButton from './MoodButton';
import Ambience from './Ambience';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { FiCoffee } from 'react-icons/fi';
import { WiRain } from 'react-icons/wi';
import { FaWater } from 'react-icons/fa';

const ambienceList = [
  {
    name: 'Coffee House',
    icon: FiCoffee,
    iconClass: 'mr-3',
    src: '/coffee.mp3',
  },
  {
    name: 'Summer Rain',
    icon: WiRain,
    iconClass: 'text-xl -ml-1 mr-2',
    src: '/rain.mp3',
  },
  {
    name: 'Sea Waves',
    icon: FaWater,
    iconClass: 'mr-3',
    src: '/wave.mp3',
  },
];

const Controller = (props) => {
  const PlaylistStyle = {
    height: '100vh',
    marginBottom: 80,
    transitionProperty: 'width, left',
    transitionDuration: '0.3s, 0.3s',
    transitionTimingFunction: 'ease, ease',
    transitionDelay: '0s, 0s',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  };

  const AmbienceStyle = {
    width: '100%',
    transitionProperty: 'height, top',
    transitionDuration: '0.3s, 0.3s',
    transitionTimingFunction: 'ease, ease',
    transitionDelay: '0s, 0s',
    whiteSpace: 'nowrap',
    overflow: 'auto',
  };

  const [isOpen, setOpen] = useState(true);
  const [isOpenAmbience, setOpenAmbience] = useState(true);

  PlaylistStyle.width = isOpen ? 380 : 0;
  AmbienceStyle.height = isOpenAmbience ? 380 : 40;

  return (
    <>
      <div className="flex items-center" style={{ width: 380 }}>
        <img
          onClick={() => {
            setOpen(!isOpen);
          }}
          src={isOpen ? 'playlist-icon-selected.svg' : 'playlist-icon.svg'}
        />
        <div className="mx-4">
          <p className="text-white mb-0">{props.song?.name}</p>
          <p className="text-grey mb-0">{`Playlist: ${props.playlist?.name}`}</p>
        </div>
      </div>
      <div style={PlaylistStyle} className="bg-white absolute left-0 bottom-0">
        <div style={{ marginTop: 96 }} className="m-4">
          <div style={AmbienceStyle}>
            <div className="flex justify-between items-center text-xl sticky top-0 bg-white z-10">
              <p className="mb-0 uppercase">ambience</p>
              {isOpenAmbience ? (
                <AiOutlineDown
                  onClick={() => {
                    setOpenAmbience(!isOpenAmbience);
                  }}
                ></AiOutlineDown>
              ) : (
                <AiOutlineRight
                  onClick={() => {
                    setOpenAmbience(!isOpenAmbience);
                  }}
                ></AiOutlineRight>
              )}
            </div>
            {ambienceList.map((a) => (
              <Ambience
                key={a.name}
                icon={a.icon}
                name={a.name}
                iconClass={a.iconClass}
                src={a.src}
              />
            ))}
          </div>
          <div>
            {props.moods.map((m, i) => {
              return (
                <MoodButton
                  isSelected={i === props.moodIndex ? true : false}
                  name={m.name}
                  key={m.name}
                  onClick={() => {
                    props.setMoodIndex(i);
                  }}
                />
              );
            })}
          </div>

          <p className="text-grey uppercase my-6">{`// mood {${props.mood?.name}}`}</p>

          <div className="my-6">
            <p>{`Playlist: ${props.playlist?.name}`}</p>
          </div>

          <lu className="list-none">
            {props.playlist?.songs?.map((s, i) => {
              return (
                <li
                  key={s.id}
                  className={`py-1 cursor-pointer ${
                    i === props.songIndex ? 'text-primary' : 'text-secondary'
                  }`}
                  onClick={() => {
                    props.setSongIndex(i);
                  }}
                >
                  {s.name}
                </li>
              );
            })}
          </lu>
        </div>
      </div>
    </>
  );
};

export default Controller;
