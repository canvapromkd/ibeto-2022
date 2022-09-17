import React, { useState } from 'react'
import { useEffect } from 'react'
import './Faq.css'
import { faqs_data } from './faqData'
import AnswerBox from './AnswerBox'
import Aos from 'aos'
const Faq = () => {
  const[faqs,setFaq]=useState([])
  const[currentAnswer,setCurrentAnswer]=useState("IBeTo 2022")
  useEffect(()=>{
    setFaq(faqs_data)
    Aos.init({ duration: 800 });
  },[])
 
  return (
    <>
    
      <div className="faq__parent">
      <div className="faq__title">FAQ</div>
      <div className="faq__child__container">
        <div className="faq__child1">
           
            <div  className="faq__questions">
              {faqs.map((faq)=>{
                return(
                  <div data-aos="zoom-in" className="faq__question " onClick={()=>{setCurrentAnswer(faq.answer)}}>{faq.question}</div>
                )
              })}
              </div>
        </div>
        <div className='faq__ansbox__container'><AnswerBox currentAnswer={currentAnswer}/></div>
        </div>
      </div>
    </>
  )
}

export default Faq