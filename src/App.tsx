import React from 'react';
import './App.css';
import {WelcomeUser} from './Components/welcomeUser'
import {Routes, Route} from 'react-router-dom'
import {Home, QuizPlay, QuizEnd} from './Pages/index'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<QuizPlay />} /> 
      <Route path="play/end" element={<QuizEnd />} />
    </Routes>
    </div>

    
  );
}

export default App;
