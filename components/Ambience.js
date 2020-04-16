import { useState, useRef } from 'react';
import classnames from 'classnames';
import { Slider } from 'antd';

const setVolume = (value, id, setVolumeNumber) => {
  let audio = document.getElementById(id);
  audio.volume = value;
  setVolumeNumber(Math.round(value * 100));
};

const Ambience = (props) => {
  const [volumeNumber, setVolumeNumber] = useState(100);
  const [enable, setEnable] = useState(false);

  return (
    <>
      <audio id={props.name} src={props.src} loop muted={!enable} autoPlay />
      <div
        className={`flex items-center pt-8 cursor-pointer select-none ${
          enable ? 'text-secondary' : 'text-grey'
        }`}
        onClick={() => {
          setEnable(!enable);
        }}
      >
        <props.icon className={classnames(props.iconClass)} />
        {props.name}
        <div className="ml-auto">{`${volumeNumber}%`}</div>
      </div>
      <Slider
        tooltipVisible={false}
        disabled={!enable}
        defaultValue={100}
        onChange={(value) =>
          setVolume(value / 100, props.name, setVolumeNumber)
        }
      ></Slider>
    </>
  );
};

export default Ambience;
