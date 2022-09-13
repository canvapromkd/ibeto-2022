import React from 'react'

import ProblemStmtCard from './ProblemStmtCard'

import './ProblemStmt.css'
import { problemStatements } from '../../data/problemStatement'

const ProblemStmt = () => {
  return (
    <div className='problemStmt'>
      <div className='problemStmt__container'>
        <h1 className='section__header'>Problem Statements</h1>

        <div className='problemStmt__cards'>
          {problemStatements.map((ps) => (
            <ProblemStmtCard 
              key={ps.id} 
              name={ps.name}
              image={ps.name}
              statements={ps.statements}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProblemStmt