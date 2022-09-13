import React from 'react'

import ProblemStmtCard from './ProblemStmtCard'

import './ProblemStmt.css'


const problemStatements = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
]

const ProblemStmt = () => {
  return (
    <div className='problemStmt'>
      <div className='problemStmt__container'>
        <h1 className='section__header'>Problem Statements</h1>

        <div className='problemStmt__cards'>
          {problemStatements.map((ps) => (
            <ProblemStmtCard 
              key={ps.id} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProblemStmt