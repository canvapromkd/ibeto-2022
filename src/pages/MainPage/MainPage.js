import React from 'react'
import Landing from '../../sections/Landing/Landing'
import About from '../../sections/About/About'
import Eventformat from '../../sections/Eventformat/Eventformat'
import Faq from '../../sections/Faq/Faq'
function MainPage() {
  return (
    <div>
        <Landing/>
        <About/>
        <Eventformat/>
        <Faq/>
    </div>
  )
}

export default MainPage