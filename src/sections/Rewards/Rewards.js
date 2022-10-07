import React, { useEffect } from "react";
import "./Rewards.css";
import Aos from "aos";
const Rewards = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div className="rewards_main" id="rewards">
      <div data-aos="zoom-in" className="rewards_container">
        <div className="reward_title">Rewards</div>
        <div className="reward_price_box">
          <p>Prizes Worth</p>
          <span className="reward_money">₹1,00,000</span>
          {/* <div><p>for the first three teams</p></div> */}
        </div>
        <div className="rewards_list">
          <ul>
            <li className="reward_list_item">
              Internship opportunities for selected participants.
            </li>
            <li className="reward_list_item">
              Certificate of Participation for all Teams upon submission of
              their detailed abstract.
            </li>
            <li className="reward_list_item">
              As per KTU regulations, socially relevant projects can avail upto
              50 activity points.
            </li>
            <li className="reward_list_item">
              Exclusive perks for all the 30 shortlisted teams.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
