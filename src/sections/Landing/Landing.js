import React from 'react'
import './Landing.css'
import Lottie from 'react-lottie'
import landanim from '../../animations/Sunflowers.json'
const Landing = () => {
  const landAnimation = {
    loop: true,
    autoplay: true,
    animationData: landanim,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <div className='landing'>
      <Lottie 
            animationData={landanim}
            loop={true}
            autoPlay={true}
            options={landAnimation} 
          /> 
    </div>
  )
}

export default Landing