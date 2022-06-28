import React, {useEffect} from 'react'
import EventformatCSS from './Eventformat.module.css'
import AOS from 'aos'
import Lottie from 'react-lottie';
import ideateAnimation from '../../animations/ideate.json'
import createAnimation from '../../animations/create.json'
import '../commonStyles.css'
function Eventformat() {
  const ideateOptions = {
    loop: true,
    autoplay: true,
    animationData: ideateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const createOptions = {
    loop: true,
    autoplay: true,
    animationData: createAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

  return (
    <div className={EventformatCSS.container}>

      <h2 className={`${EventformatCSS.heading} ${EventformatCSS.textcenter}`}>Event Format</h2>
      

      <div className={EventformatCSS.rowformat}>


      
        <div data-aos="fade-in" className={`col-md-4 col-sm-12 ${EventformatCSS.phase}`} >
        <div className={EventformatCSS.phasenumber}>Phase 1</div>
          {/* <img
            className="event-format-img img-fluid"
            src=""
            width="200"
            alt=""
          /> */}
          <Lottie
          options={ideateOptions}
          width={150}
          height={150}
          />
         
          <h3 className={`${EventformatCSS.phasetitle} ${EventformatCSS.textcenter}`}>Ideate</h3>
          <p className={EventformatCSS.eventcontent}>
            The participating teams will be shortlisted in a sequence of two
            rounds based on the following criteria<br/>
            Round 1: Idea Submission<br/>
            
              Round 2: Submission of detailed abstract of the project
        
          </p>
          
        </div>
        
        <div
          data-aos="fade-in"
          data-aos-delay="250"
          className={`col-md-4 col-sm-12 ${EventformatCSS.phase}`}>

          <div className={EventformatCSS.phasenumber}>Phase 2</div>
        
          <Lottie
          options={createOptions}
          width={150}
          height={150}
          />
          
          <h3 className={`${EventformatCSS.phasetitle} ${EventformatCSS.textcenter}`}>Create</h3>
          <p className={EventformatCSS.eventcontent}>
            The top 25 teams selected from the Ideate phase would build their
            project during this phase and will be continuously evaluated through
            project reports. A panel of experts will be available to seek
            assistance from.
          </p>
        </div>
        
        <div
          data-aos="fade-in"
          data-aos-delay="500"
          className={`col-md-4 col-sm-12 ${EventformatCSS.phase}`}
        >
        <div className={EventformatCSS.phasenumber}>Phase 3</div>
          <img
            className="event-format-img img-fluid"
            src=""
            width="250"
            alt=""
          />
          
          <h3 className={`${EventformatCSS.phasetitle} ${EventformatCSS.textcenter}`}>Showcase</h3>
          <p className={EventformatCSS.eventcontent}>
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