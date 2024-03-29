import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Home, QuizPlay, QuizEnd, Rules, Login, Signup, QuizHistory, LeaderBoard} from './Pages/index'
import { NavBar } from './Components/Nav Bar/navBar';
import {PrivateRoute} from './Pages/PrivateRoute'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import "react-toastify/dist/ReactToastify.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="sub-app" >
      <Routes>
      <Route path="/" element={<Home />} />
      <PrivateRoute path="rules" element={<Rules />} />
      <PrivateRoute path="/play" element={<QuizPlay />} /> 
      <PrivateRoute path="/end" element={<QuizEnd />} />
      <PrivateRoute path="/playedQuizes" element={<QuizHistory />} />
      <PrivateRoute path="/playedQuizes" element={<QuizHistory />} />
      <PrivateRoute path="/leaderboard" element={<LeaderBoard />} />

      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
    </div>
    </div>
  );
}

export default App;
