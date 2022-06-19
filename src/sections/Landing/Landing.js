import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Lottie from 'react-lottie'
import animation from '../../animations/landing.json'
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
      <Navbar/>
      <Lottie 
	    options={defaultOptions}
        height={400}
        marginLeft={12}
        marginTop={12}
        width={400}
      />
    </div>
  )
}

export default Landing