import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useMediaQuery from "@mui/material/useMediaQuery";

import WhyParticipateCard from "./WhyParticipateCard";
import ellipse1 from "../../assets/svg/Ellipse8.svg";
import ellipse2 from "../../assets/svg/Ellipse10.svg";
import "./WhyParticipate.css";
import Aos from "aos";

const WhyParticipate = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    arrows: true,
    draggable: false,
    swipeToSlide: true,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  const mobileView = useMediaQuery("(max-width:1400px)");
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div className="whyParticipate" id="whyParticipate">
      <div className="whyParticipate__container" data-aos="zoom-in">
        {mobileView || (
          <div className="wpC__left">
            <img
              src="https://avatars.githubusercontent.com/u/43471295?v=4"
              alt="-"
            />
          </div>
        )}
        <div className="wpC__right">
          <h2 className="wpc__header">Why Participate?</h2>
          {mobileView && (
            <div className="wpc_mobile_animation">
              <img
                src="https://avatars.githubusercontent.com/u/43471295?v=4"
                alt=""
              />
            </div>
          )}
          <img className="ellipse el_1" src={ellipse1} alt="vector" />
          <img className="ellipse el_2" src={ellipse2} alt="vector" />
          <img className="ellipse el_3" src={ellipse2} alt="vector" />
          <div className="wpC_slider">
            <IoIosArrowUp className="slider__arrow" onClick={gotoNext} />
            <Slider {...settings} ref={sliderRef} className="wpcSlider">
              <div>
                <WhyParticipateCard />
              </div>
              <div>
                <WhyParticipateCard />
              </div>
              <div>
                <WhyParticipateCard />
              </div>
              <div>
                <WhyParticipateCard />
              </div>
              <div>
                <WhyParticipateCard />
              </div>
              <div>
                <WhyParticipateCard />
              </div>
              <div>
                <WhyParticipateCard />
              </div>
              <div>
                <WhyParticipateCard />
              </div>
            </Slider>
            <IoIosArrowDown className="slider__arrow" onClick={gotoPrev} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyParticipate;
