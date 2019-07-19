import React from 'react';

export default class Timer extends Component {

  timer = () => {
    if(this.props.timeRunning === true){
      clearInterval(this.props.timerId)
      this.props.setCurrentTime("25 : 00")
      this.props.setTimerRunning()
    }
    else{
      this.props.cycle === "Session" ?
      this.props.startTimer(this.props.workTime) :
      this.props.startTimer(this.props.breakTime)
    }
  }

  render(){
    return(
      <div className="timer">
        <span className="count-down" onClick={this.timer}>
          {this.props.currentTime}
        </span>
        <span>{this.props.cycle}</span>
      </div>
    )
  }
}
