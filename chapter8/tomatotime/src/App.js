import React,{ Component } from 'react';
// import Navbar from './components/Navbar';
import PomodoroTimer from './components/Timer';
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      cycle: "Session",
      workTime: 25,
      breakTime: 5
    }
  }

  incrementWorkTime = () => {
    this.setState({
      workTime: this.state.workTime + 1
    })
  }

  decrementWorkTime = () => {
    this.setState({
      workTime: this.state.workTime - 1
    })
  }

  incrementBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime + 1
    })
  }

  decrementBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime - 1
    })
  }


  render(){
    return (
      <div className="main">
        <h1>番茄鐘</h1>
        <PomodoroTimer />
        <TimerControllers
          workTime={this.state.workTime}
          breakTime={this.state.breakTime}
          incrementWorkTime={this.incrementWorkTime}
          decrementWorkTime={this.decrementWorkTime}
          incrementBreakTime={this.incrementBreakTime}
          decrementBreakTime={this.decrementBreakTime}
        />
      </div>
    )
  }
}
