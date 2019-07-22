import React from 'react';
import Option from './Option';
import Transform from './TimeTransform';

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
        // this.setInterval = setInterval(this.elapseTime.bind(this),1000)
        // this.setState({start: new Date()});
    }
    componentWillUnmount(){
       // clearInterval(this.interval);
     }

    // totalTime(workingTime, restingTime){
    //   return workingTime + restingTime;
    // }

    //
    updateTime(){
      this.setState(function(prevState, props) {
       const currentState = Object.assign(prevState);
       const stillActive = (prevState.seconds - 1) > 0;
       const nextTimer = prevState.active === 'workTime' ? 'breakTime' : 'workTime'

       currentState.seconds = stillActive ? currentState.seconds - 1 : currentState[nextTimer];
       currentState.active = stillActive ? currentState.active : nextTimer;
       if (this.timerID) {
         currentState.timerId = this.timerID;
       }
       return currentState;
     });
    }

    //
    playStop() {
      if (this.state.timerId) {
        clearInterval(this.state.timerId);
        return this.setState({
          seconds: this.state.workTime,
          timerId: false,
          active: 'workTime'
        });
      }

      this.timerID = setInterval(() => this.updateTime(), 1000)
    }

    //
   updateLength(timer, e) {
     if (this.state.timerId) {
       return false;
     }
     const state = Object.assign({}, this.state);
     state[timer] = e.target.value * 60;
     state.seconds = timer === 'workTime' ? e.target.value * 60 : state.seconds
     this.setState(state);
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
      const buttonString = this.state.timerId ? 'Stop' : 'Start';
      return (
        <div className="">
         <Transform active={this.state.active} seconds={this.state.seconds} />
         <Button action={this.playStop}>{buttonString}</Button>
         <Option value={this.state.workTime} timer="workTime" updateLength={this.updateLength.bind(this)}>番茄鐘設定時間</Option>
         <Option value={this.state.breakTime} timer="breakTime" updateLength={this.updateLength.bind(this)}>休息時間</Option>
        </div>
      )
    }
}

const Button = (props) => <button className="btn" onClick={props.action}>{props.children}</button>


// const getHourMin = (time) => {
//   const hour = Math.ceil(time / 60)
//   const min = time % 60
//   return { hour, min }
// }
