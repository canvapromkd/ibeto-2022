import React from 'react'
import './Landing.css'
import ibeto_21 from '../../assets/video/ibeto 21.mp4'
const Landing = () => {
  return (
    <div className='landing_main'>
      <div className="video_container">
        <video autoPlay loop muted playsInline>
          <source src={ibeto_21} type='video/Mp4'/>
        </video>
      </div>
    </div>
  )
}

export default Landing