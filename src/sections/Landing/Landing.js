import React, { useState, useEffect, useRef } from "react";
import Aos from "aos";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

import "./Landing.css";
import ibeto_22 from "../../assets/video/New.mp4";

const Landing = () => {
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(true);

  const vidRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1100 });
    setMuted(false);
    // const interval = setInterval(()=> setMuted(false), 1000);
    // return () => clearInterval(interval)
  }, []);

  const handlePlay = () => {
    vidRef.current.play();
    setPaused(false)
  }
  const handlePause = () => {
    vidRef.current.pause();
    setPaused(true)
  }

  return (
    <div className="landing_main" id="home">
      {paused ? (
        <AiFillPlayCircle onClick={handlePlay} className="video_icon"/>
      ) : (
        <AiFillPauseCircle onClick={handlePause} className="video_icon"/>
      )}
      <div data-aos="zoom-in">
        <video ref={vidRef}  className="video_container" loop playsInline muted={muted}>
          <source src={ibeto_22} type="video/Mp4" />
        </video>
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default Landing;
