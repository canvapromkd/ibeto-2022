import React from 'react'
import './WhatsNew.css'
function WhatsNewCard({ id, text, icon }) {
  return (
    <div className={`${id%2 === 0 ? 'whatsNewCard ty' : 'whatsNewCard'}`}>
        <div className='wnc_icon'>
            {icon}
        </div>
        <div className='wnc_content'>
            {text}
        </div>
    </div>
  )
}

export default WhatsNewCard