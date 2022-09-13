import React, { useRef } from 'react'
import Slider from "react-slick";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import WhyParticipateCard from './WhyParticipateCard';

import './WhyParticipate.css'

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
  }

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  }

  return (
    <div className='whyParticipate'>
      <div className='whyParticipate__container'>
        <div className='wpC__left'>
          <h2 className='wpc__header'>Why Participate?</h2>
          <div className='wpC_slider'>
          <IoIosArrowUp className='slider__arrow' onClick={gotoNext}/>
          <Slider {...settings} ref={sliderRef}>
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
          <IoIosArrowDown className='slider__arrow' onClick={gotoPrev}/>
          </div>
        </div>
        <div className='wpC__right'>
            <img src="https://avatars.githubusercontent.com/u/43471295?v=4" alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhyParticipate