import React from 'react'

import temp_svg from '../../assets/svg/temp_svg.svg'

function WhyParticipateCard() {
  return (
    <div className='whyParticipateCard'>
        <div className='wpc__img'>
            <img src={temp_svg} alt="" />
        </div>
        <div className='wpc__content'>
          <p>  Carefully set project development structure that spans over 5-months. </p>
        </div>
    </div>
  )
}

export default WhyParticipateCard