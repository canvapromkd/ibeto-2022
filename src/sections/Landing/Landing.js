import React from 'react'
import Lottie from 'react-lottie'
import animation from '../../animations/landing.json'
import './Landing.css'
const Landing = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
      <div className="landAnime">
      <Lottie 
	    options={defaultOptions}
      />
      </div>
      
    </div>
  )
}

export default Landing