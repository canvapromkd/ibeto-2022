import React from 'react'

import { Landing, About, Eventformat, Faq, Timeline, Contact, Footer, WhatsNew, Rewards, ProblemStmt, WhyParticipate } from '../../sections'

function MainPage() {
  return (
    <div>
      <Landing/>
      <About/>
      <Eventformat/>
      <WhatsNew/>
      <Rewards/>
      <ProblemStmt/>
      <WhyParticipate/>
      <Timeline />
      <Faq/>
      <Contact/>
      <Footer/>
  </div>
  )
}

export default MainPage