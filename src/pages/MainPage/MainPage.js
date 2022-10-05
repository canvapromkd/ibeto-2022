import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  Landing,
  About,
  Eventformat,
  Faq,
  TimelineComponent,
  Contact,
  Footer,
  Rewards,
  ProblemStmt,
  WhyParticipate,
  WhatsNew,
  Testimonials,
  Collaborators
} from "../../sections";

function MainPage() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Eventformat />
      <ProblemStmt />
      <WhyParticipate />
      <WhatsNew />
      <Rewards />
      <TimelineComponent />
      <Testimonials/>
      <Collaborators/>
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainPage;
