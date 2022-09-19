import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Timeline.css'

const TimelineComponent = () => {
  const customTheme={
    lineColor: 'blue',
  }
  return (
    <div className="timeline" id="timeline">
      <div className="timeline__container">
        <h2 className='ps__header'>Timeline</h2>

        <div className='timeline__section'>
        <VerticalTimeline theme={customTheme}>
          <VerticalTimelineElement
            
            className="vertical-timeline-element--work "
            
            contentStyle={{color:'#ffff', background: 'linear-gradient(to right,#1BABC3,#61C5D4 ,#22B7CB, #2394B4)'}}
            contentArrowStyle={{ borderRight: '7px solid  #2c3e50' }}
            date="2011 - present"
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
           
            <div  className='timeline_content'>
              
            </div>
            <p className='timeline__para'>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
           contentStyle={{background:'linear-gradient(to right,#66A5A0,#8FCCAD,#B1D89F,#9ACE7C'}}
           contentArrowStyle={{borderRight:'7px solid #11774b'}}
            date="2010 - 2011"
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            
            <p className='timeline__para' >
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default TimelineComponent