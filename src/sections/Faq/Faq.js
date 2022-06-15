import React from 'react'
import  './Faq.css'
const Faq = () => {
  return (
    <div className="faq__maindiv">
        <div className="faqtitle">FAQ</div>
        <div id="faq">
         <div class="container-fluid faq">
            <div class="row">
               <div class="accordion col-sm-11 mr-4">
                  <div class="accordion-item content">
                     <button id="accordion-button-1" aria-expanded="false"><span class="accordion-title">Who can participate?</span><span class="icon" aria-hidden="true"></span></button>
                     <div class="accordion-content">
                        <p class="paddin">       All college students, both at the undergraduate & postgraduate level, are eligible to participate.</p>
                     </div>
                  </div>
                  <div class="accordion-item content">
                     <button id="accordion-button-2 " aria-expanded="false"><span class="accordion-title">What is the expected team size?</span><span class="icon" aria-hidden="true"></span></button>
                     <div class="accordion-content">
                        <p class="paddin" >Participants can join individually or form teams of up to maximum 4 members.</p>
                     </div>
                  </div>
                  <div class="accordion-item content">
                     <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">Are there any specific tracks for the hackathon?</span><span class="icon" aria-hidden="true"></span></button>
                     <div class="accordion-content">
                        <p class="paddin">No, there are no specific tracks for the hackathon.</p>
                     </div>
                  </div>
                  <div class="accordion-item content">
                     <button id="accordion-button-4" aria-expanded="false"><span class="accordion-title">Is the hackathon free? </span><span class="icon" aria-hidden="true"></span></button>
                     <div class="accordion-content">
                        <p class="paddin">The hackathon is completely free. If you will be joining us offline in the last 24 hours of the hackathon and you want to avail food, there will be a small fee.
                        </p>
                     </div>
                  </div>
                  <div class="accordion-item content">
                     <button id="accordion-button-5" aria-expanded="false"><span class="accordion-title">What are the criteria for judgement?</span><span class="icon" aria-hidden="true"></span></button>
                     <div class="accordion-content">
                        <ul>
                           <li class="paddin">1. <b>Originality</b> - Has this project been done before at hackathons in the past? How creative is the project in solving the problem at hand?
                           </li>
                           <li class="paddin">2. <b>Completion of the hack </b> - Does the hack work? Did the team achieve everything they wanted?
                           </li>
                           <li class="paddin">3. <b>Design</b> - Did the team put thought into the user experience? How well-designed is the interface?</li>
                           <li class="paddin">4. <b>Impact on Community</b> - How socially relevant is the hack? How much of an impact will it have on society?</li>
                           <li class="paddin">5. <b>Presentation </b> -  How clear was the content communicated? How good was the quality of content delivery?</li>
                           <li class="paddin">6. <b>Technology</b> - How technically impressive was the hack? Was the technical problem the team tackled difficult? Did it use a particularly clever technique or did it use many different components? Did the technology involved make you go "Wow"?</li>
                         
                        </ul>
                     </div>
                  </div>
                  <div class="accordion-item content">
                     <button id="accordion-button-2 " aria-expanded="false"><span class="accordion-title">What should be the submission format?</span><span class="icon" aria-hidden="true"></span></button>
                     <div class="accordion-content">
                        <p class="paddin">A video of length less than 3 minutes explaining your hack and the link to your public code repository should be submitted on the Devfolio platform.</p>
                     </div>
                  </div>


                  
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Faq