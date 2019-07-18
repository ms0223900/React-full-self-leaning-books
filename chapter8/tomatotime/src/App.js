import React from 'react';
import Navbar from './components/Navbar';
import PomodoroTimer from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Timer workingTime={20} restingTime={10}/>
    </div>
  );
}

export default App;
