import React from 'react'
import Landing from '../../sections/Landing/Landing'
import About from '../../sections/About/About'
import Eventformat from '../../sections/Eventformat/Eventformat'
import Faq from '../../sections/Faq/Faq'
import Timeline from '../../sections/Timeline/Timeline'
import Contact from '../../sections/Contact/Contact'
import Footer from '../../sections/Footer/Footer'
import WhatsNew from '../../sections/Whatsnew/WhatsNew'
import Rewards from '../../sections/Rewards/Rewards'
import ProblemStmt from '../../sections/ProblemStmt/ProblemStmt'
import WhyParticipate from '../../sections/WhyParticipate/WhyParticipate'

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