import React, { useEffect } from 'react'
import './Faq.css'
import Aos from 'aos'

const AnswerBox = ({currentAnswer}) => {
    useEffect(()=>{
        Aos.init({ duration: 800 });
    },[])
  return (
    <>
        <div data-aos="zoom-in" className="faq__child2">
          <div data-aos="zoom-in" className="faq__answer__title">ANSWER</div>
          <div data-aos="zoom-in" className="faq__answer__content">{currentAnswer}</div>
        </div>
        
    </>
  )
}

export default AnswerBox