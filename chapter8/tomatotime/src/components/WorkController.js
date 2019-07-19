import React,{ Component } from 'react';

export default class WorkController extends Component {

	handleWorkIncrement = () => {
		this.props.incrementWorkTime()
	}

	handleWorkDecrement = () => {
		this.props.decrementWorkTime()
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
