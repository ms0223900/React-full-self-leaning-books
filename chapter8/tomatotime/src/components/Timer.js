import React from 'react';

export default class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
          breakTime: 250,
          workTime: 1500,
          seconds: 1500,
          timerId: false,
          active: 'workTime'
        }
        this.playStop = this.playStop.bind(this);
        this.updataTime = this.updateTime.bind(this);
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
    updateTime(){
      
    }
    // elapseTime(){
    //     let currentTime = new Date();
    //     let timeElapsed = Math.floor((currentTime - this.state.start) / 1000);
    //     this.setState({timeElapsed: timeElapsed});
    //
    //     if(this.state.timeElapsed >= this.props.workingTime * 60){
    //       clearInterval(this.interval);
    //       alert("休息時間到了");
    //     }
    // }
    render(){
      return (
        <div>
          番茄鐘 : {this.props.workingTime}分鐘
          休息：{this.props.restingTime}分鐘
          總共 {this.totalTime(this.props.workingTime, this.props.restingTime)}分鐘
          已經過了 {this.state.timeElapsed}秒
        </div>
      )
    }
}

const getHourMin = (time) => {
  const hour = Math.ceil(time / 60)
  const min = time % 60
  return { hour, min }
}
