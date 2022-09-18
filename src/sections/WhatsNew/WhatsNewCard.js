import React, { useEffect, useState } from 'react'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import Aos from 'aos';
import './WhatsNew.css'
function WhatsNewCard({id, text, icon }) {
  useEffect(()=>{
    Aos.init({duration:1100})
  })
  const[bgColor,setBgColor]=useState('');
  useEffect(()=>{
    if(id===1){
      setBgColor('rgba(23, 201, 172, 0.4)')
    }
    else if(id===2){
      setBgColor('rgba(49, 196, 203, 0.71)')
    }
    else if(id===3){
      setBgColor('rgba(39, 138, 140, 0.2)')
    }
    else{
      setBgColor('rgba(49, 196, 203, 0.27)')
    }
  },[id])
  
  return (
    <div style={{backgroundColor:`${bgColor}`}} className={`${id%2 === 0 ? 'whatsNewCard ty' : 'whatsNewCard'} `}>
        <div  className='wnc_icon'>
        <RiLightbulbFlashLine className='wn__icon'/>
        </div>
        <div className='wnc_content'>
            {text}
        </div>
    </div>
  )
}

export default WhatsNewCard