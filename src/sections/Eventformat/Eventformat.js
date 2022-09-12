import React from 'react'
import { IoBulbOutline } from "react-icons/io5";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { RiBallPenLine } from "react-icons/ri";

import './Eventformat.css'

import line1 from '../../assets/svg/line1.svg'
import line2 from '../../assets/svg/line2.svg'

const Eventformat = () => {
  return (
    <div className='eventformat'>
      <div className='eventformat__container'>
        <h1 className='section__header'>Event  format</h1>

        <div className='eventformat__cards'>
            <div className='eventFormatCard efc1'>
              <div className='efc_icon_div'>
                <IoBulbOutline className='efc_icon'/>
              </div>
              <h2>Ideate</h2>
              <p>
                The participating teams will 
                be shortlisted in a sequence 
                of two rounds based on the following criteria <br />

                Round 1: Idea Submission <br />
                Round 2: Submission of detailed abstract of the project
              </p>
            </div>
            <img src={line1} alt="" className='line1'/>
            <div className='eventFormatCard'>
              <div className='efc_icon_div'>
                <RiBallPenLine className='efc_icon'/>
              </div>
              <h2>Create</h2>
              <p>
              The top 25 teams selected from the Ideate phase would build their project during this phase and will be continuously evaluated through project reports. 
              </p>
            </div>
            <img src={line2} alt="" className='line2'/>
            <div className='eventFormatCard efc3'>
              <div className='efc_icon_div'>
                <HiOutlineVideoCamera className='efc_icon'/>
              </div>
              <h2>Showcase</h2>
              <p>
              The teams have to submit a video presentation of the project along with a demonstration of their working prototype in front of the judges on Day 0 of Excel 2021
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eventformat