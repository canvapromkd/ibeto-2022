import React from 'react'
import Landing from '../../sections/Landing/Landing'
import About from '../../sections/About/About'
import Faq from '../../sections/Faq/Faq'
import Timeline from '../../sections/Timeline/Timeline'
function MainPage() {
  return (
    <div>
        <Landing/>
        <About/>
        <Timeline />
        <Faq/>

    </div>
  )
}

export default MainPage