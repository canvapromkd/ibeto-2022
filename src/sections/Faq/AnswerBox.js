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


          {/* bubbles */}
          <div class="bubble-holder"> 
  <div class="bubble-1 bubble-container bubble-animation-x">
    <div class="bubble-large bubble-animation-y"></div>
  </div>

  <div class="bubble-2 bubble-container bubble-animation-x">
    <div class="bubble-large bubble-animation-y"></div>
  </div>

  <div class="bubble-3 bubble-container bubble-animation-x">
    <div class="bubble-large bubble-animation-y"></div>
  </div>
  
  <div class="bubble-4 bubble-container bubble-animation-x">
    <div class="bubble-small bubble-animation-y"></div>
  </div>
  
   <div class="bubble-5 bubble-container bubble-animation-x">
    <div class="bubble-small bubble-animation-y"></div>
  </div>
  
   <div class="bubble-6 bubble-container bubble-animation-x">
    <div class="bubble-small bubble-animation-y"></div>
  </div>
  
  <div class="bubble-7 bubble-container bubble-animation-x">
    <div class="bubble-small bubble-animation-y"></div>
  </div>
  
  <div class="bubble-8 bubble-container bubble-animation-x">
    <div class="bubble-small bubble-animation-y"></div>
  </div>
  
   
   
</div>
{/* bubble ends */}

{/* wave starts */}
<div class="faq__ocean">
  <div class="faq__wave faq__wave1 "></div>
  <div class="faq__wave faq__wave2"></div>
  {/* <div class="faq__wave faq__wave3"></div>
  <div class="faq__wave faq__wave4"></div> */}
</div>
{/* wave ends */}

        </div>
        
    </>
  )
}

export default AnswerBox