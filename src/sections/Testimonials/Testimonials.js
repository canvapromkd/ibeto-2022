import React, { useRef } from "react";
import Slider from "react-slick";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";

import test_bg from "../../assets/svg/test_bg.svg";

function Testimonials() {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    fade: false,
    pauseOnHover: false,
    adaptiveHeight: true,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="testimonials" id="testimonials">
      <img src={test_bg} alt="" className="test_bg" />
      <div className="testimonials__container">
        <div className="ps__header">Testimonials</div>
        <div className="testimonials_section">
          <IoIosArrowDropleftCircle
            onClick={gotoPrev}
            className="testimonial__prev"
          />
          <div className="testimonials__slider">
            <Slider {...settings} ref={sliderRef}>
              {testimonialsData &&
                testimonialsData.map((test) => (
                  <TestimonialCard
                    id={test.id}
                    key={test.id}
                    name={test.name}
                    text={test.text}
                    designation={test.designation}
                    image={test.image}
                  />
                ))}
            </Slider>
          </div>
          <IoIosArrowDroprightCircle
            onClick={gotoNext}
            className="testimonial__next"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
