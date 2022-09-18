import React from 'react'
import  './About.css'


const About = () => {

const handleClick=()=>{
  window.location.assign("")
}
  return (
    <div className="main_div">
    <div className='about__logotitle'>
    <img src='https://ibeto.excelmec.org/static/media/ibetologo.89112a3a.svg'></img>
      <p className="ps__header">About</p>
      <img src='https://ibeto.excelmec.org/static/media/ibetologo.89112a3a.svg'></img>
</div>        
        <div className="about__desc">
        Innovations for a Better Tomorrow (IBeTo) is a technical innovations competition hosted by Govt. Model Engineering College, Kochi as part of their annual national-level technical symposium, Excel 2021. It is a national-level pursuit for socially relevant and technologically innovative ideas with the potential to trigger the next big social change. IBeTo gives the right platform and mentorship to launch the most technically innovative and revolutionary ideas and to develop them into a final product. IBeTo bridges the gap between innovators and society.
<br />
This year marks the 10th edition of IBeTo, and thus IBeTo 2021 in association with IEDC MEC, Pehia, and AVT & Co. Ltd, has an added vision of working towards fulfilling the United Nations Sustainable Development Goals (UN SDGs) along with providing an opportunity to develop and implement the projects on a large scale in areas where technology is yet to make strides.
        </div>
        <div onClick={handleClick}  className="greenBar">
          Register Now
        </div>
    </div>
       
  )
}

export default About