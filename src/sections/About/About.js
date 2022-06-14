import React from 'react'
import about from './About.module.css'
const About = () => {
  return (
    <div>
        <p className={about.title}>About</p>
        <div className={about.desc}>
        Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Arcu suspendisse nisi commodo, posuere quis cras natoque. At est ultricies vestibulum porttitor at magna mi volutpat dis. Pretium ornare cras rhoncus, feugiat nisi nec. Semper eget elementum venenatis faucibus. Id sit morbi senectus sed turpis ut. Turpis sollicitudin pellentesque sem feugiat sed.
<br />
Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Arcu suspendisse nisi commodo, posuere quis cras natoque. At est ultricies vestibulum porttitor at magna mi volutpat dis. Pretium ornare cras rhoncus, feugiat nisi nec. Semper eget elementum venenatis faucibus. Id sit morbi senectus sed turpis ut. Turpis sollicitudin pellentesque sem feugiat sed.feugiat nisi nec. Semper eget elementum venenatis faucibus. Id sit morbi senectus sed turpis ut. Turpis sollicitudin pellentesque sem feugiat sed.
        </div>
        <div className={about.greenBar}>
            
        </div>
    </div>
  )
}

export default About