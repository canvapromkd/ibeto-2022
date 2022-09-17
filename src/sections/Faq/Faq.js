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
    Aos.init({ duration: 1100 });
  },[])
 
  return (
    <>
    
      <div className="faq__parent">
      <div className="ps__header">FAQs</div>
      <div className="faq__child__container">
        <div className="faq__child1">
           
            <div  className="faq__questions"  data-aos="zoom-in">
              {faqs.map((faq)=>{
                return(
                  <div className="faq__question " onClick={()=>{setCurrentAnswer(faq.answer)}}>{faq.question}</div>
                )
              })}
              </div>
        </div>
        <AnswerBox currentAnswer={currentAnswer}/>
        </div>
      </div>
    </>
  )
}

export default Faq