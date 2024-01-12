import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';
const HomeComponent = () => {


  return (
    <div className='main'>
      <h1>Quiz App</h1>
      <Link to='/quiz'><button className="play" >Play</button></Link>
    </div>
  );
};

export default HomeComponent;
