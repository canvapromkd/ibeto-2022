import React, { useEffect } from 'react'
import ps_vector1 from '../../assets/svg/ps Vector 1.svg'
import ProblemStmtCard from './ProblemStmtCard'
import ps_vector2 from '../../assets/svg/ps_vector2.svg'
import ps_mainVector from '../../assets/svg/pas_mainvector.svg'
import './ProblemStmt.css'
import { problemStatements } from '../../data/problemStatement'
import Aos from 'aos'
const ProblemStmt = () => {
  useEffect(()=>{
    Aos.init({duration:1100})
  },[])
  return (
    <div className='problemStmt'>
      <div className='problemStmt__container'>
        <h1 className='ps__header'>Problem Statements</h1>
        <img src={ps_mainVector} className="ps_main_vector" alt="" />
        <div  className='problemStmt__cards'>
          {problemStatements.map((ps) => (
            <div data-aos='zoom-in'>
            <ProblemStmtCard 
              key={ps.id} 
              name={ps.name}
              image={ps.name}
              statements={ps.statements}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProblemStmt