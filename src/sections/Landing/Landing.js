import React from 'react'
import './Landing.css'
import ibeto_21 from '../../assets/video/ibeto 21.mp4'
import Aos from 'aos'
import { useEffect } from 'react'
const Landing = () => {
  useEffect(()=>{
    Aos.init({duration:1100})
  },[])
  return (
    <div className='landing_main'>
      <div data-aos="zoom-in">
        <video className='video_container' autoPlay loop muted playsInline>
          <source src={ibeto_21} type='video/Mp4'/>
        </video>
      </div>
    </div>
  )
}

export default Landing