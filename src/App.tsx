import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Home, QuizPlay, QuizEnd, Rules} from './Pages/index'
import {Header} from './Components/header'


function App() {
  return (
    <div className="App">
      <Header />
      <div >
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="rules" element={<Rules />} />
      <Route path="/play" element={<QuizPlay />} /> 
      <Route path="/end" element={<QuizEnd />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
