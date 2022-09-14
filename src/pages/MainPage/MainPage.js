import React from 'react'

import { Landing, About, Eventformat, Faq, TimelineComponent, Contact, Footer, Rewards, ProblemStmt, WhyParticipate } from '../../sections'

function MainPage() {
  return (
    <div>
      <Landing/>
      <About/>
      <Eventformat/>
      <Rewards/>
      <ProblemStmt/>
      <WhyParticipate/>
      <TimelineComponent />
      <Faq/>
      <Contact/>
      <Footer/>
  </div>
  )
}

export default MainPage