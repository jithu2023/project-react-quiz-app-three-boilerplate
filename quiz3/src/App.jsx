import React, { Component, useState } from 'react'

import { Route, Routes } from 'react-router-dom' 
import HomeComponent from './Components/HomeComponent'
import QuizComponent from './Components/QuizComponent'
import ResultComponent from './Components/ResultComponent'


export default function App() {

  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);

  return (
    <div>
    
    
    <Routes>
    <Route path='/' element={<HomeComponent/>}/>

    <Route path='/quiz' element={<QuizComponent score={score} setScore={setScore} attempted={attempted} setAttempted={setAttempted}/>}/>
    <Route path='/result' element={<ResultComponent score={score} setScore={setScore} attempted={attempted} setAttempted={setAttempted}/>}/>


    </Routes>
    
    </div>
  )
}
