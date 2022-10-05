import React, { useEffect } from "react";
import "./Collaborators.css";
import collab_bg from "../../assets/svg/Collab_Bckg.svg";
import tinkerHub from "../../assets/svg/TinkerHub.svg";
import TMLogo from "../../assets/svg/TMLogo.svg";
import UKExpress from "../../assets/svg/UKExpress.svg";
import INDBLogo from "../../assets/svg/INBDLogo.svg";
import Aos from "aos";
import club_fm from '../../assets/svg/collaborators/club_fm.svg'
import mg from '../../assets/svg/collaborators/makergram.svg'
const Collaborators = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div className="collaborators">
      <img src={collab_bg} alt="bckg" className="bckg"></img>
      <div className="collab-container">
        <div className="ps__header">Collaborators</div>
        <div className="collab-images">
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="collab-section"
          >
            <img
              src={UKExpress}
              alt="UKExpress-Logo"
              className="c-images"
            ></img>
            <p>UK Express</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="collab-section"
          >
            <img
              src={tinkerHub}
              alt="UKExpress-Logo"
              className="c-images"
            ></img>
            <p>TinkerHub</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="250"
            className="collab-section"
          >
            <img src={INDBLogo} alt="UKExpress-Logo" className="c-images"></img>
            <p>Interview Buddy</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="collab-section"
          >
            <img src={TMLogo} alt="UKExpress-Logo" className="c-images"></img>
            <p>Techmaghi</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="collab-section"
          >
            <img
              src={club_fm}
              alt="UKExpress-Logo"
              className="c-images"
            ></img>
            <p>Club FM</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="collab-section"
          >
            <img
              src={mg}
              alt="UKExpress-Logo"
              className="c-images"
            ></img>
            <p>MakerGram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
