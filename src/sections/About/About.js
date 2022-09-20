import React from 'react'
import  './About.css'
import { Button } from '@mui/material'
import ibeto_logo from '../../assets/svg/ibeto22_no_text.svg'
const About = () => {
  

const handleClick=()=>{
  window.location.assign("")
}
  return (
    <div className="main_div" id="about">
    <div className='about__logotitle'>
      <img className='about__logo__title' src={ibeto_logo} alt="ibeto_logo" />
      <p  className="ps__header">About</p>
      <img className='about__logo__title' src={ibeto_logo} alt="ibeto_logo" />
      {/* <img className='about_topeer' src={ibeto_logo} alt="" /> */}
</div>        
        <div className="about__desc">
        As part of the annual national-level technical symposium, Excel 2022, Govt. Model Engineering College, Kochi hosts Innovations for a Better Tomorrow (IBeTo), a competition that fosters technical innovation. Ideas that reimagine the technology we have and create meaningful impacts on a social level are what power IBeTo to motivate tomorrow’s decision makers to change the world. Serving as a link between society and innovators, IBeTo provides the ideal setting and guidance for launching ground-breaking and technically inventive ideas and bringing them to fruition.
<br />
IBeTo 2022 proudly stands as the 11th edition, with a passionate vision towards enriching the planet we are living on, eradicating hunger and poverty, and bringing people closer together through ideas that redefine the standard of living.
        </div>
        <Button sx={{
          marginTop:'2rem',
          marginBottom:'2rem',
          backgroundColor:'#21B8CB'
        }} onClick={handleClick} variant="contained" disableElevation>
        Register Now
        </Button>
    </div>
       
  )
}

export default About