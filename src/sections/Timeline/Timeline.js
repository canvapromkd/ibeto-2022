import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Timeline.css'

const TimelineComponent = () => {
  const customTheme={
    lineColor: 'blue',
  }
  return (
    <div className="timeline">
      <div className="timeline__container">
        <h2 className='ps__header'>Timeline</h2>

        <div className='timeline__section'>
        <VerticalTimeline theme={customTheme}>
          <VerticalTimelineElement
            
            className="vertical-timeline-element--work"
            
            contentStyle={{color:'#ffff', background: 'linear-gradient(to right, #2980b9, #2c3e50)'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <div  className='timeline_content'>
              
            </div>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
            <p>
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