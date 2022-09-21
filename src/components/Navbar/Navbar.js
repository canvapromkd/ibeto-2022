import React, { useState } from "react";
import "./Navbar.css";
import ibeto_logo from '../../assets/logos/ibetoLogo.svg'
const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  return (
    <div className="nav__main_container">
       <img className="nav__outside_logo" src={ibeto_logo} onClick={()=>{
        window.location.reload()
       }} alt="ibeto_logo" /> 
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
                <a href="#home">Home</a>
              </li>
              <li onClick={handleClick}>
                <a href="#about">About</a>
              </li>
              <li onClick={handleClick}>
                <a href="#format">Event Format</a>
              </li>
              <li onClick={handleClick}>
                <a href="#problem">Problem Statements</a>
              </li>
              <li onClick={handleClick}>
                <a href="#participate">Why Participate</a>
              </li>
              <li onClick={handleClick}>
                <a href="#whatsNew">Whats New</a>
              </li>
              <li onClick={handleClick}>
                <a href="#rewards">Rewards</a>
              </li>
              <li onClick={handleClick}>
                <a href="#timeline">Timeline</a>
              </li>
              <li onClick={handleClick}>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li onClick={handleClick}>
                <a href="#contact">Contact Us</a>
              </li>
              <li onClick={handleClick}>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
            <img onClick={()=>{window.location.reload()}}
              src={ibeto_logo}
              alt="ibeto-logo"
              style={{ height: "50%", width: "50%",cursor:'pointer' }}
            />
          </div>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Navbar;
