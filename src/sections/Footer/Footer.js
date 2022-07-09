import React from 'react'
import './Footer.css'
import mec_logo from '../../assets/logos/mec_logo.a06dac18.png'
// import insta from '../../assets/logos/Instagram_icon.png.webp'
import {AiFillLinkedin,AiFillMail} from 'react-icons/ai'
// import FiPhoneCall from 'react-icons/fi'
// import BiPhoneCall from 'react-icons/bi'
// import linkedin from '../../assets/logos/linkedin-modified.png'
const Footer = () => {
  return (
    <div className='footer_main'>
      <footer>
<svg viewBox="0 0 120 28">
 <defs> 
   <mask id="xxx">
     <circle cx="7" cy="12" r="40" fill="#fff" />
   </mask>
   
   <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
  	</filter>
    
    <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
  </defs> 
  

   <use id="wave3" class="wave" xlinkHref="#wave" x="0" y="-2" ></use> 
   <use id="wave2" class="wave" xlinkHref="#wave" x="0" y="0" ></use>
  
  <div class="topball">
    <img alt="" class="ball" src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/arrow_up_alt1-512.png" width="50"/>
  </div> 
  
  <circle class="drop drop1" cx="20" cy="2" r="1.8"  />
  <circle class="drop drop2" cx="25" cy="2.5" r="1.5"  />
  <circle class="drop drop3" cx="16" cy="2.8" r="1.2"  />
  
  <use id="wave1" class="wave" xlinkHref="#wave" x="0" y="1" />
</svg> 
<div className='footer_content'>
  <div className="footer_icons">
  <img className="mec_logo" src={mec_logo} alt="mec logo" />
    <div className="social_icons">
      <div className="social_icon"><AiFillLinkedin/></div>
      <div className="social_icon"><AiFillMail /></div>
      <div className="social_icon"><AiFillMail /></div>
      <div className="social_icon"><AiFillMail /></div>
      <div className="social_icon"><AiFillMail /></div>
    </div>
    <img className='excel_logo' src="https://excel2021.pages.dev/static/media/logo.ee29f767.svg" alt="" />
  </div>
<p>Made with ❤️ Excel 2022</p>
    
</div>
  
</footer>
    </div>
  )
}

export default Footer