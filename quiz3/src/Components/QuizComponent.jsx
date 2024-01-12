import React, { useState } from 'react';
import './components.css';
import quizQuestions from '../../resources/quizQuestion.json';
import { Link, useNavigate } from 'react-router-dom';


const QuizComponent = (props) => {
  const [ind, setInd] = useState(0);

  const navigate = useNavigate()

  const increment = () => {
    if (ind < 14) {
      setInd((prevInd) => prevInd + 1);
    } else {
      navigate('/result')
    }
  };

  const decrement = () => {
    if (ind <= 0) {
      alert('There are no more previous questions?');
    } else if (ind >= 0) {
      setInd(ind - 1);
    }
  };

  const alertpop = () => {
    alert('Are you sure want to quit?');
    navigate('/')
  };


  const checkOption = (selectedOption) => {
    const correctAnswer = quizQuestions[ind].answer;

    if (selectedOption === correctAnswer) {
        alert('CORRECT ANSWER');
        props.setScore((prevScore) => prevScore + 1);
    } else {
        alert('WRONG ANSWER');
    }
    props.setAttempted((prevValue)=> prevValue+1);
    increment();
};


  return (
    <div className='main2'>
      <div className="box2">
        <h2 className='question-head'>Question</h2>
        <div className="qno">
          <h4 className="qno-text">{[ind + 1]} of 15</h4>
        </div>
        <div className="main-quiz">
                    <h4 className='question'>{quizQuestions[ind].question}</h4>
                    <div className="option-div">
                        <button className="options" onClick={() => checkOption(quizQuestions[ind].optionA)}>
                            {quizQuestions[ind].optionA}
                        </button>
                        <button className="options" onClick={() => checkOption(quizQuestions[ind].optionB)}>
                            {quizQuestions[ind].optionB}
                        </button>
                        <button className="options" onClick={() => checkOption(quizQuestions[ind].optionC)}>
                            {quizQuestions[ind].optionC}
                        </button>
                        <button className="options" onClick={() => checkOption(quizQuestions[ind].optionD)}>
                            {quizQuestions[ind].optionD}
                        </button>
                    </div>
        </div>
        <div className="buttons">
          <button className='page-options page-options1' onClick={decrement}>Previous</button>
          <button className='page-options page-options2' onClick={increment}>Next</button>
          <button className='page-options page-options3' onClick={alertpop}>Quit</button>

         <Link to='/result'> <button className='page-options page-options3'>Finish</button></Link>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
