import React from 'react'
import temp_svg from '../../assets/svg/temp_svg.svg'

function WhyParticipateCard(props) {
  return (
    <div className='whyParticipateCard'>
        <div className='wpc__img'>
            <img src={temp_svg} alt="wpcimg" />
        </div>
        <div className='wpc__content'>
          <p> {props.content} </p>
        </div>
    </div>
  )
}

export default WhyParticipateCard