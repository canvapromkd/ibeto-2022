import React, { useEffect } from "react";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaIdBadge } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import WhatsNewCard from "./WhatsNewCard";
import "./WhatsNew.css";
import Aos from "aos";

const whatsNewData = [
  {
    id: 1,
    text: "Separate Tracks",
    desc: "Two tracks - one each for software and hardware, promoting both aspects of technology.",
    icon: <RiLightbulbFlashLine className="wn__icon" />,
  },
  {
    id: 2,
    text: "Aid To The Contestants",
    desc: "Top teams will have access to premium workshops and internship opportunities.",
    icon: <FaIdBadge className="wn__icon" />,
  },
  {
    id: 3,
    text: "Incentives During Project Development",
    desc: "Advancing teams will have the opportunity to seek individualised help and feedback from field experts.",
    icon: <AiOutlineDollarCircle className="wn__icon" />,
  },
  {
    id: 4,
    text: "Community Representations",
    desc: "Any organization/club in any college can compete by registering a team that represents them.",
    icon: <IoIosPeople className="wn__icon" />,
  },
];

function WhatsNew() {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  });
  return (
    <div className="whatsNew" id="whatsNew">
      <div className="whatsNew__comntainer">
        <h1 className="ps__header">What's New</h1>

        <div className="whatsNew__cards" data-aos="zoom-out">
          {whatsNewData.map((wn) => (
            <WhatsNewCard
              key={wn.id}
              id={wn.id}
              text={wn.text}
              icon={wn.icon}
              desc={wn.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
