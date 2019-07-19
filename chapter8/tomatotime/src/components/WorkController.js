import React,{ Component } from 'react';

export default class WorkController extends Component {
// 番茄鐘25分鐘設定
	handleWorkIncrement = () => {
		this.props.incrementWorkTime()
		if(this.props.timeRunning === false){
			this.props.setCurrentTime(this.props.workTime)
		}
	}

	handleWorkDecrement = () => {
		this.props.decrementWorkTime()
		if(this.props.timeRunning === false){
			this.props.setCurrentTime(this.props.workTime)
		}
	}

	render(){
		return (
			<div className="controller">
				<p>SESSION</p>
				<button onClick={this.handleWorkIncrement}>
					+
				</button>
        <span>
					{this.props.workTime}
				</span>
        <button onClick={this.handleWorkDecrement}>
					-
				</button>
			</div>
		)
	}
}
