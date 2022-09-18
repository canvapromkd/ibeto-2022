import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  return (
    <div className="menu-wrap">
      {/* onChange={e => {}} is added to avoid an error msg in the console: ' You provided a `checked` prop to a form field without ........' */}
      <input
        type="checkbox"
        className="toggler"
        onClick={handleClick}
        checked={checked}
        onChange={(e) => {}}
      />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul style={{ padding: "0" }} className="overlay-content pt-2">
              <li onClick={handleClick}>
                <a href="#Home">Home</a>
              </li>
              <li onClick={handleClick}>
                <a href="#About">About</a>
              </li>
              <li onClick={handleClick}>
                <a href="#EventFormat">Event Format</a>
              </li>
              <li onClick={handleClick}>
                <a href="#ProblemStatement">Problem Statements</a>
              </li>
              <li onClick={handleClick}>
                <a href="#Rewards">Rewards</a>
              </li>
              <li onClick={handleClick}>
                <a href="#Timeline">Timeline</a>
              </li>
              <li onClick={handleClick}>
                <a href="#Contact">Contact Us</a>
              </li>
              <li onClick={handleClick}>
                <a href="#FAQ">Testimonials</a>
              </li>
              <li onClick={handleClick}>
                <a href="#FAQ">FAQ</a>
              </li>
            </ul>
            <img onClick={()=>{window.location.reload()}}
              src="https://ibeto.excelmec.org/static/media/ibetologo.89112a3a.svg"
              alt="ibeto-logo"
              style={{ height: "50%", width: "50%",cursor:'pointer' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
