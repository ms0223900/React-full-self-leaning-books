import React,{ Component } from 'react';
// import Navbar from './components/Navbar';
import PomodoroTimer from './components/Timer';
import TimerControllers from './components/TimerControllers';
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      timerId: 0,
      timeRunning: false,
      currentTime: "25 : 00",
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

  startTimer = (duration) => {
    this.setState({timeRunning: true})
    let time = duration * 60
    let min;
    let seconds;
    let runningTimer = setInterval(()=>{
       this.setState({
         timerId: runningTimer
       })
       min = Math.floor(time / 60)
       seconds = time - min*60
       min = min < 10 ? "0" + minutes: min;
       seconds = seconds < 10 ? "0" + seconds: seconds;
       this.setState({currentTime: `${min} : ${seconds}`})
       if(time == 0){
         if(this.state.cycle === "Session"){
           this.setState({
             cycle: "Break",
             timeRunning:false
           })
           clearInterval(this.state.timerId)
           this.startTimer(this.state.breakTime)
         }else{
           this.setState({
             cycle:"Session",
             timerRunning: false
           })
           clearInterval(this.state.timerId)
           this.startTimer(this.state.workTime)
         }
       }
    }, 1000);
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
