import React from 'react'
import Lottie from 'react-lottie'
import animation from '../../animations/landing.json'
const Loader = () => {
    const loaderAnimation={
        loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
};
  return (
    <div>
        <Lottie options={loaderAnimation}/>
    </div>
  )
}

export default Loader