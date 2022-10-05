import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function TestimonialCard({ id, name, text, designation, image, batch }) {
  return (
    <div className="testimonialCard" key={id}>
      <div className="testimonial_img">
        <img src={image} alt="Testimonial" />
      </div>
      <div className="testimonial_content">
        <div className="test_text">
          <FaQuoteLeft className="quotes_left" />
          <p>{text}</p>
        </div>
        <h1>{name}</h1>
        <h3>{designation}</h3>
      </div>
    </div>
  );
}

export default TestimonialCard;
