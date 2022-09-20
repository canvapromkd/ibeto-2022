import React from 'react'
import temp_svg from '../../assets/svg/temp_svg.svg'
import {GiProgression} from 'react-icons/gi'
function WhyParticipateCard(props) {
  return (
    <div className='whyParticipateCard'>
        <div className='wpc__img'>
           {props.icon}
            
        </div>
        <div className='wpc__content'>
          <p> {props.content} </p>
        </div>
    </div>
  )
}

export default WhyParticipateCard