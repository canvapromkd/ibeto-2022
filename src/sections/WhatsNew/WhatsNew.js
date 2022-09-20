import React, { useEffect } from "react";
import { RiLightbulbFlashLine } from "react-icons/ri";
import WhatsNewCard from "./WhatsNewCard";
import "./WhatsNew.css";
import Aos from "aos";

const whatsNewData = [
  {
    id: 1,
    text: "Separate Tracks",
    icon: <RiLightbulbFlashLine className="wn__icon" />,
  },
  {
    id: 2,
    text: "Aid To The Contestants",
    icon: <RiLightbulbFlashLine className="wn__icon" />,
  },
  {
    id: 3,
    text: "Incentives During Project Development",
    icon: <RiLightbulbFlashLine className="wn__icon" />,
  },
  {
    id: 4,
    text: "Community Representations",
    icon: <RiLightbulbFlashLine className="wn__icon" />,
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
