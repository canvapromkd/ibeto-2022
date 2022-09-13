import React from 'react'

import { Landing, About, Eventformat, Faq, Timeline, Contact, Footer, Rewards, ProblemStmt, WhyParticipate } from '../../sections'

function MainPage() {
  return (
    <div>
      <Landing/>
      <About/>
      <Eventformat/>
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