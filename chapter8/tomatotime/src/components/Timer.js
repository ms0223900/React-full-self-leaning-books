import React from 'react';

export default class Timer extends React.Component {
    constructor(){
        super();
        this.state = {timeElapsed: 0}
    }
    componentDidMount() {
        this.setInterval = setInterval(this.elapseTime.bind(this),1000)
        this.setState({start: new Date()});
    }
    componentWillUnmount(){
       clearInterval(this.interval);
   }
    totalTime(workingTime, restingTime){
      return workingTime + restingTime;
    }
    elapseTime(){
        let currentTime = new Date();
        let timeElapsed = Math.floor((currentTime - this.state.start) / 1000);
        this.setState({timeElapsed: timeElapsed});

        if(this.state.timeElapsed >= this.props.workingTime * 60){
          clearInterval(this.interval);
          alert("休息時間到了");
        }
    }
    render(){
      return (
        <ul>
          <li>番茄鐘 : {this.props.workingTime}分鐘</li>
          <li>休息：{this.props.restingTime}分鐘</li>
          <li>總共 {this.totalTime(this.props.workingTime, this.props.restingTime)}分鐘</li>
          <li>已經過了 {this.state.timeElapsed}秒</li>
        </ul>
      )
    }
}
