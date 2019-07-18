import React,{ Component } from 'react';
// import Navbar from './components/Navbar';
import PomodoroTimer from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="main">
      <h1>PomodoroTimer</h1>
      <PomodoroTimer />
      {/* <TimerControllers/>
      <Sound/> */}
    </div>
  );
}

export default App;
