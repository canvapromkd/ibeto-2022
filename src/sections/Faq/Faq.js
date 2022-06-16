import React, { useEffect } from 'react'
import  './Faq.css'
import Aos from 'aos'
const Faq = () => {
   const items=document.querySelectorAll('.accordion button');

   useEffect(()=>{
      Aos.init({ duration: 1500 });
  },[])
   function toggleAccordion(){
      const itemToggle=this.getAttribute('aria-expanded');
      for(const i=0;i<items.length;i++){
         items[i].setAttribute('aria-expanded','false')
      }
      if(itemToggle===false){
         this.setAttribute('aria-expanded','true')
      }
   }
   items.forEach((item)=>item.addEventListener('click',toggleAccordion))
  return (
    <div className="faq__maindiv">
        <div className="faqtitle" data-aos="fade-up">FAQ</div>

        <div className="container">
         <div className="accordion">
            <div data-aos="fade-up" data-aos-delay='100' className="accordion-item">
               <button id="accordion-button-1" aria-expanded="false">
                  <span className="accordion-title">1.   Lorem ipsum dolor sit amet, consectetur ?</span>
                  <span  className="icon" aria-hidden='true'></span>
               </button>
               <div className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
            </div>

            <div data-aos="fade-up" data-aos-delay='200' className="accordion-item">
               <button id="accordion-button-2" aria-expanded="false">
                  <span className="accordion-title">2.   Lorem ipsum dolor sit amet, consectetur ?</span>
                  <span className="icon" aria-hidden='true'></span>
               </button>
               <div className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-delay='300' className="accordion-item">
               <button id="accordion-button-3" aria-expanded="false">
                  <span className="accordion-title">3.   Why is sky blue ?</span>
                  <span className="icon" aria-hidden='true'></span>
               </button>
               <div className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-delay='400' className="accordion-item">
               <button id="accordion-button-4" aria-expanded="false">
                  <span className="accordion-title">4.   Lorem ipsum dolor sit amet, consectetur ?</span>
                  <span className="icon" aria-hidden='true'></span>
               </button>
               <div className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-delay='500' className="accordion-item">
               <button id="accordion-button-5" aria-expanded="false">
                  <span className="accordion-title">5.   Why is sky blue ?</span>
                  <span className="icon" aria-hidden='true'></span>
               </button>
               <div className="accordion-content">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor fringilla viverra consectetur turpis purus dictum integer cras enim. Sed aliquam velit egestas volutpat molestie eget id. Nullam tristique semper.
                  </p>
               </div>
            </div>
            <div data-aos="fade-up" data-aos-delay='600' className="accordion-item">
               <button id="accordion-button-6" aria-expanded="false">
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