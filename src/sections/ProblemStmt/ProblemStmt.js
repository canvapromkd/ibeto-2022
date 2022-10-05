import React, { useEffect } from "react";
import ProblemStmtCard from "./ProblemStmtCard";
import ps_mainVector from "../../assets/svg/pas_mainvector.svg";
import "./ProblemStmt.css";
import { problemStatements } from "../../data/problemStatement";
import Aos from "aos";
const ProblemStmt = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <div className="problemStmt" id="problem">
      <div className="problemStmt__container">
        <h1 className="ps__header">Problem Statements</h1>
        <img src={ps_mainVector} className="ps_main_vector" alt="ps_vector" />
        <div className="problemStmt__cards">
          {problemStatements.map((ps) => (
            <div key={ps.id} data-aos="zoom-in">
              <ProblemStmtCard
                key={ps.id}
                name={ps.name}
                description={ps.description}
                ps_image={ps.image}
                statements={ps.statements}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemStmt;
