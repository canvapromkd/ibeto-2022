import React from "react";
import "./Landing.css";
import ibeto_22 from "../../assets/video/New.mp4";
import Aos from "aos";
import { useEffect } from "react";
const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div className="landing_main" id="home">
      <div data-aos="zoom-in">
        <video className="video_container" autoPlay loop muted playsInline>
          <source src={ibeto_22} type="video/Mp4" />
        </video>
      </div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>
  );
};

export default Landing;
