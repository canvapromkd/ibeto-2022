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
                <a href="#Landing">Home</a>
              </li>
              <li onClick={handleClick}>
                <a href="#About">About</a>
              </li>
              <li onClick={handleClick}>
                <a href="#Eventformat">Event Format</a>
              </li>
              <li onClick={handleClick}>
                <a href="#ProblemStmt">Problem Statements</a>
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
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li onClick={handleClick}>
                <a href="#Faq">FAQ</a>
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
