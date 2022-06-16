import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      Logo
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="//github.io/jo_geek" rel="noreferrer" target="_blank">Home</a>
    <a href="http://stackoverflow.com/users/4084003/" rel="noreferrer" target="_blank">About</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" rel="noreferrer" target="_blank">Speakers</a>
    <a href="https://codepen.io/jo_Geek/" rel="noreferrer" target="_blank">Schedule</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" rel="noreferrer" target="_blank">Sponsors</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" rel="noreferrer" target="_blank">FAQs</a>
  </div>
</div>
    </div>
  )
}

export default Navbar