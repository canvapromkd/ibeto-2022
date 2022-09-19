import React, { useEffect } from 'react'
import { RiLightbulbFlashLine } from "react-icons/ri";
import WhatsNewCard from './WhatsNewCard'
import './WhatsNew.css'
import Aos from 'aos';

const whatsNewData = [
    {
        id: 1,
        text: 'Fellowships powered by corporate companies.',
        icon: <RiLightbulbFlashLine className='wn__icon'/>
    },
    {
        id: 2,
        text: 'An opportunity to avail pre-incubation facilities to nurture your business model.',
        icon: <RiLightbulbFlashLine className='wn__icon'/>
    },
    {
        id: 3,
        text: 'A panel of experts to help you navigate if you’re stuck in your project journey.',
        icon: <RiLightbulbFlashLine className='wn__icon'/>
    },
    {
        id: 4,
        text: 'A unique chance to start with just an idea and grow it to fruition.',
        icon: <RiLightbulbFlashLine className='wn__icon'/>
    },
]

function WhatsNew() {
    useEffect(()=>{
        Aos.init({duration:1100})
    })
  return (
    <div className='whatsNew' id="whatsNew">
        
        <div className='whatsNew__comntainer' >
            <h1 className='ps__header'>What's New</h1>

            <div className='whatsNew__cards' data-aos="zoom-out">
                {whatsNewData.map((wn) => (
                    <WhatsNewCard 
                        key={wn.id}
                        id={wn.id}
                        text={wn.text}
                        icon={wn.icon}
                    />
                ))}
            </div>
        </div>

    </div>
  )
}

export default WhatsNew