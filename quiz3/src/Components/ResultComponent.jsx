import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

import './components.css';

const ResultComponent = (props) => {

  const navigate = useNavigate()

  const play = () => {
    props.setScore(0)
    props.setAttempted(0)
    navigate('/quiz')
  };

  const home = () => {
    props.setScore(0)
    props.setAttempted(0)
    navigate('/')
  };

  return (
    <div className='main3'>
      <h2 className='result-head'>Result</h2>
      <div className="box3">
        <h3 className="phrase">keep it up!!!!!!..</h3>
        <h2 className="score">Your score is {props.score}</h2>
        <div className="details">
          <div className="numberofq for-detail">
            <h4 className="d1">Total no of questions</h4>
            <h4 className='no1'>15</h4>
          </div>
          <div className="numberofq for-detail">
            <h4 className="d1">Number of attempted questions</h4>
            <h4 className='no1'>{props.attempted}</h4>
          </div>
          <div className="numberofq for-detail">
            <h4 className="d1">Number of corrected answers</h4>
            <h4 className='no1'>{props.score}</h4>
          </div>
          <div className="numberofq for-detail">
            <h4 className="d1">Number of wrong answers</h4>
            <h4 className='no1'>{props.attempted - props.score}</h4>
          </div>
        </div>
      </div>
      <div className="result-button-grp">
        <button className="result-buttons b1" onClick={play}>Play again</button>
        <button className="result-buttons b2" onClick={home}>Back to home</button>
      </div>
    </div>
  );
};

export default ResultComponent;
