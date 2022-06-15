import React, {useEffect} from 'react'
import EventformatCSS from './Eventformat.module.css'
import AOS from 'aos'


function Eventformat() {

    useEffect(() => {
        AOS.init({ duration: 500 });
      }, []);

  return (
    <div className={EventformatCSS.container}>

      <h2 className={`${EventformatCSS.heading} ${EventformatCSS.textcenter}`}>Event Format</h2>

      <div className={EventformatCSS.rowformat}>
      
        <div data-aos="fade-in" className="col-md-3 col-sm-8 phase ">
        <div className="phase-title phase-number">Phase 1</div>
          <img
            className="event-format-img img-fluid"
            src=""
            width="200"
            alt="ideate"
          />
         
          <h3 className="event-title phase-title">Ideate</h3>
          <p className="content event-format-content">
            The participating teams will be shortlisted in a sequence of two
            rounds based on the following criteria{" "}
          </p>
          <ul>
            <li className="content">Round 1: Idea Submission</li>
            <li className="content">
              Round 2: Submission of detailed abstract of the project
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="250"
          className="col-md-3 col-sm-8 phase">

          <div className="phase-title phase-number">Phase 2</div>
        
          <img
            className="event-format-img img-fluid"
            src=""
            width="250"
            alt="create"
          />
          
          <h3 className="event-title phase-title">Create</h3>
          <p className="content event-format-content">
            The top 25 teams selected from the Ideate phase would build their
            project during this phase and will be continuously evaluated through
            project reports. A panel of experts will be available to seek
            assistance from.
          </p>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="500"
          className="col-md-3 col-sm-8 phase"
        >
        <div className="phase-title phase-number">Phase 3</div>
          <img
            className="event-format-img img-fluid"
            src=""
            width="250"
            alt="showcase"
          />
          
          <h3 className="event-title phase-title">Showcase</h3>
          <p className="content event-format-content">
            The teams have to submit a video presentation of the project along
            with a demonstration of their working prototype in front of the
            judges on Day 0 of Excel 2021, which will be the final judgement of
            the event.
          </p>
        </div>
      </div>
    
    
    </div>

  )
}

export default Eventformat