import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { RiBallPenLine } from "react-icons/ri";
import Aos from "aos";
import "./Eventformat.css";

import line1 from "../../assets/svg/line1.svg";
import line2 from "../../assets/svg/line2.svg";
import { useEffect } from "react";

const Eventformat = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div data-aos="zoom-out" className="eventformat" id="format">
      <div className="eventformat__container">
        <h1 data-aos="zoom-in" className="ps__header">
          Event format
        </h1>

        <div className="eventformat__cards">
          <div className="eventFormatCard efc1">
            <div className="efc_icon_div">
              <IoBulbOutline className="efc_icon" />
            </div>
            <h2>Ideate</h2>
            <p>
              The participating teams will be shortlisted in a sequence of two
              rounds based on the following criteria <br />
              Round 1: Idea Submission <br />
              Round 2: Submission of detailed abstract of the project
              <br />
              The top 30 scoring teams will advance to the next phase.
            </p>
          </div>
          <img src={line1} alt="linevect" className="line1" />
          <div className="eventFormatCard">
            <div className="efc_icon_div">
              <RiBallPenLine className="efc_icon" />
            </div>
            <h2>Create</h2>
            <p>
              Throughout this phase, the top 30 teams will construct their
              projects and be continually assessed via project reports.
              Participants will be able to seek guidance from a panel of
              experts.
            </p>
          </div>
          <img src={line2} alt="linevect" className="line2" />
          <div className="eventFormatCard efc3">
            <div className="efc_icon_div">
              <HiOutlineVideoCamera className="efc_icon" />
            </div>
            <h2>Showcase</h2>
            <p>
              On the event's finale, the teams must submit a video presentation of their
              concept and demonstrate a functional prototype to the judges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventformat;
