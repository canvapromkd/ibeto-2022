import React, { useEffect } from 'react'
import  './Faq.css'
import Aos from 'aos'
import { useState } from 'react'
const Faq = () => {
   const[ac1,setAc1]=useState(false)
   const[ac2,setAc2]=useState(false)
   const[ac3,setAc3]=useState(false)
   const[ac4,setAc4]=useState(false)
   const[ac5,setAc5]=useState(false)
   const[ac6,setAc6]=useState(false)

   useEffect(()=>{
      Aos.init({ duration: 1500 });
  },[])
   
  return (
    <div className="faq__maindiv">
        <div className="faqtitle" data-aos="fade-up">FAQ</div>

        <div className="container">
         <div className="accordion">
            <div data-aos="fade-up" data-aos-delay='50' className="accordion-item">
               <button onClick={()=>{setAc1(!ac1)}}  id="accordion-button-1" aria-expanded={ac1}>
                  <span className="accordion-title">1.   Lorem ipsum dolor sit amet, consectetur ?</span>
                  <span className="icon" aria-hidden='true'></span>
               </button>
               <div className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
               
            </div>

            <div data-aos="fade-up" data-aos-delay='100' className="accordion-item">
               <button onClick={()=>{setAc2(!ac2)}} id="accordion-button-2" aria-expanded={ac2}>
                  <span className="accordion-title">2.   Lorem ipsum dolor sit amet, consectetur ?</span>
                  <span className="icon" aria-hidden='true'></span>
               </button>
               <div className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-delay='150' className="accordion-item">
               <button onClick={()=>{setAc3(!ac3)}} id="accordion-button-3" aria-expanded={ac3}>
                  <span className="accordion-title">3.   Why is sky blue ?</span>
                  <span className="icon" aria-hidden='true'></span>
               </button>
               <div className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-delay='200' className="accordion-item">
               <button onClick={()=>{setAc4(!ac4)}} id="accordion-button-4" aria-expanded={ac4}>
                  <span className="accordion-title">4.   Lorem ipsum dolor sit amet, consectetur ?</span>
                  <span className="icon" aria-hidden='true'></span>
               </button>
               <div className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-delay='250' className="accordion-item">
               <button onClick={()=>{setAc5(!ac5)}} id="accordion-button-5" aria-expanded={ac5}>
                  <span className="accordion-title">5.   Why is sky blue ?</span>
                  <span className="icon" aria-hidden='true'></span>
               </button>
               <div className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-delay='300' className="accordion-item">
               <button onClick={()=>{setAc6(!ac6)}} id="accordion-button-6" aria-expanded={ac6}>
                  <span className="accordion-title">6.   Why is sky blue ?</span>
                  <span className="icon" aria-hidden='true'></span>
               </button>
               <div data-aos="fade-up" className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Faq