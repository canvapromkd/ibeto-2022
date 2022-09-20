import React, { useState } from 'react'
import { useEffect } from 'react'
import './Faq.css'
import { faqs_data } from './faqData'
import AnswerBox from './AnswerBox'
import Aos from 'aos'
const Faq = () => {
  const[faqs,setFaq]=useState([])
  const [isActive, setIsActive] = useState(1)
  const[currentAnswer,setCurrentAnswer]=useState("No. You can register for IBeTo 2022 free of cost.")
  useEffect(()=>{
    setFaq(faqs_data)
    Aos.init({ duration: 1100 });
  },[])
 
  return (
    <div id="faq">
    
      <div className="faq__parent">
      <div className="ps__header">FAQs</div>
      <div className="faq__child__container">
        <div className="faq__child1">
           
            <div  className="faq__questions"  data-aos="zoom-in">
            {faqs.map((faq)=>{
                return(
                  <div key={faq.id} className={isActive === faq.id? 'isActive faq__question' : 'faq__question'} onClick={()=>{setIsActive(faq.id);setCurrentAnswer(faq.answer);}}>{faq.question}</div>
                )
              })}
              </div>
        </div>
        <AnswerBox currentAnswer={currentAnswer}/>
        </div>
      </div>
    </div>
  )
}

export default Faq