import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Aos from "aos";
import "./Timeline.css";
import { useEffect } from "react";

const TimelineComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);

  const customTheme = {
    lineColor: "blue",
    fontFamily: "Inter",
  };

  const gradient1 =
    "linear-gradient(0deg, rgba(33,184,203,1) 0%, rgba(9,76,131,1) 100%)";
  const gradient2 =
    "linear-gradient(0deg, rgba(9,76,131,1) 0%, rgba(33,184,203,1) 100%)";

  return (
    <div className="timeline" id="timeline">
      <div className="timeline__container">
        <h2 className="ps__header">Timeline</h2>

        <div className="timeline__section" data-aos="zoom-in">
          <VerticalTimeline theme={customTheme} lineColor="#21b8cb">
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ color: "#ffff", background: gradient1 }}
              contentArrowStyle={{ borderRight: "7px solid  #094c83" }}
              date="7th October"
            >
              <h3 className="vertical-timeline-element-title">
                IBeTo Launch - Registration Opens
              </h3>

              <div className="timeline_content"></div>
              <p className="timeline__para">
              IBeTo registration opens. Students can register by submitting their ideas by filling the form in the website.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: gradient2 }}
              contentArrowStyle={{ borderRight: "7px solid #21b8cb" }}
              date="19th October"
            >
              <h3 className="vertical-timeline-element-title">
              Detailed Abstract Submission Open
              </h3>

              <p className="timeline__para">
              Detailed Abstract Submission opens for registered IBeTo participants. 
              The registration is still open via the form in the website.{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ color: "#ffff", background: gradient1 }}
              contentArrowStyle={{ borderRight: "7px solid  #094c83" }}
              date="22nd October"
            >
              <h3 className="vertical-timeline-element-title">
              IBeTo Registration Closes
              </h3>

              <div className="timeline_content"></div>
              <p className="timeline__para">
              IBeTo registration closes. Teams selected for detailed abstract submission will be announced.{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: gradient2 }}
              contentArrowStyle={{ borderRight: "7px solid #21b8cb" }}
              date="29th October"
            >
              <h3 className="vertical-timeline-element-title">
              Detailed Abstract Submission Closes
              </h3>

              <p className="timeline__para">
              Detailed Abstract Submission closes. 
              This marks the end of the ideate phase.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ color: "#ffff", background: gradient1 }}
              contentArrowStyle={{ borderRight: "7px solid  #094c83" }}
              date="3rd November"
            >
              <h3 className="vertical-timeline-element-title">
              Announcement of Shortlisted Teams
              </h3>

              <div className="timeline_content"></div>
              <p className="timeline__para">
              30 teams are shortlisted with 15 from each track.
              Teams are assigned mentors.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: gradient2 }}
              contentArrowStyle={{ borderRight: "7px solid #21b8cb" }}
              date="4th November "
            >
              <h3 className="vertical-timeline-element-title">
              Project Development Begins
              </h3>

              <p className="timeline__para">
              Create Phase begins. Teams are encouraged to start working on 
              their projects.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ color: "#ffff", background: gradient1 }}
              contentArrowStyle={{ borderRight: "7px solid  #094c83" }}
              date="12th - 13th November"
            >
              <h3 className="vertical-timeline-element-title">
                Meet The Mentor Session
              </h3>

              <div className="timeline_content"></div>
              <p className="timeline__para">
              The teams are given an opportunity to interact with their mentors 
              and obtain advice on how to further develop their project.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: gradient2 }}
              contentArrowStyle={{ borderRight: "7px solid #21b8cb" }}
              date="19th November"
            >
              <h3 className="vertical-timeline-element-title">Project Plan</h3>

              <p className="timeline__para">
              The teams are required to submit their project plan - detailing
              their project creation process.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ color: "#ffff", background: gradient1 }}
              contentArrowStyle={{ borderRight: "7px solid  #094c83" }}
              date="17th December"
            >
              <h3 className="vertical-timeline-element-title">IBeTo Finale</h3>

              <div className="timeline_content"></div>
              <p className="timeline__para">
                The teams should showcase and demonstrate their project in front
                of the expert judging panel of IBeTo on Day 0 of Excel, the
                annual technological symposium of MEC. The winners will be
                announced on the same day.{" "}
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
