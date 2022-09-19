import React from 'react'
import { FiFacebook, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import './Footer.css'
import excel_logo from '../../assets/logos/excel2022.svg'
import footerBg from '../../assets/svg/footerBg.svg'
import mec_logo from '../../assets/logos/mec_logo.a06dac18.png'
const Footer = () => {
  return (
    <div className='footer__main'>
      <img src={footerBg} alt="" className='footerBg' />
      <div className="footer__logos">
        <a href='https://www.mec.ac.in/' target="_blank" rel="noreferrer">
          <img src={mec_logo} className="mec__logo"  alt="mec_logo" />
        </a>
        
        <div className='footer_mid'>
          <div className='footer_contact_social'>
            <a href="https://www.facebook.com/excelmec" target="_blank" rel="noreferrer">
              <FiFacebook style={{border:'none'}} className='contact_social_icon'/>
            </a>
            <a href="https://www.instagram.com/excelmec/" target="_blank" rel="noreferrer">
              <FiInstagram className='contact_social_icon'/>
            </a>
            <a href="https://www.linkedin.com/company/excelmec/" target="_blank" rel="noreferrer">
              <FiLinkedin className='contact_social_icon'/>
            </a>
            <a href="https://twitter.com/excelmec" target="_blank" rel="noreferrer">
              <FiTwitter className='contact_social_icon'/>
            </a>
          </div>

        </div>
        
        <a href='https://excelmec.org/' target="_blank" rel="noreferrer">
          <img src={excel_logo}className="excel__logo" alt="excel_logo" />
        </a>
      </div>
      <div className="footer__made">Made with ❤️ Excel 2022</div>
    </div>
  )
}

export default Footer