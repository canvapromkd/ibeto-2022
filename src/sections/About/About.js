import React, { useEffect } from 'react'
import about from './About.module.css'
import Aos from 'aos'
import '../commonStyles.css'
const About = () => {
    useEffect(()=>{
        Aos.init({ duration: 1500 });
    },[])
  return (
    <div className={about.main_div}>
        <p data-aos="fade-right" className={about.title}>About</p>
        <div data-aos="fade-left" className={about.desc}>
        Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Arcu suspendisse nisi commodo, posuere quis cras natoque. At est ultricies vestibulum porttitor at magna mi volutpat dis. Pretium ornare cras rhoncus, feugiat nisi nec. Semper eget elementum venenatis faucibus. Id sit morbi senectus sed turpis ut. Turpis sollicitudin pellentesque sem feugiat sed.
<br />
Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Arcu suspendisse nisi commodo, posuere quis cras natoque. At est ultricies vestibulum porttitor at magna mi volutpat dis. Pretium ornare cras rhoncus, feugiat nisi nec. Semper eget elementum venenatis faucibus. Id sit morbi senectus sed turpis ut. Turpis sollicitudin pellentesque sem feugiat sed.feugiat nisi nec. Semper eget elementum venenatis faucibus. Id sit morbi senectus sed turpis ut. Turpis sollicitudin pellentesque sem feugiat sed.
        </div>
        {/* <div  data-aos="fade-in" className={about.greenBar}>
          
        </div> */}
        </div>
       
  )
}

export default About