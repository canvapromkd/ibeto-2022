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
  Testimonials
} from "../../sections";

function MainPage() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Eventformat />
      <WhatsNew />
      <Rewards />
      <ProblemStmt />
      <WhyParticipate />
      <TimelineComponent />
      <Testimonials/>
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainPage;
