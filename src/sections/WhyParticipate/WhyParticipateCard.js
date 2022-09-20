import React from 'react'

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