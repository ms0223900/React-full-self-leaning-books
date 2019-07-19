import React,{ Component } from 'react';

export default class BreackController extends Component {
	handleBreakIncrement = () => {
		this.props.incrementBreakTime()
	}
	handleBreakIncrement = () => {
		this.props.decrementBreakTime()
	}
	render(){
		return (
			<div className="controller">
				<p>Break</p>
				<button onClick={this.handleBreakIncrement}>
					+
				</button>
        <span>
					{this.props.breakTime}
				</span>
        <button onClick={this.handleWorkDecrement}>
					- 
				</button>
			</div>
		)
	}
}
