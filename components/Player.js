import { useRef, useState, useEffect } from 'react';
import { Slider } from 'antd';
import YouTube from 'react-youtube';
import {
  FaSpinner,
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
} from 'react-icons/fa';
import { TiArrowShuffle } from 'react-icons/ti';
import { FiRepeat } from 'react-icons/fi';

function formatTime(seconds) {
  const format = (val) => `0${Math.floor(val)}`.slice(-2);
  const hours = seconds / 3600;
  const minutes = (seconds % 3600) / 60;

  return [hours, minutes, seconds % 60].map(format).join(':');
}

const opts = {
  height: '0',
  width: '0',
  playerVars: {
    autoplay: 1,
  },
};

const YT_STATE = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
};

const renderPlayButton = (state, ref) => {
  const classes = 'mx-4 cursor-pointer text-white';
  switch (state) {
    case YT_STATE.PLAYING:
      return (
        <FaPause
          className={classes}
          onClick={() => {
            ref.current.internalPlayer.pauseVideo();
          }}
        ></FaPause>
      );
    case YT_STATE.PAUSED:
      return (
        <FaPlay
          className={classes}
          onClick={() => {
            ref.current.internalPlayer.playVideo();
          }}
        ></FaPlay>
      );
    default:
      return (
        <FaSpinner className="pointer-events-none mx-4 text-white icon-spin"></FaSpinner>
      );
  }
};

const udpateProgressBar = (ref, setCurrentTime) => {
  ref.current?.internalPlayer.getCurrentTime().then((data) => {
    setCurrentTime(data);
  });
};

const Player = (props) => {
  const ref = useRef();

  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [ytState, setYtState] = useState(YT_STATE.UNSTARTED);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // update progress bar
      udpateProgressBar(ref, setCurrentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [props.id]);

  const onStateChange = (event) => {
    if (event.data === YT_STATE.ENDED) {
      props.setSongIndex(props.songIndex + 1);
      setCurrentTime(0);
      setDuration(0);
      return;
    }
    setYtState(event.data);
  };

  ref.current?.internalPlayer.getDuration().then((data) => setDuration(data));

  return (
    <>
      <YouTube
        ref={ref}
        videoId={props.id}
        opts={opts}
        onStateChange={onStateChange}
      />
      <div className="flex flex-grow">
        <div className="flex items-center flex-grow">
          <FiRepeat
            className={`mx-4 cursor-pointer ${
              isRepeat ? 'text-primary' : 'text-white'
            }`}
            onClick={() => {
              setIsRepeat(!isRepeat);
            }}
          />
          <FaStepBackward
            className="mx-4 cursor-pointer text-white"
            onClick={() => {
              props.setSongIndex(props.songIndex - 1);
              setCurrentTime(0);
              setDuration(0);
            }}
          />
          {renderPlayButton(ytState, ref)}
          <FaStepForward
            className="mx-4 cursor-pointer text-white"
            onClick={() => {
              props.setSongIndex(props.songIndex + 1);
              setCurrentTime(0);
              setDuration(0);
            }}
          />
          <TiArrowShuffle
            className={`mx-4 cursor-pointer text-xl ${
              isShuffle ? 'text-primary' : 'text-white'
            }`}
            onClick={() => {
              setIsShuffle(!isShuffle);
            }}
          />
          <Slider
            min={0}
            max={duration}
            onChange={(value) => {
              ref.current?.internalPlayer.seekTo(value);
            }}
            tooltipVisible={false}
            value={currentTime}
            className="flex-grow mx-6 text-primary"
          />
          <p className="text-white mb-0 mx-6">
            {formatTime(duration - currentTime)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Player;
