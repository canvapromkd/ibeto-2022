import Aos from 'aos';
import './Navbar.css'
import { useState, React } from "react";
import { Drawer } from "@mui/material";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
const Navbar = () => {
  useEffect(()=>{
    Aos.init({duration:1100})
  })
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className="navbar_1">
      <div className="nav__desktop">
      
        <Link data-aos="zoom-in" to="/" className="nav_title__logo" >
              <img src="https://ibeto.excelmec.org/static/media/ibetologo.89112a3a.svg" alt="" />
        </Link>
        <div className="navbar_items">
          <Link data-aos="zoom-in" to="/ideas" className="nav_item">
            Home
          </Link>
          <Link data-aos="zoom-in" to="/projects" className="nav_item">
            About
          </Link>
          <Link data-aos="zoom-in" to="/developers" className="nav_item">
            Speakers
          </Link>
          <Link data-aos="zoom-in" to="/developers" className="nav_item">
            Schedule
          </Link>
          <Link data-aos="zoom-in" to="/developers" className="nav_item">
            Sponsors
          </Link>
          <Link data-aos="zoom-in" to="/developers" className="nav_item">
            FAQ
          </Link>
        </div>
        
      </div>

      <div className="nav__mob">
        <div className="nav__mob_container">
          
          <button className="nav_btn" onClick={handleDrawerOpen}>
            <HiOutlineMenuAlt3 className="hamburger" />
          </button>
        </div>
      </div>
      <Drawer
        open={open}
        onClick={handleDrawerClose}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
      >
        <div className="nav__drawer">
          <div className="nav__drawer_header">
            
            <div className="navbar_items_mob"  data-aos="fade-right"
              data-aos-duration="600">
                
              <Link to="/" className="nav_item_mob" onClick={handleDrawerClose}>
                Home
              </Link>
              <Link
                to="/projects"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                About
              </Link>
              <Link
                to="/"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                Speakers
              </Link>
              <Link
                to="/"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                Schedule
              </Link>
              <Link
                to="/"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                Sponsors
              </Link>
              <Link
                to="/"
                className="nav_item_mob"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                FAQ
              </Link>
            </div>
          </div>
          <a href="/" target="_blank" rel="noreferrer" >
            <img src='https://ibeto.excelmec.org/static/media/ibetologo.89112a3a.svg' alt="" className="ibetologo__mob" />
          </a>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar