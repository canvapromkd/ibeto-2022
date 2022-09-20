import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Aos from 'aos'
import './Timeline.css'
import { useEffect } from 'react'


const TimelineComponent = () => {
  
useEffect(()=>{
  Aos.init({duration:1100})
},[])

  const customTheme={
    lineColor: 'blue',
    fontFamily:'Inter'
  }

  const gradient1 = 'linear-gradient(0deg, rgba(33,184,203,1) 0%, rgba(9,76,131,1) 100%)'
  const gradient2 = 'linear-gradient(0deg, rgba(9,76,131,1) 0%, rgba(33,184,203,1) 100%)'

  return (
    <div className="timeline" id="timeline">
      <div className="timeline__container">
        <h2 className='ps__header'>Timeline</h2>

        <div className='timeline__section' data-aos="zoom-in">
        <VerticalTimeline theme={customTheme} lineColor="#21b8cb">
          <VerticalTimelineElement 
            
            className="vertical-timeline-element--work "
            
            contentStyle={{color:'#ffff', background: gradient1}}
            contentArrowStyle={{ borderRight: '7px solid  #094c83' }}
            date="23rd September"
          >
            <h3 className="vertical-timeline-element-title">IBeTo Launch - Registration Opens</h3>
           
            <div  className='timeline_content'>
              
            </div>
            <p className='timeline__para'>
            IBeTo registration opens. Students can register by submitting their ideas by filling the form in the website.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
           contentStyle={{background:gradient2}}
           contentArrowStyle={{borderRight:'7px solid #21b8cb'}}
            date="4th October"
          >
            <h3 className="vertical-timeline-element-title">Detailed abstract submission open</h3>
            
            <p className='timeline__para' >
            Detailed Abstract Submission opens for registered IBeTo participants. The registration is still open via the form in the website.            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            
            className="vertical-timeline-element--work "
            
            contentStyle={{color:'#ffff', background: gradient1}}
            contentArrowStyle={{ borderRight: '7px solid  #094c83' }}
            date="10th October"
          >
            <h3 className="vertical-timeline-element-title">IBeTo Registration closes</h3>
           
            <div  className='timeline_content'>
              
            </div>
            <p className='timeline__para'>
            IBeTo registration closes. Teams selected for detailed abstract submission will be announced.            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
         contentStyle={{background:gradient2}}
         contentArrowStyle={{borderRight:'7px solid #21b8cb'}}
          date="17th October"
        >
          <h3 className="vertical-timeline-element-title">Abstract submission closes</h3>
          
          <p className='timeline__para' >
          Detailed Abstract Submission closes. This marks the end of the ideate phase.          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
            
            className="vertical-timeline-element--work "
            
            contentStyle={{color:'#ffff', background: gradient1}}
            contentArrowStyle={{ borderRight: '7px solid  #094c83' }}
            date="25th October"
          >
            <h3 className="vertical-timeline-element-title">Announcement of shortlisted teams</h3>
           
            <div  className='timeline_content'>
              
            </div>
            <p className='timeline__para'>
            30 teams are shortlisted with 15 from each track. Teams are assigned mentors.             </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
         contentStyle={{background:gradient2}}
         contentArrowStyle={{borderRight:'7px solid #21b8cb'}}
          date="26th October"
        >
          <h3 className="vertical-timeline-element-title">Project Development begins</h3>
          
          <p className='timeline__para' >
          Create Phase begins. Teams are encouraged to start working on their projects.
          </p>
        </VerticalTimelineElement>

          <VerticalTimelineElement 
            
            className="vertical-timeline-element--work "
            
            contentStyle={{color:'#ffff', background: gradient1}}
            contentArrowStyle={{ borderRight: '7px solid  #094c83' }}
            date="5th-6th November"
          >
            <h3 className="vertical-timeline-element-title">Meet the mentor session</h3>
           
            <div  className='timeline_content'>
              
            </div>
            <p className='timeline__para'>
            The teams are given an opportunity to interact with their mentors and obtain advice on how to further develop their project.            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
         contentStyle={{background:gradient2}}
         contentArrowStyle={{borderRight:'7px solid #21b8cb'}}
          date="12th November"
        >
          <h3 className="vertical-timeline-element-title">Project plan</h3>
          
          <p className='timeline__para' >
          The teams are required to submit their project plan - detailing their project creation process.          </p>
        </VerticalTimelineElement>

          <VerticalTimelineElement 
            
            className="vertical-timeline-element--work "
            
            contentStyle={{color:'#ffff', background: gradient1}}
            contentArrowStyle={{ borderRight: '7px solid  #094c83' }}
            date="16th December"
          >
            <h3 className="vertical-timeline-element-title">IBeTo Finale</h3>
           
            <div  className='timeline_content'>
              
            </div>
            <p className='timeline__para'>
            The teams should showcase and demonstrate their project in front of the expert judging panel of IBeTo on Day 0 of Excel, the annual technological symposium of MEC. The winners will be announced on the same day.            </p>
          </VerticalTimelineElement>
          
          
        </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default TimelineComponent